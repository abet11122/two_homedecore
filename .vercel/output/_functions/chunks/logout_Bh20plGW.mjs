import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/admin/api/logout.ts
var logout_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = ({ url }) => new Response(null, {
	status: 303,
	headers: {
		Location: new URL("/admin/login/", url).toString(),
		"Cache-Control": "no-store",
		"Set-Cookie": "admin_session=; HttpOnly; SameSite=Strict; Path=/admin; Max-Age=0"
	}
});
//#endregion
//#region \0virtual:astro:page:src/pages/admin/api/logout@_@ts
var page = () => logout_exports;
//#endregion
export { page };
