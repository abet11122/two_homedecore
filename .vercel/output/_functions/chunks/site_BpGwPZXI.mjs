//#region src/site.ts
/**
* Central site configuration.
* Edit this file to rebrand — everything else reads from here.
*/
var SITE = {
	name: "smallcozyhome.store",
	tagline: "Big ideas for small, cozy spaces",
	description: "Small Cozy Home is your guide to making every square foot count — room styling, storage ideas, DIY projects and cozy decor for real homes of every size.",
	url: "https://smallcozyhome.store",
	author: "Sophie Lane",
	authorRole: "Editor & Home Stylist",
	authorBio: "Sophie has spent a decade turning compact apartments and small houses into warm, intentional homes. She believes a cozy room is never about size — it is about the choices you make inside it.",
	authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&auto=format&q=70",
	pinterest: "https://pinterest.com/smallcozyhome",
	instagram: "https://instagram.com/smallcozyhome",
	email: "hello@smallcozyhome.store",
	/** Paste your Pinterest domain-verification code here (Settings → Claim). */
	pinterestVerification: "",
	/** Paste your Google Search Console verification code here. */
	googleVerification: "",
	/** Slug for the author hub page at /author/<slug>/. */
	authorSlug: "sophie-lane",
	/** Public profiles for the author — feeds Person.sameAs (E-E-A-T). */
	authorLinks: [],
	locale: "en_US",
	lang: "en",
	/** Square mark used for Organization.logo in structured data. */
	logo: "/favicon.svg",
	/** Twitter/X handle including the @, e.g. '@smallcozyhome'. Optional. */
	twitter: "@smallcozyhome"
};
var CATEGORIES = [
	{
		slug: "living-room",
		name: "Living Room",
		blurb: "The room that sets the tone for the whole house — layout, seating, light and the art of a room that works for both guests and Tuesday nights.",
		image: "photo-1600210492486-724fe5c67fb0",
		primary: true
	},
	{
		slug: "bedroom",
		name: "Bedroom",
		blurb: "Rooms built for rest. Layered bedding, quiet colour, low light and the small decisions that make a bedroom feel like a retreat.",
		image: "photo-1595526114035-0d45ed16cfbf",
		primary: true
	},
	{
		slug: "kitchen",
		name: "Kitchen",
		blurb: "Hard-working rooms that still deserve to be beautiful. Open shelving, islands, surfaces and storage that survives real cooking.",
		image: "photo-1600489000022-c2086d79f9d4",
		primary: true
	},
	{
		slug: "bathroom",
		name: "Bathroom",
		blurb: "The smallest room and the hardest to get right. Storage that fits, lighting that flatters, and changes that work even when you rent.",
		image: "photo-1763485956235-0f9a1217f58c",
		primary: true
	},
	{
		slug: "entryway",
		name: "Entryway",
		blurb: "The first three feet of the house and the hardest-working. Storage, layout and styling for entries, hallways and mudrooms of every size.",
		image: "photo-1765766599670-a625d0fef258",
		primary: true
	},
	{
		slug: "small-spaces",
		name: "Small Spaces",
		blurb: "Studios, box rooms and awkward corners. How to zone, scale and edit so a small home reads as intentional rather than cramped.",
		image: "photo-1502672023488-70e25813eb80",
		primary: true
	},
	{
		slug: "home-office",
		name: "Home Office",
		blurb: "Workspaces built into corners, closets and the edges of other rooms — layouts, lighting and storage for a desk that still feels like part of the house.",
		image: "photo-1591382696684-38c427c7547a"
	},
	{
		slug: "diy-decor",
		name: "DIY Decor",
		blurb: "Projects worth the weekend. Handmade pieces that look considered, not crafty — with honest costs and realistic timelines.",
		image: "photo-1595351298020-038700609878"
	},
	{
		slug: "outdoor",
		name: "Outdoor",
		blurb: "Balconies, patios and back gardens. The dimensions, bases and lighting that turn leftover outdoor space into somewhere you actually sit.",
		image: "photo-1693643449872-67f203f99560"
	},
	{
		slug: "seasonal",
		name: "Seasonal",
		blurb: "Decorating with the calendar. Mantels, tablescapes and light — how to mark the season without redecorating the whole house.",
		image: "photo-1726090401458-7abb00f7450c"
	},
	{
		slug: "renter",
		name: "Renter",
		blurb: "Everything that comes off the wall again. Reversible upgrades, deposit-safe fixes and the changes that move house with you.",
		image: "photo-1631510390389-c1e4fb20ff31"
	}
];
/** Categories shown inline in the header; the rest sit under "More". */
var PRIMARY_CATEGORIES = CATEGORIES.filter((c) => c.primary);
var SECONDARY_CATEGORIES = CATEGORIES.filter((c) => !c.primary);
function categoryBySlug(slug) {
	return CATEGORIES.find((c) => c.slug === slug);
}
function categoryName(slug) {
	return categoryBySlug(slug)?.name ?? slug.replace(/-/g, " ");
}
/** Rough reading time from a Markdown body. */
function readingTime(body) {
	const words = body.replace(/<[^>]*>/g, " ").replace(/!\[[^\]]*\]\([^)]*\)/g, " ").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim().split(/\s+/).length;
	return Math.max(1, Math.round(words / 220));
}
function formatDate(date) {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC"
	});
}
function formatDateShort(date) {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: "UTC"
	});
}
/** Words that stay lowercase inside a tag label unless they lead it. */
var MINOR_WORDS = /* @__PURE__ */ new Set([
	"and",
	"the",
	"of",
	"for",
	"in",
	"to",
	"a"
]);
/** Tags whose natural casing a title-caser would get wrong. */
var TAG_LABEL_OVERRIDES = {
	diy: "DIY",
	"diy-decor": "DIY Decor",
	"peel-and-stick": "Peel-and-Stick",
	"renter-friendly": "Renter-Friendly"
};
function tagSlug(tag) {
	return tag.trim().toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function tagLabel(slug) {
	if (TAG_LABEL_OVERRIDES[slug]) return TAG_LABEL_OVERRIDES[slug];
	return slug.split("-").map((word, i) => i > 0 && MINOR_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
/**
* Every distinct tag across the archive, most-used first.
* `minCount` drops one-off tags that would only ever build a single-post
* page — thin pages Google reads as low value, so they are left unbuilt
* and simply render as plain text on the post.
*/
function collectTags(posts, minCount = 2) {
	const counts = /* @__PURE__ */ new Map();
	for (const post of posts) for (const slug of new Set((post.data.tags ?? []).map(tagSlug))) {
		if (!slug) continue;
		counts.set(slug, (counts.get(slug) ?? 0) + 1);
	}
	return [...counts.entries()].filter(([, count]) => count >= minCount).map(([slug, count]) => ({
		slug,
		label: tagLabel(slug),
		count
	})).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}
//#endregion
export { categoryName as a, formatDateShort as c, SITE as i, readingTime as l, PRIMARY_CATEGORIES as n, collectTags as o, SECONDARY_CATEGORIES as r, formatDate as s, CATEGORIES as t };
