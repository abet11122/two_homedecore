import { getCollection } from 'astro:content';
import { CATEGORIES, isVisiblePost, type Category } from '../site';

/** Smallest archive worth a menu link. Archives below MIN_INDEXABLE_ARCHIVE_POSTS stay noindexed. */
const MIN_NAV_POSTS = 3;

/**
 * Categories with enough visible posts to be worth linking from navigation.
 * Thinner archives stay reachable by URL (and noindexed) but are not promoted,
 * so a visitor never clicks a menu item into a one-post page.
 */
export async function navCategories(): Promise<Category[]> {
  const posts = (await getCollection('posts')).filter(isVisiblePost);
  return CATEGORIES.filter(
    (c) => posts.filter((p) => p.data.category === c.slug).length >= MIN_NAV_POSTS
  );
}
