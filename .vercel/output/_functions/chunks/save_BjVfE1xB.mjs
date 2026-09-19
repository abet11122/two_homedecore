import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as isVercelDeployment, o as validatePostContent } from "./admin_DRveAxcX.mjs";
import { access, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
//#region src/pages/admin/api/save.ts
var save_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false,
	trailingSlash: () => trailingSlash
});
var trailingSlash = "ignore";
var POST = async ({ request }) => {
	try {
		const { slug, content } = await request.json();
		if (!slug || !content) return new Response(JSON.stringify({ error: "Missing slug or content." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const safeSlug = String(slug);
		if (!/^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?$/.test(safeSlug) || safeSlug.length < 2) return new Response(JSON.stringify({ error: "Invalid slug." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (isVercelDeployment()) return new Response(JSON.stringify({ error: "Publishing is disabled on Vercel. Copy the generated Markdown and commit it through Git." }), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const postsDir = resolve(process.cwd(), "src", "content", "posts");
		const dest = resolve(postsDir, `${safeSlug}.md`);
		if (!dest.startsWith(postsDir)) return new Response(JSON.stringify({ error: "Invalid path." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const validationError = validatePostContent(content);
		if (validationError) return new Response(JSON.stringify({ error: validationError }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const isNew = await access(dest).then(() => false).catch(() => true);
		await writeFile(dest, content, "utf-8");
		return new Response(JSON.stringify({
			ok: true,
			isNew
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/admin/api/save@_@ts
var page = () => save_exports;
//#endregion
export { page };
