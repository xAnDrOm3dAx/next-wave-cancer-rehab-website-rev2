# CSS Design Tokens

# Colour Palette

The confirmed colour palette is:

| Token | Name | Hex | Intended Use |
|---|---|---:|---|
| `--color-primary-sage` | Soft Eucalyptus Sage | `#A8BFB3` | Main brand accents, lighter UI elements, soft highlights |
| `--color-primary-dark` | Deep Eucalyptus | `#3F665C` | Primary buttons, structural elements, strong brand presence |
| `--color-background` | Warm Off-White | `#F7F4EF` | Main page background |
| `--color-warm-neutral` | Warm Sand | `#D8C3A5` | Borders, secondary containers, subtle depth |
| `--color-text` | Deep Charcoal Green | `#24332F` | Body text, headings, high-contrast interface text |
| `--color-accent` | Soft Clay Rose | `#C9A79C` | Special highlights, small accents, occasional CTA support |

## Colour Personality

The palette should feel:

- warm
- soft
- organic
- grounded
- calm
- coastal without being beachy
- clinical without being sterile
- premium without being cold

## Recommended Colour Usage

### Background

Use Warm Off-White `#F7F4EF` as the main page background.

### Text

Use Deep Charcoal Green `#24332F` for body text and headings.

### Buttons

Use Deep Eucalyptus `#3F665C` for primary buttons.

Button text should generally be white or warm off-white for contrast.

### Accents

Use Soft Eucalyptus Sage `#A8BFB3` for subtle cards, highlights, section details, badges, and background tints.

Use Warm Sand `#D8C3A5` for dividers, soft borders, and secondary containers.

Use Soft Clay Rose `#C9A79C` sparingly. It should not dominate the brand. It can be used for small highlights, gentle emphasis, or supporting accent areas.

## Colour Accessibility Notes

Recommended combinations:

- Deep Charcoal Green on Warm Off-White
- White or Warm Off-White text on Deep Eucalyptus
- Deep Charcoal Green text on Soft Eucalyptus Sage
- Deep Charcoal Green text on Warm Sand
- Deep Charcoal Green text on Soft Clay Rose

Avoid:

- white text on Soft Eucalyptus Sage
- white text on Soft Clay Rose
- pale text on pale backgrounds
- decorative text with poor contrast
- long blocks of text in sage, sand, or rose

---

# CSS Design Tokens

Use this as the starting point for `public/css/variables.css`.

```css
:root {
  /* Brand colours */
  --color-primary-sage: #A8BFB3;
  --color-primary-dark: #3F665C;
  --color-warm-neutral: #D8C3A5;
  --color-background: #F7F4EF;
  --color-text: #24332F;
  --color-accent: #C9A79C;

  /* Semantic colours */
  --color-surface: #FFFFFF;
  --color-surface-warm: #FBF8F3;
  --color-surface-sage: rgba(168, 191, 179, 0.28);
  --color-surface-sand: rgba(216, 195, 165, 0.26);
  --color-border: rgba(36, 51, 47, 0.16);
  --color-border-strong: rgba(36, 51, 47, 0.28);
  --color-muted-text: rgba(36, 51, 47, 0.76);

  /* Interactive colours */
  --color-button-bg: var(--color-primary-dark);
  --color-button-text: #FFFFFF;
  --color-button-hover: #33544B;
  --color-link: var(--color-primary-dark);
  --color-focus: var(--color-primary-dark);

  /* Typography */
  --font-heading: Georgia, Cambria, "Times New Roman", serif;
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --line-height-tight: 1.1;
  --line-height-heading: 1.18;
  --line-height-body: 1.7;

  /* Type scale */
  --text-xs: 0.8125rem;
  --text-sm: 0.9375rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: clamp(1.375rem, 2vw, 1.625rem);
  --text-2xl: clamp(1.75rem, 3vw, 2.5rem);
  --text-3xl: clamp(2.35rem, 5vw, 4.5rem);

  /* Spacing */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: clamp(4rem, 8vw, 7rem);
  --space-section: clamp(4rem, 8vw, 7rem);

  /* Layout */
  --container: 72rem;
  --container-wide: 82rem;
  --container-narrow: 48rem;
  --content-measure: 68ch;

  /* Radius and shadows */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-pill: 999px;
  --shadow-soft: 0 1.25rem 3rem rgba(36, 51, 47, 0.08);
}
```
