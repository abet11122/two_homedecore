import { C as renderComponent, O as renderTemplate, T as renderSlot, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_C1WSx2Gk.mjs";
//#region src/layouts/PageLayout.astro
createAstro("https://smallcozyhome.store");
var $$PageLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageLayout;
	const { title, description, eyebrow = "Small Cozy Home", lede, updated } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": description
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="border-b border-rule"><div class="wrap py-10 lg:py-14">${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": [{
		label: "Home",
		href: "/"
	}, { label: title }] })}<p class="eyebrow mt-7">${eyebrow}</p><h1 class="mt-4 max-w-3xl font-display text-[2.5rem] leading-[1.05] text-ink sm:text-5xl">${title}</h1>${lede && renderTemplate`<p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-60">${lede}</p>`}${updated && renderTemplate`<p class="mt-6 text-eyebrow font-semibold uppercase text-ink-40">Last updated ${updated}</p>`}</div></header><div class="wrap py-12 lg:py-16"><div class="article no-dropcap mx-auto max-w-reading">${renderSlot($$result, $$slots["default"])}</div></div>` })}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/layouts/PageLayout.astro", void 0);
//#endregion
export { $$PageLayout as t };
