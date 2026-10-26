/**
 * Sätteri hast plugin: drops the `<!-- [ADD YOUR PHOTO: …] {file: photo-N} -->`
 * markers from the rendered HTML.
 *
 * The markers are working notes for `npm run photos`, which swaps each one for
 * a real <figure> once the shot exists (see PHOTO-SHOT-LIST.md). They have to
 * stay in the Markdown for that script to find them by position, but an
 * unfilled marker has no business in a page whose source a reader can view.
 */
const MARKER = /^\s*<!--\s*\[ADD YOUR PHOTO:[\s\S]*?-->\s*$/;

/** Markdown HTML arrives as a `raw` node; `comment` covers the parsed form. */
function drop(node, ctx) {
  const value = typeof node.value === 'string' ? node.value : '';
  if (MARKER.test(value) || /\[ADD YOUR PHOTO:/.test(value)) {
    ctx.removeNode(node);
  }
}

export const stripPhotoMarkers = {
  name: 'strip-photo-markers',
  raw: drop,
  comment: drop,
};

export default stripPhotoMarkers;
