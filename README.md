# Small Cozy Home

A home interiors publication built with **Astro 7** and **Tailwind CSS 3**. Public articles are prerendered; the `/admin/` routes use the Vercel server adapter.

The site includes browser scripts for saved ideas, reading preferences, Pinterest sharing, and Google Analytics. AdSense scripts load only when advertising is configured.

---

## Quick start

```bash
npm install
```

```bash
cp .env.example .env
```

```bash
npx astro dev --background
```

Use `npx astro dev status` to find the local URL, `npx astro dev logs` to read output, and `npx astro dev stop` when finished. Ads stay hidden unless the required advertising, placement, and consent settings are configured.

| Command | What it does |
|---|---|
| `npx astro dev --background` | Start the dev server in the background |
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

For an AdSense site review, use the verification method shown in your account. Setting the site's real `PUBLIC_ADSENSE_CLIENT_ID` emits the AdSense account meta tag without loading ad units. Google also supports verification through a matching `ads.txt` entry or its official code snippet. Check that `public/ads.txt` matches the account before requesting review.

Add the per-unit slot IDs (`PUBLIC_ADSENSE_SLOT_IN_ARTICLE_TOP` and friends) for the placements you intend to use. A placement without a slot ID stays hidden.

### Where the ads sit

| Placement | Mobile | Desktop | Where |
|---|---|---|---|
| `feed` | 336×280 | 728×90 | Homepage and category pages, after the lead block |
| `in-article-top` | 336×280 | 728×90 | After the table of contents |
| `in-article-mid` | 336×280 | 336×280 | After the article body |
| `before-related` | 336×280 | 728×90 | Above the related-posts block |
| `anchor` | 320×50 | hidden | Sticky bottom bar, mobile only |

When a configured slot renders, its container reserves space before the ad fills. This reduces layout shift but does not guarantee a particular Core Web Vitals score. Check the mobile anchor against the live page before enabling it.

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
| `category` | yes | One of the slugs listed in `src/site.ts` and `src/content.config.ts` |
| `tags` | no | Array of strings. A tag used by at least four visible posts gets a hub page at `/tag/<slug>/` |
| `noindex` | no | Keeps the article available at its URL while requesting search engines not index it |
| `excludeFromListings` | no | Omits the article from archives, search, related posts, feeds and sitemap |
| `publishDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | Shown in the byline and in the Article schema |
| `heroImage` | yes | **Horizontal.** Unsplash photo ID or absolute URL |
| `pinImage` | yes | **Vertical 2:3.** Becomes `og:image` and the Pinterest save target |
| `featured` | no | `true` promotes it to the homepage lead slot |
| `affiliateDisclosure` | no | `true` shows an affiliate notice above the body; use it when a page contains affiliate links |
| `keyTakeaways` | no | Up to six concise, useful points. Renders above the body |
| `faqs` | no | `- q:` / `a:` pairs. Renders as an accordion and emits `FAQPage` structured data |

#### Key takeaways and FAQs

Both are optional. Use them only when they help a reader understand the page.

```yaml
keyTakeaways:
  - "Measure the available wall and floor space before choosing storage."
  - "Check doors, drawers and walking space with the unit in place."
faqs:
  - q: "What should I measure before buying a storage cabinet?"
    a: "Record the available width, depth and height, then check door swing, skirting boards, outlets and any access panels. Compare those measurements with the seller's product dimensions."
