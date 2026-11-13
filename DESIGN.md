# Design System — Amazon Clone UI (Educational Showcase)

## 1. Design Philosophy & System Identity
- **Product Truth**: High-fidelity educational clone of Amazon's e-commerce marketplace interface, retaining 100% of the original feature set, logo, categories, catalog, and search mechanics.
- **UI Architecture & Color Grading**: Inspired by modern minimalist design specifications — neat, clean, uncluttered visual hierarchy, hairline structural borders, frosted glass sticky headers, and calibrated color grading across three distinctive architectural palettes.
- **Craft Floor Rules**: Zero gradient text, high contrast (WCAG AA compliant ≥ 4.5:1), browser surface theming (custom scrollbars, text selection, focus rings), and tabular numerals (`tabular-nums`) for all prices and numeric metrics.

---

## 2. Multi-Palette Color Grading System
The UI provides an interactive palette switcher on the secondary navigation bar (`.panel`), persisting user selection in `localStorage`:

### Palette 3 (Default): Warm Espresso Bronze Ramp (`#211B1A` → `#E8D8CE`)
- `--amazon-body-bg: #211B1A;` — Deep espresso matte canvas
- `--amazon-card-bg: #382A28;` — Warm bronze card surfaces
- `--border-subtle: #60433D;` — Subtle structural borders
- `--border-medium: #916B60;` — Medium focus borders
- `--action-solid: #C1A094;` — Primary action CTA buttons
- `--action-solid-text: #211B1A;` — Dark high-contrast button text (contrast > 7:1)
- `--text-primary: #E8D8CE;` — High-contrast primary text (contrast > 13:1)
- `--text-secondary: #C1A094;` — Secondary metadata labels

### Palette 1: Slate Steel Blue Ramp (`#111522` → `#DCE3EF`)
- `--amazon-body-bg: #111522;` — Midnight slate canvas
- `--amazon-card-bg: #1E263B;` — Elevated slate cards
- `--border-subtle: #303D59;` — Subtle divider borders
- `--border-medium: #536684;` — Medium focus borders
- `--action-solid: #98A9C4;` — Primary action CTA buttons
- `--action-solid-text: #111522;` — High-contrast button text
- `--text-primary: #DCE3EF;` — Primary high-contrast text

### Palette 2: Obsidian Velvet Ramp (`#17151C` → `#E2DDE7`)
- `--amazon-body-bg: #17151C;` — Deep velvet console canvas
- `--amazon-card-bg: #292531;` — Elevated velvet cards
- `--border-subtle: #45404F;` — Subtle divider borders
- `--border-medium: #716879;` — Medium focus borders
- `--action-solid: #AAA2B3;` — Primary action CTA buttons
- `--action-solid-text: #17151C;` — High-contrast button text
- `--text-primary: #E2DDE7;` — Primary high-contrast text

---

## 3. Typography & Spacing Hierarchy
- **Primary Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Numerals**: `font-variant-numeric: tabular-nums` for all prices, ratings, and cart counters.
- **Hierarchy & Breathing Room**:
  - Headings: 1.28rem – 1.4rem (700 weight, line-height 1.3)
  - Body: 14px – 16px (400 / 500 weight, line-height 1.5)
  - Badges & Meta: 12px (600 / 700 weight, strictly above the 11px accessibility floor)
  - Card Padding: Generous 20px 18px 16px padding on all product tiles.

---

## 4. Retained Native Features & Components
1. **Header & Navigation**:
   - Amazon Logo with prominent DEMO badge
   - "Deliver to" location selector with modal dialog
   - Debounced multi-category search with dropdown category selector
   - Language selector dropdown with flag indicators
   - Returns & Orders, and Accounts & Lists navigation
   - Slide-out Cart Drawer with item increment/decrement and live calculation
2. **Subnavigation & Side Drawer**:
   - "All" hamburger menu opening 360px category side drawer
   - Today's Deals, Customer Service, Registry, Gift Cards, Sell
   - Interactive Theme Palette Switcher
3. **Hero & Shop Grid**:
   - Hero carousel with smooth controls
   - 12+ CMS-driven product boxes with badges, star ratings, prices, and "Add to Cart" actions
4. **Structured 4-Tier Footer**:
   - Back to Top smooth scroll button
   - 4-column directory (Get to Know Us, Make Money with Us, Amazon Payment Products, Let Us Help You)
   - Brand logo & currency/language selectors
   - Legal notice & educational disclaimer
