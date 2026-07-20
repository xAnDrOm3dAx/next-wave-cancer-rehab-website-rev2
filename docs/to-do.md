# Next Wave Cancer Rehab — To-Do

Living checklist for the site build. Verified against the live repo (`xAnDrOm3dAx/next-wave-cancer-rehab-website-rev2`) as of **20 Jul 2026, HEAD `b357831`**. Update the "verified" line each time this file is refreshed, since dates and commit hashes are what future-you will trust.

---

## 1. Compliance — blocking publish

These two are the only things standing between the site and a full pre-launch audit.

- [ ] **Recurrence-risk claim** (`services.html`, Physical Activity Guidance) — line reads "...regular physical activity may help reduce the risk of recurrence and improve long-term outcomes." Megan has indicated a source exists but Claude has not verified or cited it yet. Resolve by verifying + citing, or removing the line.
- [ ] **COSA citation** — source already verified (COSA position statement, *Medical Journal of Australia*, 2018, still current per 2025 literature). Just needs formal insertion into the existing paragraph.

## 2. Confirmed bugs

- [ ] **`thank-you.html` — Return to Homepage button covered by footer wave.** Root cause confirmed: `.site-footer__wave` uses a negative top margin (`-80px` mobile / `-140px` desktop) to pull the decorative wave up into the content above it. Works fine on content-heavy pages; `thank-you.html`'s short content isn't enough to absorb the pull-up, so the wave overlaps the button. Fix: scoped CSS exception for this page (e.g. extra bottom margin on `.page-hero__actions` via a page-specific class), not a global change. Ready for a Cursor prompt.

## 3. Design / content — needs Christopher or Megan input before actionable

- [ ] **Copy updates from Megan's doc + SMS changes.** Search for "CHANGE" markers in Megan's doc, cross-reference SMS notes, run through Claude for drafting. **Blocked on**: Megan's doc being shared/uploaded.
- [ ] **Telehealth page — standalone or stay folded in?** `your-next-steps.html` already has a Telehealth section per `Content_Source.md`. Question is whether it should become its own page. **Blocked on**: Megan's decision.
- [ ] **Homepage "About Next Wave" header position.** Confirmed cause: at ≥64rem the `.split` layout puts the picture and the heading+text side by side (2-column grid). Below that breakpoint it already stacks picture-then-heading. Need to confirm: does Megan want it stacked on desktop too, or is this about something else (e.g. heading size/spacing within the current layout)? **Blocked on**: clarifying exact intent.
- [ ] **Footer wave design — Megan not happy with current version.** No specifics captured yet on what she wants changed (shape, colour, size, position). **Blocked on**: Megan's direction or a reference image.

## 4. Infrastructure

- [ ] **SEO baseline sweep.** Confirmed gaps: no `sitemap.xml`, no `robots.txt`, no Open Graph tags anywhere in the site. Meta description does exist on `index.html`. Scope once initiated: sitemap, robots.txt, OG tags per page, verify all meta descriptions are unique and present.
- [ ] **Google Analytics — do we need this?** Confirmed: no GA/gtag code present anywhere currently. This is the same decision already blocking `privacy-policy.html`'s "analytics/tracking tool confirmation" line for solicitor review — resolving this one decision closes both. If yes: needs a consent-conscious implementation given the health-data-adjacent context; if no: privacy policy's analytics section can be finalised as "we do not use analytics or tracking tools."

## 5. Low priority / housekeeping

- [ ] 8 previously-unreferenced logo variant files — **resolved 19 Jul 2026**, confirmed removed from `public/images/`.
- [ ] `terms-and-conditions.html` self-links to itself in its own footer — cosmetic leftover from the 18 Jul footer-link-removal decision. Page is unreachable via navigation either way, so functionally inert. Fix whenever convenient.

## 6. Deliberately parked (not blockers)

- **`terms-and-conditions.html`** — Christopher's call, 19 Jul 2026: stays as a placeholder indefinitely, not required for launch (only Privacy Policy is a Privacy Act requirement for this business). Footer links to it removed sitewide.
- **Split vs. stacked layout for Breast Cancer Rehabilitation** — pending real photography to replace the current placeholder.

## 7. Recently resolved (for context, remove once stale)

- Forms fully wired end-to-end (fetch-based, JSON response, no false success states) — confirmed working, tested manually by Christopher.
- `privacy-policy.html` built out — 8 sections, ABN supplied, Google Workspace data-storage statement present. Still needs solicitor review before publish.
- Custom domain live (`www.nextwavecancerrehab.com.au`), DNS/GitHub Pages/HTTPS confirmed.
- `quals-item` → `plain-list` rename across `services.html` — 34 instances renamed, `about.html`'s genuine qualifications usage untouched.
- Dead CSS removed: `.accordion`/`.accordion__trigger`/`.accordion__panel`, `.feature-item__title`/`.feature-item__text`.

---

*Maintained collaboratively — Claude verifies against the live repo each session; Christopher and Megan add/close items as decisions get made. When an item moves from "open" to "resolved," move it to section 7 rather than deleting it outright, so there's a record — then clear section 7 out once it's grown stale.*
