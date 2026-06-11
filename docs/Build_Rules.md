# Build Rules

Use this file as the practical Cursor build guide for the Next Wave Cancer Rehab static website.

The master source of truth is `Next_Wave_Website_Planning_Handover.md`. This file distils the implementation rules from that handover.

---

# 1. Build Approach

The website will be built as a simple static frontend.

## Technology

Use:

- HTML
- CSS
- light JavaScript only where required

Avoid:

- React
- Next.js
- Tailwind
- heavy build tools
- npm workflows unless explicitly added later
- complex component architecture
- unnecessary animation libraries
- over-engineering

## Development Workflow

The current preferred workflow is:

**AI plans → Cursor implements → AI reviews**

The user has junior-level HTML, CSS, and JavaScript skills. Code should therefore be clear, semantic, easy to edit, and organised into simple files.

Build the website one page or section at a time. Do not generate the whole website in one pass unless specifically requested.

---

# 2. Public-Copy Constraints

Do not use the word “specialist” in public copy unless that title is formally held and legally appropriate.

Use wording such as:

- experienced oncology physiotherapist
- advanced training
- cancer rehabilitation experience
- oncology physiotherapy care
- evidence-informed support
- safe, individualised support
- in collaboration with your medical team

Avoid:

- specialist
- best
- cure
- guarantee
- eliminate
- miracle
- beat cancer
- fight cancer
- cancer warrior
- life-changing results
- no risk
- prevent, unless medically and legally appropriate

Do not publish testimonials until advertising compliance has been reviewed.

---

# 3. Recommended File Structure

```text
next-wave-cancer-rehab/
├── index.html
├── about.html
├── services.html
├── your-next-steps.html
├── referrals.html
├── location.html
├── contact.html
├── privacy-policy.html
├── terms-of-use.html
├── public/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── pages.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   └── logo-reference-final.png
│   └── favicons/
└── docs/
    ├── README.md
    ├── Next_Wave_Website_Planning_Handover.md
    ├── Brand_Style_Guide.md
    ├── Design_Tokens.md
    ├── Build_Rules.md
    └── Content_Source.md
```

---

# 4. CSS File Roles

## `reset.css`

Use for modern reset and box-sizing.

## `variables.css`

Use for design tokens: colours, typography, spacing, layout widths, radii, shadows.

## `base.css`

Use for body styles, headings, paragraphs, links, buttons, forms, images, focus states.

## `layout.css`

Use for header, navigation, footer, containers, page sections, grids.

## `components.css`

Use for reusable components such as cards, CTAs, service cards, page hero, section intro, accordions, badges, callout boxes.

## `pages.css`

Use for page-specific exceptions only.

---

# 5. Reusable Components

Build these once and reuse across pages:

## Global Components

- Site header
- Main navigation
- Mobile navigation
- Footer
- Logo lockup
- Primary button
- Secondary button
- Text link
- Page hero
- Section intro
- CTA band
- Card
- Service card
- Feature grid
- Anchor link list
- Callout box
- Split image/text section
- Accordion or disclosure component
- Contact form
- Referral form placeholder
- Location/map block
- Privacy notice box

## Healthcare-Specific Components

- “What to expect” step list
- “When to book” stage cards
- “Who this supports” cards
- “Bring to your appointment” checklist
- “For referrers” referral reason list
- Clinical scope note
- Privacy-sensitive contact form note
- Medical disclaimer box

---

# 6. Accessibility Requirements

Aim for WCAG 2.2 AA where practical.

Key requirements:

- semantic HTML
- clear heading hierarchy
- body text at least 16px, preferably 17–18px where appropriate
- strong colour contrast
- visible focus states
- keyboard navigable menus and forms
- descriptive link text
- large tap targets
- clear form labels
- helpful error messages
- alt text for meaningful images
- decorative images marked appropriately
- no important text embedded only in images
- no auto-playing carousels
- no excessive animation
- respect `prefers-reduced-motion`
- mobile-first responsive design
- avoid low-contrast text
- avoid placing text over busy images

Healthcare users may be fatigued, anxious, older, cognitively overloaded, experiencing pain, recovering from surgery, using assistive technology, or searching on mobile while under stress.

Therefore:

- keep pages scannable
- use short paragraphs
- use clear section headings
- provide anchor links for long pages
- make CTAs easy to find
- make contact information obvious
- avoid unnecessary interaction patterns

