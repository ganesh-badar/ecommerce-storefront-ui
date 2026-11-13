# Design System — Apple Flagship Store & UI Showcase

## 1. Product Truth & Design Philosophy
- **Product Truth**: High-fidelity recreation of the Apple Flagship Store and Cupertino product showcase based on the official specification and layout hierarchy.
- **Visual Language**: Minimalist Cupertino typography, frosted glass sticky navigation, full-bleed cinematic hero showcases, modular 2x3 bento product grid, horizontal media streaming carousel (Apple TV+), and structured 5-column directory footer.
- **Craft Floor Rules**: Zero gradient text, high contrast (WCAG AA compliant: ≥4.5:1), tabular numerals on all prices and numerical specs, smooth micro-interactions, zero layout shifting.

---

## 2. Color Palette & Token Architecture
The design system supports 4 architectural color ramps, selectable directly from the navigation bar:

### Signature Theme: Cupertino Titanium Dark (`data-palette="cupertino"`)
```css
:root, [data-palette="cupertino"] {
  --bg-canvas: #000000;
  --bg-surface: #161617;
  --bg-surface-elevated: #242426;
  --bg-surface-card: #1c1c1e;
  --bg-nav: rgba(22, 22, 23, 0.82);
  --bg-ribbon: #1d1d1f;
  
  --text-primary: #f5f5f7;
  --text-secondary: #a1a1a6;
  --text-muted: #86868b;
  --text-on-accent: #ffffff;
  
  --border-subtle: #333336;
  --border-medium: #48484a;
  --border-strong: #636366;
  
  --accent-blue: #2997ff;
  --btn-pill-bg: #0071e3;
  --btn-pill-hover: #0077ed;
}
```

### Palette 3: Warm Espresso Bronze (`data-palette="3"`)
- Deep bronze `#211B1A` canvas, `#382A28` elevated cards, `#60433D` borders, `#C1A094` primary actions, and `#E8D8CE` text.

### Palette 1: Slate Steel Blue (`data-palette="1"`)
- Midnight slate `#111522` canvas, `#1E263B` cards, `#303D59` borders, `#98A9C4` accents, and `#DCE3EF` high-contrast text.

### Palette 2: Obsidian Velvet (`data-palette="2"`)
- Deep velvet `#17151C` canvas, `#292531` cards, `#45404F` insets, `#AAA2B3` actions, and `#E2DDE7` text.

---

## 3. Layout Hierarchy & Sections

```
┌────────────────────────────────────────────────────────┐
│ Global Navigation (Frosted Glass, Links, Palette, Bag) │
├────────────────────────────────────────────────────────┤
│ Announcement Ribbon (EMI & Cashback Promotions)        │
├────────────────────────────────────────────────────────┤
│ Hero 1: iPhone Duo ("Hello, hello.")                   │
├────────────────────────────────────────────────────────┤
│ Hero 2: MacBook Pro ("PROLED XDR Display")             │
├────────────────────────────────────────────────────────┤
│ Hero 3: iPhone 18 Pro ("Pro further.")                 │
├────────────────────────────────────────────────────────┤
│ 2x3 Bento Showcase Grid                                │
│ [Watch Series 12]  [iPad A16]                          │
│ [AirPods Pro 3]    [MacBook Air M5]                    │
│ [iPad mini]        [Apple Trade In]                    │
├────────────────────────────────────────────────────────┤
│ Entertainment Showcase (Apple TV+ Horizontal Carousel) │
├────────────────────────────────────────────────────────┤
│ Directory Footer (5 Columns + Disclaimers + Legal Bar) │
└────────────────────────────────────────────────────────┘
```

---

## 4. Components & Micro-Interactions
1. **Interactive Shopping Bag**:
   - Slide-out drawer with backdrop blur.
   - Dynamic real-time calculation of subtotal and 6-month No Cost EMI.
   - Item quantity increment/decrement and removal with live badge updates.
   - Persistent state in `localStorage`.
2. **Apple TV+ Streaming Carousel**:
   - Horizontal snap scrolling with prev/next buttons.
   - Preview notifications for original titles (Pluribus, Severance, Monarch, etc.).
3. **Pill Action Geometry**:
   - Dual actions: Primary solid pill (`Buy`) and secondary ghost pill (`Learn more`).
   - Smooth scale micro-transitions (`scale(1.02)` on hover).
