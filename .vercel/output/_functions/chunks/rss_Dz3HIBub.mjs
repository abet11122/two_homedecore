import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getCollection } from "./_astro_content_B2Z_sDMA.mjs";
import { a as categoryName, i as SITE } from "./site_BpGwPZXI.mjs";
import rss from "@astrojs/rss";
//#region src/pages/rss.xml.ts
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
/**
* Full-archive feed at /rss.xml.
*
* Feeds are still how aggregators, Pinterest's auto-publish and most
* newsletter tools discover new posts, and the <link rel="alternate"> in
* every page head points here.
*/
async function GET(context) {
	const posts = (await getCollection("posts")).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
	return rss({
		title: `${SITE.name} — ${SITE.tagline}`,
		description: SITE.description,
		site: context.site ?? SITE.url,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `/post/${post.id}/`,
			categories: [categoryName(post.data.category), ...post.data.tags ?? []],
			author: SITE.author
		})),
		customData: `<language>${SITE.lang}-us</language>
<copyright>© ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.name}</copyright>`
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@ts
var page = () => rss_xml_exports;
//#endregion
export { page };
