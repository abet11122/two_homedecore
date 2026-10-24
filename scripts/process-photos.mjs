/**
 * Turn your own photos into site-ready images.
 *
 *   1. Put photos in   photos-inbox/<post-slug>/<name>.jpg   (jpg, png, webp, tif or avif)
 *   2. Next to each, add   <name>.txt   — line 1: alt text (required), line 2: caption (optional)
 *   3. Run   npm run photos            (all posts)   or   npm run photos -- <post-slug>
 *
 * Names:
 *   hero        replaces the post's hero image and also makes the 2:3 Pinterest pin
 *   photo-1 …   replaces the marker  <!-- [ADD YOUR PHOTO: …] {file: photo-1} -->  in the post
 *   anything    else is processed and its <figure> snippet is printed for you to paste
 *
 * Each photo is rotated upright, stripped of metadata (including GPS location), resized to
 * 480/960/1440 px wide WebP in public/images/posts/<slug>/, and registered in
 * src/data/article-images.json. Originals move to photos-inbox/<slug>/done/.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const INBOX = join(ROOT, 'photos-inbox');
const POSTS = join(ROOT, 'src/content/posts');
const PUBLIC = join(ROOT, 'public/images/posts');
const DATA = join(ROOT, 'src/data/article-images.json');
const WIDTHS = [480, 960, 1440];
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.avif']);
const SIZES = '(max-width: 600px) calc(100vw - 44px), (max-width: 900px) calc(100vw - 64px), 688px';

// Credit own photos to the named author once src/site.ts has one, else to the site.
const siteSource = readFileSync(join(ROOT, 'src/site.ts'), 'utf8');
const personName = siteSource.match(/person:\s*\{[\s\S]*?name:\s*'([^']*)'/)?.[1] ?? '';
const siteName = siteSource.match(/name:\s*'([^']*)'/)?.[1] ?? 'Small Cozy Home';
const CREDIT = personName && !personName.startsWith('[') ? personName : siteName;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const yamlStr = (s) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

async function writeSizes(input, outDir, name) {
  const meta = await sharp(input).rotate().metadata();
  // .rotate() applies EXIF orientation, so swap dimensions for 90° rotations.
  const sideways = (meta.orientation ?? 1) >= 5;
  const srcW = sideways ? meta.height : meta.width;
  const srcH = sideways ? meta.width : meta.height;
  const widths = WIDTHS.filter((w) => w < srcW);
  widths.push(Math.min(srcW, WIDTHS.at(-1)));
  const uniq = [...new Set(widths)].sort((a, b) => a - b);
  const largest = uniq.at(-1);
  const srcset = [];
  for (const w of uniq) {
    const file = w === largest ? `${name}.webp` : `${name}-${w}.webp`;
    await sharp(input).rotate().resize({ width: w }).webp({ quality: 80 }).toFile(join(outDir, file));
    srcset.push(`/images/posts/${basename(outDir)}/${file} ${w}w`);
  }
  return { width: largest, height: Math.round((srcH / srcW) * largest), srcset: srcset.join(', ') };
}

function register(data, key, info, alt) {
  data[key] = { ...info, alt, photographer: CREDIT, sourceUrl: '', licenseUrl: '' };
}

function setFrontmatter(src, field, value) {
  const line = `${field}: ${yamlStr(value)}`;
  const re = new RegExp(`^${field}:.*$`, 'm');
  if (re.test(src)) return src.replace(re, line);
  return src.replace(/^(heroImage:.*)$/m, `$1\n${line}`);
}

async function processSlug(slug, data) {
  const dir = join(INBOX, slug);
  const postPath = join(POSTS, `${slug}.md`);
  if (!existsSync(postPath)) {
    console.warn(`! ${slug}: no post at src/content/posts/${slug}.md — skipped`);
    return;
  }
  const files = readdirSync(dir).filter((f) => EXT.has(extname(f).toLowerCase()));
  if (!files.length) return;
  const outDir = join(PUBLIC, slug);
  mkdirSync(outDir, { recursive: true });
  mkdirSync(join(dir, 'done'), { recursive: true });
  let post = readFileSync(postPath, 'utf8');
  let changed = false;

  for (const file of files) {
    const name = basename(file, extname(file)).toLowerCase().replace(/[^a-z0-9-]+/g, '-');
    const sidecar = join(dir, `${basename(file, extname(file))}.txt`);
    if (!existsSync(sidecar)) {
      console.warn(`! ${slug}/${file}: add ${basename(sidecar)} with the alt text on line 1 — skipped`);
      continue;
    }
    const [alt = '', caption = ''] = readFileSync(sidecar, 'utf8').split(/\r?\n/).map((l) => l.trim());
    if (!alt) {
      console.warn(`! ${slug}/${file}: ${basename(sidecar)} has no alt text — skipped`);
      continue;
    }
    const input = join(dir, file);
    const info = await writeSizes(input, outDir, name);
    const key = `/images/posts/${slug}/${name}.webp`;
    register(data, key, info, alt);

    if (name === 'hero') {
      const pinKey = `/images/posts/${slug}/pin.webp`;
      await sharp(input).rotate().resize(1000, 1500, { fit: 'cover', position: 'attention' })
        .webp({ quality: 80 }).toFile(join(outDir, 'pin.webp'));
      register(data, pinKey, { width: 1000, height: 1500, srcset: `${pinKey} 1000w` }, alt);
      post = setFrontmatter(post, 'heroImage', key);
      post = setFrontmatter(post, 'heroImageAlt', alt);
      post = setFrontmatter(post, 'pinImage', pinKey);
      console.log(`✓ ${slug}: hero and pin replaced`);
    } else {
      const figure = [
        '<figure class="article-figure">',
        `  <img src="${key}" srcset="${info.srcset}" sizes="${SIZES}" width="${info.width}" height="${info.height}" loading="lazy" decoding="async" alt="${esc(alt)}" />`,
        `  <figcaption>${caption ? `<span>${esc(caption)}</span>` : ''}<span>Photo: ${esc(CREDIT)}</span></figcaption>`,
        '</figure>',
      ].join('\n');
      const marker = new RegExp(`^<!-- \\[ADD YOUR PHOTO:[^\\]]*\\] \\{file: ${name}\\} -->$`, 'm');
      if (marker.test(post)) {
        post = post.replace(marker, figure);
        console.log(`✓ ${slug}: ${name} placed where its marker was`);
      } else {
        console.log(`✓ ${slug}: ${name} processed — no matching marker, paste this where you want it:\n\n${figure}\n`);
      }
    }
    changed = true;
    renameSync(input, join(dir, 'done', file));
    renameSync(sidecar, join(dir, 'done', basename(sidecar)));
  }
  if (!changed) return;
  if (!/^updatedDate:/m.test(post)) post = post.replace(/^(publishDate:.*)$/m, `$1\nupdatedDate: ${new Date().toISOString().slice(0, 10)}`);
  else post = post.replace(/^updatedDate:.*$/m, `updatedDate: ${new Date().toISOString().slice(0, 10)}`);
  writeFileSync(postPath, post);
}

if (!existsSync(INBOX)) {
  console.log('No photos-inbox/ folder yet. Create photos-inbox/<post-slug>/ and add photos.');
  process.exit(0);
}
const only = process.argv[2];
const slugs = readdirSync(INBOX, { withFileTypes: true })
  .filter((d) => d.isDirectory() && (!only || d.name === only))
  .map((d) => d.name);
const data = JSON.parse(readFileSync(DATA, 'utf8'));
for (const slug of slugs) await processSlug(slug, data);
writeFileSync(DATA, JSON.stringify(data, null, 2) + '\n');
console.log('Done. Run `npm run build` to check, then commit the new files in public/images/posts/.');
