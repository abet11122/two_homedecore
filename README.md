# Small Cozy Home

A static interiors publication built with **Astro 7** and **Tailwind CSS 3**. The project includes room guides, archive and search pages, and browser-based saved ideas.

Ships **zero JavaScript bundles** — the only scripts on the page are a handful of inline snippets totalling well under 2KB, plus the deferred AdSense and Pinterest tags.

---

## Quick start

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:4321`). Ads stay hidden unless the required advertising, placement, and consent settings are configured.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built site locally |

---

## AdSense configuration

**One place: `.env`.**

```
PUBLIC_ADSENSE_CLIENT_ID=
PUBLIC_ADSENSE_CMP_CONFIGURED=false
```

Ads are off unless the client ID, a content-surface permission, and the CMP flag are configured. Set `PUBLIC_ADSENSE_CMP_CONFIGURED=true` only after publishing and verifying a Google-certified consent message integrated with the IAB TCF where required. The code flag alone does not create user consent.

Optionally add the per-unit slot IDs (`PUBLIC_ADSENSE_SLOT_IN_ARTICLE_TOP` and friends) so each placement reports separately in AdSense.

### Where the ads sit

| Placement | Mobile | Desktop | Where |
|---|---|---|---|
| `feed` | 336×280 | 728×90 | Homepage and category pages, after the lead block |
| `in-article-top` | 336×280 | 728×90 | After the table of contents |
| `in-article-mid` | 336×280 | 336×280 | After the article body |
| `before-related` | 336×280 | 728×90 | Above the related-posts block |
| `anchor` | 320×50 | hidden | Sticky bottom bar, mobile only |

Every slot reserves its exact height in CSS **before** any script runs (`src/components/AdSlot.astro`), which is what holds CLS at zero. On mobile, `body` gets 60px of bottom padding so the sticky anchor never covers text.

To move or add a slot:

```astro
---
import AdSlot from '../components/AdSlot.astro';
---
<AdSlot placement="in-article-mid" class="my-12" />
```

### Publisher and policy pages

These pages are linked in the footer. Keep them accurate to the publisher's actual business, data practices, and content:

- `/about/` · `/contact/` · `/privacy-policy/` · `/disclosure/`

These pages need publisher review and may need jurisdiction-specific legal review.

---

## How to add a post

Create `src/content/posts/your-post-slug.md`. The filename becomes the URL: `/post/your-post-slug/`.

```markdown
---
title: "Your Headline Here"
description: "50–200 characters. Used for the meta description, the card excerpt and the article dek."
category: "living-room"
tags: ["tag-one", "tag-two"]
publishDate: 2026-09-01
updatedDate: 2026-09-04     # optional
heroImage: "photo-1600210492486-724fe5c67fb0"
pinImage: "photo-1616486338812-3dadae4b4ace"
featured: false
affiliateDisclosure: false
---

Your opening paragraph. This one gets a drop cap automatically, so make it count.

## A section heading

Level-2 headings are collected into the table of contents at the top of the
article, so the structure of your `##` headings *is* the article's navigation.

### A subheading

- Bullet lists get a small clay dash instead of a dot
- Numbered lists get serif numerals

> A blockquote renders as a large italic pull quote.

Link to another post with a normal Markdown link: [see this guide](/post/paint-colour-guide/).
```

Astro validates every field against a Zod schema (`src/content.config.ts`) at build time. A missing field or a typo'd category **fails the build with a clear message** rather than shipping broken.

### Frontmatter reference

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Under 90 characters (search results truncate past that) |
| `description` | yes | 50–200 characters; enforced |
| `category` | yes | One of: `living-room`, `bedroom`, `kitchen`, `small-spaces`, `diy-decor`, `seasonal` |
| `tags` | no | Array of strings. Any tag used by 2+ posts gets its own hub page at `/tag/<slug>/` and the label becomes a link |
| `publishDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | Shown in the byline and in the Article schema |
| `heroImage` | yes | **Horizontal.** Unsplash photo ID or absolute URL |
| `pinImage` | yes | **Vertical 2:3.** Becomes `og:image` and the Pinterest save target |
| `featured` | no | `true` promotes it to the homepage lead slot |
| `affiliateDisclosure` | no | `true` shows the FTC disclosure banner above the body |
| `keyTakeaways` | no | 3–5 short lines. Renders as the "short version" card above the body |
| `faqs` | no | `- q:` / `a:` pairs. Renders as an accordion and emits `FAQPage` structured data |

#### Key takeaways and FAQs

Both are optional and both earn their place twice — once for the reader, once for search.

```yaml
keyTakeaways:
  - "Undertone, not the colour name, is what ruins a paint choice."
  - "North-facing rooms need warm pigment or genuine depth, never a weak pastel."
faqs:
  - q: "Why does my grey paint look purple on the wall?"
    a: "Every neutral carries an undertone. Hold the sample beside plain printer paper and the bias shows immediately."
```

Write answers at **40–60 words**, self-contained, and answering the question in the first sentence. That shape is what gets lifted into AI Overviews, ChatGPT and Perplexity answers — a passage that needs the surrounding article to make sense will not be quoted.

