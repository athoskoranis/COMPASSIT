# DESIGN.md — Compass IT Solutions

> Agent-readable design system spec. Every AI coding agent working on this project must read this file before generating any UI. Follow these tokens exactly — do not invent values outside this system.
>
> Format follows the [Google Stitch DESIGN.md open-source specification](https://github.com/google-labs-code/design.md) (Apache 2.0).

---

## Brand Identity

**Brand name:** Compass IT Solutions
**Tagline:** Wired right. Kept running.
**Industry:** Managed IT Services · Network · Cloud · Cybersecurity · Development
**Headquartered:** West Bay, Doha, Qatar
**Founded:** 2025
**Website:** compass-its.com

**Visual personality:** Dark, precise, technical — but legible and direct. The aesthetic reads like a senior infrastructure engineer's dashboard: functional, zero decoration, high-contrast, with one live signal colour (cyan) marking everything that is active.

---

## Color Palette & Roles

### Primary Colours

| Token name | Hex | Role |
|---|---|---|
| `--color-ink` | `#0B0E10` | Primary foreground — text, dark backgrounds, nav |
| `--color-paper` | `#F4F2EC` | Primary ground — light mode backgrounds, cards |
| `--color-signal` | `#2BB3E6` | Accent · Live — links, active states, CTAs, status pills, single highlighted words. **Never use as a body copy background.** |
| `--color-beacon` | `#E8A33D` | Accent · Warm — advisories, maintenance windows, scheduled notices, human and time-bound information. Pair with ink only. |
| `--color-indigo` | `#35267A` | Tertiary — editorial use only (print pieces, long-form articles, case studies). Off-limits in product UI. |
| `--color-mist` | `#ECEDEF` | Neutral surface — section dividers, subtle backgrounds, table stripes |

### Colour Proportion Rules

**Light mode (default):** Paper 80% · Ink 15% · Signal 5%
**Dark mode:** Ink 80% · Paper 15% · Signal 5%
**Editorial / Alert state:** Paper 70% · Ink 18% · Beacon 8% · Indigo 4%

### Signal (Status) System

Use these colours exclusively for live system state. Never invent new colours for state.

| State | Colour | Hex | Label |
|---|---|---|---|
| Live / Operational | Signal Cyan | `#2BB3E6` | `[OK]` |
| Scheduled / Maintenance | Beacon Amber | `#E8A33D` | `[SC]` |
| Idle / Awaiting input | Mist Grey | `#ECEDEF` | `[ID]` |
| Resolved / Closed | Ink Black | `#0B0E10` | `[RES]` |

### Do's and Don'ts — Color

- **DO** use Signal Cyan for: links, active nav states, CTA buttons, status pills, a single highlighted word per page
- **DO** use Beacon Amber for: maintenance notices, scheduled downtime callouts, advisory banners
- **DO** maintain WCAG AA contrast (4.5:1) on all body text
- **DON'T** use Signal Cyan as a background for any body copy
- **DON'T** run Signal and Beacon side-by-side at equal visual weight — one leads, one supports
- **DON'T** use Indigo in product UI — editorial print and long-form only
- **DON'T** place the logo on clashing gradients, orange, or pink backgrounds
- **DON'T** introduce colours outside this palette

---

## Typography Rules

### Typefaces

| Role | Typeface | Import |
|---|---|---|
| Primary — Display & UI | **Archivo** | `https://fonts.google.com/specimen/Archivo` |
| Secondary — Technical / Mono | **JetBrains Mono** | `https://fonts.google.com/specimen/JetBrains+Mono` |

**Fallback stack:**
```css
font-family: "Archivo", system-ui, -apple-system, "Segoe UI", sans-serif;
font-family: "JetBrains Mono", "Courier New", monospace;
```

### Type Scale

| Style token | Size | Line height | Letter spacing | Weight | Use |
|---|---|---|---|---|---|
| `display-xl` | 110px | 100px | -4.5% | 300 | Hero banner — one phrase only |
| `display-l` | 72px | 68px | -4% | 300–400 | Section hero headings |
| `heading-1` | 44px | 46px | -2.5% | 400–500 | Page titles |
| `heading-2` | 30px | 34px | -2% | 400–500 | Section headings |
| `body-l` | 21px | 30px | 0% | 400 | Lead paragraphs |
| `body` | 17px | 28px | 0% | 400 | Standard body copy |
| `caption` | 14px | 20px | +14% | 400–500 | JetBrains Mono — eyebrows, labels, ticket IDs, table headers |

### Weight Usage

Archivo weights in use: **300** (light display), **400** (body), **500** (UI labels), **700** (emphasis, bold callouts)
JetBrains Mono weights in use: **400** (captions), **500** (labels), **700** (code emphasis)

### Do's and Don'ts — Typography

- **DO** use JetBrains Mono for: eyebrow labels (e.g. `NETWORK · CLOUD · CONTINUITY`), ticket numbers, status codes, inline code, data values
- **DO** use Archivo for: all headings, body copy, buttons, navigation
- **DON'T** use any typeface other than Archivo and JetBrains Mono
- **DON'T** recreate the wordmark in another typeface
- **DON'T** reduce type contrast below WCAG AA legibility

---

## Spacing & Layout

### Base Spacing Scale

Multiply the base unit (4px) for consistent rhythm:

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Tight inline gaps (icon + label) |
| `space-2` | 8px | Component internal padding |
| `space-3` | 12px | Small gaps between related items |
| `space-4` | 16px | Standard padding unit |
| `space-6` | 24px | Card padding, section sub-spacing |
| `space-8` | 32px | Component separation |
| `space-12` | 48px | Section vertical padding (mobile) |
| `space-16` | 64px | Section vertical padding (desktop) |
| `space-24` | 96px | Large section breaks |

### Grid

- **Max content width:** 1280px
- **Columns:** 12 (desktop) · 4 (mobile)
- **Gutter:** 24px (desktop) · 16px (mobile)
- **Margin:** 80px left/right (desktop) · 24px (mobile)

### Border Radius

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 2px | Subtle — badges, status pills |
| `radius-md` | 6px | Buttons, inputs, small cards |
| `radius-lg` | 12px | Service cards, feature panels |
| `radius-xl` | 20px | Hero containers, large sections |

---

## Component Styling

### Buttons

**Primary CTA (Signal)**
```css
background: #2BB3E6;
color: #0B0E10;
font-family: Archivo;
font-size: 15px;
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
padding: 14px 28px;
border-radius: 6px;
border: none;
```

**Secondary / Ghost**
```css
background: transparent;
color: #0B0E10;        /* or #F4F2EC on dark bg */
border: 1.5px solid currentColor;
font-family: Archivo;
font-size: 15px;
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
padding: 13px 28px;
border-radius: 6px;
```

Hover state: 10% opacity overlay of signal colour.
Focus ring: `2px solid #2BB3E6` offset `2px`.

### Cards — Service Cards

```css
background: #F4F2EC;      /* Paper */
border: 0.5px solid rgba(11,14,16,0.15);
border-left: 3px solid #2BB3E6;   /* Signal accent */
border-radius: 12px;
padding: 32px;
```

On dark-mode / Ink backgrounds:
```css
background: rgba(244,242,236,0.05);
border: 0.5px solid rgba(244,242,236,0.15);
border-left: 3px solid #2BB3E6;
```

### Callout Blocks (Brand standard)

Used for key brand statements and live status callouts:

```css
background: #0B0E10;      /* Ink */
color: #F4F2EC;           /* Paper */
border-left: 4px solid #2BB3E6;
padding: 24px 32px;
font-family: Archivo;
font-size: 21px;          /* body-l */
font-style: italic;
```

Below the callout quote, display the source in JetBrains Mono at 12px, Signal Cyan, letter-spacing +14%:
```
/ engineering standard · compass-its
```

### Stat Blocks

Used for company figures (2025 · 30+ engineers · 50+ clients):

```css
/* Number */
font-family: Archivo;
font-size: 72px;
font-weight: 300;
color: #2BB3E6;   /* Signal — numbers are live data */
line-height: 1;

/* Label */
font-family: JetBrains Mono;
font-size: 12px;
font-weight: 400;
letter-spacing: 0.14em;
text-transform: uppercase;
color: currentColor;
opacity: 0.6;
margin-top: 8px;
```

### Eyebrow Labels

Always JetBrains Mono, uppercase, Signal Cyan, small size:

```css
font-family: "JetBrains Mono", monospace;
font-size: 12px;
font-weight: 500;
letter-spacing: 0.12em;
text-transform: uppercase;
color: #2BB3E6;
```

Example: `NETWORK · CLOUD · CONTINUITY`

### Navigation

- Background: `#0B0E10` (Ink) — nav is always dark
- Logo: horizontal lockup (primary) on all screen widths ≥ 768px; stacked lockup at < 768px; monogram < 480px
- Links: Archivo 400, 15px, Paper `#F4F2EC` — hover state: Signal `#2BB3E6`
- Active page: Signal `#2BB3E6`, weight 500
- CTA in nav: Primary button (Signal background)

### Forms / Inputs

```css
/* Input field */
background: transparent;
border: 1px solid rgba(11,14,16,0.3);
border-radius: 6px;
padding: 12px 16px;
font-family: Archivo;
font-size: 17px;
color: #0B0E10;
outline: none;

/* Focus */
border-color: #2BB3E6;
box-shadow: 0 0 0 3px rgba(43,179,230,0.15);
```

---

## Logo Usage

### Variants

| Variant | When to use |
|---|---|
| Horizontal lockup (primary) | Default — all standard placements |
| Stacked lockup | Square containers, social thumbnails |
| Monogram only | ≤ 80px width, favicons, app icons |

### Reversed (on dark backgrounds)

Use white/Paper versions of the wordmark on Ink or dark photography backgrounds.
Use white monogram on Signal Cyan backgrounds (accent ground).

### Clear Space

Minimum clear space = cap-height of the "C" in COMPASS (call this X).
Maintain **1X** on all sides minimum. Increase to **2X** when adjacent to busy imagery or competing logos.

### Minimum Sizes

| Variant | Minimum screen size |
|---|---|
| Horizontal lockup | 160px wide |
| Stacked lockup | 110px wide |
| Monogram | 28px wide |

### File Format Rules

- `.svg` — screens and code (preferred)
- `.eps` — print and signage
- `.png` — documents and email signatures
- Never re-export from raster; always use the source vector

---

## Agent Prompt Guide

When generating UI for this project, always:

1. **Read this file first** before writing a single line of CSS or component code.
2. **Use only the colours defined above** — never hardcode a hex value not in this palette.
3. **Validate all text contrast** against WCAG AA (4.5:1 body, 3:1 large text).
4. **Use Archivo for all UI text** and JetBrains Mono exclusively for labels, eyebrows, monospace, and technical strings.
5. **Apply the spacing scale** — all spacing should be a multiple of 4px.
6. **Match the Signal status system** exactly when rendering any live/operational/maintenance state — do not invent colours for new states.
7. **Keep the voice in copy** direct, calm, specific, quietly warm — no exclamation marks, no acronym soup, no fear-selling. Reference `VOICE.md` before writing any UI string.
8. **Default to dark** for hero sections, nav, and footer. Use Paper backgrounds for content sections and cards.
9. **Logo placement:** always use the correct lockup variant for the container size per the rules above.
10. **No gradients, glows, drop shadows, or strokes on the logo** — these are brand misuse.
