/**
 * Take the Halloween posts out of search and listings after the season (or bring them back).
 *
 *   npm run halloween              preview which posts would change (changes nothing)
 *   npm run halloween -- --apply   set noindex: true and excludeFromListings: true
 *   npm run halloween -- --undo    remove both flags again (e.g. next September)
 *
 * A post counts as Halloween when its file name or title contains "Halloween". The URLs keep
 * working for anyone with a link; they just drop out of the sitemap, search results,
 * the homepage, category pages and related-post lists.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const POSTS = fileURLToPath(new URL('../src/content/posts/', import.meta.url));
const mode = process.argv.includes('--apply') ? 'apply' : process.argv.includes('--undo') ? 'undo' : 'preview';
const files = readdirSync(POSTS)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => f.includes('halloween') || /^title:.*halloween/im.test(readFileSync(join(POSTS, f), 'utf8')))
  .sort();

function setFlags(src, on) {
  // Keep the file's own line endings (some posts are CRLF, some LF).
  const eol = src.includes('\r\n') ? '\r\n' : '\n';
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  let head = fm[1].replace(/^(?:noindex|excludeFromListings):[^\r\n]*(?:\r?\n|$)/gm, '');
  if (on) head = head.replace(/^(category:[^\r\n]*)/m, `$1${eol}noindex: true${eol}excludeFromListings: true`);
  return src.replace(fm[1], head);
}

let changed = 0;
for (const f of files) {
  const path = join(POSTS, f);
  const src = readFileSync(path, 'utf8');
  const isOff = /^noindex:\s*true/m.test(src) && /^excludeFromListings:\s*true/m.test(src);
  const needs = mode === 'undo' ? /^(noindex|excludeFromListings):/m.test(src) : !isOff;
  if (!needs) continue;
  changed++;
  if (mode === 'preview') console.log(`would hide  ${f}`);
  else {
    writeFileSync(path, setFlags(src, mode === 'apply'));
    console.log(`${mode === 'apply' ? 'hidden   ' : 'restored '} ${f}`);
  }
}
console.log(`\n${files.length} Halloween posts, ${changed} ${mode === 'preview' ? 'to change — run with --apply to do it' : 'changed'}.`);
