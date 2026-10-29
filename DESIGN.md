# Design System — Amazon Clone UI (Educational Showcase)

## 1. Design Philosophy & System Identity
- **Product Truth**: High-fidelity educational clone of Amazon's e-commerce marketplace interface.
- **Mode**: Operate & Persuade — High information density, clear visual hierarchy, accessible e-commerce scanability.
- **Color Theme**: Palette 3 — Espresso Bronze Warm Theme (`#211B1A` → `#E8D8CE`).
- **Craft Floor Rules**: Zero gradient text, crisp borders/shadows, browser surface theming (selection, scrollbars, focus ring, tabular nums), minimum functional font size of 12px.

## 2. Color Palette (Espresso Bronze)
```css
:root {
  /* Surfaces & Nav Belts (#211B1A → #E8D8CE ramp) */
  --amazon-nav-bg: #211B1A;      /* Deep espresso primary navigation */
  --amazon-nav-belt: #211B1A;
  --amazon-subnav-bg: #382A28;   /* Elevated subnav panel */
  --amazon-body-bg: #eaeded;     /* Neutral high-contrast backdrop */
  --amazon-card-bg: #ffffff;

  /* Warm Copper Accents */
  --palette-dark-1: #211B1A;
  --palette-dark-2: #382A28;
  --palette-dark-3: #60433D;
  --palette-text-muted: #916B60;
  --palette-text-secondary: #C1A094;
  --palette-text-primary: #E8D8CE;

  /* E-Commerce Actions */
  --amazon-yellow: #febd69;
  --amazon-yellow-hover: #f3a847;
  --amazon-orange: #f08804;
  --amazon-orange-hover: #d67400;

  /* Typography */
  --text-primary: #211B1A;
  --text-secondary: #60433D;
  --text-white: #E8D8CE;
  --text-muted: #C1A094;
}
```

## 3. Typography
- **Primary Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Numerals**: `font-variant-numeric: tabular-nums` for prices, discounts, ratings, item counts.
- **Scale**:
  - Headings: 1.15rem – 1.4rem (700 weight)
  - Body: 14px – 16px (400 / 500 weight)
  - Badges & Meta: 12px (700 weight, meets WCAG 11px floor)

## 4. Elevation & Geometry
- **Corners**: 4px radius on buttons & inputs (`--radius-sm`), 8px on product cards (`--radius-md`).
- **Shadows**: Single declaration per surface:
  - Default cards: 1px subtle border (`rgba(0, 0, 0, 0.08)`)
  - Elevated hover: `0 8px 24px -4px rgba(33, 27, 26, 0.12)`
  - Drawers / Modals: `0 10px 24px rgba(33, 27, 26, 0.18)`

## 5. Browser Surfaces
- `::selection`: `rgba(193, 160, 148, 0.35)` on `#211B1A`
- `input, textarea, select`: `caret-color: #f08804`
- `:focus-visible`: `2px solid #f08804`, outline offset 2px
- `::-webkit-scrollbar`: 9px width, `#C1A094` thumb with `#eaeded` track
