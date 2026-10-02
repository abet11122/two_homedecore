import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ url }, next) => {
  if (!url.pathname.startsWith('/admin')) return next();
  return next();
});
