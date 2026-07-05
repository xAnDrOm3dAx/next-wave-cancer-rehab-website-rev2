# Next Wave Cancer Rehab — Clean Cursor Documentation Pack

This is the simplified 6-file documentation pack for building the **Next Wave Cancer Rehab** static website in Cursor.

## How to Use This Pack

Upload this `/docs` folder to Cursor and ask Cursor to read these files before making changes.

Treat this file as the index, and treat `Next_Wave_Website_Planning_Handover.md` as the master source of truth.

## Files Included

1. `README.md`  
   This index file. Use it to understand how the documentation pack is organised.

2. `Next_Wave_Website_Planning_Handover.md`  
   The master planning document. This is the authoritative source for the project direction, sitemap, page architecture, brand tone, content strategy, accessibility notes, healthcare compliance cautions, SEO direction, and build philosophy.

3. `Brand_Style_Guide.md`  
   The brand reference. Use this for visual direction, colour personality, logo guidance, typography direction, imagery direction, voice, tone, and safe public copy style.

4. `Design_Tokens.md`  
   The CSS design-token reference. Use this when building `variables.css`, including colours, spacing, typography scale, layout widths, border radius, shadows, and interactive colour rules.

5. `Build_Rules.md`  
   The practical build guide for Cursor. Use this for technology constraints, file structure, coding rules, reusable components, accessibility requirements, and the recommended build order.

6. `Content_Source.md`  
   The source-content reference. Use this when writing or structuring page content for About, Services, Your Next Steps, Referrers, Contact, Privacy Policy, and Terms & Conditions.

## Asset Included

- `assets/logo-reference-final.png` — current logo reference image.

## Cursor Instruction to Use First

```text
Please read the files in /docs before making changes. Treat Next_Wave_Website_Planning_Handover.md as the master source of truth. Use the other documents as supporting references. Do not introduce React, Next.js, Tailwind, npm tooling, or complex architecture. This is a static HTML/CSS/JS website. Build one page or section at a time.
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
