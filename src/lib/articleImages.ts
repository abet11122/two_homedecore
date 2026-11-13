import imageData from '../data/article-images.json';
import unsplashCredits from '../data/unsplash-credits.json';

interface ArticleImage {
  width: number;
  height: number;
  srcset: string;
  alt: string;
  photographer: string;
  sourceUrl: string;
  licenseUrl: string;
}

const images: Record<string, ArticleImage> = imageData;

/** Locally hosted editorial photos, including responsive sizes and credits. */
export function articleImage(src: string): ArticleImage | undefined {
  return images[src];
}

/**
 * Photographer credits for Unsplash heroes, keyed by the bare photo id the
 * posts use ("photo-1600210492486-724fe5c67fb0").
 *
 * The CDN id cannot be turned back into a photographer without the Unsplash
 * API, so this map is filled by hand: open the photo on unsplash.com, copy
 * the photographer's name and the photo page URL, and add
 *   "photo-…": { "photographer": "Name", "sourceUrl": "https://unsplash.com/photos/…" }
 * Any id not listed here is still credited, to Unsplash itself.
 */
const unsplash: Record<string, { photographer: string; sourceUrl: string }> = unsplashCredits;

export interface PhotoCredit {
  label: string;
  href?: string;
}

/** The visible credit line for an image, or undefined for an own photo with no record. */
export function photoCredit(src: string): PhotoCredit | undefined {
  const local = images[src];
  if (local) return { label: `Photo: ${local.photographer}`, href: local.sourceUrl || undefined };
  if (src.startsWith('photo-')) {
    const known = unsplash[src];
    return known
      ? { label: `Photo: ${known.photographer} / Unsplash`, href: known.sourceUrl }
      : { label: 'Photo: Unsplash', href: 'https://unsplash.com/' };
  }
  return undefined;
}
