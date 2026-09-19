import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as getCollection } from "./_astro_content_BKebDgM1.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { i as SITE, o as collectTags, t as CATEGORIES } from "./site_BpGwPZXI.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_C1WSx2Gk.mjs";
import { t as $$Newsletter } from "./Newsletter_CNFqAdPo.mjs";
//#region src/pages/tags.astro
var tags_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tags,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://smallcozyhome.store");
var $$Tags = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Tags;
	const posts = await getCollection("posts");
	const tags = collectTags(posts);
	const max = tags[0]?.count ?? 1;
	const description = `Browse ${SITE.name} by topic — ${tags.length} themes running across ${CATEGORIES.length} rooms, from storage and lighting to renter-friendly fixes.`;
	const origin = (Astro.site ?? new URL(SITE.url)).origin;
	const listSchema = {
		"@type": "CollectionPage",
		"@id": `${origin}/tags/#collection`,
		name: "All topics",
		description,
		isPartOf: { "@id": `${origin}/#website` },
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: tags.length,
			itemListElement: tags.map((tag, i) => ({
				"@type": "ListItem",
				position: i + 1,
				url: new URL(`/tag/${tag.slug}/`, origin).href,
				name: tag.label
			}))
		}
	};
	function scale(count) {
		const ratio = count / max;
		if (ratio > .66) return "text-[2rem] sm:text-[2.75rem]";
		if (ratio > .4) return "text-[1.625rem] sm:text-[2.125rem]";
		if (ratio > .2) return "text-[1.375rem] sm:text-[1.75rem]";
		return "text-[1.125rem] sm:text-[1.375rem]";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "All topics",
		"description": description,
		"schemas": [listSchema]
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="border-b border-rule bg-sand/40"><div class="wrap py-10 lg:py-14">${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": [{
		label: "Home",
		href: "/"
	}, { label: "Tags" }] })}<div class="mt-7 max-w-2xl"><p class="eyebrow">The index</p><h1 class="mt-4 font-display text-[2.5rem] leading-[1.05] text-ink sm:text-5xl lg:text-6xl">Browse by topic</h1><p class="mt-5 text-[1.0625rem] leading-relaxed text-ink-60">Rooms are one way in. These are the other one — the themes that run through the whole archive, sized by how much of it they cover.</p></div></div></header><section class="wrap py-14 lg:py-20"><ul class="flex flex-wrap items-baseline gap-x-8 gap-y-5">${tags.map((tag) => renderTemplate`<li><a${addAttribute(`/tag/${tag.slug}/`, "href")}${addAttribute(`link-underline font-display leading-none text-ink hover:text-clay ${scale(tag.count)}`, "class")}>${tag.label}<span class="ml-1.5 align-super font-body text-[0.6875rem] font-semibold text-ink-20">${tag.count}</span></a></li>`)}</ul></section><section class="wrap border-t border-rule pt-10" aria-labelledby="tag-rooms-index"><h2 id="tag-rooms-index" class="eyebrow-muted">Or browse by room</h2><div class="mt-5 flex flex-wrap gap-x-7 gap-y-3">${CATEGORIES.map((c) => renderTemplate`<a${addAttribute(`/category/${c.slug}/`, "href")} class="font-display text-xl text-ink transition-colors hover:text-clay sm:text-2xl">${c.name}</a>`)}</div></section><div class="mt-16 lg:mt-20">${renderComponent($$result, "Newsletter", $$Newsletter, {})}</div>` })}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/tags.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/tags.astro";
var $$url = "/tags/";
//#endregion
//#region \0virtual:astro:page:src/pages/tags@_@astro
var page = () => tags_exports;
//#endregion
export { page };
