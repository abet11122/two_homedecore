import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as renderComponent, O as renderTemplate, j as addAttribute, k as maybeRenderHead } from "./sequence_CyX1LPhK.mjs";
import { t as createComponent } from "./astro-component_BKkGvKJH.mjs";
import "./compiler_rxq6eLSk.mjs";
import { t as $$Layout } from "./Layout_Db-cniL3.mjs";
import { i as SITE } from "./site_BpGwPZXI.mjs";
import { t as $$Breadcrumbs } from "./Breadcrumbs_C1WSx2Gk.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	const reasons = [
		{
			title: "Editorial & pitches",
			body: "Story ideas, corrections, or a room of yours you would like us to feature.",
			email: SITE.email
		},
		{
			title: "Partnerships",
			body: "Sponsorships, brand collaborations and press samples. We disclose every paid placement.",
			email: `partnerships@${SITE.email.split("@")[1]}`
		},
		{
			title: "Privacy & data",
			body: "Requests to access or delete your data, and questions about our cookie consent.",
			email: `privacy@${SITE.email.split("@")[1]}`
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Contact",
		"description": `Get in touch with ${SITE.name} — editorial pitches, partnerships and privacy requests.`
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="border-b border-rule"><div class="wrap py-10 lg:py-14">${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "items": [{
		label: "Home",
		href: "/"
	}, { label: "Contact" }] })}<p class="eyebrow mt-7">Say hello</p><h1 class="mt-4 font-display text-[2.5rem] leading-[1.05] text-ink sm:text-5xl">Contact</h1><p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-60">We read everything and reply to most things within two to three working days.</p></div></header><div class="wrap py-12 lg:py-16"><div class="grid gap-12 lg:grid-cols-12 lg:gap-16"><div class="lg:col-span-7"><h2 class="font-display text-2xl text-ink">Send a message</h2><form class="mt-7 grid gap-5" id="contact-form"><div class="grid gap-5 sm:grid-cols-2"><div><label for="name" class="eyebrow-muted block">Name</label><input id="name" name="name" type="text" required class="field mt-2.5" placeholder="Your name"></div><div><label for="email" class="eyebrow-muted block">Email</label><input id="email" name="email" type="email" required class="field mt-2.5" placeholder="you@email.com"></div></div><div><label for="subject" class="eyebrow-muted block">Subject</label><select id="subject" name="subject" class="field mt-2.5"><option>Editorial or story idea</option><option>Partnership enquiry</option><option>Correction</option><option>Privacy request</option><option>Something else</option></select></div><div><label for="message" class="eyebrow-muted block">Message</label><textarea id="message" name="message" rows="7" required class="field mt-2.5" placeholder="What is on your mind?"></textarea></div><div class="flex flex-wrap items-center gap-4"><button type="submit" class="btn btn-primary">Send message</button><p id="form-note" class="text-sm text-ink-40" aria-live="polite">Demo form — see the README to connect Netlify Forms or Formspree.</p></div></form></div><aside class="lg:col-span-5"><h2 class="font-display text-2xl text-ink">Direct</h2><div class="mt-7 divide-y divide-rule border-y border-rule">${reasons.map((r) => renderTemplate`<div class="py-6"><h3 class="font-display text-lg text-ink">${r.title}</h3><p class="mt-2 text-[0.9375rem] leading-relaxed text-ink-60">${r.body}</p><a${addAttribute(`mailto:${r.email}`, "href")} class="mt-3 inline-block text-sm text-ink underline decoration-clay underline-offset-4">${r.email}</a></div>`)}</div><div class="mt-10"><p class="eyebrow-muted">Elsewhere</p><div class="mt-4 flex flex-wrap gap-x-6 gap-y-2"><a${addAttribute(SITE.pinterest, "href")} target="_blank" rel="noopener noreferrer nofollow" class="text-ink-60 hover:text-clay">Pinterest</a><a${addAttribute(SITE.instagram, "href")} target="_blank" rel="noopener noreferrer nofollow" class="text-ink-60 hover:text-clay">Instagram</a></div></div></aside></div></div>` })}<script>
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-note');
      note.textContent = 'This demo form is not connected yet — see the README to wire it up.';
      note.className = 'text-sm text-clay';
    });
  }
<\/script>`;
}, "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/contact.astro", void 0);
var $$file = "C:/Users/mmuba/OneDrive/Desktop/home_decore - Copy/src/pages/contact.astro";
var $$url = "/contact/";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
