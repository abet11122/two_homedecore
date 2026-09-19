import { A as addAttribute, D as renderTemplate, O as maybeRenderHead, R as createAstro, S as renderComponent } from "./sequence_VRBs3N3Z.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import { t as renderScript } from "./script_BjxBmPt5.mjs";
import "./compiler_BzwcicxT.mjs";
import { a as categoryName, c as formatDateShort, l as readingTime } from "./site_BpGwPZXI.mjs";
import { t as $$Img } from "./Img_CFoXX54L.mjs";
//#region src/components/SaveIdea.astro
createAstro("https://smallcozyhome.store");
var $$SaveIdea = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SaveIdea;
	const { id, title } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<button class="save-idea" type="button"${addAttribute(id, "data-save-id")}${addAttribute(title ? `Save idea: ${title}` : "Save idea", "aria-label")} aria-pressed="false" hidden data-astro-cid-d7uzsoe2><svg class="save-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true" data-astro-cid-d7uzsoe2><path d="M5.5 3.25h9a.75.75 0 0 1 .75.75v12.5L10 13.25 4.75 16.5V4a.75.75 0 0 1 .75-.75Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round" data-astro-cid-d7uzsoe2></path></svg><span data-save-label data-astro-cid-d7uzsoe2>Save idea</span></button>${renderScript($$result, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/SaveIdea.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/SaveIdea.astro", void 0);
//#endregion
//#region src/components/PostCard.astro
createAstro("https://smallcozyhome.store");
var $$PostCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PostCard;
	const { post, variant = "default", eager = false, sizes } = Astro.props;
	const href = `/post/${post.id}/`;
	const d = post.data;
	const minutes = readingTime(post.body ?? "");
	return renderTemplate`${variant === "default" && renderTemplate`${maybeRenderHead($$result)}<article class="reveal group idea-card story-card" data-astro-cid-sbmovh4h><a${addAttribute(href, "href")} class="story-link" data-astro-cid-sbmovh4h><div class="frame aspect-[4/3] story-image" data-astro-cid-sbmovh4h>${renderComponent($$result, "Img", $$Img, {
		"src": d.heroImage,
		"alt": d.title,
		"width": 640,
		"height": 480,
		"loading": eager ? "eager" : "lazy",
		"sizes": sizes ?? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
		"data-astro-cid-sbmovh4h": true
	})}</div><div class="story-copy" data-astro-cid-sbmovh4h><div class="story-kicker" data-astro-cid-sbmovh4h><p class="eyebrow" data-astro-cid-sbmovh4h>${categoryName(d.category)}</p><span class="story-reading" data-astro-cid-sbmovh4h>${minutes} min read</span></div><h3 class="story-title font-display text-title-lg text-ink" data-astro-cid-sbmovh4h>${d.title}</h3><p class="clamp-2 story-description" data-astro-cid-sbmovh4h>${d.description}</p><div class="story-footer" data-astro-cid-sbmovh4h><time${addAttribute(d.publishDate.toISOString(), "datetime")} data-astro-cid-sbmovh4h>${formatDateShort(d.publishDate)}</time><span class="story-cta" data-astro-cid-sbmovh4h>Read story <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" data-astro-cid-sbmovh4h><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sbmovh4h></path></svg></span></div></div></a><div class="story-save" data-astro-cid-sbmovh4h>${renderComponent($$result, "SaveIdea", $$SaveIdea, {
		"id": post.id,
		"title": d.title,
		"data-astro-cid-sbmovh4h": true
	})}</div></article>`}${variant === "wide" && renderTemplate`<article class="reveal group story-wide grid gap-6 sm:grid-cols-12 sm:items-center" data-astro-cid-sbmovh4h><a${addAttribute(href, "href")} class="story-image-link sm:col-span-5"${addAttribute(d.title, "aria-label")} data-astro-cid-sbmovh4h><div class="frame aspect-[4/3] story-image" data-astro-cid-sbmovh4h>${renderComponent($$result, "Img", $$Img, {
		"src": d.heroImage,
		"alt": d.title,
		"width": 560,
		"height": 420,
		"loading": eager ? "eager" : "lazy",
		"sizes": sizes ?? "(min-width: 640px) 40vw, 90vw",
		"data-astro-cid-sbmovh4h": true
	})}</div></a><div class="sm:col-span-7" data-astro-cid-sbmovh4h><div class="story-kicker" data-astro-cid-sbmovh4h><p class="eyebrow" data-astro-cid-sbmovh4h>${categoryName(d.category)}</p><span class="story-reading" data-astro-cid-sbmovh4h>${minutes} min read</span></div><h3 class="story-title mt-3 font-display text-display-4 text-ink" data-astro-cid-sbmovh4h><a${addAttribute(href, "href")} class="transition-colors duration-250 group-hover:text-clay" data-astro-cid-sbmovh4h>${d.title}</a></h3><p class="clamp-2 story-description" data-astro-cid-sbmovh4h>${d.description}</p><div class="story-footer" data-astro-cid-sbmovh4h><time${addAttribute(d.publishDate.toISOString(), "datetime")} data-astro-cid-sbmovh4h>${formatDateShort(d.publishDate)}</time><a${addAttribute(href, "href")} class="story-cta"${addAttribute(`Read ${d.title}`, "aria-label")} data-astro-cid-sbmovh4h>Read story <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" data-astro-cid-sbmovh4h><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sbmovh4h></path></svg></a></div></div></article>`}${variant === "compact" && renderTemplate`<article class="group story-compact flex items-start gap-4" data-astro-cid-sbmovh4h><a${addAttribute(href, "href")} class="story-image-link shrink-0"${addAttribute(d.title, "aria-label")} data-astro-cid-sbmovh4h><div class="frame aspect-square w-20 sm:w-24 story-image" data-astro-cid-sbmovh4h>${renderComponent($$result, "Img", $$Img, {
		"src": d.heroImage,
		"alt": d.title,
		"width": 192,
		"height": 192,
		"sizes": "96px",
		"data-astro-cid-sbmovh4h": true
	})}</div></a><div class="min-w-0" data-astro-cid-sbmovh4h><p class="eyebrow-muted" data-astro-cid-sbmovh4h>${categoryName(d.category)}</p><h3 class="mt-1.5 font-display text-title-sm text-ink" data-astro-cid-sbmovh4h><a${addAttribute(href, "href")} class="transition-colors group-hover:text-clay" data-astro-cid-sbmovh4h>${d.title}</a></h3><p class="story-compact-meta" data-astro-cid-sbmovh4h>${minutes} min read <span aria-hidden="true" data-astro-cid-sbmovh4h>&middot;</span> <time${addAttribute(d.publishDate.toISOString(), "datetime")} data-astro-cid-sbmovh4h>${formatDateShort(d.publishDate)}</time></p></div></article>`}`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/PostCard.astro", void 0);
//#endregion
export { $$PostCard as t };