Six posts ship with both filled in as worked examples: `paint-colour-guide`, `living-room-layout-rules`, `bedroom-sanctuary-layering`, `bedroom-ideas-small-spaces-bigger`, `bathroom-storage-ideas-small-spaces` and `bedroom-lighting-layers`.

### About images

Both image fields take either a bare **Unsplash photo ID** (`photo-1600210492486-724fe5c67fb0` — the part after `unsplash.com/`) or a full URL to your own image.

Using the Unsplash ID form is strongly preferred, because `src/components/Img.astro` then generates a full `srcset` and appends `auto=format` — Unsplash's CDN negotiates **AVIF → WebP → JPEG** from the browser's `Accept` header, so modern browsers get AVIF and older ones fall back automatically. Width and height are always emitted, so the box is reserved before the bytes land.

`pinImage` should be a genuinely vertical 2:3 crop (1000×1500). It becomes your `og:image`, which is what Pinterest saves — a horizontal hero pinned to a 2:3 slot performs badly.

**Before shipping any image, check the photo actually depicts the subject.** A working URL is not the same as a relevant picture.

### Adding a category

1. Add an entry to `CATEGORIES` in `src/site.ts` (slug, name, blurb, tile image)
2. Add the slug to the `category` enum in `src/content.config.ts`

Nav, footer, tiles, category page and sitemap all pick it up automatically.

---

## Rebranding

Nearly everything lives in **`src/site.ts`** — site name, tagline, publisher details, verified social URLs, categories and their tile images. Change it there and it propagates through the header, footer, schema, publisher archive and about page.

Colours and type are in `tailwind.config.mjs`:

```js
paper: '#FBF8F4'   // page background
sand:  '#F4EEE6'   // subtle surface
rule:  '#E5DCD0'   // hairlines
ink:   '#1F1B17'   // headings   (ink-60 body, ink-40 meta, ink-20 faint)
clay:  '#B05B38'   // accent
sage:  '#7C8A72'
```

Fonts are Playfair Display (display) and Inter (body), loaded in `Layout.astro`.

---

## Pinterest setup

