# Changelog

All notable implementation work completed so far is summarised here.

## Unreleased

### Completed

- Completed the static site implementation across Home, About, Services, Your Next Steps, Contact, and Referrers, including shared navigation/footer, reusable CSS component patterns, accessibility-minded accordions and anchor behaviour, return-to-top support, site-wide branding, and a full referral form for health professionals. The Privacy Policy page is complete; Terms & Conditions remains a placeholder page and is intentionally unlinked from site navigation. Service image placeholders exist on an experimental, unmerged branch (`add-placeholders-for-images-rev1`).
- The `build-referrers-page` branch (not yet merged to `main`) carries the completed Referrers page plus a round of site-wide polish: consolidated form sections, a "Refer a Patient" call-to-action nav treatment, global anchor-scroll handling, and a more robust return-to-top control.

### Added

- Added a full Privacy Policy page with sections covering personal and health information, website enquiries, secure storage, rights, complaints, and contact details, replacing the placeholder shell with ready-to-read privacy guidance.
- Added custom-domain configuration for `www.nextwavecancerrehab.com.au` so the static site can resolve through the preferred public web address.
- Added a thank you confirmation page for enquiry and referral submissions, giving visitors a clear next step, response-time expectation, and urgent-care guidance after forms are sent.
- Added hidden form source and page-load fields to the Contact and Referrers forms so submissions can identify where they came from and support spam timing checks.
- Added client-side validation and visible error messaging to the Contact and Referrers forms, helping visitors fix missing or incorrectly formatted fields before sending an enquiry or referral.
- Added a revised website header logo asset (`primary-logo-website-header-rev1.svg`) with updated artwork for clearer, proportionally scaled branding in the site header.
- Added a dedicated website header logo asset (`primary-logo-website-header-rev1.svg`) and applied it on the homepage for a sharper, proportionally scaled brand mark in the site header.
- Added `Document.svg` to the image library as a logo asset for future use.
- Added icon and subheading styling to the Your Next Steps rehabilitation-stage disclosure summaries, so each stage's expandable section has a clearer visual heading at a glance.
- Implemented the Home page with a branded hero, About snapshot with Megan's portrait, a Services snapshot with four stage cards, a Your Next Steps summary, a Contact snapshot with phone, email, telehealth, and location details, and a closing CTA band — replacing the previous placeholder shell.
- Added four green SVG service icons to the homepage service cards so each rehabilitation stage is visually distinct at a glance.
- Added in-page anchor navigation and section IDs to the Contact page (Contact Details, Locations, Enquiry Form) and Your Next Steps page (Support at Every Stage, How It Works) so visitors can jump directly to key sections from the page hero.
- Added a "How to Refer" in-page anchor link on the Referrers page hero so visitors can jump directly to referral contact details alongside the existing Referral Form link.
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
- Added service image placeholder styling with responsive aspect-ratio variants (wide, portrait, square) and placeholder elements in three Services page sections (`add-placeholders-for-images-rev1` branch, experimental/unmerged).
- Added a `.site-nav__link--cta` / `.mobile-nav__link--cta` pill-button treatment, applied to the Referrers navigation link (renamed to "Refer a Patient") across the desktop nav, mobile nav, and footer on every page.
- Added an in-page anchor link back to the Referral Form from the Referrers page hero.
- Added `input[type="date"]` styling to `base.css` so date fields match the width of other form controls.
- Added a project-level Cursor rule (`.cursor/rules/spacing-typography.mdc`, mirrored in `docs/spacing-typography.mdc`) documenting section-heading spacing and typography conventions for future edits.

### Changed

