import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as getCollection } from "./_astro_content_BKebDgM1.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { t as $$PostCard } from "./PostCard_BLH6Hj5r.mjs";
//#region src/pages/saved.astro
var saved_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Saved,
	file: () => $$file,
	url: () => $$url
});
var $$Saved = createComponent(async ($$result, $$props, $$slots) => {
	const posts = await getCollection("posts");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Your Saved Home Ideas",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="wrap py-16"><p class="eyebrow">Your own little inspiration board</p><h1 class="mt-4 font-display text-display-2">Ideas to come home to.</h1><p class="mt-5 text-ink-60">Your favorites, kept together on this browser. Save a guide whenever something catches your eye.</p><div id="saved-empty" class="saved-empty"><h2 class="font-display text-display-3">Something lovely starts with one idea.</h2><p class="my-5">Tap “Save idea” on a guide to keep it here for your next room refresh.</p><a class="btn btn-primary" href="/#find-ideas">Explore decorating ideas ↗</a></div><noscript><p>Enable JavaScript to view ideas saved in this browser.</p></noscript><div class="ideas-grid mt-10">${posts.map((post) => renderTemplate`<div${addAttribute(post.id, "data-saved-card")} hidden>${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}</div>`)}</div></section>` })}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/saved.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/saved.astro";
var $$url = "/saved/";
//#endregion
//#region \0virtual:astro:page:src/pages/saved@_@astro
var page = () => saved_exports;
//#endregion
export { page };
