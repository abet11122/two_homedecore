import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead, y as defineStyleVars, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import { t as renderScript } from "./script_ByrLQI97.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as getCollection } from "./_astro_content_BKebDgM1.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { a as categoryName, n as PRIMARY_CATEGORIES, t as CATEGORIES } from "./site_BpGwPZXI.mjs";
import { t as $$Img } from "./Img_CmNjfI79.mjs";
import { t as $$PostCard } from "./PostCard_BLH6Hj5r.mjs";
import { t as $$Newsletter } from "./Newsletter_CNFqAdPo.mjs";
//#region src/components/AdSlot.astro
createAstro("https://smallcozyhome.store");
var $$AdSlot = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$AdSlot;
	const SIZES = {
		"in-article-top": {
			mobile: {
				w: 336,
				h: 280
			},
			desktop: {
				w: 728,
				h: 90
			}
		},
		"in-article-mid": {
			mobile: {
				w: 336,
				h: 280
			},
			desktop: {
				w: 336,
				h: 280
			}
		},
		"before-related": {
			mobile: {
				w: 336,
				h: 280
			},
			desktop: {
				w: 728,
				h: 90
			}
		},
		feed: {
			mobile: {
				w: 336,
				h: 280
			},
			desktop: {
				w: 728,
				h: 90
			}
		},
		anchor: {
			mobile: {
				w: 320,
				h: 50
			},
			desktop: {
				w: 320,
				h: 50
			}
		},
		sidebar: {
			mobile: {
				w: 300,
				h: 600
			},
			desktop: {
				w: 300,
				h: 600
			}
		}
	};
	const { placement, mobile, desktop, class: className = "" } = Astro2.props;
	const m = mobile ?? SIZES[placement].mobile;
	const dsk = desktop ?? SIZES[placement].desktop;
	const clientId = Object.assign({
		"ASSETS_PREFIX": void 0,
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"PUBLIC_ADSENSE_CLIENT_ID": "ca-pub-8497285724891966",
		"PUBLIC_ADSENSE_SLOT_ANCHOR": "",
		"PUBLIC_ADSENSE_SLOT_BEFORE_RELATED": "",
		"PUBLIC_ADSENSE_SLOT_FEED": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_MID": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_TOP": "",
		"SITE": "https://smallcozyhome.store",
		"SSR": true
	}, {
		OneDrive: "C:\\Users\\mmuba\\OneDrive",
		PUBLIC: "C:\\Users\\Public"
	}).PUBLIC_ADSENSE_CLIENT_ID || Object.assign({
		"ASSETS_PREFIX": void 0,
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"PUBLIC_ADSENSE_CLIENT_ID": "ca-pub-8497285724891966",
		"PUBLIC_ADSENSE_SLOT_ANCHOR": "",
		"PUBLIC_ADSENSE_SLOT_BEFORE_RELATED": "",
		"PUBLIC_ADSENSE_SLOT_FEED": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_MID": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_TOP": "",
		"SITE": "https://smallcozyhome.store",
		"SSR": true
	}, {
		OneDrive: "C:\\Users\\mmuba\\OneDrive",
		PUBLIC: "C:\\Users\\Public"
	}).ADSENSE_CLIENT_ID || "";
	const envKey = `PUBLIC_ADSENSE_SLOT_${placement.toUpperCase().replace(/-/g, "_")}`;
	const slotId = Object.assign({
		"ASSETS_PREFIX": void 0,
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"PUBLIC_ADSENSE_CLIENT_ID": "ca-pub-8497285724891966",
		"PUBLIC_ADSENSE_SLOT_ANCHOR": "",
		"PUBLIC_ADSENSE_SLOT_BEFORE_RELATED": "",
		"PUBLIC_ADSENSE_SLOT_FEED": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_MID": "",
		"PUBLIC_ADSENSE_SLOT_IN_ARTICLE_TOP": "",
		"SITE": "https://smallcozyhome.store",
		"SSR": true
	}, {
		OneDrive: "C:\\Users\\mmuba\\OneDrive",
		PUBLIC: "C:\\Users\\Public"
	})[envKey] || "";
	const showAd = Boolean(clientId && slotId);
	const uid = `ad-${placement}`;
	const $$definedVars = defineStyleVars([{
		mw: `${m.w}px`,
		mh: `${m.h}px`,
		dw: `${dsk.w}px`,
		dh: `${dsk.h}px`
	}]);
	return renderTemplate`${showAd && renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`ad ${className}`, "class")}${addAttribute(placement, "data-placement")}${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat><span class="ad-label"${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat>Advertisement</span><div class="ad-box"${addAttribute(uid, "id")}${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat>${showAd ? renderTemplate`<ins class="adsbygoogle"${addAttribute(`display:block;width:100%;height:100%; ${$$definedVars}`, "style")}${addAttribute(clientId, "data-ad-client")}${addAttribute(slotId, "data-ad-slot")}${addAttribute(placement === "anchor" ? "horizontal" : "auto", "data-ad-format")} data-full-width-responsive="false" data-astro-cid-ygkiugat></ins>` : renderTemplate`<span class="ad-placeholder"${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat><span class="md:hidden"${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat>${m.w}×${m.h}</span><span class="hidden md:inline"${addAttribute($$definedVars, "style")} data-astro-cid-ygkiugat>${dsk.w}×${dsk.h}</span> ad slot</span>`}</div></div>`}${showAd && renderTemplate`<script>
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  <\/script>`}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/AdSlot.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("posts")).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
	const featured = posts.find((p) => p.data.featured) ?? posts[0];
	const weekend = posts.find((p) => p.id === "diy-floating-shelves");
	const picks = posts.filter((p) => [
		"small-bedroom-ideas-that-look-expensive",
		"apartment-decor-ideas-budget",
		"diy-floating-shelves"
	].includes(p.id));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Home Decor Ideas for Beautiful, Livable Spaces",
		"description": "Find home decor ideas for small bedrooms, living rooms, rentals and more. Explore practical styling guides, save your favorites and plan your next room refresh."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="home-note"><span>A little inspiration. A home that feels like you.</span><a href="/category/small-spaces/">Small spaces, beautiful possibilities <span aria-hidden="true">↗</span></a></div><section class="wrap home-hero"><div class="home-hero-copy"><p class="eyebrow hero-kicker"><span aria-hidden="true"></span>The art of feeling at home</p><h1>Make room for<br><em>the life you love.</em></h1><p>Home decor ideas for real rooms, real budgets, and your own kind of beautiful. Find the little changes that make you love coming home.</p><div class="hero-actions"><a class="btn btn-primary" href="#find-ideas">Explore the ideas <span aria-hidden="true">↗</span></a><a class="quiet-link" href="#rooms-title">Find your room <span aria-hidden="true">→</span></a></div><div class="hero-footnote"><span class="hero-monogram" aria-hidden="true">sch</span><div><strong>Good rooms start with a little inspiration.</strong><span>${posts.length} guides. Countless ways to make it yours.</span></div></div></div><div class="hero-composition">${featured && renderTemplate`<a class="hero-feature"${addAttribute(`/post/${featured.id}/`, "href")}>${renderComponent($$result, "Img", $$Img, {
		"src": featured.data.heroImage,
		"alt": featured.data.title,
		"width": 900,
		"height": 1e3,
		"loading": "eager",
		"fetchpriority": "high",
		"sizes": "(min-width: 900px) 48vw, 100vw"
	})}<span class="feature-label"><span aria-hidden="true">✳</span> The editor’s pick</span><div class="feature-caption"><span>${categoryName(featured.data.category)} / The considered home</span><h2>${featured.data.title}</h2><span class="feature-arrow" aria-hidden="true">↗</span></div></a>`}<span class="hero-margin-note" aria-hidden="true">Spaces to settle into.</span></div></section><div class="wrap"><div class="editorial-values"><span><i aria-hidden="true">01</i> Inspiration for every room</span><span><i aria-hidden="true">02</i> Thoughtful ideas, realistic budgets</span><span><i aria-hidden="true">03</i> A home that’s entirely yours</span></div></div><section class="wrap room-section" aria-labelledby="rooms-title"><div class="home-section-head"><div><p class="eyebrow">Start somewhere you love</p><h2 id="rooms-title">Which room is on your mind?</h2></div><a class="quiet-link" href="/tags/">Explore all topics ↗</a></div><div class="room-grid">${PRIMARY_CATEGORIES.map((c) => {
		const count = posts.filter((p) => p.data.category === c.slug).length;
		return renderTemplate`<a${addAttribute(`/category/${c.slug}/`, "href")} class="room-card"><div class="frame">${renderComponent($$result, "Img", $$Img, {
			"src": c.image,
			"alt": `${c.name} decorating inspiration`,
			"width": 320,
			"height": 380,
			"sizes": "(min-width: 900px) 15vw, 45vw"
		})}</div><span>${c.name}<span aria-hidden="true">↗</span></span><small>${count} decorating ${count === 1 ? "guide" : "guides"}</small></a>`;
	})}</div></section><section class="discovery-section" id="find-ideas" aria-labelledby="ideas-title"><div class="wrap"><div class="home-section-head"><div><p class="eyebrow">The inspiration library</p><h2 id="ideas-title">A little spark for your next refresh.</h2></div><p class="section-intro">Beautiful rooms, clever details, and ideas worth saving. Find something that feels like you.</p></div><div class="idea-filters" aria-label="Filter ideas by room"><button data-room="all" aria-pressed="true">All ideas</button>${CATEGORIES.map((c) => renderTemplate`<button${addAttribute(c.slug, "data-room")} aria-pressed="false">${c.name}</button>`)}</div><p id="idea-count" class="idea-count" aria-live="polite">Explore ${posts.length} decorating guides.</p><div class="ideas-grid">${posts.map((post) => renderTemplate`<div${addAttribute(post.data.category, "data-idea-room")}>${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}</div>`)}</div><button id="more-ideas" class="btn btn-primary more-ideas" hidden>Discover more ideas ↓</button></div></section><div class="wrap">${renderComponent($$result, "AdSlot", $$AdSlot, {
		"placement": "feed",
		"class": "my-12"
	})}</div>${weekend && renderTemplate`<section class="wrap weekend-section" aria-labelledby="weekend-title"><a class="weekend-photo frame"${addAttribute(`/post/${weekend.id}/`, "href")}>${renderComponent($$result, "Img", $$Img, {
		"src": weekend.data.heroImage,
		"alt": weekend.data.title,
		"width": 900,
		"height": 680,
		"sizes": "(min-width: 900px) 48vw, 100vw"
	})}</a><div class="weekend-copy"><p class="eyebrow">The weekend project</p><span class="weekend-number" aria-hidden="true">Made by you.</span><h2 id="weekend-title">A small project.<br>A lovely difference.</h2><p>A quiet afternoon, a few simple materials, and a corner that feels a little more yours. Start with our guide to floating shelves.</p><a class="link-arrow"${addAttribute(`/post/${weekend.id}/`, "href")}>Make something lovely <span aria-hidden="true">↗</span></a></div></section>`}<section class="wrap budget-section" aria-labelledby="budget-title"><div class="home-section-head"><div><p class="eyebrow">Little changes, lovely results</p><h2 id="budget-title">Big on style. Kind to your budget.</h2></div><a class="quiet-link" href="/category/renter/">Explore renter-friendly ideas ↗</a></div><div class="grid gap-8 md:grid-cols-3">${picks.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`)}</div></section><div class="wrap my-16">${renderComponent($$result, "Newsletter", $$Newsletter, {})}</div>` })}${renderScript($$result, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/index.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
