// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.ts';

// https://astro.build/config
export default defineConfig({
  // Overridable via SITE_URL env var (e.g. per-environment on Vercel);
  // otherwise falls back to the single source of truth in src/site.ts.
  site: process.env.SITE_URL || SITE.url,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/(search|saved|404)\/$/.test(new URL(page).pathname) })],
  build: {
    inlineStylesheets: 'auto',
  },
});
