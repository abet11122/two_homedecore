# Pinterest and search launch

The homepage now offers room filters, a progressively revealed guide archive, and browser-local saved ideas. Articles link to related guides ranked by room and shared topics. Pinterest sharing is available near the article heading.

## Account setup

- Set the production `SITE_URL` when deploying. Keep `src/site.ts` aligned with the public domain.
- Replace the generic Pinterest and Instagram URLs, example email, and author details in `src/site.ts` with verified business information. Check the About, Contact, and Privacy pages against your actual business practices.
- Claim the domain on Pinterest using `pinterestVerification`, and set `googleVerification` for Search Console. Submit `/sitemap-index.xml` to Search Console.
- Configure `PUBLIC_ADSENSE_CLIENT_ID` and each intended `PUBLIC_ADSENSE_SLOT_*` from the AdSense account. Manual units stay hidden until both client and slot are configured. Add the ads.txt entry supplied by your own account; do not use an invented publisher ID.
- Finish the consent-provider integration described in README before serving ads where required. Confirm placements and account approval in AdSense before launch.

## Content and measurement

Use original or properly licensed photos and a relevant vertical Pinterest image for each guide. Publish specific pins that match the destination article, with readable titles and accurate descriptions. Keep the full useful guide available on the landing page.

Tag incoming Pinterest links with consistent UTM parameters. Once analytics and consent are configured, compare engaged sessions, article-to-article visits, return visits, and revenue per session. The current changes do not install analytics or claim measured traffic improvements.

Large image previews are enabled on indexable pages. Personal saved ideas and search pages are excluded from the sitemap and marked noindex. Existing canonical URLs, article structured data, and responsive images are retained.

References: [Google image SEO](https://developers.google.com/search/docs/appearance/google-images), [Google large image previews](https://developers.google.com/search/case-studies/large-images-case-study), [AdSense placement guidance](https://support.google.com/adsense/answer/1282097).
