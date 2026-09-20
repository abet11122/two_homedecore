import { createHmac, timingSafeEqual } from 'node:crypto';
import { parseDocument } from 'yaml';
import { ADMIN_PASSWORD, ADMIN_USERNAME } from '../config/admin-credentials';

const CATEGORIES = new Set([
  'living-room', 'bedroom', 'kitchen', 'small-spaces', 'diy-decor', 'seasonal',
  'entryway', 'home-office', 'bathroom', 'outdoor', 'renter',
]);

function credentials() {
  return ADMIN_USERNAME && ADMIN_PASSWORD ? { username: ADMIN_USERNAME, password: ADMIN_PASSWORD } : null;
}

export function hasAdminCredentials() {
  return credentials() !== null;
}

function secureEquals(supplied: string, expected: string) {
  const suppliedBuffer = Buffer.from(supplied, 'utf8');
  const expectedBuffer = Buffer.from(expected, 'utf8');
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function hasValidAdminCredentials(username: string, password: string) {
  const configuredCredentials = credentials();
  if (!configuredCredentials) return false;
  return secureEquals(username, configuredCredentials.username) && secureEquals(password, configuredCredentials.password);
}

function sessionSignature(expiresAt: string) {
  const configuredCredentials = credentials();
  if (!configuredCredentials) return '';
  return createHmac('sha256', configuredCredentials.password)
    .update(`${configuredCredentials.username}:${expiresAt}`)
    .digest('base64url');
}

export function createAdminSession() {
  const expiresAt = String(Date.now() + 1000 * 60 * 60 * 12);
  return `${expiresAt}.${sessionSignature(expiresAt)}`;
}

export function hasAdminSession(request: Request) {
  const session = request.headers.get('cookie')
    ?.split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith('admin_session='))
    ?.slice('admin_session='.length);
  if (!session) return false;

  const [expiresAt, signature] = session.split('.');
  if (!expiresAt || !signature || Number(expiresAt) <= Date.now()) return false;
  return secureEquals(signature, sessionSignature(expiresAt));
}

export function isVercelDeployment() {
  return process.env.VERCEL === '1';
}

export function normalizePostContent(content: unknown) {
  if (!isString(content)) return content;
  return content.replace(/^(category:\s*["']?)christmas(["']?\s*)$/im, '$1seasonal$2');
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isDate(value: unknown) {
  return isString(value) && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

/** Validates the same frontmatter requirements enforced by the content collection. */
export function validatePostContent(content: unknown): string | null {
  if (!isString(content) || !content.trim()) return 'Post content is required.';
  if (Buffer.byteLength(content, 'utf8') > 500_000) return 'Content too large (max 500KB).';

  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return 'Content must include YAML frontmatter enclosed by ---.';
  if (!match[2].trim()) return 'Article body is required.';

  const document = parseDocument(match[1]);
  if (document.errors.length > 0) return 'Frontmatter contains invalid YAML.';
  const data = document.toJSON();
  if (!data || typeof data !== 'object' || Array.isArray(data)) return 'Frontmatter must be a YAML object.';

  const post = data as Record<string, unknown>;
  if (!isString(post.title) || post.title.length < 1 || post.title.length > 90) return 'Title must be between 1 and 90 characters.';
  if (!isString(post.description) || post.description.length < 50 || post.description.length > 200) return 'Description must be between 50 and 200 characters.';
  if (!isString(post.category) || !CATEGORIES.has(post.category)) return 'Category is invalid.';
  if (!isDate(post.publishDate)) return 'Publish date is invalid.';
  if (post.updatedDate !== undefined && !isDate(post.updatedDate)) return 'Updated date is invalid.';
  if (!isString(post.heroImage) || !post.heroImage.trim()) return 'Hero image is required.';
  if (!isString(post.pinImage) || !post.pinImage.trim()) return 'Pin image is required.';
  if (post.featured !== undefined && typeof post.featured !== 'boolean') return 'Featured must be true or false.';
  if (post.affiliateDisclosure !== undefined && typeof post.affiliateDisclosure !== 'boolean') return 'Affiliate disclosure must be true or false.';
  if (post.tags !== undefined && (!Array.isArray(post.tags) || post.tags.some((tag) => !isString(tag)))) return 'Tags must be a list of text values.';
  if (post.keyTakeaways !== undefined && (!Array.isArray(post.keyTakeaways) || post.keyTakeaways.length > 6 || post.keyTakeaways.some((item) => !isString(item)))) return 'Key takeaways must contain at most six text values.';

  return null;
}
