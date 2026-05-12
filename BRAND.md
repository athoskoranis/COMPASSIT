# BRAND.md — Compass IT Solutions

> Brand Package V1.0 · April 2026
> This document is the authoritative brand reference for the Compass IT Solutions website project. Every logo, colour decision, and typographic choice must be verified against this file. When in doubt, come back here.

---

## Brand Idea

### One-sentence positioning

> *We build the quiet infrastructure that lets ambitious teams move without friction — wired right the first time, kept running for the long haul.*

This sentence is the brand's north star. Every page, every headline, every CTA should be able to be traced back to one of these ideas: quiet infrastructure, ambitious teams, friction-free, wired right, long haul.

### Three Brand Pillars

These three pillars are non-negotiable. They govern every piece of content, every UX decision, and every engineering choice on the site.

**Pillar 01 — Wired right.**
Done correctly the first time. Every cable labelled, every config documented, every endpoint accounted for. The work shows up in what you don't have to think about later. On the website, this means: no vague claims, no filler copy. Every statement should be specific and verifiable.

**Pillar 02 — Plain-spoken.**
No acronym soup, no fear-selling. Compass translates technical decisions into language a CFO and a foreman can both act on, and puts it in writing. On the website, this means: write like a senior tech talking to a client they respect. Direct, unhurried, never condescending.

**Pillar 03 — In it for the run.**
Compass doesn't disappear after deployment. The relationship starts when the network goes live — quarterly reviews, on-call response, roadmaps that age gracefully. On the website, this means: every service page should communicate post-delivery commitment, not just initial delivery.

---

## Logo System

### Three Variants — Choose by Container, Not by Mood

| Variant | When to use |
|---|---|
| **Horizontal lockup** (mark + wordmark side by side) | Default for all placements |
| **Stacked lockup** (mark above wordmark) | Square containers only |
| **Monogram** (mark only) | ≤ 80px width, favicons, app icons, 16/32/64/144px icon sets |

### Colour Versions

| Context | Version to use |
|---|---|
| Light backgrounds (Paper, Mist) | Standard dark version |
| Dark backgrounds (Ink, photography) | Reversed — white wordmark |
| Signal Cyan background | Monogram in white only — never the full wordmark on cyan |

### Clear Space Rule

The minimum clear space unit is the cap-height of the letter "C" in COMPASS — call this **X**.

- Minimum margin: **1X** on all sides
- Around busy imagery or competing logos: **2X** on all sides
- Never crowd the logo. The brand communicates confidence through space.

### Minimum Size Rules

| Variant | Minimum screen width |
|---|---|
| Horizontal lockup | 160px |
| Stacked lockup | 110px |
| Monogram | 28px |

### File Format Rules

| Format | Use for |
|---|---|
| `.svg` | All website and code placements (preferred) |
| `.eps` | Print, signage, large-format |
| `.png` | Email signatures, documents, social media |

**Critical:** Never re-export brand assets from a raster source (JPG, PNG, or screenshot). Always export from the master vector file.

**Logo file locations in repo:**
```
/public/brand/
  compass-its-horizontal-dark.svg      ← Default
  compass-its-horizontal-white.svg     ← Reversed
  compass-its-stacked-dark.svg
  compass-its-stacked-white.svg
  compass-its-monogram-dark.svg
  compass-its-monogram-white.svg
  compass-its-monogram-signal.svg      ← White on Signal Cyan
  favicon.ico
  favicon-16.png
  favicon-32.png
  favicon-64.png
  favicon-144.png
  apple-touch-icon.png
  og-image.png                         ← 1200×630px Open Graph image
```

---

## Six Ways to Break the Logo (Misuse — Never Do These)

1. **Stretch, skew, or distort** — The mark and wordmark must remain in their original proportions.
2. **Place on clashing gradients** — No orange, no pink, no multi-colour background.
3. **Add effects, shadows, or strokes** — The logo is flat. No drop shadows, glows, outlines, or 3D treatments.
4. **Recreate the wordmark in another typeface** — If you're missing the font file, request it from brand@compass-its.com.
5. **Reduce contrast below WCAG AA legibility** — Never render the logo in grey-on-grey or low-contrast pairs.
6. **Use only "Compass IT" without "Solutions"** — The full name is always used except in direct verbal speech.

---

## Colour Palette

### Full Palette

| Name | Token | Hex | RGB | CMYK | Pantone | Role |
|---|---|---|---|---|---|---|
| **Ink** | `--color-ink` | `#0B0E10` | 11 14 16 | 75 65 60 75 | Black 6 C | Primary foreground · text · dark backgrounds |
| **Paper** | `--color-paper` | `#F4F2EC` | 244 242 236 | 3 3 6 0 | Warm Gray 1 C | Primary ground · light backgrounds |
| **Signal** | `--color-signal` | `#2BB3E6` | 43 179 230 | 72 15 0 0 | 2389 C | Accent · live · active · links · CTAs |
| **Beacon** | `--color-beacon` | `#E8A33D` | 232 163 61 | 5 38 85 0 | 1365 C | Accent · advisories · scheduled events |
| **Moss** | `--color-moss` | `#6B7A4F` | 107 122 79 | 52 33 75 15 | 5757 C | Tertiary · editorial only |
| **Mist** | `--color-mist` | `#ECEDEF` | 236 237 239 | 6 4 3 0 | Cool Gray 1 C | Neutral surface · backgrounds |

