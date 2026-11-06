import { getCollection } from 'astro:content';
import { isVisiblePost } from '../site';

/**
 * How many idea cards the homepage ships in its own HTML.
 *
 * The grid used to render every published guide and then let client-side JS
 * hide all but nine of them, which cost 276 KB of HTML, 87 <img> elements and
 * 1.3s of layout work to show one screenful. The rest now arrive from
 * /partials/ideas/ once the page is idle, so filtering and "discover more"
 * still cover the whole library without paying for it up front.
 *
 * Eighteen rather than nine so a first "discover more" click is instant even
 * if the partial has not landed yet.
 */
export const IDEAS_INITIAL = 18;

/**
 * The homepage's view of the archive. Shared with the partial so both render
 * the same ordering off one definition — if these drifted apart the grid
 * would duplicate or drop cards at the seam.
 */
export async function homeIdeas() {
  const posts = (await getCollection('posts'))
    .filter(isVisiblePost)
    .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const featured =
    posts.find((p) => p.id === 'small-apartment-organization-ideas') ??
    posts.find((p) => p.data.featured && p.data.category !== 'seasonal') ??
    posts[0];

  const gridPosts = posts.filter((post) => post.id !== featured?.id);

  return { posts, featured, gridPosts };
}
