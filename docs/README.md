# Next Wave Cancer Rehab — Clean Cursor Documentation Pack

This is the simplified 6-file documentation pack for building the **Next Wave Cancer Rehab** static website in Cursor.

## How to Use This Pack

Upload this `/docs` folder to Cursor and ask Cursor to read these files before making changes.

Treat this file as the index. There is no single master source-of-truth
document — use `Build_Rules.md`, `Content_Source.md`, `Design_Tokens.md`, and
`Brand_Style_Guide.md` together as the current authority for structure,
copy, and design tokens. Megan_Verbatim_Source.md is a reference for
original wording and AHPRA compliance flagging only.

## Files Included

1. `README.md`  
   This index file. Use it to understand how the documentation pack is organised.

2. `Brand_Style_Guide.md`  
   The brand reference. Use this for visual direction, colour personality, logo guidance, typography direction, imagery direction, voice, tone, and safe public copy style.

3. `Design_Tokens.md`  
   The CSS design-token reference. Use this when building `variables.css`, including colours, spacing, typography scale, layout widths, border radius, shadows, and interactive colour rules.

4. `Build_Rules.md`  
   The practical build guide for Cursor. Use this for technology constraints, file structure, coding rules, reusable components, accessibility requirements, and the recommended build order.

5. `Content_Source.md`  
   The source-content reference. Use this when writing or structuring page content for About, Services, Your Next Steps, Referrers, Contact, Privacy Policy, and Terms & Conditions.

## Asset Included

- `assets/logo-reference-final.png` — current logo reference image.
- `public/favicons` - favicons.
- `public/images` - images.
- `public/icons` - icons.

## Cursor Instruction to Use First

```text
Please read the files in /docs before making changes. Do not introduce React, Next.js, Tailwind, npm tooling, or complex architecture. This is a static HTML/CSS/JS website. Build one page or section at a time.
```

## Build Approach

The website will be built as a simple static frontend using:

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

The preferred workflow is:

**AI plans → Cursor implements → AI reviews**

## Confirmed Pages

```text
index.html
about.html
services.html
your-next-steps.html
referrers.html
contact.html
privacy-policy.html
terms-and-conditions.html
```

## Confirmed Navigation

Main navigation:

- Home
- About
- Services
- Your Next Steps
- Referrers
- Contact

Footer navigation:

- Home
- About
- Services
- Your Next Steps
- Referrers
- Contact
- Privacy Policy
- Terms & Conditions

```

```
