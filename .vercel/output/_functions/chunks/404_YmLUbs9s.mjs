import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as getCollection } from "./_astro_content_BKebDgM1.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { t as $$PostCard } from "./PostCard_BLH6Hj5r.mjs";
//#region src/components/SectionHead.astro
createAstro("https://smallcozyhome.store");
var $$SectionHead = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectionHead;
	const { title, kicker, href, hrefLabel = "See all", id, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`section-head reveal ${className}`, "class")}><div>${kicker && renderTemplate`<p class="eyebrow mb-2.5">${kicker}</p>`}<h2${addAttribute(id, "id")} class="section-title">${title}</h2></div>${href && renderTemplate`<a${addAttribute(href, "href")} class="link-arrow shrink-0 pb-1 text-ink-60 hover:text-clay">${hrefLabel}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>`}</div>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/SectionHead.astro", void 0);
//#endregion
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("posts")).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()).slice(0, 3);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Page not found",
		"description": "That page does not exist.",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="wrap py-20 text-center lg:py-28"><p class="font-display text-[5rem] leading-none text-clay sm:text-[7rem]">404</p><h1 class="mt-6 font-display text-display-3 text-ink">We could not find that page.</h1><p class="mx-auto mt-4 max-w-md leading-relaxed text-ink-60">The link may be old, or the story may have moved. Try the search, or start with something recent below.</p><div class="mt-8 flex flex-wrap justify-center gap-3"><a href="/" class="btn btn-primary">Back to home</a><a href="/search/" class="btn btn-outline">Search the archive</a></div></section>${posts.length > 0 && renderTemplate`<section class="wrap" aria-labelledby="recent-heading">${renderComponent($$result, "SectionHead", $$SectionHead, {
		"id": "recent-heading",
		"kicker": "Try these",
		"title": "Recently published"
	})}<div class="mt-12 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`)}</div></section>`}` })}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/404.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/404.astro";
var $$url = "/404/";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
