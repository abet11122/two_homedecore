import { Ct as getEnv$1, Tt as setOnSetGetEnv } from "./sequence_CyX1LPhK.mjs";
import { createHmac, timingSafeEqual } from "node:crypto";
import { parseDocument } from "yaml";
//#region \0astro:env/server
/** @returns {string} */
var getEnv = (key) => {
	return getEnv$1(key);
};
var getSecret = (key) => {
	return getEnv(key);
};
setOnSetGetEnv(() => {});
//#endregion
//#region src/lib/admin.ts
var CATEGORIES = /* @__PURE__ */ new Set([
	"living-room",
	"bedroom",
	"kitchen",
	"small-spaces",
	"diy-decor",
	"seasonal",
	"entryway",
	"home-office",
	"bathroom",
	"outdoor",
	"renter"
]);
function credentials() {
	const username = getSecret("ADMIN_USERNAME");
	const password = getSecret("ADMIN_PASSWORD");
	return username && password ? {
		username,
		password
	} : null;
}
function hasAdminCredentials() {
	return credentials() !== null;
}
function secureEquals(supplied, expected) {
	const suppliedBuffer = Buffer.from(supplied, "utf8");
	const expectedBuffer = Buffer.from(expected, "utf8");
	return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}
function hasValidAdminCredentials(username, password) {
	const configuredCredentials = credentials();
	if (!configuredCredentials) return false;
	return secureEquals(username, configuredCredentials.username) && secureEquals(password, configuredCredentials.password);
}
function sessionSignature(expiresAt) {
	const configuredCredentials = credentials();
	if (!configuredCredentials) return "";
	return createHmac("sha256", configuredCredentials.password).update(`${configuredCredentials.username}:${expiresAt}`).digest("base64url");
}
function createAdminSession() {
	const expiresAt = String(Date.now() + 432e5);
	return `${expiresAt}.${sessionSignature(expiresAt)}`;
}
function hasAdminSession(request) {
	const session = request.headers.get("cookie")?.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("admin_session="))?.slice(14);
	if (!session) return false;
	const [expiresAt, signature] = session.split(".");
	if (!expiresAt || !signature || Number(expiresAt) <= Date.now()) return false;
	return secureEquals(signature, sessionSignature(expiresAt));
}
function isVercelDeployment() {
	return process.env.VERCEL === "1";
}
function isString(value) {
	return typeof value === "string";
}
function isDate(value) {
	return isString(value) && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}
/** Validates the same frontmatter requirements enforced by the content collection. */
function validatePostContent(content) {
	if (!isString(content) || !content.trim()) return "Post content is required.";
	if (Buffer.byteLength(content, "utf8") > 5e5) return "Content too large (max 500KB).";
	const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) return "Content must include YAML frontmatter enclosed by ---.";
	if (!match[2].trim()) return "Article body is required.";
	const document = parseDocument(match[1]);
	if (document.errors.length > 0) return "Frontmatter contains invalid YAML.";
	const data = document.toJSON();
	if (!data || typeof data !== "object" || Array.isArray(data)) return "Frontmatter must be a YAML object.";
	const post = data;
	if (!isString(post.title) || post.title.length < 1 || post.title.length > 90) return "Title must be between 1 and 90 characters.";
	if (!isString(post.description) || post.description.length < 50 || post.description.length > 200) return "Description must be between 50 and 200 characters.";
	if (!isString(post.category) || !CATEGORIES.has(post.category)) return "Category is invalid.";
	if (!isDate(post.publishDate)) return "Publish date is invalid.";
	if (post.updatedDate !== void 0 && !isDate(post.updatedDate)) return "Updated date is invalid.";
	if (!isString(post.heroImage) || !post.heroImage.trim()) return "Hero image is required.";
	if (!isString(post.pinImage) || !post.pinImage.trim()) return "Pin image is required.";
	if (post.featured !== void 0 && typeof post.featured !== "boolean") return "Featured must be true or false.";
	if (post.affiliateDisclosure !== void 0 && typeof post.affiliateDisclosure !== "boolean") return "Affiliate disclosure must be true or false.";
	if (post.tags !== void 0 && (!Array.isArray(post.tags) || post.tags.some((tag) => !isString(tag)))) return "Tags must be a list of text values.";
	if (post.keyTakeaways !== void 0 && (!Array.isArray(post.keyTakeaways) || post.keyTakeaways.length > 6 || post.keyTakeaways.some((item) => !isString(item)))) return "Key takeaways must contain at most six text values.";
	return null;
}
//#endregion
export { isVercelDeployment as a, hasValidAdminCredentials as i, hasAdminCredentials as n, validatePostContent as o, hasAdminSession as r, createAdminSession as t };
