export const prerender = false;
export const trailingSlash = 'ignore';

import type { APIRoute } from 'astro';
import { writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { isVercelDeployment, validatePostContent } from '../../../lib/admin';

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();
    const file = form.get('file') as File | null;

    if (!file || !/^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?\.md$/i.test(file.name)) {
      return new Response(JSON.stringify({ error: 'Please upload a .md file.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // File size limit: 500KB
    if (file.size > 500_000) {
      return new Response(JSON.stringify({ error: 'File too large (max 500KB).' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const safeName = file.name.toLowerCase();

    const text = await file.text();

    const validationError = validatePostContent(text);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (isVercelDeployment()) {
      return new Response(JSON.stringify({
        download: true,
        filename: safeName,
        content: text,
        message: 'Downloaded the validated Markdown file. Commit it to src/content/posts/ and push to publish.',
      }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // Path traversal protection
    const postsDir = resolve(process.cwd(), 'src', 'content', 'posts');
    const dest = resolve(postsDir, safeName);
    if (!dest.startsWith(postsDir)) {
      return new Response(JSON.stringify({ error: 'Invalid path.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const isNew = await access(dest).then(() => false).catch(() => true);
    await writeFile(dest, text, 'utf-8');

    return new Response(JSON.stringify({ ok: true, filename: safeName, isNew }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
};
