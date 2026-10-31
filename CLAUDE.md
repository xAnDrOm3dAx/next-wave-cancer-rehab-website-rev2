# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

Static website for **Next Wave Cancer Rehab**, an oncology physiotherapy / cancer rehabilitation practice on the Sunshine Coast, Queensland (Megan Oster, Principal Physiotherapist and Founder). Hosted on GitHub Pages at `www.nextwavecancerrehab.com.au` (`CNAME`).

Pages:

| Page | Notes |
|---|---|
| `index.html` | Home |
| `about.html` | About Megan, career, qualifications |
| `services.html` | Eight service sections with anchor links |
| `your-next-steps.html` | Rehabilitation stages, first appointment, telehealth |
| `referrers.html` | For health professionals, includes the referral form |
| `contact.html` | Contact details, locations and maps, enquiry form (there is no separate location page) |
| `privacy-policy.html` | Complete |
| `terms-and-conditions.html` | Placeholder, `noindex`, deliberately unlinked from navigation |
| `thank-you.html` | Form submission confirmation, `noindex` |

Main nav: Home, About, Services, Your Next Steps, Contact, Refer a Patient (pill CTA, links to `referrers.html`). Footer adds Locations and Privacy Policy. Keep header, mobile nav and footer identical across every page. There are no includes, so a change to shared markup must be repeated in each HTML file.

`_config.yml` excludes `docs/`, `CLAUDE.md` and `README.md` from the published site. Keep internal notes there, never in the web root.

## Stack

- Plain HTML, CSS and light JavaScript only. No React, Next.js, Tailwind, npm/build tooling or animation libraries.
- Keep code simple, semantic and easy for a junior developer to edit. Prefer the simpler, calmer, more readable option.
- Preview locally with the `static-site` config in `.claude/launch.json` (port 5173).

CSS files in `public/css/` (load order):

| File | Role |
|---|---|
| `reset.css` | Reset and box-sizing |
| `variables.css` | Design tokens: the single source of truth for colours, type, spacing, layout, radii and shadows |
| `base.css` | Body, headings, paragraphs, links, buttons, forms, focus states |
| `layout.css` | Header, nav, footer, containers, sections, grids |
| `components.css` | Reusable components: cards, CTA band, page hero, disclosures, callouts, forms, etc. |
| `pages.css` | Page-specific exceptions only |

`public/js/main.js` handles the mobile nav, the About career disclosures (open on desktop), return-to-top, and Contact/Referrers form validation and submission.

## Public Copy and Compliance

This is an Australian regulated healthcare context (AHPRA). Applies to `*.html` and any copy drafted for the site. See `docs/Brand_Voice.md` for voice and tone when writing new copy.

- Do not use the word "specialist" in public copy unless that title is formally held and legally appropriate. Do not describe Megan as a specialist or expert.
- Avoid: specialist, expert, best, cure, guarantee, eliminate, miracle, transformation, beat cancer, fight cancer, cancer warrior, battle language, life-changing results, no risk, prevent (unless medically and legally appropriate), fear-based or overly cheerful wellness language, and heavy use of "journey".
- Prefer: experienced oncology physiotherapist, advanced training, evidence-informed (not "evidence-based"), safe and individualised support, in collaboration with your medical team.
- Use careful claim language: may help, can support, aims to, may reduce, where appropriate, depending on your treatment, symptoms, and goals.
- Clinical claims (e.g. exercise guidelines, recurrence risk) need verification and a reference before publishing.
- Do not add or publish testimonials. Advertising compliance review is required first.
- Services and Your Next Steps are written in third person. About uses first person.
- Use "Breast Cancer Rehabilitation" as the service label.
- Wherever lymphoedema is discussed, keep Megan's scope clear:

  > Whilst Megan holds formal qualifications in upper quadrant lymphoedema management, she does not practise as a dedicated lymphoedema therapist. Instead, she uses this training to guide patients in early identification, risk reduction, and basic management strategies, and works closely with lymphoedema therapists when more comprehensive care is required.

- Forms collect health information: keep the privacy notes on the Contact and Referrers forms and the "don't send sensitive information" guidance.

## Accessibility

Aim for WCAG 2.2 AA. Readers may be fatigued, anxious, older, in pain or on mobile under stress.

- Semantic HTML, one `h1` per page, logical heading order.
- Visible focus states, keyboard-navigable menus, disclosures and forms.
- Labelled form fields, `fieldset`/`legend` for grouped inputs, clear error messages.
- Descriptive link text and large tap targets.
- Meaningful alt text; decorative images and icons get `alt=""` / `aria-hidden="true"`.
- No important text in images, no auto-playing carousels, respect `prefers-reduced-motion`.
- Short paragraphs, clear headings, anchor links on long pages, obvious CTAs and contact details.

