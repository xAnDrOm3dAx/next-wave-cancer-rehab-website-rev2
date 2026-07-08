# Changelog

All notable implementation work completed so far is summarised here.

## Unreleased

### Completed

- Extended the static site implementation to the Referrers page and refined Contact and Referrers forms, contact-detail layout, responsive typography/spacing, and cross-page styling consistency. Service image placeholders were added on a development branch. Home, Privacy Policy, and Terms & Conditions remain placeholder shells.

### Added

- Built the initial static site structure for Next Wave Cancer Rehab, including shared HTML page templates, stylesheet layers, and reusable layout/component classes.
- Added a responsive site header with desktop navigation, mobile hamburger navigation, active-page states, skip link support, and consistent navigation ordering across pages.
- Added a shared footer with grouped navigation links, legal links, brand tagline, and decorative wave treatment.
- Implemented the About page with sections for the brand name story, Megan Oster's profile, career and experience, clinical approach, qualifications, professional memberships, and lymphoedema context.
- Added Megan portrait image support using responsive image markup with WebP and JPEG fallbacks.
- Implemented the Services page hero, in-page anchor navigation, and detailed cancer rehabilitation service sections.
- Added service content for pre and post-operative care, breast cancer rehabilitation, scar management, side effect management, pain management, exercise rehabilitation, physical activity guidance, and functional assessment/return to activity.
- Added native disclosure accordions for detailed service subsections, including surgery stages, breast cancer rehabilitation topics, and treatment side effects.
- Added reusable UI patterns for page heroes, anchor lists, cards, callouts, qualification lists, disclosure accordions, forms, privacy/disclaimer notes, maps, feature items, and grid/split layouts.
- Implemented the remaining Services page sections: Exercise Rehabilitation, Physical Activity Guidance (evidence-based outcomes and COSA guidelines), and Functional Assessment & Return to Activity.
- Added a pre-footer CTA band on the Services page ("Not sure where to start?") with links to Contact and Your Next Steps.
- Implemented the Your Next Steps page with rehabilitation-stage disclosure sections, How It Works appointment guidance, telehealth information, and a pre-footer CTA.
- Implemented the Contact page with icon-backed contact details, two location cards with embedded maps, telehealth availability, and an enquiry form with required-field indicators and medical/privacy disclaimers.
- Added favicon assets and applied consistent header and footer SVG logo treatment across all pages.
- Adopted Source Sans 3 as the site body font via Google Fonts.
- Implemented the Referrers page with hero and in-page anchor navigation, referral scope and lymphoedema context, care-team collaboration guidance, how-to-refer contact details, a structured referral form (patient, referrer, reason-for-referral checklist, and clinical notes), and a pre-footer CTA.
- Added semantic `fieldset`/`legend` grouping to the referral form and visually hidden honeypot fields on the Contact and Referrers forms for spam reduction.
- Added service image placeholder styling with responsive aspect-ratio variants (wide, portrait, square) and placeholder elements in three Services page sections (`add-placeholders-for-images-rev1` branch).

### Changed

- Refined the About page copy and layout for clearer clinical positioning, a more supportive tone, and stronger emphasis on oncology-informed physiotherapy care.
- Reworked the Services page content structure from long static sections into scannable anchor-linked sections with collapsible detail where appropriate.
- Updated disclosure summary markup to use headings for improved document structure and readability.
- Improved service list styling, pullquote treatment, card spacing, responsive image sizing, and page-specific spacing rules.
- Adjusted navigation and footer styling for better mobile behaviour, clearer hover states, and more consistent alignment.
- Restored and refined typography/layout CSS variables, including content measure and line-height handling.
- Extended `.cta-band` styles for centred copy, action-button layout, and primary-button treatment on the dark background.
- Added `.section--prefooter` spacing so the Services CTA band clears the footer wave on large viewports.
- Reformatted disclosure summary markup across the Services page for readability.
- Merged the former Location page into Contact and removed `location.html` from the site structure.
- Renamed navigation from "Referrals" to "Referrers" site-wide and reorganised the footer into Explore and Get in touch groups.
- Replaced footer tagline text with the secondary logo image and refined footer alignment and sizing.
- Added border styling to shared components and refined checklist and split-column layout responsiveness.
- Clarified Megan's lymphoedema role on About and Services, and aligned About page headings for consistency.
- Enhanced responsive design with media queries for text alignment and layout on smaller screens; normalised anchor-link padding.
- Consolidated section heading spacing by applying a global `h2` bottom margin in `base.css` and removing redundant page-specific margin rules.
- Refactored contact detail item layout and styling for consistency across Contact and Referrers pages.
- Made the Contact enquiry form message field required.

### Fixed

- Fixed sticky-header anchor jump spacing by applying a global scroll offset.
- Fixed footer wave spacing and responsive layout issues.
- Hid the mobile hamburger control in desktop layouts.
- Corrected mobile navigation positioning and hover styling.
- Tidied CSS selector spacing and HTML formatting for maintainability.
- Fixed an invalid orphaned closing `</p>` tag preceding the Contact page enquiry form.
- Added missing `required` attributes to the Phone, "I am a," and Preferred contact method fields on the Contact form, matching their visible required-field indicators.
- Added a privacy notice disclaimer to the Contact form advising against including highly sensitive medical information.
- Updated the Contact page "after you enquire" messaging.
- Corrected the "Clinical expertise" heading on the About page to "Clinical Experience," removing a restricted AHPRA term.
- Updated the Noosa location card business name and its map embed title to Cancer Care Associates.
- Restored disclaimer box border-radius and corrected disclosure summary height for consistent accordion alignment.
- Updated the Referrers page referral contact email to match site-wide support address.
