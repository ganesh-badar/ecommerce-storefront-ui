# Design System — Amazon Clone UI (Educational Showcase)

## 1. Design Philosophy & System Identity
- **Product Truth**: High-fidelity educational clone of Amazon's e-commerce marketplace interface.
- **Mode**: Operate & Persuade — High information density, clear visual hierarchy, accessible e-commerce scanability.
- **Craft Floor Rules**: Zero gradient text, crisp borders/shadows, browser surface theming (selection, scrollbars, focus ring, tabular nums), minimum functional font size of 12px.

## 2. Color Palette
```css
:root {
  /* Surfaces */
  --amazon-nav-bg: #131921;
  --amazon-nav-belt: #0f1111;
  --amazon-subnav-bg: #232f3e;
  --amazon-body-bg: #e3e6e6;
  --amazon-card-bg: #ffffff;

  /* Brand Accents */
  --amazon-yellow: #febd69;
  --amazon-yellow-hover: #f3a847;
  --amazon-orange: #f08804;
  --amazon-orange-hover: #d67400;
  --amazon-link: #007185;
  --amazon-link-hover: #c7511f;

  /* Typography */
  --text-primary: #0f1111;
  --text-secondary: #565959;
  --text-white: #ffffff;
  --text-muted: #6b7280;
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
  - Elevated hover: `0 8px 24px -4px rgba(15, 17, 17, 0.12)`
  - Drawers / Modals: `0 10px 24px rgba(0, 0, 0, 0.18)`

## 5. Browser Surfaces
- `::selection`: `rgba(240, 136, 4, 0.28)` on `#0f1111`
- `input, textarea, select`: `caret-color: #f08804`
- `:focus-visible`: `2px solid #f08804`, outline offset 2px
- `::-webkit-scrollbar`: 9px width, `#a2a6ac` thumb with `#eaeded` track

