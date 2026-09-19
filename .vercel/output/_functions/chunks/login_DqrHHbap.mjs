import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { A as renderHead, O as renderTemplate, j as addAttribute, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
//#region src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://smallcozyhome.store");
var $$Login = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Login;
	const error = Astro.url.searchParams.get("error") === "1";
	const next = Astro.url.searchParams.get("next")?.startsWith("/admin/") ? Astro.url.searchParams.get("next") : "/admin/";
	return renderTemplate`<html lang="en" data-astro-cid-xeimgta2><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex, nofollow"><title>Admin login — Hearth &amp; Grain</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap">${renderHead($$result)}</head><body data-astro-cid-xeimgta2><main data-astro-cid-xeimgta2><div class="mark" aria-hidden="true" data-astro-cid-xeimgta2>H</div><h1 data-astro-cid-xeimgta2>Admin login</h1><p data-astro-cid-xeimgta2>Sign in to manage Hearth &amp; Grain content.</p>${error && renderTemplate`<div class="error" role="alert" data-astro-cid-xeimgta2>That username or password is incorrect.</div>`}<form method="post" action="/admin/api/login/" data-astro-cid-xeimgta2><input type="hidden" name="next"${addAttribute(next, "value")} data-astro-cid-xeimgta2><label for="username" data-astro-cid-xeimgta2>Username</label><input id="username" name="username" autocomplete="username" required autofocus data-astro-cid-xeimgta2><label for="password" data-astro-cid-xeimgta2>Password</label><input id="password" name="password" type="password" autocomplete="current-password" required data-astro-cid-xeimgta2><button type="submit" data-astro-cid-xeimgta2>Sign in</button></form></main></body></html>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/admin/login.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/admin/login.astro";
var $$url = "/admin/login/";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