```

Keep answers specific to the article and supported by its content. Structured data does not guarantee a search feature or referral traffic.

### About images

Both image fields take either a bare **Unsplash photo ID** (`photo-1600210492486-724fe5c67fb0`) or a full URL to an image you have the right to use.

For Unsplash IDs, `src/components/Img.astro` generates responsive image URLs and requests automatic format selection. It also emits width and height attributes to help the browser reserve space.

`pinImage` should be a relevant vertical 2:3 image (for example, 1000×1500). It is used for `og:image` and the Pinterest save target.

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

1. **Domain verification** — add the account's code to `pinterestVerification` in `src/site.ts`, then follow Pinterest's current domain claiming steps.
2. **Article metadata** — posts emit Open Graph metadata and `BlogPosting` JSON-LD. Check a published URL with Pinterest's current validation tools before relying on it.
3. **Save button** — `pinit.js` loads on public pages; the post's `pinImage` is used for sharing.

---

## SEO

### Structured data

Public pages emit a JSON-LD `@graph` with site and publisher information. Article pages identify the publisher organization without inventing an individual author identity.

| Page type | Nodes emitted |
|---|---|
| Public page | `Organization` (with logo), `WebSite`; breadcrumbs where rendered |
| Post | `BlogPosting` with `wordCount`, `articleSection`, `keywords`, `timeRequired`, `inLanguage` |
| Post with `faqs` | `FAQPage` |
| Category / tag / topic index | `CollectionPage` + `ItemList` |
| Publisher archive | `CollectionPage` + `ItemList` |

### Discovery surfaces

| Path | What it is |
|---|---|
| `/sitemap-index.xml` | Generated, includes eligible tag, category, and publisher archive pages |
| `/rss.xml` | Feed of visible published posts, linked from every page head |
| `/llms.txt` | Plain-text site map for AI answer engines, generated from the collection |
| `/robots.txt` | Explicitly allows GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot and Google-Extended |

### Internal linking

The archive has two axes, and they cross-link in both directions:

- **Rooms** — `/category/<slug>/`, listed in the header nav
- **Topics** — `/tag/<slug>/`, built automatically for a tag used by at least four visible posts

Tag slugs are normalised, so `small spaces`, `Small Spaces` and `small-spaces` collapse into one hub. Tags with fewer than four visible posts remain plain text.

Review tags manually as new posts are published. Keep a hub only when its posts serve a clear shared topic and the page helps visitors navigate them.

### Production checks

- Keep `SITE_URL`, `src/site.ts`, and the `Sitemap:` line in `public/robots.txt` on `https://www.smallcozyhome.store`
- Add your Search Console code to `googleVerification` in `src/site.ts`
- Submit `https://www.smallcozyhome.store/sitemap-index.xml` to Search Console
- Add only verified publisher profiles to `authorLinks` in `src/site.ts`

---

## Consent and advertising

`Layout.astro` sets Google Consent Mode defaults to denied for ad and analytics storage. The GA4 tag is still loaded and may send limited consent-mode signals.

Configure and publish a Google-certified CMP through AdSense Privacy & messaging and verify the applicable regional settings. Only then set `PUBLIC_ADSENSE_CMP_CONFIGURED=true` in the deployment environment. The flag is a deployment switch; it does not itself provide a consent interface or establish that a CMP is configured correctly. Keep it false until that setup is complete.

---

## Deploying

### Vercel

Push to GitHub, then import the repository in Vercel. The project uses the Vercel adapter for server routes under `/admin/`. Set server-side admin credentials before using those routes; without credentials, access is disabled.

Set these Environment Variables in **Project Settings → Environment Variables** before deploying:

- `SITE_URL`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD` (use a long, unique password)
- `PUBLIC_ADSENSE_CLIENT_ID` from the site's real AdSense account for ownership verification
- `PUBLIC_ADSENSE_CMP_CONFIGURED` only after advertising and consent management are configured

On Vercel, the admin can generate Markdown for a Git commit. The deployed server cannot save source files permanently. Hosting elsewhere requires adapting the server routes and authentication to that platform.

---

## Contact and saved ideas

The contact page uses email links and does not collect form submissions. The saved-ideas feature stores selected post IDs in the visitor's browser; it is not an email newsletter signup.

---

## Performance notes

The route and asset counts depend on the published content collection and production build. Use the production build output for current size and route counts.

What keeps it fast, and what to preserve if you edit:

- **`Img` emits width and height.** Use it for article images to help reserve image space.
- **Configured ad slots reserve height.** Recheck mobile layouts when enabling a placement.
- **Hero images are requested eagerly;** other article images generally load lazily.
- **AdSense is gated by configuration,** while Pinterest and Analytics scripts also load on public pages.
- The mobile menu is a CSS-only `<details>` element — no JavaScript.

For performance review, use the production build and preview and measure representative mobile pages. The dev server includes development code and is not a production performance sample.

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
│  ├─ tag/[slug].astro        Built for tags used by at least four visible posts
│  └─ post/[slug].astro
├─ site.ts                    ← site config and categories
└─ styles/global.css          Design tokens and article typography
```

---

## Troubleshooting

**Build fails with a Zod error** — a post's frontmatter is wrong. The message names the file and the field. Usually a `description` outside 50–200 characters or a category not in the enum.

**Ads not showing in production** — check AdSense account and site status, the client ID, the relevant slot ID, and `PUBLIC_ADSENSE_CMP_CONFIGURED`. Confirm the required consent message is actually configured before enabling ads.

**Images 404** — check the image URL or Unsplash photo ID and the source service's response. Replace unavailable or wrongly licensed images.

**Stale content after editing a post** — check the deployed commit and rebuild status, then refresh the published route.

---

## Asset rights

This repository does not declare a code license. Review each externally sourced image and its license or terms before publishing; do not assume all images have the same source or use rights.
