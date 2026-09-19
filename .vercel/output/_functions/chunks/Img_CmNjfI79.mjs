import { O as renderTemplate, j as addAttribute, k as maybeRenderHead, z as createAstro } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
//#endregion
//#region src/lib/articleImages.ts
var images = {
	"/images/posts/small-boys-bedroom-ideas/hero.webp": {
		"width": 1200,
		"height": 801,
		"srcset": "/images/posts/small-boys-bedroom-ideas/hero-480.webp 480w, /images/posts/small-boys-bedroom-ideas/hero-960.webp 960w, /images/posts/small-boys-bedroom-ideas/hero.webp 1200w",
		"alt": "Pale blue bunk bed with under-bed drawers, open shelves, and a desk beside a bright window.",
		"photographer": "Max Vakhtbovych",
		"sourceUrl": "https://www.pexels.com/photo/child-bedroom-interior-with-bed-and-shelves-7031881/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-boys-bedroom-ideas/pin.webp": {
		"width": 1e3,
		"height": 1500,
		"srcset": "/images/posts/small-boys-bedroom-ideas/pin.webp 1000w",
		"alt": "Pale blue bunk bed with under-bed drawers, open shelves, and a desk beside a bright window.",
		"photographer": "Max Vakhtbovych",
		"sourceUrl": "https://www.pexels.com/photo/child-bedroom-interior-with-bed-and-shelves-7031881/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-boys-bedroom-ideas/study-corner.webp": {
		"width": 1200,
		"height": 801,
		"srcset": "/images/posts/small-boys-bedroom-ideas/study-corner-480.webp 480w, /images/posts/small-boys-bedroom-ideas/study-corner-960.webp 960w, /images/posts/small-boys-bedroom-ideas/study-corner.webp 1200w",
		"alt": "Small wooden desk with white chairs and a colorful drawing board beside a window.",
		"photographer": "Stephen Andrews",
		"sourceUrl": "https://www.pexels.com/photo/children-desk-at-home-9328035/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-boys-bedroom-ideas/toy-storage.webp": {
		"width": 1200,
		"height": 1800,
		"srcset": "/images/posts/small-boys-bedroom-ideas/toy-storage-480.webp 480w, /images/posts/small-boys-bedroom-ideas/toy-storage-960.webp 960w, /images/posts/small-boys-bedroom-ideas/toy-storage.webp 1200w",
		"alt": "Wooden animal toys and colorful blocks beside a woven basket.",
		"photographer": "cottonbro studio",
		"sourceUrl": "https://www.pexels.com/photo/brown-wicker-basket-near-colorful-blocks-3661240/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-boys-bedroom-ideas/reading-corner.webp": {
		"width": 1440,
		"height": 960,
		"srcset": "/images/posts/small-boys-bedroom-ideas/reading-corner-480.webp 480w, /images/posts/small-boys-bedroom-ideas/reading-corner-960.webp 960w, /images/posts/small-boys-bedroom-ideas/reading-corner.webp 1440w",
		"alt": "White play tent and floor cushions beside a wooden bunk bed.",
		"photographer": "Curtis Adams",
		"sourceUrl": "https://www.pexels.com/photo/children-bedroom-with-bunk-beds-5008397/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-bathroom-organization-ideas/hero.webp": {
		"width": 1440,
		"height": 960,
		"srcset": "/images/posts/small-bathroom-organization-ideas/hero-480.webp 480w, /images/posts/small-bathroom-organization-ideas/hero-960.webp 960w, /images/posts/small-bathroom-organization-ideas/hero.webp 1440w",
		"alt": "Built-in bathroom shelves holding folded towels and baskets beside a white tiled bathtub.",
		"photographer": "Curtis Adams",
		"sourceUrl": "https://www.pexels.com/photo/modern-bathroom-with-shower-and-shelving-36777570/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-bathroom-organization-ideas/pin.webp": {
		"width": 1e3,
		"height": 1500,
		"srcset": "/images/posts/small-bathroom-organization-ideas/pin.webp 1000w",
		"alt": "Built-in bathroom shelves holding folded towels and baskets beside a white tiled bathtub.",
		"photographer": "Curtis Adams",
		"sourceUrl": "https://www.pexels.com/photo/modern-bathroom-with-shower-and-shelving-36777570/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-bathroom-organization-ideas/storage-baskets.webp": {
		"width": 1440,
		"height": 2160,
		"srcset": "/images/posts/small-bathroom-organization-ideas/storage-baskets-480.webp 480w, /images/posts/small-bathroom-organization-ideas/storage-baskets-960.webp 960w, /images/posts/small-bathroom-organization-ideas/storage-baskets.webp 1440w",
		"alt": "Two woven baskets with white towels on a bathroom cabinet.",
		"photographer": "Kader D. Kahraman",
		"sourceUrl": "https://www.pexels.com/photo/elegant-wicker-baskets-in-modern-bathroom-decor-34667272/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-bathroom-organization-ideas/counter-tray.webp": {
		"width": 1440,
		"height": 2160,
		"srcset": "/images/posts/small-bathroom-organization-ideas/counter-tray-480.webp 480w, /images/posts/small-bathroom-organization-ideas/counter-tray-960.webp 960w, /images/posts/small-bathroom-organization-ideas/counter-tray.webp 1440w",
		"alt": "Glass soap dispenser and toiletries on a wooden tray beside a white sink and brass faucet.",
		"photographer": "Kaboompics",
		"sourceUrl": "https://www.pexels.com/photo/set-of-stylish-cosmetic-products-placed-near-sink-in-bathroom-4239017/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/small-bathroom-organization-ideas/rolled-towels.webp": {
		"width": 1440,
		"height": 960,
		"srcset": "/images/posts/small-bathroom-organization-ideas/rolled-towels-480.webp 480w, /images/posts/small-bathroom-organization-ideas/rolled-towels-960.webp 960w, /images/posts/small-bathroom-organization-ideas/rolled-towels.webp 1440w",
		"alt": "White towels rolled neatly inside a woven basket.",
		"photographer": "Lum3n",
		"sourceUrl": "https://www.pexels.com/photo/white-textile-lot-282892/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/fall-living-room-decor-ideas/hero.webp": {
		"width": 1e3,
		"height": 667,
		"srcset": "/images/posts/fall-living-room-decor-ideas/hero-480.webp 480w, /images/posts/fall-living-room-decor-ideas/hero-960.webp 960w, /images/posts/fall-living-room-decor-ideas/hero.webp 1000w",
		"alt": "Textured neutral sofa beside a wooden side table and floor lamp in warm golden light.",
		"photographer": "Josh Sorenson",
		"sourceUrl": "https://unsplash.com/photos/a-comfortable-sofa-bathed-in-warm-lamp-light-Pb-W4P3jzS0",
		"licenseUrl": "https://unsplash.com/license"
	},
	"/images/posts/fall-living-room-decor-ideas/pin.webp": {
		"width": 1e3,
		"height": 1500,
		"srcset": "/images/posts/fall-living-room-decor-ideas/pin.webp 1000w",
		"alt": "Textured neutral sofa beside a wooden side table and floor lamp in warm golden light.",
		"photographer": "Josh Sorenson",
		"sourceUrl": "https://unsplash.com/photos/a-comfortable-sofa-bathed-in-warm-lamp-light-Pb-W4P3jzS0",
		"licenseUrl": "https://unsplash.com/license"
	},
	"/images/posts/fall-living-room-decor-ideas/autumn-details.webp": {
		"width": 1e3,
		"height": 667,
		"srcset": "/images/posts/fall-living-room-decor-ideas/autumn-details-480.webp 480w, /images/posts/fall-living-room-decor-ideas/autumn-details-960.webp 960w, /images/posts/fall-living-room-decor-ideas/autumn-details.webp 1000w",
		"alt": "Amber pumpkin-shaped candle beside a small white pumpkin and autumn greenery.",
		"photographer": "Heather Newsom",
		"sourceUrl": "https://unsplash.com/photos/lit-candle-in-pumpkin-shaped-glass-with-autumn-decor-DavzbD0IQB8",
		"licenseUrl": "https://unsplash.com/license"
	},
	"/images/posts/fall-living-room-decor-ideas/woven-blanket-basket.webp": {
		"width": 1e3,
		"height": 667,
		"srcset": "/images/posts/fall-living-room-decor-ideas/woven-blanket-basket-480.webp 480w, /images/posts/fall-living-room-decor-ideas/woven-blanket-basket-960.webp 960w, /images/posts/fall-living-room-decor-ideas/woven-blanket-basket.webp 1000w",
		"alt": "Green and blue patterned blankets folded in a woven basket beside a chair.",
		"photographer": "Jessica Lewis",
		"sourceUrl": "https://www.pexels.com/photo/soft-blankets-in-a-wicker-basket-10880520/",
		"licenseUrl": "https://www.pexels.com/license/"
	},
	"/images/posts/fall-living-room-decor-ideas/warm-reading-corner.webp": {
		"width": 1e3,
		"height": 1500,
		"srcset": "/images/posts/fall-living-room-decor-ideas/warm-reading-corner-480.webp 480w, /images/posts/fall-living-room-decor-ideas/warm-reading-corner-960.webp 960w, /images/posts/fall-living-room-decor-ideas/warm-reading-corner.webp 1000w",
		"alt": "Rust-colored armchair beneath a floor lamp beside a leafy plant and exposed brick wall.",
		"photographer": "Tuğçe Açıkyürek",
		"sourceUrl": "https://www.pexels.com/photo/lamp-and-armchair-in-corner-16751828/",
		"licenseUrl": "https://www.pexels.com/license/"
	}
};
/** Locally hosted editorial photos, including responsive sizes and credits. */
function articleImage(src) {
	return images[src];
}
//#endregion
//#region src/components/Img.astro
createAstro("https://smallcozyhome.store");
var $$Img = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Img;
	const { src, alt, width, height, sizes = "100vw", loading = "lazy", fetchpriority = "auto", class: className = "" } = Astro.props;
	const isUnsplashId = src.startsWith("photo-");
	const localImage = articleImage(src);
	const ratio = height / width;
	function unsplash(id, w) {
		return `https://images.unsplash.com/${id}?w=${w}&h=${Math.round(w * ratio)}&fit=crop&crop=entropy&auto=format&q=72`;
	}
	const widths = [
		240,
		360,
		480,
		720,
		960,
		1280,
		1600
	].filter((w) => w <= width * 2);
	if (widths.length === 0) widths.push(width);
	const srcset = isUnsplashId ? widths.map((w) => `${unsplash(src, w)} ${w}w`).join(", ") : localImage?.srcset;
	const finalSrc = isUnsplashId ? unsplash(src, Math.min(width * 2, 1600)) : src;
	return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(finalSrc, "src")}${addAttribute(srcset, "srcset")}${addAttribute(srcset ? sizes : void 0, "sizes")}${addAttribute(alt === "" ? "" : localImage?.alt ?? alt, "alt")}${addAttribute(localImage?.width ?? width, "width")}${addAttribute(localImage?.height ?? height, "height")}${addAttribute(loading, "loading")}${addAttribute(loading === "eager" ? "sync" : "async", "decoding")}${addAttribute(fetchpriority, "fetchpriority")}${addAttribute(className, "class")}>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/components/Img.astro", void 0);
//#endregion
export { $$Img as t };
