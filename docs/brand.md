# 🍰 La Brise Pâtisserie — Brand Guide v1

> A family-friendly, pastel-themed bakery experience built for the web.  
> Our tone: *whimsical, lighthearted, and delightfully polished.*

---

## 🎨 Palette

| Name | Hex | Usage |
|------|------|--------|
| **Sugar Pink** | `#F7A9A8` | Primary accent – buttons, highlights |
| **Cream Vanilla** | `#FFF4E6` | Background / card base |
| **Mint Frost** | `#C7F0DB` | Secondary accent |
| **Sky Icing** | `#CFE9FF` | Background gradient |
| **Blueberry Drizzle** | `#6A8DFF` | Action color / links |
| **Cocoa Ganache** | `#5B3A29` | Text / headers |
| **Powder White** | `#FFFFFF` | Contrast text on dark areas |

Use high-contrast pairs only where necessary (WCAG AA target).

---

## ✍️ Typography

**Display Font** – `Fraunces` (serif, elegant curves)  
**UI Font** – `Inter` (sans-serif, readability)

```css
font-family:
  var(--font-display, 'Fraunces', serif);
font-family:
  var(--font-ui, 'Inter', sans-serif);
```

## 🧁 Theme Motifs

- Pastel stripes (8–12 px diagonal, 45°) for hero/backgrounds.
- Soft drop-shadows + rounded corners (0.75 rem) throughout.
- Subtle motion:
  - Hero stripes: 0.3 s ease parallax slide
  - Buttons: scale 1.05 on hover, 0.15 s ease
  - Confetti burst 🎉 on first product review

## 🧩 Iconography

|Type | Usage | Source |
|-----|-------|--------|
|🎂 Cake Slice | Primary logo mark | Custom vector |
|🧁 Tiered Cake | Product feature icon | Custom vector |
|🍪 Whisk / Piping Bag | Category icons | Custom vector |
|⭐ Star | Rating component | Custom vector |
|System UI | Admin / nav | Lucide Icons |

## 🏗️ Layout & Components

- Grid: 4 px base unit
- Radii: sm = 4 px md = 8 px lg = 12 px xl = 20 px
- Shadows: soft-focus (#0000001a 0 2px 8px)
- Cards: layered frosting-like gradients + hover lift

## ⚙️ Usage Guidelines

- Maintain consistent pastel temperature – never fully saturated.
- Whitespace > density — the UI should feel “airy”.
- Animation budget: < 300 ms for all transitions.
- Accessibility: Always test color contrast; avoid low-contrast text over striped backgrounds.

## 📷 Visual Examples (TBD)

Placeholder for:

Hero screenshot with pastel stripes
Product card sample
Review rating modal

## 📓 Credits

| Role | Person / Org |
|------|--------------|
| Design Lead | Brxndxn Diaz (@brxndxn) | 
| Creative Direction / Front-End | Donovan Townes (@TownesDev) |
| Development Org | [TownesDev](https://townesdev.com) |

Version: v1 — October 2025

> “Whimsy with polish — every click should feel like frosting.”
