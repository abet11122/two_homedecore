import { defineMiddleware } from 'astro:middleware';
import { hasAdminCredentials, hasAdminSession } from './lib/admin';

export const onRequest = defineMiddleware(({ request, url }, next) => {
  if (!url.pathname.startsWith('/admin')) return next();
  if (url.pathname === '/admin/login/' || url.pathname === '/admin/api/login/' || url.pathname === '/admin/api/logout/') return next();

  if (!hasAdminCredentials()) {
    return new Response('Admin is unavailable because credentials are not configured.', {
      status: 503,
      headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
    });
  }

  if (!hasAdminSession(request)) {
    return Response.redirect(new URL(`/admin/login/?next=${encodeURIComponent(url.pathname)}`, url), 302);
  }

  return next();
});
