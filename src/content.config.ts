import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().max(90, 'Keep titles under 90 characters for search results'),
    description: z.string().min(50).max(200, 'Meta descriptions should stay under ~160 characters'),
    category: z.enum([
      'living-room',
      'bedroom',
      'kitchen',
      'small-spaces',
      'diy-decor',
      'seasonal',
      'entryway',
      'home-office',
      'bathroom',
      'outdoor',
      'renter',
    ]),
    tags: z.array(z.string()).default([]),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    /** Unsplash photo id ("photo-1600210…") or an absolute URL. Horizontal. */
    heroImage: z.string(),
    heroImageAlt: z.string().optional(),
    /** Vertical 2:3 image used for og:image and the Pinterest save button. */
    pinImage: z.string(),
    featured: z.boolean().default(false),
    affiliateDisclosure: z.boolean().default(false),
    /**
     * Scannable summary rendered above the article and read by AI answer
     * engines. 3-5 short lines; omit rather than pad.
     */
    keyTakeaways: z.array(z.string()).max(6).optional(),
    /**
     * Questions readers actually ask, answered in 40-60 words each.
     * Rendered as an accordion and emitted as FAQPage structured data,
     * which is what makes the page eligible for the People Also Ask block.
     */
    faqs: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { posts };
