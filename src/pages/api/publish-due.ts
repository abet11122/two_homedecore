import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

/**
 * Triggers a redeploy when a scheduled post has become due.
 *
 * Post routes are built from `getStaticPaths`, which filters on
 * `publishDate`, so a post dated in the future exists in the repo but has no
 * route until a build runs on or after its date. Without something calling
 * this, a scheduled post stays invisible until the next push.
 *
 * Vercel's cron (see vercel.json) calls this daily. The configured path
 * keeps its trailing slash, because the site sets trailingSlash: 'always'
 * and would otherwise 404 the cron. It looks back 48 hours
 * rather than at today alone, so a single missed run still gets caught.
 *
 * Needs VERCEL_DEPLOY_HOOK_URL set to a deploy hook from the Vercel
 * dashboard. CRON_SECRET is optional; when set, Vercel sends it as a bearer
 * token and anything without it is refused.
 */
const LOOK_BACK_MS = 48 * 60 * 60 * 1000;

export const GET: APIRoute = async ({ request }) => {
	const secret = process.env.CRON_SECRET;
	if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
		return new Response('Unauthorized', { status: 401 });
	}

	const now = Date.now();
	const posts = await getCollection('posts');
	const due = posts
		.filter((post) => {
			const at = post.data.publishDate.getTime();
			return at <= now && at > now - LOOK_BACK_MS;
		})
		.map((post) => post.id);

	/*
	  Names and booleans only, never values. An environment variable only
	  reaches a function on the deployment built after it was added, so
	  `builtFrom` is what tells you whether a redeploy has happened yet.
	*/
	const diagnostics = {
		env: process.env.VERCEL_ENV ?? 'unknown',
		builtFrom: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? 'unknown',
		hookConfigured: Boolean(process.env.VERCEL_DEPLOY_HOOK_URL),
		secretConfigured: Boolean(process.env.CRON_SECRET),
	};

	const body = (extra: Record<string, unknown>) =>
		new Response(JSON.stringify({ ...diagnostics, due, ...extra }, null, 2), {
			status: 200,
			headers: { 'content-type': 'application/json' },
		});

	if (due.length === 0) return body({ triggered: false, reason: 'nothing due' });

	const hook = process.env.VERCEL_DEPLOY_HOOK_URL;
	if (!hook) {
		return body({
			triggered: false,
			reason:
				'VERCEL_DEPLOY_HOOK_URL is not visible to this deployment. Check it is set for ' +
				'the Production environment, then redeploy — a variable only reaches the ' +
				'deployment built after it was added.',
		});
	}

	const response = await fetch(hook, { method: 'POST' });
	return body({ triggered: response.ok, status: response.status });
};