1. **Domain verification** — paste your code into `pinterestVerification` in `src/site.ts`; it renders as `<meta name="p:domain_verify">`. Then claim the domain at Pinterest → Settings → Claimed accounts.
2. **Rich Pins** — already wired. Every post ships full Open Graph plus `Article` JSON-LD. Validate one URL at the [Rich Pins validator](https://developers.pinterest.com/tools/url-debugger/).
3. **Save button** — `pinit.js` loads deferred; each post has a 2:3 pin image with a Save button that opens the Pinterest composer.

---

## SEO

### Structured data

Every page emits a JSON-LD `@graph` with stable `@id`s. Article pages identify the publisher organization; the site does not invent an individual author identity.

| Page type | Nodes emitted |
|---|---|
| Any page | `Organization` (with logo), `WebSite`, `BreadcrumbList` |
| Post | `BlogPosting` with `wordCount`, `articleSection`, `keywords`, `timeRequired`, `inLanguage` |
| Post with `faqs` | `FAQPage` |
| Category / tag / topic index | `CollectionPage` + `ItemList` |
| Publisher archive | `CollectionPage` + `ItemList` |

### Discovery surfaces

| Path | What it is |
|---|---|
| `/sitemap-index.xml` | Generated, includes eligible tag, category, and publisher archive pages |
| `/rss.xml` | Full archive feed, linked from every page head |
| `/llms.txt` | Plain-text site map for AI answer engines, generated from the collection |
| `/robots.txt` | Explicitly allows GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot and Google-Extended |

### Internal linking

The archive has two axes, and they cross-link in both directions:

- **Rooms** — `/category/<slug>/`, listed in the header nav
- **Topics** — `/tag/<slug>/`, built automatically for any tag used by 2+ posts, indexed at `/tags/`

Tag slugs are normalised, so `small spaces`, `Small Spaces` and `small-spaces` collapse into one hub. Tags used only once stay as plain text — a one-post page is thin content, and thin pages drag the domain down.

**Worth doing next:** the tag vocabulary is fragmented (`paint` and `colour` on one post, `paint colour` on another), so several posts currently link to only one hub. Consolidating tags across the archive would roughly double the internal link density at no content cost.

### Before launch

- Set `SITE_URL` in `.env` **and** the `Sitemap:` line in `public/robots.txt`
- Add your Search Console code to `googleVerification` in `src/site.ts`
- Submit `https://yourdomain.com/sitemap-index.xml` to Search Console
- Add only verified publisher profiles to `authorLinks` in `src/site.ts`

---

## Consent and advertising

`Layout.astro` sets Google Consent Mode defaults to denied for ad and analytics storage. The GA4 tag is still loaded and may send limited consent-mode signals.

Configure and publish a Google-certified CMP through AdSense Privacy & messaging and verify the applicable regional settings. Only then set `PUBLIC_ADSENSE_CMP_CONFIGURED=true` in the deployment environment. The flag is a deployment switch; it does not itself provide a consent interface or establish that a CMP is configured correctly. Keep it false until that setup is complete.

---

## Deploying

### Vercel

Push to GitHub, then import the repository in Vercel. The included Vercel adapter builds the public site and the protected `/admin/` server routes automatically.

Set these Environment Variables in **Project Settings → Environment Variables** before deploying:

- `SITE_URL`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD` (use a long, unique password)
- `PUBLIC_ADSENSE_CLIENT_ID` and `PUBLIC_ADSENSE_CMP_CONFIGURED` only after advertising and consent management are configured

The admin uses browser password authentication. On Vercel it is intentionally read-only: generate Markdown in the admin, then commit the content change through Git. Vercel functions cannot persist edits to the deployed filesystem.

### Netlify

Push to GitHub, then New site from Git:

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: `SITE_URL`, `PUBLIC_ADSENSE_CLIENT_ID`, `PUBLIC_ADSENSE_CMP_CONFIGURED`

### Cloudflare Pages

Workers & Pages → Create → Pages → connect the repo:

- Build command: `npm run build`
- Output directory: `dist`
- Same environment variables

Both free tiers serve this comfortably — it is pure static output with no server runtime.

---

## Contact and saved ideas

The contact page uses email links and does not collect form submissions. The saved-ideas feature stores selected post IDs in the visitor's browser; it is not an email newsletter signup.

---

## Performance notes

The route and asset counts depend on the published content collection and production build. Use the production build output for current size and route counts.

What keeps it fast, and what to preserve if you edit:

- **Every `<img>` carries `width` and `height`.** Use the `Img` component and this is automatic.
- **Every ad slot has a fixed CSS height.** Never let an ad box size itself.
- **The `<h1>` paints before the hero image** on post pages, so LCP is text.
- **Only the hero is `loading="eager"`**; everything below the fold is lazy.
- **AdSense and Pinterest are `async defer`** and never block the first paint.
- The mobile menu is a CSS-only `<details>` element — no JavaScript.

Verify with `npm run build && npm run preview`, then run Lighthouse in mobile mode against the preview URL. Test against the *built* site, never the dev server — dev ships unminified CSS and an HMR client.

---

## Project structure

```
src/
├─ components/
│  ├─ AdSlot.astro            Reserved-height AdSense slot
│  ├─ AffiliateDisclosure.astro
│  ├─ AuthorBox.astro
│  ├─ Breadcrumbs.astro       Renders BreadcrumbList JSON-LD too
│  ├─ Faq.astro               CSS-only accordion; schema comes from PostLayout
│  ├─ Img.astro               srcset + AVIF/WebP + explicit dimensions
│  ├─ KeyTakeaways.astro      The "short version" card
│  ├─ Newsletter.astro
│  ├─ PinterestButton.astro   2:3 pin image + Save button
│  ├─ PostCard.astro          default / wide / compact variants
│  ├─ PostNav.astro           Previous / next, within the same room
│  ├─ RelatedPosts.astro      Same category, topped up if thin
│  ├─ SectionHead.astro
│  └─ TableOfContents.astro   inline (mobile) or sticky sidebar (xl+)
├─ content/
│  └─ posts/                  ← your Markdown goes here
├─ content.config.ts          Zod schema for frontmatter
├─ layouts/
│  ├─ Layout.astro            Head, meta, schema, header, footer
│  ├─ PageLayout.astro        Static pages
│  └─ PostLayout.astro        The money page
├─ pages/
│  ├─ index.astro
│  ├─ 404.astro
│  ├─ about / contact / disclosure / privacy-policy .astro
│  ├─ search.astro            Client-side filter over a prebuilt index
│  ├─ tags.astro              Topic index, sized by frequency
│  ├─ rss.xml.ts              Full archive feed
│  ├─ llms.txt.ts             Generated site map for AI answer engines
│  ├─ author/[slug].astro     Publisher archive
│  ├─ category/[slug].astro
│  ├─ tag/[slug].astro        Built for any tag used by 2+ posts
│  └─ post/[slug].astro
├─ site.ts                    ← site config and categories
└─ styles/global.css          Design tokens and article typography
```

---

## Troubleshooting

**Build fails with a Zod error** — a post's frontmatter is wrong. The message names the file and the field. Usually a `description` outside 50–200 characters or a category not in the enum.

**Ads not showing in production** — check `PUBLIC_ADSENSE_CLIENT_ID` is set in your host's environment variables (not just your local `.env`), that the site is approved in AdSense, and that all four legal pages are live. Approval takes days, not minutes.

**Images 404** — the Unsplash photo ID is wrong. Test it: `https://images.unsplash.com/PHOTO-ID?w=100` should return an image.

**Stale content after editing a post** — `rm -rf .astro dist` and rebuild.

---

## Licence

Template code is free to use and modify. Review all sample editorial content and image credits before publishing. Images have individual sources and licenses; check each asset and its attribution rather than assuming every image is from Unsplash.
