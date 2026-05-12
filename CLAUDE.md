# Compass IT Solutions — Claude Code Instructions

## Project Context

This is the official website for **Compass IT Solutions** (compass-its.com) — a managed IT services provider based in Doha, Qatar.

**Before generating any UI, writing any copy, or making any design decision, read these files in this order:**

1. `DESIGN.md` — Color tokens, typography scale, spacing system, component patterns, logo rules. This is the primary design spec. All values come from here.
2. `BRAND.md` — Brand pillars, logo variants, color proportions, signal/status system, misuse rules.
3. `VOICE.md` — Tone attributes, word choices, CTA rules, what never appears on this site.
4. `CONTENT.md` — Approved copy for every page section. Use verbatim unless a change is logged in `CHANGELOG.md`.
5. `SITEMAP.md` — Page hierarchy, URL slugs, nav structure, CTA destinations.
6. `SEO.md` — Title tags, meta descriptions, keywords, and JSON-LD schema per page.

Log every significant build decision in `CHANGELOG.md` under `[Unreleased]` before moving to the next task.

---

## Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes:

1. **Read** `DESIGN.md` and `BRAND.md` first — every colour, font, and spacing value must come from those files, not from the screenshot alone.
2. **Generate** a Next.js page or component (TypeScript + Tailwind CSS). Match the reference image structure exactly. Pull all copy from `CONTENT.md`.
3. **Screenshot** the rendered page using Puppeteer (`npx puppeteer screenshot index.html --fullpage` or equivalent). If the page has distinct sections, capture those individually too.
4. **Compare** your screenshot against the reference image. Check for mismatches in:
   - Spacing and padding (measure in px against the spacing scale in `DESIGN.md`)
   - Font sizes, weights, and line heights (verify against the type scale in `DESIGN.md`)
   - Colors (exact hex values — must match the palette in `DESIGN.md`, no exceptions)
   - Alignment and positioning
   - Border radii (use the radius tokens from `DESIGN.md`)
   - Responsive behavior (mobile-first, breakpoints per `DESIGN.md` grid)
   - Image/icon sizing and placement
   - Logo variant used (verify correct lockup for container size per `BRAND.md`)
5. **Fix** every mismatch found. Edit the component code.
6. **Re-screenshot** and compare again.
7. **Repeat** steps 4–6 until the result is within ~2–3px of the reference everywhere.

Do NOT stop after one pass. Always do at least 2 comparison rounds. Only stop when the user says so or when no visible differences remain.

---

## Technical Defaults

- **Framework:** Next.js 14, App Router, TypeScript
- **Styling:** Tailwind CSS — extend the config with the Compass ITS design tokens from `DESIGN.md`
- **Fonts:** Load Archivo and JetBrains Mono from Google Fonts in `app/layout.tsx`. Never substitute another typeface.
- **Placeholder images:** Use `https://placehold.co/` when source images aren't in `/public/brand/` or `/public/images/`
- **Logo files:** Always pull from `/public/brand/`. Use `.svg` for all screen placements.
- **Responsive:** Mobile-first. Content width max 1280px. Gutters per `DESIGN.md` grid spec.
- **Component output:** One component per file in `components/sections/` or `components/ui/` as appropriate. No monolithic page files.

---

## Design Rules

These rules are absolute. They cannot be overridden by reference image appearance, personal preference, or perceived improvement.

- **Colors:** Only use the six colors defined in `DESIGN.md`. Never introduce a hex value not in that palette.
- **Fonts:** Archivo for all UI and body copy. JetBrains Mono for eyebrows, captions, labels, status codes, and technical strings. No other typefaces.
- **Signal Cyan `#2BB3E6`:** Used only for active states, links, CTAs, status pills, and a single highlighted word per page. Never as a body copy background.
- **Beacon Amber `#E8A33D`:** Used only for advisories, maintenance notices, and scheduled/time-bound content. Never decorative.
- **Moss `#6B7A4F`:** Never used in product UI. Editorial only.
- **Logo:** Always an approved lockup, unmodified. No effects, shadows, strokes, distortion, or re-creation in another typeface. Correct variant for container size per `BRAND.md`.
- **No exclamation marks** anywhere in copy, labels, buttons, or tooltips.
- **No dark mode toggle** at launch. Dark sections (hero, nav, footer) use Ink `#0B0E10`. Light sections use Paper `#F4F2EC`. This is not user-configurable.
- **WCAG AA contrast** on all text. Validate before marking a component done.
- **Spacing:** All spacing values must be multiples of 4px. Use the scale tokens from `DESIGN.md`.

---

## Copy Rules

- All page copy comes from `CONTENT.md`. Do not paraphrase or rewrite.
- All button labels, CTAs, nav labels, and form labels follow the rules in `VOICE.md`.
- No "Learn more", "Click here", "Submit", or "Get started" — see `VOICE.md` for approved alternatives.
- No exclamation marks. No "world-class", "cutting-edge", "robust", "seamless", or "synergy".
- If a copy string is missing from `CONTENT.md`, flag it to the user. Do not invent copy.

---

## File & Code Rules

- Do not add features, sections, or content not present in the reference image or `SITEMAP.md`.
- Match the reference exactly — do not "improve" the design beyond what `DESIGN.md` specifies.
- Keep code clean. Inline Tailwind classes are fine. Don't over-abstract.
- When comparing screenshots, be specific: "heading is 32px but reference shows ~24px", "gap between cards is 16px but should be 24px per `DESIGN.md` `space-4` token".
- Log every build decision (design choice, copy change, tech decision, deviation from reference) in `CHANGELOG.md` under `[Unreleased]` with a short reason.

---

## Changelog Discipline

Every session, before closing:

1. Open `CHANGELOG.md`.
2. Add any new decisions, deviations, or component completions under `[Unreleased]`.
3. Format: `- [Component/Page] — What changed and why.`

Example:
```
### Added
- `components/sections/Hero.tsx` — Built to reference image v1. Uses Display XL Archivo 300, Signal Cyan CTA button. Placeholder logo pending SVG from client.

### Changed
- Hero subheadline reduced from Body L (21px) to Body (17px) — reference image shows smaller scale on mobile breakpoint.
```