### Proportion Rules

The brand runs on an 80/15/5 ratio. This is not a suggestion — it is the system that keeps the identity from becoming garish or washed out.

**Light mode (default site theme):**
- 80% Paper `#F4F2EC` — backgrounds, cards, white space
- 15% Ink `#0B0E10` — body copy, borders, structural elements
- 5% Signal `#2BB3E6` — one call-to-action, one active state, one link colour per view

**Dark mode (hero sections, nav, footer):**
- 80% Ink `#0B0E10` — background
- 15% Paper `#F4F2EC` — text, reversed elements
- 5% Signal `#2BB3E6` — same active/CTA role as above

**Editorial / Alert (advisory content):**
- 70% Paper · 18% Ink · 8% Beacon · 4% Moss

### Colour Usage Rules

| Colour | Use | Never use for |
|---|---|---|
| Signal `#2BB3E6` | Active states · status pills · links · a single highlighted word per page · CTA buttons | Body copy background · decorative fills · more than one focal element per view |
| Beacon `#E8A33D` | Maintenance notices · advisory banners · human, time-bound information | General decoration · branding the logo · pairing alongside signal at equal weight |
| Moss `#6B7A4F` | Long-form editorial · print pieces · case study photography overlays | Product UI · navigation · buttons · any interactive element |
| Mist `#ECEDEF` | Subtle backgrounds · section dividers · table alternating rows | Body text (too low contrast against Paper) |

**Two accents maximum per view.** Never run Signal and Beacon at the same visual weight on the same screen — one must lead, one must support.

---

## Typography

### Typefaces

**Archivo** — primary typeface for all display text, UI, body copy, and headings.
- Character: Geometric, modern, slightly mechanical — mirrors the circuit-board geometry of the logo mark.
- Weights in use: 300 · 400 · 500 · 700
- Source: Google Fonts

**JetBrains Mono** — secondary typeface for technical strings, labels, eyebrows, captions.
- Character: Monospace, code-like, precise — reinforces the technical nature of the business.
- Weights in use: 400 · 500 · 700
- Use for: eyebrow labels (`NETWORK · CLOUD · CONTINUITY`), ticket IDs (`INC-04821`), status codes, inline code, table headers, timestamps
- Source: Google Fonts

### Type Scale

| Style | Size / Leading / Tracking | Example copy |
|---|---|---|
| Display XL | 110px / 100px / –4.5% | Move without friction |
| Display L | 72px / 68px / –4% | Wired right. |
| Heading 1 | 44px / 46px / –2.5% | Quiet infrastructure. |
| Heading 2 | 30px / 34px / –2% | A grounded core, one bright signal. |
| Body L | 21px / 30px / 0% | We translate technical decisions into language a CFO and a foreman can both act on. |
| Body | 17px / 28px / 0% | Standard body copy |
| Caption | 14px / 20px / +14% | `TICKET — INC-04821 · QUEUED` |

---

## Signal System — Status Language

The brand extends the circuit-board mark into a working status vocabulary. Use this system consistently across any status page, dashboard, or incident communication on the site.

| State | Colour | Indicator |
|---|---|---|
| **LIVE — operational** | Signal Cyan `#2BB3E6` | Filled circle · `[OK]` |
| **SCHEDULED — maintenance** | Beacon Amber `#E8A33D` | Filled circle · `[SC]` |
| **IDLE — awaiting input** | Mist Grey `#ECEDEF` | Outline circle · `[ID]` |
| **RESOLVED — closed** | Ink Black `#0B0E10` | Filled circle · `[RES]` |

**Rule:** Never invent new colours for new states. If a state isn't covered, use the closest existing one and document the decision in `CHANGELOG.md`.

---

## Company Details (for use in footers, contact pages, metadata)

| Field | Value |
|---|---|
| Full legal name | Compass IT Solutions |
| Short form | Compass ITS |
| Tagline | Wired right. Kept running. |
| Website | compass-its.com |
| Email (general) | asahli@compass-its.com |
| Email (brand) | brand@compass-its.com |
| Phone | +974 5149 0825 |
| Social handle | @compass.its |
| Location | West Bay, Doha, Qatar |
| Founded | 2025 |
| Services | Network · Cloud · Continuity |

---

## Applications Checklist

Before publishing any new visual asset on the site, verify:

- [ ] Logo is an approved lockup, unmodified
- [ ] Logo has minimum 1X clear space on all sides
- [ ] Logo is not below minimum size
- [ ] Logo file used is `.svg` for all screen placements
- [ ] All text passes WCAG AA contrast (4.5:1 body / 3:1 large text)
- [ ] Signal colour is used sparingly — one focal use per view
- [ ] No Signal colour behind body text
- [ ] Beacon is used only for advisory/time-bound content
- [ ] Moss is not present in any product UI
- [ ] No colours introduced outside the six-colour palette
