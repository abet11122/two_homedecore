import { t as sequence, yt as defineMiddleware } from "./chunks/sequence_VRBs3N3Z.mjs";
import { n as hasAdminCredentials, r as hasAdminSession } from "./chunks/admin_DiD9ymZX.mjs";
//#region src/middleware.ts
var onRequest$1 = defineMiddleware(({ request, url }, next) => {
	if (!url.pathname.startsWith("/admin")) return next();
	if (url.pathname === "/admin/login/" || url.pathname === "/admin/api/login/" || url.pathname === "/admin/api/logout/") return next();
	if (!hasAdminCredentials()) return new Response("Admin is unavailable because credentials are not configured.", {
		status: 503,
		headers: {
			"Cache-Control": "no-store",
			"X-Robots-Tag": "noindex"
		}
	});
	if (!hasAdminSession(request)) return Response.redirect(new URL(`/admin/login/?next=${encodeURIComponent(url.pathname)}`, url), 302);
	return next();
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
