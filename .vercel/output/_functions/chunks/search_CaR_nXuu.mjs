import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, M as defineScriptVars, O as renderTemplate, j as addAttribute, k as maybeRenderHead } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as getCollection } from "./_astro_content_BKebDgM1.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { a as categoryName, c as formatDateShort, t as CATEGORIES } from "./site_BpGwPZXI.mjs";
import { t as $$Img } from "./Img_CmNjfI79.mjs";
//#region src/pages/search.astro
var search_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Search,
	file: () => $$file,
	url: () => $$url
});
var $$Search = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("posts")).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
	const index = posts.map((p) => ({
		id: p.id,
		t: p.data.title,
		d: p.data.description,
		c: p.data.category,
		g: (p.data.tags ?? []).join(" ")
	}));
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Search",
		"description": "Search every story in the archive by title, room or tag.",
		"noindex": true,
		"data-astro-cid-wp2l4cmv": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="wrap py-12 lg:py-16" data-astro-cid-wp2l4cmv><div class="mx-auto max-w-2xl text-center" data-astro-cid-wp2l4cmv><p class="eyebrow-muted" data-astro-cid-wp2l4cmv>The archive</p><h1 class="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl" data-astro-cid-wp2l4cmv>Search</h1><p class="mt-4 text-ink-60" data-astro-cid-wp2l4cmv>${posts.length} stories across ${CATEGORIES.length} rooms. Start typing to filter.</p><div class="relative mt-8" data-astro-cid-wp2l4cmv><svg class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-20" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true" data-astro-cid-wp2l4cmv><circle cx="11" cy="11" r="7" data-astro-cid-wp2l4cmv></circle><path d="m20 20-3.5-3.5" data-astro-cid-wp2l4cmv></path></svg><label for="q" class="sr-only" data-astro-cid-wp2l4cmv>Search stories</label><input id="q" type="search" autocomplete="off" placeholder="Try “small bedroom”, “shelving”, “terracotta”…" class="field py-4 pl-12 text-center text-lg" data-astro-cid-wp2l4cmv></div><div class="mt-6 flex flex-wrap justify-center gap-2" data-astro-cid-wp2l4cmv><button type="button" data-filter="" class="chip is-active" data-astro-cid-wp2l4cmv>All</button>${CATEGORIES.map((c) => renderTemplate`<button type="button"${addAttribute(c.slug, "data-filter")} class="chip" data-astro-cid-wp2l4cmv>${c.name}</button>`)}</div></div><p id="count" class="mt-12 border-b border-rule pb-4 text-eyebrow font-semibold uppercase text-ink-40" aria-live="polite" data-astro-cid-wp2l4cmv>${posts.length} stories</p><div id="results" class="mt-10 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-wp2l4cmv>${posts.map((post) => renderTemplate`<article class="result group"${addAttribute(post.id, "data-id")}${addAttribute(post.data.category, "data-cat")} data-astro-cid-wp2l4cmv><a${addAttribute(`/post/${post.id}/`, "href")} class="block" data-astro-cid-wp2l4cmv><div class="frame aspect-[4/5]" data-astro-cid-wp2l4cmv>${renderComponent($$result, "Img", $$Img, {
		"src": post.data.heroImage,
		"alt": post.data.title,
		"width": 640,
		"height": 800,
		"sizes": "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw",
		"data-astro-cid-wp2l4cmv": true
	})}</div><p class="eyebrow mt-5" data-astro-cid-wp2l4cmv>${categoryName(post.data.category)}</p><h2 class="mt-2.5 font-display text-[1.3rem] leading-[1.25] text-ink transition-colors group-hover:text-clay" data-astro-cid-wp2l4cmv>${post.data.title}</h2><p class="clamp-2 mt-2.5 text-[0.9375rem] leading-relaxed text-ink-60" data-astro-cid-wp2l4cmv>${post.data.description}</p><p class="mt-3.5 text-xs text-ink-40" data-astro-cid-wp2l4cmv>${formatDateShort(post.data.publishDate)}</p></a></article>`)}</div><p id="empty" class="hidden py-20 text-center" data-astro-cid-wp2l4cmv><span class="block font-display text-2xl text-ink" data-astro-cid-wp2l4cmv>No stories match that.</span><span class="mt-3 block text-ink-60" data-astro-cid-wp2l4cmv>Try a broader word, or browse a room from the menu.</span></p></div>` })}<script>(function(){${defineScriptVars({ index })}
  (function () {
    var input = document.getElementById('q');
    var count = document.getElementById('count');
    var empty = document.getElementById('empty');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.result'));
    var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));

    var haystack = {};
    index.forEach(function (item) {
      haystack[item.id] = (item.t + ' ' + item.d + ' ' + item.c + ' ' + item.g).toLowerCase();
    });

    var query = '';
    var cat = '';

    function apply() {
      var terms = query.split(/\\s+/).filter(Boolean);
      var visible = 0;

      cards.forEach(function (card) {
        var text = haystack[card.dataset.id] || '';
        var matchesCat = !cat || card.dataset.cat === cat;
        var matchesText = terms.every(function (t) {
          return text.indexOf(t) !== -1;
        });
        var show = matchesCat && matchesText;
        card.hidden = !show;
        if (show) visible++;
      });

      count.textContent = visible + (visible === 1 ? ' story' : ' stories');
      empty.classList.toggle('hidden', visible !== 0);
    }

    input.addEventListener('input', function () {
      query = input.value.trim().toLowerCase();
      apply();
    });

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.classList.remove('is-active');
        });
        chip.classList.add('is-active');
        cat = chip.dataset.filter;
        apply();
      });
    });

    // Support /search/?q=term links
    var initial = new URLSearchParams(location.search).get('q');
    if (initial) {
      input.value = initial;
      query = initial.trim().toLowerCase();
      apply();
    }
  })();
})();<\/script>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/search.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/search.astro";
var $$url = "/search/";
//#endregion
//#region \0virtual:astro:page:src/pages/search@_@astro
var page = () => search_exports;
//#endregion
export { page };
