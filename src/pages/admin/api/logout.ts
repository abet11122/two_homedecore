export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = ({ url }) => new Response(null, {
  status: 303,
  headers: {
    Location: new URL('/admin/login/', url).toString(),
    'Cache-Control': 'no-store',
    'Set-Cookie': 'admin_session=; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=0',
  },
});
