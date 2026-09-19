import { A as renderHead, C as renderComponent, L as unescapeHTML, O as renderTemplate, T as renderSlot, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import { t as renderScript } from "./script_ByrLQI97.mjs";
import "./compiler_rxq6eLSk.mjs";
import { i as SITE, n as PRIMARY_CATEGORIES, r as SECONDARY_CATEGORIES, t as CATEGORIES } from "./site_BpGwPZXI.mjs";
//#region src/components/SiteHeader.astro
createAstro("https://smallcozyhome.store");
var $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SiteHeader;
	const { currentCategory } = Astro.props;
	const isArticle = Astro.url.pathname.startsWith("/post/");
	return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute(["masthead site-masthead", { "reading-masthead": isArticle }], "class:list")} data-astro-cid-fzpbxy5g><div class="wrap masthead-top" data-astro-cid-fzpbxy5g><div class="masthead-left" data-astro-cid-fzpbxy5g><a href="/search/" class="header-search" data-astro-cid-fzpbxy5g><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-fzpbxy5g><circle cx="10.5" cy="10.5" r="6.5" data-astro-cid-fzpbxy5g></circle><path d="m16 16 4.5 4.5" data-astro-cid-fzpbxy5g></path></svg><span data-astro-cid-fzpbxy5g>Find your inspiration</span></a><details class="mobile-navigation" data-menu data-astro-cid-fzpbxy5g><summary aria-label="Open navigation" aria-controls="mobile-room-panel" data-astro-cid-fzpbxy5g><svg class="menu-open-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-fzpbxy5g><path d="M3 7h18M3 12h18M3 17h12" data-astro-cid-fzpbxy5g></path></svg><svg class="menu-close-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-fzpbxy5g><path d="m6 6 12 12M6 18 18 6" data-astro-cid-fzpbxy5g></path></svg></summary><nav id="mobile-room-panel" class="mobile-room-panel" aria-label="Mobile" data-astro-cid-fzpbxy5g><div class="mobile-menu-intro" data-astro-cid-fzpbxy5g><p class="eyebrow" data-astro-cid-fzpbxy5g>Make yourself at home</p><p class="mobile-menu-title" data-astro-cid-fzpbxy5g>A room for every idea.</p></div><a href="/" class="mobile-home-link"${addAttribute(Astro.url.pathname === "/" ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g>The home edit <span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a><div class="mobile-category-links" data-astro-cid-fzpbxy5g>${CATEGORIES.map((c) => renderTemplate`<a${addAttribute("/category/" + c.slug + "/", "href")}${addAttribute(currentCategory === c.slug ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g>${c.name}<span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a>`)}</div><div class="mobile-menu-footer" data-astro-cid-fzpbxy5g><a href="/tags/" data-astro-cid-fzpbxy5g>Explore all topics <span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a><a href="/about/" data-astro-cid-fzpbxy5g>About ${SITE.name} <span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a></div></nav></details></div><a class="wordmark" href="/"${addAttribute(SITE.name + " home", "aria-label")} data-astro-cid-fzpbxy5g><span data-astro-cid-fzpbxy5g>${SITE.name}</span><small data-astro-cid-fzpbxy5g>Cozy ideas for every home.</small></a><div class="masthead-actions" data-astro-cid-fzpbxy5g><a href="/search/" class="mobile-search" aria-label="Search ideas" data-astro-cid-fzpbxy5g><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" data-astro-cid-fzpbxy5g><circle cx="10.5" cy="10.5" r="6.5" data-astro-cid-fzpbxy5g></circle><path d="m16 16 4.5 4.5" data-astro-cid-fzpbxy5g></path></svg></a><a href="/saved/" class="header-saved" aria-label="Your saved ideas"${addAttribute(Astro.url.pathname === "/saved/" ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g><svg width="17" height="19" viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true" data-astro-cid-fzpbxy5g><path d="M4 3h12v18l-6-4-6 4z" data-astro-cid-fzpbxy5g></path></svg><span data-astro-cid-fzpbxy5g>Saved ideas</span></a></div></div><nav class="room-navigation" aria-label="Primary" data-astro-cid-fzpbxy5g><a href="/"${addAttribute(Astro.url.pathname === "/" ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g>The home edit</a>${PRIMARY_CATEGORIES.map((c) => renderTemplate`<a${addAttribute("/category/" + c.slug + "/", "href")}${addAttribute(currentCategory === c.slug ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g>${c.name}</a>`)}<details data-menu data-astro-cid-fzpbxy5g><summary data-astro-cid-fzpbxy5g>More inspiration <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" aria-hidden="true" data-astro-cid-fzpbxy5g><path d="m2 4 4 4 4-4" data-astro-cid-fzpbxy5g></path></svg></summary><div class="more-room-panel" data-astro-cid-fzpbxy5g>${SECONDARY_CATEGORIES.map((c) => renderTemplate`<a${addAttribute("/category/" + c.slug + "/", "href")}${addAttribute(currentCategory === c.slug ? "page" : void 0, "aria-current")} data-astro-cid-fzpbxy5g>${c.name} <span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a>`)}<a href="/tags/" data-astro-cid-fzpbxy5g>All topics <span aria-hidden="true" data-astro-cid-fzpbxy5g>&nearr;</span></a></div></details></nav></header>${renderScript($$result, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/SiteHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/SiteHeader.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://smallcozyhome.store");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	const { title, description = SITE.description, image, imageWide, type = "website", publishDate, updatedDate, noindex = false, section, keywords = [], words, minutes, schemas = [] } = Astro2.props;
	const pageTitle = title ? `${title} — ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
	const origin = (Astro2.site ?? new URL(SITE.url)).origin;
	const canonical = new URL(Astro2.url.pathname, Astro2.site ?? SITE.url).href;
	const abs = (path) => new URL(path, origin).href;
	function photo(src, w, h) {
		return src.startsWith("photo-") ? `https://images.unsplash.com/${src}?w=${w}&h=${h}&fit=crop&auto=format&q=75` : abs(src);
	}
	const ogImage = image ? photo(image, 1e3, 1500) : photo("photo-1600210492486-724fe5c67fb0", 1200, 630);
	const ogIsPin = Boolean(image);
	const ogW = ogIsPin ? 1e3 : 1200;
	const ogH = ogIsPin ? 1500 : 630;
	const twitterImage = imageWide ? photo(imageWide, 1200, 630) : ogImage;
	const adsenseId = "ca-pub-8497285724891966";
	const currentCategory = (Astro2.url.pathname.split("/").filter(Boolean)[0] === "category" ? Astro2.url.pathname.split("/").filter(Boolean)[1] : void 0) ?? (section ? CATEGORIES.find((c) => c.name === section)?.slug : void 0);
	const ORG_ID = `${origin}/#organization`;
	const SITE_ID = `${origin}/#website`;
	const AUTHOR_ID = `${origin}/author/${SITE.authorSlug}/#person`;
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"@id": ORG_ID,
				name: SITE.name,
				url: `${origin}/`,
				description: SITE.description,
				logo: {
					"@type": "ImageObject",
					url: abs(SITE.logo),
					caption: SITE.name
				},
				sameAs: [SITE.pinterest, SITE.instagram].filter((url) => url && new URL(url).pathname !== "/")
			},
			{
				"@type": "WebSite",
				"@id": SITE_ID,
				name: SITE.name,
				alternateName: SITE.tagline,
				url: `${origin}/`,
				description: SITE.description,
				inLanguage: SITE.lang,
				publisher: { "@id": ORG_ID }
			},
			{
				"@type": "Person",
				"@id": AUTHOR_ID,
				name: SITE.author,
				url: abs(`/author/${SITE.authorSlug}/`),
				jobTitle: SITE.authorRole,
				description: SITE.authorBio,
				image: SITE.authorAvatar,
				worksFor: { "@id": ORG_ID },
				...SITE.authorLinks.length ? { sameAs: [...SITE.authorLinks] } : {}
			},
			type === "article" ? {
				"@type": "BlogPosting",
				"@id": `${canonical}#article`,
				headline: title,
				description,
				image: [ogImage, twitterImage].filter((v, i, a) => a.indexOf(v) === i),
				datePublished: publishDate,
				dateModified: updatedDate || publishDate,
				author: { "@id": AUTHOR_ID },
				publisher: { "@id": ORG_ID },
				isPartOf: { "@id": SITE_ID },
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": canonical
				},
				inLanguage: SITE.lang,
				isAccessibleForFree: true,
				...section ? { articleSection: section } : {},
				...keywords.length ? { keywords: keywords.join(", ") } : {},
				...words ? { wordCount: words } : {},
				...minutes ? { timeRequired: `PT${minutes}M` } : {}
			} : null,
			...schemas
		].filter(Boolean)
	};
	return renderTemplate`<html${addAttribute(SITE.lang, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta name="robots"${addAttribute(noindex ? "noindex, follow" : "index, follow, max-image-preview:large", "content")}><meta name="theme-color" content="#FBF8F4"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(`${SITE.name} — latest stories`, "title")} href="/rss.xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://images.unsplash.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"><meta property="og:type"${addAttribute(type, "content")}><meta property="og:title"${addAttribute(title || SITE.name, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width"${addAttribute(String(ogW), "content")}><meta property="og:image:height"${addAttribute(String(ogH), "content")}><meta property="og:image:alt"${addAttribute(title || SITE.name, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:site_name"${addAttribute(SITE.name, "content")}><meta property="og:locale"${addAttribute(SITE.locale, "content")}>${type === "article" && publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate, "content")}>`}${type === "article" && updatedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(updatedDate, "content")}>`}${type === "article" && renderTemplate`<meta property="article:author"${addAttribute(SITE.author, "content")}>`}${type === "article" && section && renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>`}${type === "article" && keywords.map((k) => renderTemplate`<meta property="article:tag"${addAttribute(k, "content")}>`)}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title || SITE.name, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(twitterImage, "content")}><meta name="twitter:image:alt"${addAttribute(title || SITE.name, "content")}>${SITE.twitter && renderTemplate`<meta name="twitter:site"${addAttribute(SITE.twitter, "content")}>`}${SITE.twitter && renderTemplate`<meta name="twitter:creator"${addAttribute(SITE.twitter, "content")}>`}<meta name="pinterest-rich-pin" content="true">${SITE.pinterestVerification && renderTemplate`<meta name="p:domain_verify"${addAttribute(SITE.pinterestVerification, "content")}>`}${SITE.googleVerification && renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleVerification, "content")}>`}<script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      });
    <\/script>${renderHead($$result)}</head><body><a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">Skip to content</a>${renderComponent($$result, "SiteHeader", $$SiteHeader, { "currentCategory": currentCategory })}<main id="main">${renderSlot($$result, $$slots["default"])}</main><footer class="site-footer mt-24 border-t border-ink bg-ink text-paper"><div class="wrap py-16"><div class="grid gap-12 md:grid-cols-12"><div class="md:col-span-4"><p class="font-display text-display-4 text-paper">${SITE.name}</p><p class="mt-3 max-w-sm text-sm leading-relaxed text-paper/65">${SITE.description}</p><div class="mt-6 flex gap-4"><a${addAttribute(SITE.pinterest, "href")} rel="noopener noreferrer nofollow" target="_blank" class="eyebrow-muted text-paper/60 hover:text-clay-soft">Pinterest</a><a${addAttribute(SITE.instagram, "href")} rel="noopener noreferrer nofollow" target="_blank" class="eyebrow-muted text-paper/60 hover:text-clay-soft">Instagram</a><a${addAttribute(`mailto:${SITE.email}`, "href")} class="eyebrow-muted text-paper/60 hover:text-clay-soft">Email</a><a href="/rss.xml" class="eyebrow-muted text-paper/60 hover:text-clay-soft">RSS</a></div></div><div class="md:col-span-4"><p class="eyebrow-muted text-paper/50">Rooms</p><ul class="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">${CATEGORIES.map((c) => renderTemplate`<li><a${addAttribute(`/category/${c.slug}/`, "href")} class="text-sm text-paper/65 hover:text-clay-soft">${c.name}</a></li>`)}</ul></div><div class="md:col-span-2"><p class="eyebrow-muted text-paper/50">Site</p><ul class="mt-4 space-y-2.5"><li><a href="/" class="text-sm text-paper/65 hover:text-clay-soft">Home</a></li><li><a href="/tags/" class="text-sm text-paper/65 hover:text-clay-soft">Topics</a></li><li><a href="/about/" class="text-sm text-paper/65 hover:text-clay-soft">About</a></li><li><a${addAttribute(`/author/${SITE.authorSlug}/`, "href")} class="text-sm text-paper/65 hover:text-clay-soft">${SITE.author}</a></li><li><a href="/contact/" class="text-sm text-paper/65 hover:text-clay-soft">Contact</a></li><li><a href="/search/" class="text-sm text-paper/65 hover:text-clay-soft">Search</a></li></ul></div><div class="md:col-span-2"><p class="eyebrow-muted text-paper/50">Legal</p><ul class="mt-4 space-y-2.5"><li><a href="/privacy-policy/" class="text-sm text-paper/65 hover:text-clay-soft">Privacy Policy</a></li><li><a href="/disclosure/" class="text-sm text-paper/65 hover:text-clay-soft">Disclosure</a></li></ul></div></div><div class="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between"><p class="text-xs text-paper/45">© ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.name}. All rights reserved.</p><p class="text-xs text-paper/45">As an Amazon Associate we earn from qualifying purchases.</p></div></div></footer>${renderSlot($$result, $$slots["after-footer"])}${renderTemplate`<script async defer${addAttribute(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`, "src")} crossorigin="anonymous"><\/script>`}<script async defer data-pin-hover="true" src="https://assets.pinterest.com/js/pinit.js"><\/script></body></html>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
