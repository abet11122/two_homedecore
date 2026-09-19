import { L as unescapeHTML, O as renderTemplate, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { i as SITE } from "./site_BpGwPZXI.mjs";
//#region src/components/Breadcrumbs.astro
createAstro("https://smallcozyhome.store");
var $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Breadcrumbs;
	const { items } = Astro.props;
	const site = Astro.site?.href ?? `${SITE.url}/`;
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: item.label,
			...item.href ? { item: new URL(item.href, site).href } : {}
		}))
	};
	return renderTemplate`${maybeRenderHead($$result)}<nav aria-label="Breadcrumb"><ol class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-ink-40">${items.map((item, i) => renderTemplate`<li class="flex items-center gap-2">${item.href ? renderTemplate`<a${addAttribute(item.href, "href")} class="transition-colors hover:text-clay">${item.label}</a>` : renderTemplate`<span class="text-ink-60">${item.label}</span>`}${i < items.length - 1 && renderTemplate`<span aria-hidden="true" class="text-ink-20">/</span>`}</li>`)}</ol></nav><script type="application/ld+json">${unescapeHTML(JSON.stringify(schema))}<\/script>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/Breadcrumbs.astro", void 0);
//#endregion
export { $$Breadcrumbs as t };
