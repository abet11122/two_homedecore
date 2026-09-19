export const prerender = false;

import type { APIRoute } from 'astro';
import { createAdminSession, hasValidAdminCredentials, isVercelDeployment } from '../../../lib/admin';

export const POST: APIRoute = async ({ request, url }) => {
  const form = await request.formData();
  const username = String(form.get('username') ?? '');
  const password = String(form.get('password') ?? '');
  const next = String(form.get('next') ?? '/admin/');
  const destination = next.startsWith('/admin/') ? next : '/admin/';

  if (!hasValidAdminCredentials(username, password)) {
    return Response.redirect(new URL(`/admin/login/?error=1&next=${encodeURIComponent(destination)}`, url), 303);
  }

  const secure = isVercelDeployment() ? '; Secure' : '';
  return new Response(null, {
    status: 303,
    headers: {
      Location: destination,
      'Cache-Control': 'no-store',
      'Set-Cookie': `admin_session=${createAdminSession()}; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=43200${secure}`,
    },
  });
};
