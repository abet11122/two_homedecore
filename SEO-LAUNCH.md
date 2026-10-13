# Pinterest and search checks

The homepage now offers room filters, a progressively revealed guide archive, and browser-local saved ideas. Articles link to related guides ranked by room and shared topics. Pinterest sharing is available near the article heading.

## Account setup

- Set the production `SITE_URL` when deploying. Keep `src/site.ts` aligned with the public domain.
- Confirm that `hello@smallcozyhome.store` receives mail. Add social profile URLs to `src/site.ts` only after verifying that they belong to the publication. Keep the publisher name and About, Contact, Disclosure, and Privacy pages aligned with actual operations.
- Claim the domain on Pinterest using `pinterestVerification`, and set `googleVerification` for Search Console. Submit `/sitemap-index.xml` to Search Console.
- Configure `PUBLIC_ADSENSE_CLIENT_ID` and each intended `PUBLIC_ADSENSE_SLOT_*` from the AdSense account. Manual units stay hidden until the client, the placement slot, and the consent gate are configured. Confirm that the public `ads.txt` entry matches the actual account; do not use an invented publisher ID.
- Finish the consent-provider integration described in README before serving ads where required. Confirm placements and account approval in AdSense before enabling ads.

## Content and measurement

Use original or properly licensed photos and a relevant vertical Pinterest image for each guide. Publish specific pins that match the destination article, with readable titles and accurate descriptions. Keep the full useful guide available on the landing page.

Tag incoming Pinterest links with consistent UTM parameters. GA4 is configured with measurement ID `G-GPZD9NPCSL`; the source currently defaults analytics and advertising storage to denied and does not include a preference control to change that setting. Check Analytics account data and consent settings before making claims about traffic or engagement.

Large image previews are enabled on indexable pages. Personal saved ideas, search and admin pages, noindex posts, and underpopulated category archives are excluded from the sitemap. Keep `SITE_URL` and the sitemap URL in `public/robots.txt` on the same canonical host. Existing article structured data and responsive images are retained.

References: [Google image SEO](https://developers.google.com/search/docs/appearance/google-images), [Google large image previews](https://developers.google.com/search/case-studies/large-images-case-study), [AdSense site verification](https://support.google.com/adsense/answer/12169212), [Google-certified CMP requirements](https://support.google.com/adsense/answer/13554116).
