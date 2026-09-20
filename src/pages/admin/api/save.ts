export const prerender = false;
export const trailingSlash = 'ignore';

import type { APIRoute } from 'astro';
import { writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { isVercelDeployment, validatePostContent } from '../../../lib/admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { slug, content } = await request.json();

    if (!slug || !content) {
      return new Response(JSON.stringify({ error: 'Missing slug or content.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Strict slug: only lowercase letters, numbers, hyphens
    const safeSlug = String(slug);
    if (!/^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?$/.test(safeSlug) || safeSlug.length < 2) {
      return new Response(JSON.stringify({ error: 'Invalid slug.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Path traversal protection
    const postsDir = resolve(process.cwd(), 'src', 'content', 'posts');
    const dest = resolve(postsDir, `${safeSlug}.md`);
    if (!dest.startsWith(postsDir)) {
      return new Response(JSON.stringify({ error: 'Invalid path.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const validationError = validatePostContent(content);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (isVercelDeployment()) {
      return new Response(JSON.stringify({
        download: true,
        filename: `${safeSlug}.md`,
        content,
        message: 'Downloaded the validated Markdown file. Commit it to src/content/posts/ and push to publish.',
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    const isNew = await access(dest).then(() => false).catch(() => true);
    await writeFile(dest, content, 'utf-8');

    return new Response(JSON.stringify({ ok: true, isNew }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
};