---

# 7. Healthcare Compliance Notes

This website is for an Australian regulated healthcare context.

Be careful with:

- testimonials
- outcome claims
- recurrence claims
- before-and-after claims
- guaranteed results
- exaggerated benefits
- clinical claims without references
- privacy and collection of health information
- form security
- medical disclaimers
- implying specialisation where not formally titled

Do not publish testimonials until advertising compliance has been reviewed.

Use careful claim language:

- may help
- can support
- aims to
- may reduce
- where appropriate
- in collaboration with your medical team
- depending on your treatment, symptoms, and goals

---

# 8. Recommended Build Order

1. Create static file structure.
2. Add global CSS files.
3. Add design tokens.
4. Add base typography and layout rules.
5. Build header and footer.
6. Build reusable components.
7. Build homepage.
8. Build About page.
9. Build Services page.
10. Build Your Next Steps page.
11. Build Contact page.
12. Build Referrals page.
13. Build Location page.
14. Add Privacy Policy and Terms of Use placeholder pages.
15. Review responsiveness.
16. Review accessibility.
17. Review healthcare compliance.
18. Optimise images.
19. Prepare for deployment.

---

# 9. Cursor Master Prompt

Use this prompt at the start of the Cursor build:

```text
You are helping build a static frontend website for Next Wave Cancer Rehab, an oncology physiotherapy / cancer rehabilitation service based on the Sunshine Coast, Queensland, Australia.

Build constraints:
- Static HTML, CSS and light JavaScript only.
- No React.
- No Next.js.
- No Tailwind.
- No npm/build tooling unless explicitly requested later.
- Keep the code understandable for a junior developer.
- Use semantic HTML.
- Use accessible, responsive CSS.
- Build one page or section at a time.
- Do not over-engineer.

Brand tone:
- Calm, warm, clinically trustworthy, premium, human and emotionally safe.
- Professional but not corporate.
- Hopeful but not overly cheerful.
- Coastal influence should be subtle and mature, not beach-themed.

Public-copy constraints:
- Do not use the word “specialist” in public copy.
- Do not describe Megan as a titled specialist.
- Use wording such as “experienced”, “advanced training”, “oncology physiotherapy experience”, “cancer rehabilitation care”, and “evidence-informed support”.
- Avoid guarantees, cures, exaggerated outcomes or fear-based copy.
- Avoid warrior/fight/battle language.
- Avoid using patient testimonials unless compliance has been reviewed.

Confirmed site pages:
- index.html
- about.html
- services.html
- your-next-steps.html
- referrals.html
- location.html
- contact.html
- privacy-policy.html
- terms-of-use.html

Main navigation:
- Home
- About
- Services
- Your Next Steps
- Referrals
- Contact

Footer navigation:
- Home
- About
- Services
- Your Next Steps
- Referrals
- Location
- Contact
- Privacy Policy
- Terms of Use

Colour palette:
- Soft Eucalyptus Sage: #A8BFB3
- Deep Eucalyptus: #3F665C
- Warm Off-White: #F7F4EF
- Warm Sand: #D8C3A5
- Deep Charcoal Green: #24332F
- Soft Clay Rose: #C9A79C

Start by scaffolding the static file structure and CSS files. Do not write every page at once. First create the architecture, global variables, reset/base styles, header, footer and reusable layout utilities.
```

---

# 10. Definition of Done for Initial Build

The initial build is complete when:

- all confirmed pages exist
- header and footer are consistent
- navigation works on desktop and mobile
- pages are responsive
- core design tokens are implemented
- colour contrast is acceptable
- all images have appropriate alt text
- forms have labels
- focus states are visible
- page metadata is present
- no testimonial is published without review
- no inappropriate clinical claims are present
- the site feels calm, premium, clear, and trustworthy
- a patient can understand what to do next within a few seconds
- a referrer can quickly find referral information

---

# 11. Final Build Philosophy

Keep the site simple.

This is not a tech showcase. It is a calm healthcare website for people navigating cancer treatment, recovery, survivorship, or advanced illness.

Every design decision should support:

- clarity
- trust
- calm
- accessibility
- safety
- clinical credibility
- emotional reassurance
- easy next steps

When in doubt, choose the simpler, calmer, more readable option.
