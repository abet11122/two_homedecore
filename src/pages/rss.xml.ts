import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, categoryName } from '../site';
import type { APIContext } from 'astro';

/**
 * Full-archive feed at /rss.xml.
 *
 * Feeds are still how aggregators, Pinterest's auto-publish and most
 * newsletter tools discover new posts, and the <link rel="alternate"> in
 * every page head points here.
 */
export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/post/${post.id}/`,
      categories: [categoryName(post.data.category), ...(post.data.tags ?? [])],
      author: SITE.author,
    })),
    customData: `<language>${SITE.lang}-us</language>
<copyright>© ${new Date().getFullYear()} ${SITE.name}</copyright>`,
  });
}
