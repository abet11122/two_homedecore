import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { i as SITE } from "./site_BpGwPZXI.mjs";
import { t as $$PageLayout } from "./PageLayout__cqDyEHb.mjs";
//#region src/pages/disclosure.astro
var disclosure_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Disclosure,
	file: () => $$file,
	url: () => $$url
});
var $$Disclosure = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, {
		"title": "Disclosure",
		"eyebrow": "Legal",
		"description": `How ${SITE.name} makes money — affiliate links, advertising and sponsored content.`,
		"lede": "How this site makes money, stated plainly.",
		"updated": "August 29, 2026"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<p>${SITE.name} is free to read. It is paid for by advertising and affiliate commissions. Here is exactly how that works, in line with the US Federal Trade Commission's endorsement guidelines and the UK CAP Code.</p><h2>Affiliate links</h2><p>Some links to products are affiliate links. If you click one and buy something, we may earn a commission — typically between 1% and 10% of the sale. <strong>The price you pay is exactly the same.</strong> The retailer pays the commission out of their margin, not out of your pocket.</p><p>Any article containing affiliate links carries a disclosure banner above the article body, so you know before you read rather than after.</p><p>${SITE.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We also participate in a small number of other home and furniture affiliate programs.</p><h2>How we choose what to recommend</h2><p>Commission rates play no part in what we recommend. Our rules for ourselves:</p><ul><li>We recommend a product only if we would put it in our own home.</li><li>Where we have tested something, we say so. Where we have not, we say that too.</li><li>We name the cheaper option when the cheaper option is genuinely fine.</li><li>We do not write "best of" lists built purely from whatever pays the highest rate.</li></ul><h2>Advertising</h2><p>We display advertising through Google AdSense. Ads are labelled and are served automatically by Google — we do not choose the individual advertisers, and their appearance here is not an endorsement. See our <a href="/privacy-policy/">privacy policy</a> for how advertising cookies are handled, including consent for visitors in the EEA, UK and Switzerland.</p><h2>Sponsored content and gifted items</h2><p>If a brand pays for an article, that article is labelled <strong>Sponsored</strong> at the top, and in the headline where the platform allows it. If a product was sent to us free of charge, we say so in the article. Neither payment nor a free sample buys a positive review, and we retain full editorial control over wording.</p><h2>Photography</h2><p>Photography on this site is either our own or licensed from Unsplash under the<a href="https://unsplash.com/license" rel="nofollow noopener" target="_blank">Unsplash License</a>. Product photography, where used, belongs to the respective retailers.</p><h2>Questions</h2><p>If anything here is unclear, or you think we have got a disclosure wrong, tell us at<a${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a>. We would rather fix it.</p>` })}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/disclosure.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/disclosure.astro";
var $$url = "/disclosure/";
//#endregion
//#region \0virtual:astro:page:src/pages/disclosure@_@astro
var page = () => disclosure_exports;
//#endregion
export { page };
