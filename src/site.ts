/**
 * Central site configuration.
 * Edit this file to rebrand — everything else reads from here.
 */

export const SITE = {
  name: 'Hearth & Grain',
  tagline: 'Considered interiors for real homes',
  description:
    'An editorial guide to interiors: room-by-room design ideas, DIY projects and styling tips you can actually use.',
  // Interim: swap for your real domain once purchased — this is the only
  // place it needs to change (astro.config.mjs reads it from here).
  url: 'https://homedecore-neon.vercel.app',
  author: 'Elena Marsh',
  authorRole: 'Editor & Interior Stylist',
  authorBio:
    'Elena has spent twelve years styling homes and writing about them. She believes good rooms are built slowly, from things you actually love.',
  authorAvatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&auto=format&q=70',
  pinterest: 'https://pinterest.com/',
  instagram: 'https://instagram.com/',
  email: 'hello@yourdomain.com',
  /** Paste your Pinterest domain-verification code here (Settings → Claim). */
  pinterestVerification: '',
  /** Paste your Google Search Console verification code here. */
  googleVerification: '',
  /** Slug for the author hub page at /author/<slug>/. */
  authorSlug: 'elena-marsh',
  /** Public profiles for the author — feeds Person.sameAs (E-E-A-T). */
  authorLinks: [] as string[],
  locale: 'en_US',
  lang: 'en',
  /** Square mark used for Organization.logo in structured data. */
  logo: '/favicon.svg',
  /** Twitter/X handle including the @, e.g. '@hearthandgrain'. Optional. */
  twitter: '',
} as const;

export type CategorySlug =
  | 'living-room'
  | 'bedroom'
  | 'kitchen'
  | 'bathroom'
  | 'entryway'
  | 'small-spaces'
  | 'home-office'
  | 'diy-decor'
  | 'outdoor'
  | 'seasonal'
  | 'renter';

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
  image: string;
  /** Shown inline in the header nav. The rest live under the "More" menu. */
  primary?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    slug: 'living-room',
    name: 'Living Room',
    blurb:
      'The room that sets the tone for the whole house — layout, seating, light and the art of a room that works for both guests and Tuesday nights.',
    image: 'photo-1600210492486-724fe5c67fb0',
    primary: true,
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    blurb:
      'Rooms built for rest. Layered bedding, quiet colour, low light and the small decisions that make a bedroom feel like a retreat.',
    image: 'photo-1595526114035-0d45ed16cfbf',
    primary: true,
  },
  {
    slug: 'kitchen',
    name: 'Kitchen',
    blurb:
      'Hard-working rooms that still deserve to be beautiful. Open shelving, islands, surfaces and storage that survives real cooking.',
    image: 'photo-1600489000022-c2086d79f9d4',
    primary: true,
  },
  {
    slug: 'bathroom',
    name: 'Bathroom',
    blurb:
      'The smallest room and the hardest to get right. Storage that fits, lighting that flatters, and changes that work even when you rent.',
    image: 'photo-1763485956235-0f9a1217f58c',
    primary: true,
  },
  {
    slug: 'entryway',
    name: 'Entryway',
    blurb:
      'The first three feet of the house and the hardest-working. Storage, layout and styling for entries, hallways and mudrooms of every size.',
    image: 'photo-1765766599670-a625d0fef258',
    primary: true,
  },
  {
    slug: 'small-spaces',
    name: 'Small Spaces',
    blurb:
      'Studios, box rooms and awkward corners. How to zone, scale and edit so a small home reads as intentional rather than cramped.',
    image: 'photo-1502672023488-70e25813eb80',
    primary: true,
  },
  {
    slug: 'home-office',
    name: 'Home Office',
    blurb:
      'Workspaces built into corners, closets and the edges of other rooms — layouts, lighting and storage for a desk that still feels like part of the house.',
    image: 'photo-1591382696684-38c427c7547a',
  },
  {
    slug: 'diy-decor',
    name: 'DIY Decor',
    blurb:
      'Projects worth the weekend. Handmade pieces that look considered, not crafty — with honest costs and realistic timelines.',
    image: 'photo-1595351298020-038700609878',
  },
  {
    slug: 'outdoor',
    name: 'Outdoor',
    blurb:
      'Balconies, patios and back gardens. The dimensions, bases and lighting that turn leftover outdoor space into somewhere you actually sit.',
    image: 'photo-1693643449872-67f203f99560',
  },
  {
    slug: 'seasonal',
    name: 'Seasonal',
    blurb:
      'Decorating with the calendar. Mantels, tablescapes and light — how to mark the season without redecorating the whole house.',
    image: 'photo-1726090401458-7abb00f7450c',
  },
  {
    slug: 'renter',
    name: 'Renter',
    blurb:
      'Everything that comes off the wall again. Reversible upgrades, deposit-safe fixes and the changes that move house with you.',
    image: 'photo-1631510390389-c1e4fb20ff31',
  },
];

/** Categories shown inline in the header; the rest sit under "More". */
export const PRIMARY_CATEGORIES = CATEGORIES.filter((c) => c.primary);
export const SECONDARY_CATEGORIES = CATEGORIES.filter((c) => !c.primary);

export function categoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryName(slug: string): string {
  return categoryBySlug(slug)?.name ?? slug.replace(/-/g, ' ');
}

/** Rough reading time from a Markdown body. */
export function readingTime(body: string): number {
  const text = body
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/* ------------------------------------------------------------------
   Tags
   Frontmatter tags were authored by hand, so the same idea arrives in
   several spellings ("small spaces", "small-spaces", "Small Spaces").
   Everything is keyed off the slug so those collapse into one page,
   and the display label is derived from the slug rather than from
   whichever spelling happened to be written first.
------------------------------------------------------------------- */

/** Words that stay lowercase inside a tag label unless they lead it. */
const MINOR_WORDS = new Set(['and', 'the', 'of', 'for', 'in', 'to', 'a']);

/** Tags whose natural casing a title-caser would get wrong. */
const TAG_LABEL_OVERRIDES: Record<string, string> = {
  diy: 'DIY',
  'diy-decor': 'DIY Decor',
  'peel-and-stick': 'Peel-and-Stick',
  'renter-friendly': 'Renter-Friendly',
};

export function tagSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function tagLabel(slug: string): string {
  if (TAG_LABEL_OVERRIDES[slug]) return TAG_LABEL_OVERRIDES[slug];
  return slug
    .split('-')
    .map((word, i) =>
      i > 0 && MINOR_WORDS.has(word) ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(' ');
}

export interface TagSummary {
  slug: string;
  label: string;
  count: number;
}

/**
 * Every distinct tag across the archive, most-used first.
 * `minCount` drops one-off tags that would only ever build a single-post
 * page — thin pages Google reads as low value, so they are left unbuilt
 * and simply render as plain text on the post.
 */
export function collectTags(
  posts: Array<{ data: { tags?: string[] } }>,
  minCount = 2
): TagSummary[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    // A post can carry two spellings of the same tag; count it once.
    for (const slug of new Set((post.data.tags ?? []).map(tagSlug))) {
      if (!slug) continue;
      counts.set(slug, (counts.get(slug) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .filter(([, count]) => count >= minCount)
    .map(([slug, count]) => ({ slug, label: tagLabel(slug), count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Does this post carry the given tag, in any spelling? */
export function postHasTag(post: { data: { tags?: string[] } }, slug: string): boolean {
  return (post.data.tags ?? []).some((t) => tagSlug(t) === slug);
}

/** Body word count — reported in Article schema, which Google reads. */
export function wordCount(body: string): number {
  return body.trim().split(/\s+/).filter(Boolean).length;
}
