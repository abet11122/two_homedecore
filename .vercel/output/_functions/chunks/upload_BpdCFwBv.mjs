import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { a as isVercelDeployment, o as validatePostContent } from "./admin_DRveAxcX.mjs";
import { access, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
//#region src/pages/admin/api/upload.ts
var upload_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false,
	trailingSlash: () => trailingSlash
});
var trailingSlash = "ignore";
var POST = async ({ request }) => {
	try {
		const file = (await request.formData()).get("file");
		if (!file || !/^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?\.md$/i.test(file.name)) return new Response(JSON.stringify({ error: "Please upload a .md file." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (file.size > 5e5) return new Response(JSON.stringify({ error: "File too large (max 500KB)." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const safeName = file.name.toLowerCase();
		const text = await file.text();
		if (isVercelDeployment()) return new Response(JSON.stringify({ error: "Publishing is disabled on Vercel. Add the file through Git instead." }), {
			status: 403,
			headers: { "Content-Type": "application/json" }
		});
		const validationError = validatePostContent(text);
		if (validationError) return new Response(JSON.stringify({ error: validationError }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const postsDir = resolve(process.cwd(), "src", "content", "posts");
		const dest = resolve(postsDir, safeName);
		if (!dest.startsWith(postsDir)) return new Response(JSON.stringify({ error: "Invalid path." }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const isNew = await access(dest).then(() => false).catch(() => true);
		await writeFile(dest, text, "utf-8");
		return new Response(JSON.stringify({
			ok: true,
			filename: safeName,
			isNew
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		return new Response(JSON.stringify({ error: String(err) }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/admin/api/upload@_@ts
var page = () => upload_exports;
//#endregion
export { page };