## Design Tokens and Colour

Use tokens from `public/css/variables.css`. Never hard-code colours, sizes or spacing.

| Token | Name | Hex |
|---|---|---|
| `--color-primary-sage` | Soft Eucalyptus Sage | `#A8BFB3` |
| `--color-primary-dark` | Deep Eucalyptus | `#3F665C` |
| `--color-background` | Warm Off-White | `#F7F4EF` |
| `--color-warm-neutral` | Warm Sand | `#D8C3A5` |
| `--color-text` | Deep Charcoal Green | `#24332F` |
| `--color-accent` | Soft Clay Rose | `#C9A79C` (use sparingly) |

Contrast:

- OK: charcoal text on off-white, sage, sand or rose; white or off-white text on Deep Eucalyptus.
- Avoid: white text on sage or rose, pale text on pale backgrounds, long blocks of text in sage, sand or rose.

Fonts: headings use `--font-heading` (Georgia serif stack). Body uses `--font-body` (Source Sans 3 via Google Fonts, weights 400/500/600).

## Spacing and Typography

Applies to `public/css/**/*.css` and `*.html`.

### Heading margins (global rules in `base.css`)

| Element | `margin-bottom` | Notes |
|---------|-----------------|-------|
| `h1` | `--space-xl` | Page heroes only |
| `h2` | `--space-xl` | Section titles |
| `h3` | `--space-lg` | Subsection titles |
| `h4` | `--space-sm` | Also has `--space-lg` `margin-top` |

- Do **not** add `margin-top` on the first element after a heading to fake heading spacing. Let the heading's `margin-bottom` handle it (e.g. `.text-subheading`, `.section-intro__lead`).
- `.section__header` uses `margin-bottom: var(--space-xl)` for the intro block as a whole.

### Exceptions (override global heading margin when needed)

- `.site-footer__heading`: compact footer nav labels (`margin-bottom: var(--space-md)`).
- `.card__title`, `.disclosure__summary h3`: `margin: 0` (compact card/accordion labels).

### Section vs subsection spacing

- **Between sections**: `.section { padding-block: var(--space-section) }`. Do not duplicate with heading margins.
- **Within a section**: use the shared `.subsection` pattern (border-top + padding-top + margin-top) for visual dividers. Use `.subsection--divider` when a single subsection needs a divider after other content (e.g. Locations within Contact). Stacked subsections use `.subsection + .subsection` automatically.

### Lead paragraphs

- `.section-intro__lead` and `.text-subheading` style typography only, with no top margin. Spacing comes from the preceding `h1` or `h2`.
- Use `.section__header` when a heading and lead paragraph form a single intro block that needs extra space before the next content.
- `.page-hero__lead` uses `margin-top: var(--space-lg)` to separate hero body copy from the tagline above it.
- Use `.list-lead` for emphasised text that introduces a list.

### Disclosure accordions

- `.disclosure` has no default top margin. Spacing comes from the element above it.
- After `.section__header` or a bare `h2`, rely on that element's `margin-bottom` (`--space-xl`).
- When a disclosure follows body paragraphs, `p + .disclosure` adds `--space-xl` separation.

### Spacing scale

Use design tokens only: `--space-md` (1rem), `--space-lg` (1.5rem), `--space-xl` (2rem), `--space-2xl` (3rem), `--space-section` (clamp 3–5.5rem).

### Type scale

Use `--text-xs` through `--text-3xl` from `variables.css`. Do not add one-off `font-size` values.

| Token | Typical use |
|---|---|
| `--text-3xl` | `h1` |
| `--text-2xl` | `h2` |
| `--text-xl` | Default `h3` |
| `--text-lg` | `h4`, `.quals-group__heading`, pullquotes |
| `--text-md` | `.card__title`, leads, `.text-subheading` |
| `--text-base` | Body copy, form inputs |
| `--text-sm` | Buttons, nav, eyebrows, footer labels |
| `--text-xs` | Badges, footer legal |

Some `h3` elements use a smaller size via class. Reuse an existing token rather than adding overrides.

#### Eyebrows

`.page-hero__eyebrow` and `.section-intro__eyebrow` both use `--text-sm` with uppercase and letter-spacing.

## History

`docs/CHANGELOG.md` is frozen as of October 2026. Git history is the record from then on, so write descriptive commit messages instead of updating the changelog. Retired planning docs can be recovered with `git show docs-archive-2026-10:docs/<file>`.
