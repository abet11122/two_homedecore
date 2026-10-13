import { defineMiddleware } from 'astro:middleware';
import { hasAdminCredentials, hasValidAdminBasicAuth } from './lib/admin';

const adminHeaders = {
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
};

export const onRequest = defineMiddleware(async ({ url, request }, next) => {
  if (!/^\/admin(?:\/|$)/.test(url.pathname)) return next();

  if (!hasAdminCredentials()) {
    return new Response('Admin is unavailable.', { status: 404, headers: adminHeaders });
  }

  if (!hasValidAdminBasicAuth(request.headers.get('authorization'))) {
    return new Response('Admin authentication required.', {
      status: 401,
      headers: {
        ...adminHeaders,
        'WWW-Authenticate': 'Basic realm="Small Cozy Home admin", charset="UTF-8"',
      },
    });
  }

  const requestOrigin = request.headers.get('origin');
  const sameOriginFetch = requestOrigin === null && request.headers.get('sec-fetch-site') === 'same-origin';
  if (request.method !== 'GET' && request.method !== 'HEAD'
      && requestOrigin !== url.origin && !sameOriginFetch) {
    return new Response('Invalid request origin.', { status: 403, headers: adminHeaders });
  }

  const response = await next();
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
});