- Refactored footer wave layout to position the decorative wave with padding on the footer content container instead of negative margins, and removed page-specific bottom-padding overrides on the Services pre-footer CTA band and Privacy Policy contact section that had compensated for wave overlap, simplifying maintenance and making footer clearance more predictable site-wide.
- Replaced the reused qualification-list classes on Services page content lists with a dedicated `.plain-list` pattern so ordinary bullet lists are named more clearly while keeping the same sage-marker presentation.
- Removed obsolete primary and secondary logo assets (revision 1 and 2 PNG and SVG variants) and unused accordion and feature-item CSS, leaving only the logo files and disclosure styles the live pages actually use.
- Converted the About page Career and Experience section from static narrative blocks into responsive disclosure sections that stay fully expanded on desktop and collapse into an accordion on smaller screens, making the longer career content easier to scan on mobile without hiding it on larger viewports.
- Applied dark card styling to the "My Approach" panel in the Career and Experience section so it stands apart from the narrative disclosures beside it.
- Removed the Terms & Conditions link from the footer legal area across every page, leaving Privacy Policy as the sole legal link while the Terms page remains unpublished.
- Grouped the Contact form's name, email, and phone fields into a semantic "Your Details" fieldset, giving personal details a clearer section heading for visitors and assistive technology.
- Replaced dropdown selects with radio button groups on the Contact form for "I am a" and preferred contact method, making all choices visible at once and adding an "Other (please specify)" text field when the listed roles do not apply.
- Moved the referral form's patient-consent confirmation to the end of the form, immediately before submission, so referrers review and confirm consent as a final step.
- Marked the referral form's reason-for-referral checklist and clinic and contact-preference radio groups as required, aligning visible required indicators with fields that must be completed.
- Switched Contact and Referrers form submission to background sending so visitors receive immediate feedback without a full page reload, including a loading state on the submit button, a request timeout, a clear message if sending fails, and redirect to the thank-you page after a successful submission.
- Updated thank-you page copy to remove the fixed 24-hour response-time expectation and clarify urgent-care guidance, directing visitors to their GP or treating team before calling emergency services.
- Refined the Privacy Policy contact section into the shared contact-details grid and adjusted nearby spacing so phone, email, and business details are easier to scan.
- Reduced the smallest `--text-xl` size so larger text scales more gently on smaller screens.
- Updated the Privacy Policy page spacing so callouts following body copy have more consistent breathing room.
- Updated the About page hero subheading from "clarity" to "trust" to better reflect the supportive tone of the brand.
- Connected the Contact and Referrers forms to the website's form-processing endpoint so valid submissions can be sent instead of remaining static.
- Tightened email and phone validation on the Contact and Referrers forms with clearer examples, helping visitors understand the required format before submitting.
- Updated the site header logo to the revision 2 header asset across every page, replacing the revision 1 variant on the homepage and the generic logo on inner pages for consistent header branding site-wide.
- Further refined the design token scale: tightened section-spacing and heading-size clamps, documented the full type scale in `Design_Tokens.md` and the Cursor spacing-typography rule, set list leads to `--text-md`, standardised eyebrow uppercase styling, and reduced navigation link font size to `--text-sm`.
- Restored the `--line-height-heading` CSS variable so headings use a consistent line height for improved readability.
- Switched the homepage Services snapshot from a four-column to a two-column grid and introduced a `.card--stack-left` modifier so stack cards align left for easier scanning of service categories.
- Shortened the homepage About section heading from "About Next Wave Cancer Rehab" to "About Next Wave" for a cleaner, brand-aligned title.
- Updated the homepage locations snapshot to use the Cancer Care Noosa clinic name, aligning with the Contact page and Referrers form.
- Removed legacy font, colour, and hover styling from header and footer logo links, which now display image-only branding without redundant text-link treatment.
- Fine-tuned the spacing scale between page sections to use smaller, more proportional values for a tighter, more consistent layout across screen sizes.
- Tidied up About page paragraph breaks and simplified the qualifications and memberships section styling.
- Consolidated heading spacing rules into a single sitewide location and refined the overall spacing scale for headings and disclosures.
- Tightened spacing around disclosure accordions and section headings site-wide, and updated the About and Services pages to use the shared heading layout so spacing stays consistent.
- Introduced shared subsection-divider and emphasised-list styling used across the About, Contact, Referrers, Services, and Your Next Steps pages, replacing several page-specific spacing rules with consistent shared patterns.
- Introduced a shared contact-details grid layout used consistently across the Home, Contact, and Referrers pages, removing duplicated grid styling.
- Applied alternating sage and sand background colours to several Services page cards (Breast Cancer Rehabilitation, Scar Management, Pain Management, Exercise Rehabilitation, and Functional Assessment) for clearer visual variety, and switched the card hover effect from a border to a shadow for a cleaner look.
- Increased the vertical padding inside cards for better visual balance.
- Separated the icon styling on homepage card images from the card layout itself, and slightly reduced the spacing below the homepage hero submark to tighten the header.
- Gave the homepage service card images a soft sage background and rounded corners for a more polished, consistent look.
- Consolidated `.service-card` and `.career-approach-card` into a unified `.card` component with a `.card--stack` modifier, reducing duplicate styles and aligning card presentation across the Home and About pages.
- Refined homepage service cards with centred layout, card shadows and hover elevation, stage icons, and tighter padding; settled cards as informational display elements rather than navigational links after exploring deep-link behaviour.
- Introduced a reusable `.text-subheading` class and standardised hero subheading markup across all pages, decoupling subheading appearance from lead paragraphs for consistent sizing, colour, and spacing.
- Refined homepage and site-wide hero layout: responsive submark treatment, updated hero copy, tighter grid and anchor-list spacing, and improved small-screen alignment.
- Increased spacing below the homepage hero submark for clearer separation from the heading block.
- Refined About page career-and-approach cards with bordered styling, full-height flex layout, and quote typography that follows global styles for more consistent presentation.
- Updated Megan Oster's title from "Director" to "Principal Physiotherapist and Founder" on the About page and homepage to reflect her role more accurately.
- Consolidated the Contact enquiry form's duplicate disclaimer boxes into a single message covering both urgent medical concerns and sensitive-information guidance; softened emergency wording on the Referrers form ("please call 000").
- Replaced colons with em dashes in Your Next Steps rehabilitation-stage headings for consistency with other section headings.
- Renamed the Contact form section from "Send an Enquiry" to "Enquiry Form" to match its in-page anchor label.
- Softened the Contact enquiry form lead-in punctuation for a calmer tone.
- Updated Your Next Steps rehabilitation-stage disclosures to use heading markup in summaries, aligning with the Services page pattern for clearer document structure.
- Restyled referral form fieldset legends as heading-weight text (removing nested heading elements) so section labels read more clearly and match the site's typography hierarchy.
- Separated the Referrers page "How to Refer" and "Referral Form" back into distinct sections for clearer page structure and independent anchor targets.
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
- Simplified the Referrers page by removing the "What We Can Help With" checklist and the standalone lymphoedema callout section, and by removing the duplicate pre-footer "Not Sure Whether to Refer?" CTA band, reducing repetition with the Services page.
- Merged the "How to Refer" and "Referral Form" sections into a single combined section on the Referrers page, and moved global in-page anchor offset handling to `scroll-padding-top` on `html` (`layout.css`), removing the per-page `scroll-margin-top` rules it replaced on the Your Next Steps and Referrers pages.
- Refactored the referral form layout: grouped field legends under `h4` headings for consistency with visual hierarchy, enforced consistent width on referral input fields (including the "Other" reason text input), and added the clinic business names ("Sycamore Health, Sippy Downs" and "Cancer Care Noosa, Noosaville") to the appointment-preference options.
- Refined the Referrers page hero copy to describe the fuller range of referring health professionals (including nurse specialists, cancer care coordinators, radiation therapists, and complementary therapists) in more inclusive language.
- Reworked the return-to-top button so it activates independently of any `.anchor-list` on the page (previously the button only appeared on pages with an anchor-list): visibility is now driven by an `IntersectionObserver` on the page hero, with a scroll-position fallback for browsers without `IntersectionObserver` support.
- Split the long page-hero lead paragraphs on the Contact, Services, and Your Next Steps pages into shorter, separately styled paragraphs and tightened wording for readability (replacing an em dash with a comma on Services, and separating the tumour-group/age-range sentence on Your Next Steps).
- Consolidated the Referrers page "Working Alongside Your Care Team" content into the page hero as additional lead paragraphs, removed the standalone section, and applied `section--sage` styling to the combined "How to Refer" and Referral Form section for visual continuity.
- Updated the Contact page hero CTA from Megan-specific scheduling language ("she'll be in touch to arrange a time that suits you") to practice-level wording ("contact us directly") with a response-time expectation ("We will endeavour to respond as soon as possible").

### Fixed

- Fixed footer wave overlapping content on short pages such as the thank-you confirmation page by removing the wave's negative top margin, which had previously pulled the decoration up into the page above and required per-page clearance workarounds.
- Improved validation error placement on the Contact and Referrers forms so messages appear below the relevant fieldset legend for radio and grouped-checkbox fields, below the checkbox label for standalone checkboxes, and with clearer spacing on the referral form when an error precedes a field group.
- Improved Contact and Referrers form validation for radio button and checkbox groups so each group shows one clear error message instead of repeating the same message for every option, including proper handling when no reason for referral is selected.
- Removed redundant Privacy Policy contact markup and obsolete spacing CSS after the contact grid was simplified.
- Fixed Privacy Policy footer clearance so the final contact section does not crowd the decorative footer wave on larger screens.
- Corrected broken heading and panel markup in the Your Next Steps rehabilitation disclosures so accordion summaries and content nest properly for accessibility.
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
- Updated the Noosa location card business name and its map embed title to Cancer Care Noosa.
- Restored disclaimer box border-radius and corrected disclosure summary height for consistent accordion alignment.
- Updated the Referrers page referral contact email to match site-wide support address.
