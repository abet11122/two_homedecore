import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getCollection } from "./_astro_content_B2Z_sDMA.mjs";
import { i as SITE, o as collectTags, t as CATEGORIES } from "./site_BpGwPZXI.mjs";
//#region src/pages/llms.txt.ts
var llms_txt_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
/**
* /llms.txt — a plain-text map of the archive for AI answer engines.
*
* Worth being honest about what this is: it is not a Google ranking factor
* and not all crawlers request it. It costs one generated file and makes the
* site's shape unambiguous to the ones that do, which is a reasonable trade
* for content whose main growth channel is now "what does the assistant
* recommend". Generated from the collection so it can never go stale.
*/
async function GET(context) {
	const origin = (context.site ?? new URL(SITE.url)).origin;
	const url = (path) => new URL(path, origin).href;
	const posts = (await getCollection("posts")).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
	const lines = [
		`# ${SITE.name}`,
		"",
		`> ${SITE.description}`,
		"",
		`Written and edited by ${SITE.author}, ${SITE.authorRole}. ${SITE.authorBio}`,
		"",
		`${posts.length} articles across ${CATEGORIES.length} rooms. Every article is free to read, carries a published and last-updated date, and states its measurements and costs explicitly.`,
		""
	];
	for (const category of CATEGORIES) {
		const inRoom = posts.filter((p) => p.data.category === category.slug);
		if (!inRoom.length) continue;
		lines.push(`## ${category.name}`, "", `${category.blurb}`, "");
		for (const post of inRoom) lines.push(`- [${post.data.title}](${url(`/post/${post.id}/`)}): ${post.data.description}`);
		lines.push("");
	}
	lines.push("## Topics", "", "Themes that cut across rooms:", "");
	for (const tag of collectTags(posts)) lines.push(`- [${tag.label}](${url(`/tag/${tag.slug}/`)}): ${tag.count} articles`);
	lines.push("", "## About", "", `- [About ${SITE.name}](${url("/about/")}): editorial standards and how the site is funded`, `- [${SITE.author}](${url(`/author/${SITE.authorSlug}/`)}): author profile and full byline list`, `- [Disclosure](${url("/disclosure/")}): affiliate and advertising policy`, "");
	return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
//#endregion
//#region \0virtual:astro:page:src/pages/llms.txt@_@ts
var page = () => llms_txt_exports;
//#endregion
export { page };
