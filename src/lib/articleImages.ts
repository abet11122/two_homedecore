import imageData from '../data/article-images.json';

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
