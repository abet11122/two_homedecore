/**
 * Central site configuration.
 * Edit this file to rebrand — everything else reads from here.
 */

export const SITE = {
  name: 'smallcozyhome.store',
  tagline: 'Big ideas for small, cozy spaces',
  description:
    'Small Cozy Home is your guide to making every square foot count — room styling, storage ideas, DIY projects and cozy decor for real homes of every size.',
  url: 'https://www.smallcozyhome.store',
  author: 'Small Cozy Home',
  authorRole: 'Publisher',
  authorBio:
    'Small Cozy Home publishes practical interior styling and organization guides for compact homes.',
  authorAvatar: '',
  pinterest: '',
  instagram: '',
  twitter: '',
  email: 'hello@smallcozyhome.store',
  /**
   * The real person behind the site. Shown in the author box, on the About
   * page and as the article author in structured data. Replace every
   * [PLACEHOLDER] before deploying — reviewers look for a named human.
   */
  person: {
    name: 'M Mubashar Shahzad',
    role: 'Founder & editor',
    /** Path to your own headshot, e.g. '/images/about/me.webp'. Leave '' to hide. */
    photo: '/images/about/mubashar.webp',
    bio: "I write and publish every guide on this site myself. They are general references for people decorating their own homes rather than the record of a professional practice, and no design training or trade qualification is claimed.",
    /**
     * Paragraphs for "Who runs this site" on the About page. Any entry still
     * starting with "[" is treated as unfilled and is not rendered.
     *
     * Adapted from the author copy already published on the sister site, so
     * every claim here is the owner's own and none of it is invented. It
     * deliberately describes how the guides are written rather than asserting
     * lived experience that has not been established — an unverifiable
     * backstory is worth less to a reviewer than a verifiable method.
     */
    story: [
      'That is a real name rather than a house byline, but it is not a claim of professional qualification. I am not a designer, I hold no trade credential, and nothing here should be read as one. These are guides for people decorating their own homes.',
      'Each guide is written for a single question and edited to answer it in the opening lines, before any background. Where a measurement, spacing or quantity appears it is there because it changes the result — the 60 cm a dining chair needs behind it to push back and stand, the rug size that keeps the furniture legs on, the 2700K bulb that stops a bathroom reading as clinical. Guides are structured around their own subject rather than a shared template, so two articles here should not read like the same article with different nouns.',
      'A first-hand project, price, review or quotation needs a traceable source before it is presented as one, so invented personal experience and invented qualifications do not appear here. Where a guide has been rewritten, an updated date is shown alongside the original date it was published.',
    ],
  },
  /** AdSense publisher ID (matches public/ads.txt). Used for the site-verification meta tag. */
  adsenseClient: 'ca-pub-8497285724891966',
  /**
   * Ad unit IDs, one per placement. AdSense only issues these once the site
   * is approved (Ads -> By ad unit -> Display ads). Until then they stay
   * empty and no manual unit renders. A PUBLIC_ADSENSE_SLOT_* env var still
   * wins if set, but these mean Vercel needs no environment variables —
   * .env is gitignored and never reaches a deploy.
   */
  adsenseSlots: {
    'in-article-top': '',
    'in-article-mid': '',
    'before-related': '',
    feed: '',
    anchor: '',
    sidebar: '',
  } as Record<string, string>,
  /**
   * Whether a consent message is live in AdSense (Privacy & messaging ->
   * GDPR). While this is false, adsbygoogle.js never loads, so the only
   * AdSense marker on the page is the verification meta tag.
   *
   * Google's site review looks for the publisher ID on the page via the ads
   * code, and Google's own consent message is delivered BY that same script
   * — so this gate has to open before either can happen. Set up the message
   * in AdSense first, then set this to true.
   *
   * Consent Mode already defaults ad_storage and ad_personalization to
   * denied in Layout.astro, so loading the script does not grant consent.
   */
  consentMessageConfigured: true,
  /**
   * Optional form endpoint (e.g. a Formspree URL) for the contact form.
   * When empty, the form opens the visitor's email app instead.
   */
  contactFormEndpoint: '',
  /** Paste your Pinterest domain-verification code here (Settings → Claim). */
  pinterestVerification: '',
  /** Paste your Google Search Console verification code here. */
  googleVerification: 'ZtIbCUoxgl0O7sXwcRjCEO-6a2PBnsdhgGXnFHOVOgA',
  /** Paste your Monetag site-verification code here (Sites -> Verify). */
  monetagVerification: '48b54e9aa46ea81d89e424bb333eedfa',
  /**
   * Monetag Multitag zone. One tag serves popunders, interstitials and
   * push, and which of them appears is decided on Monetag's side, not
   * here — so this is the kill switch: clear monetagZone, redeploy, and
   * every Monetag format stops at once. Worth knowing where this line is
   * if AdSense ever asks about the ads on the page.
   */
  monetagZone: '',
  /** Delivery host for the tag above. Monetag rotates these; copy whatever
      is in the snippet they hand you rather than reusing an old one. */
  monetagTagSrc: 'https://quge5.com/88/tag.min.js',
  /**
   * Monetag Direct Link. Unlike the Multitag above this loads no script
   * and injects nothing — it is only a URL behind a link, which is why it
   * is the one Monetag format that cannot affect AdSense or page speed.
   *
   * It is rendered in the footer, labelled, and carries rel="sponsored".
   * Google treats an unmarked monetised link as a link scheme, so if this
   * is ever moved, the label and the rel go with it. Never wire it to open
   * on a page click or as a popunder: that is the behaviour that makes the
   * other formats a problem.
   */
  // Paused while the AdSense review is open: the offers behind it are
  // Monetag's choice, not ours. Restore with 'https://uplcm.com/4/12207174'.
  monetagDirectLink: '',
  /** Slug for the author hub page at /author/<slug>/. */
  authorSlug: 'editorial-team',
  /** Verified public profiles for the publisher. */
  authorLinks: [] as string[],
  locale: 'en_US',
  lang: 'en',
  /**
   * Square mark used for Organization.logo in structured data. Must be a
   * raster of at least 112x112; Google does not accept SVG logos.
   */
  logo: '/logo.png',
  logoSize: 512,
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
      'Kitchen organization and styling for compact homes: open shelves, clearer countertops, and ideas that fit around everyday cooking.',
    image: 'photo-1600489000022-c2086d79f9d4',
    primary: true,
  },
  {
    slug: 'bathroom',
    name: 'Bathroom',
    blurb:
      'Small bathroom storage and organization for daily-use surfaces, awkward gaps, and the items that need to stay within reach.',
    image: 'photo-1763485956235-0f9a1217f58c',
    primary: true,
  },
  {
    slug: 'entryway',
    name: 'Entryway',
    blurb:
      'Entryway table styling and seasonal door decor for compact entrances and hallways.',
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
      'Plan a small home project before buying or drilling: measure the space, check the wall, and follow the product instructions.',
    image: 'photo-1595351298020-038700609878',
  },
  {
    slug: 'outdoor',
    name: 'Outdoor',
    blurb:
      'Balcony styling for compact spaces and seasonal outdoor decor suited to small yards.',
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
      'Budget apartment decor and removable seasonal updates for renters working within their lease terms.',
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

/** Keep scheduled articles out of every public archive until their publish date. */
export function isPublishedPost(post: { data: { publishDate: Date } }): boolean {
  return post.data.publishDate.getTime() <= Date.now();
}

/** Posts that belong in site-wide discovery surfaces such as archives and search. */
export function isVisiblePost(post: { data: { publishDate: Date; excludeFromListings?: boolean; noindex?: boolean } }): boolean {
  return isPublishedPost(post) && !post.data.excludeFromListings && !post.data.noindex;
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

export const MIN_INDEXABLE_ARCHIVE_POSTS = 4;

/**
 * Every distinct tag across the archive, most-used first.
 * `minCount` keeps small clusters from creating thin archive pages; those
 * tags remain plain text on posts until enough related content exists.
 */
export function collectTags(
  posts: Array<{ data: { tags?: string[] } }>,
  minCount = MIN_INDEXABLE_ARCHIVE_POSTS
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
