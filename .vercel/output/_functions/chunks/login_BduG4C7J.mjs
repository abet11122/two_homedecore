import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as isVercelDeployment, i as hasValidAdminCredentials, t as createAdminSession } from "./admin_DRveAxcX.mjs";
//#region src/pages/admin/api/login.ts
var login_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request, url }) => {
	const form = await request.formData();
	const username = String(form.get("username") ?? "");
	const password = String(form.get("password") ?? "");
	const next = String(form.get("next") ?? "/admin/");
	const destination = next.startsWith("/admin/") ? next : "/admin/";
	if (!hasValidAdminCredentials(username, password)) return Response.redirect(new URL(`/admin/login/?error=1&next=${encodeURIComponent(destination)}`, url), 303);
	const secure = isVercelDeployment() ? "; Secure" : "";
	return new Response(null, {
		status: 303,
		headers: {
			Location: destination,
			"Cache-Control": "no-store",
			"Set-Cookie": `admin_session=${createAdminSession()}; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=43200${secure}`
		}
	});
};
//#endregion
//#region \0virtual:astro:page:src/pages/admin/api/login@_@ts
var page = () => login_exports;
//#endregion
export { page };
