// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import {
  CATEGORIES,
  MIN_INDEXABLE_ARCHIVE_POSTS,
  SITE,
  collectTags,
} from './src/site.ts';

const postsDirectory = fileURLToPath(new URL('./src/content/posts/', import.meta.url));

function listMarkdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory()
      ? listMarkdownFiles(path)
      : entry.isFile() && entry.name.endsWith('.md')
        ? [path]
        : [];
  });
}

const posts = listMarkdownFiles(postsDirectory).map((path) => {
  const source = readFileSync(path, 'utf8');
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) {
    throw new Error(`Missing YAML frontmatter in ${relative(postsDirectory, path)}`);
  }

  return {
    id: relative(postsDirectory, path).split(sep).join('/').replace(/\.md$/, ''),
    data: parse(frontmatter[1]),
  };
});

const publishedPosts = posts.filter(
  (post) => new Date(post.data.publishDate).getTime() <= Date.now()
);
const discoverablePosts = publishedPosts.filter(
  (post) => !post.data.excludeFromListings && !post.data.noindex
);
const excludedPostPaths = new Set(
  publishedPosts
    .filter((post) => post.data.noindex || post.data.excludeFromListings)
    .map((post) => `/post/${post.id}/`)
);
const indexableCategories = new Set(
  CATEGORIES
    .filter((category) => discoverablePosts.filter((post) => post.data.category === category.slug).length >= MIN_INDEXABLE_ARCHIVE_POSTS)
    .map((category) => category.slug)
);
const indexableTags = new Set(collectTags(discoverablePosts).map((tag) => tag.slug));

function includeInSitemap(page) {
  const pathname = new URL(page).pathname;
  if (
    /^\/admin(?:\/|$)/.test(pathname) ||
    /^\/(?:search|saved|404)\/?$/.test(pathname) ||
    pathname === '/author/sophie-lane/' ||
    excludedPostPaths.has(pathname)
  ) {
    return false;
  }

  const category = pathname.match(/^\/category\/([^/]+)\/?$/);
  if (category && !indexableCategories.has(category[1])) return false;

  const tag = pathname.match(/^\/tag\/([^/]+)\/?$/);
  return !tag || indexableTags.has(tag[1]);
}

// https://astro.build/config
export default defineConfig({
  // Overridable via SITE_URL env var (e.g. per-environment on Vercel);
  // otherwise falls back to the single source of truth in src/site.ts.
  site: process.env.SITE_URL || SITE.url,
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  redirects: {
    '/author/sophie-lane/': '/about/',
  },
  integrations: [sitemap({ filter: includeInSitemap })],
  build: {
    inlineStylesheets: 'auto',
  },
});
