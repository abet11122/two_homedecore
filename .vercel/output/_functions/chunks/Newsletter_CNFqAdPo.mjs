import { O as renderTemplate, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
//#region src/components/Newsletter.astro
createAstro("https://smallcozyhome.store");
var $$Newsletter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Newsletter;
	const { class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(`inspiration-banner ${className}`, "class")}><div><p class="eyebrow">Collect a little inspiration</p><h2>A home you love,<br><em>one idea at a time.</em></h2><p>Keep the rooms, clever details, and weekend projects you want to come back to. Your next refresh starts here.</p></div><div class="banner-actions"><a class="btn" href="/saved/"><svg width="15" height="18" viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 3h12v18l-6-4-6 4z"></path></svg> Open my saved ideas</a><a href="/category/diy-decor/">Find a weekend project ↗</a><span>Saved on this browser. No account needed.</span></div></section>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/Newsletter.astro", void 0);
//#endregion
export { $$Newsletter as t };
