# CHANGELOG.md — Compass IT Solutions Website

> Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
> Versions follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
>
> **How to use this file:**
> - Add entries to the `[Unreleased]` section during development.
> - When a build decision is made — a design choice, a copy change, a tech decision — log it here immediately.
> - When a version ships, move the Unreleased items under a new version heading with today's date.
> - Every entry should answer: what changed, why it changed, and who made the call.
>
> **Change types:**
> - `Added` — New pages, features, components, or content added to the project.
> - `Changed` — Changes to existing functionality, copy, design, or configuration.
> - `Fixed` — Bug fixes, broken links, accessibility issues corrected.
> - `Removed` — Pages, features, or content removed.
> - `Deprecated` — Something that will be removed in an upcoming version.
> - `Security` — Dependency updates or security patches applied.

---

## [Unreleased]

### Changed — 2026-08-01 (Bracket standoff)

**Decision 037 — Corner marks can stand clear of the surface:**
The marks sat flush against the panel corner, which read as a partial border rather than as registration marks. Added `--bracket-offset` (default 0, so nothing existing changes) and a `.bracketed-outset` modifier that lifts them 12px clear. Applied to the hero contact card.

The corner radius is now **derived** — `calc(12px + var(--bracket-offset))` — rather than a separate value. The arc has to stay concentric with the surface corner as the marks move outward, otherwise a 12px arc sitting 12px away from a 12px corner reads as detached, which is the same class of bug as Decision 033a. `--bracket-radius` should no longer be set by hand.

The RTL mirror carries the offset through, so the marks stand off correctly in Arabic too.

**Blog index cards stay flush deliberately.** They use `overflow-hidden` to clip the post image corners, which would crop offset marks away entirely. Documented in `DESIGN.md`: the outset is for standalone panels, not for surfaces that clip their own contents.

### Changed — 2026-08-01

**Decision 036 — Hero contact card is now a see-through pane, and its text contrast fixed:**
The card was opaque Ink; it is now a translucent pane so the gradient field reads through it. Added a documented `.glass` utility rather than one-off classes, so the treatment is reusable and specified.

**The tint direction was determined by measurement, not taste.** A Paper-tinted glass lets the cyan field through undimmed, and secondary text then needs roughly 74% Paper opacity to reach WCAG AA — near-white, which flattens the type hierarchy. Tinting toward Ink at 72% keeps the gradient visible while holding the interior dark enough for Paper text at 50% to clear 4.5:1 against the brightest point of the background. Below about 65% Ink it stops passing: 55% measures 4.40:1.

**This also fixed contrast failures that predated the change.** On the previous opaque card, placeholder text at 30% Paper measured 2.48:1, the WhatsApp line at 35% measured 2.96:1, and the article meta at 40% measured 3.52:1 — all below the 4.5:1 required by `CLAUDE.md`. Raised to 50% (4.68:1) and 55% (5.38:1). Field fill and border lifted to 7% and 16% so inputs still read as containers on a translucent surface.

`DESIGN.md` documents the utility, the Ink-tint constraint with the measured reason, and a minimum text-opacity table.

### Added — 2026-07-31

**Decision 035 — Hero rail: markets served, then the latest article:**
The hero left column now carries a rail beneath the secondary CTA — a hairline row listing the three markets served, then a compact card for the newest blog post (combination C1 from the exploration). Coverage answers a qualifying question inside the fold, and the article gives the fold evidence the firm is active, plus an internal link to content already written.

New `lib/posts.ts` holds the blog list as a single source of truth. `app/blog/client.tsx` previously owned that array inline; it now imports it, and `components/sections/HeroRail.tsx` reads `latestPost` from the same module. Adding a post surfaces it in both places, so the hero cannot silently go stale — which was the main risk of putting the latest article in the fold.

Serving label, country names and the "Latest" label are translated in both languages. Blog post titles and categories stay in English because the blog itself is not translated — worth revisiting if the blog is ever localised. Layout uses logical properties (`pe`, `border-e`) so the rail mirrors in Arabic without extra rules.

The approved lede from CONTENT.md and the secondary CTA were both kept. The C1 mockup showed a shorter lede and no CTA, but that lede was invented copy, so the fold is a little taller than the mockup — worth checking on a laptop viewport.

### Fixed — 2026-07-31

**Decision 034 — areaServed corrected to the three markets actually served:**
The site-wide JSON-LD in `app/layout.tsx` declared `areaServed` as Doha, Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman. Kuwait, Bahrain and Oman are not served — confirmed by the client. Declaring markets the business does not cover misrepresents it in structured data and invites enquiries that cannot be fulfilled. Removed those three; the list now matches the `areaServed` already declared on all eight service pages. No other file referenced them.

### Changed — 2026-07-30 (Card treatment)

**Decision 033 — Signal left border on cards replaced by raised panel + diagonal brackets:**
Cards were defined by a 3px Signal Cyan left border (`DESIGN.md` service-card spec). That spent the accent colour on permanent furniture — DESIGN.md reserves Signal for links, CTAs, status pills, and a single highlighted word, all of which mean "live" or "actionable", which a card edge does not. Cards are now defined by **elevation plus a diagonal pair of corner marks**, top-left and bottom-right, in neutral Paper (on Ink) or Ink (on Paper). Two arms are enough for the eye to close the rectangle, and the asymmetry gives the card a reading direction.

Implemented as three composable utilities in `app/globals.css` — `.raised` / `.raised-light` for elevation and `.bracketed` / `.bracketed-light` for the marks — so a surface can take either independently, and via `::before`/`::after` so no markup changes beyond a class name. RTL is handled centrally: the diagonal is directional, so `[dir="rtl"]` mirrors it to top-right / bottom-left. Components must not re-implement that locally.

Applied to all six card sites: the blog index post cards (`app/blog/client.tsx`) and the table-of-contents boxes in all five blog posts. `DESIGN.md` updated with the new spec, the supersession note, and card do's and don'ts.

**Callout blocks deliberately unchanged.** The seven remaining 4px Signal borders are all quotation callouts, where the stripe reads as a quotation mark rather than card furniture. It is also load-bearing there: it pairs with `rounded-r-lg` and `shadow-glow-signal-sm`, so removing it would leave an asymmetric radius and a glow with no edge. Flagged in `DESIGN.md` as an open decision needing its own treatment, not the card brackets.

### Fixed — 2026-07-30

**Decision 024 — Home services dial: App Development link and icons corrected:**
`components/sections/ServicesOverview.tsx` merges `servicesMeta` with `tr.services.items` by array index. Entries 6 and 7 were misaligned against the translations: "App Development" carried the Cpu icon and linked to `/services/ai-workflows`, leaving `/services/app-development` unreachable from the home page, while "AI Workflows" carried the Smartphone icon. Swapped `href` and `icon` on both entries so App Development → `/services/app-development` (Smartphone) and AI Workflows → `/services/ai-workflows` (Cpu). Nav and Footer were already correct; this only affected the home page dial and its mobile grid.

### Added — 2026-07-30

**Decision 026 — Sitemap completed:**
`app/sitemap.ts` listed only 7 of 15 public URLs — `/services/app-development`, `/services/digital-marketing`, `/blog`, and all five blog posts were missing, so they were left to organic discovery. Rewritten to cover every route: home (1.0), contact (0.9), all 8 service pages (0.8), blog index (0.7), and 5 posts (0.6). Service and top-level entries keep build-time `lastModified`; blog posts use their fixed `datePublished` from each post's JSON-LD instead, since a post that hasn't changed shouldn't report a fresh date on every deploy. Slugs are held in arrays and mapped, so adding a service or post is a one-line change.

**Decision 027 — .gitignore expanded, artifacts untracked:**
`.gitignore` covered only `node_modules` and `.next`, leaving `.env*`, `.vercel`, `.DS_Store`, and `tsconfig.tsbuildinfo` committable. `tsconfig.tsbuildinfo` dirtied the working tree on every build and three `.DS_Store` files were already tracked; all four untracked with `git rm --cached` (local files retained). The `.env*` rule is the important one — `app/api/contact/route.ts` reads `SMTP_USER` and `SMTP_PASS`, and this is a public repository.

**Decision 025 — Google Tag Manager container added:**
GTM container `GTM-KZ59QK4H` added to `app/layout.tsx` per the container snippet supplied by the SEO specialist: inline loader as the first child of `<head>`, `<noscript>` iframe fallback as the first child of `<body>`. Placed as raw inline tags rather than `next/script` so the tag fires as early as the snippet specifies, matching the existing JSON-LD pattern in the same file. GTM ID is hardcoded in a `GTM_ID` const — container IDs are public by design, and this keeps the site free of a new required env var on Vercel. This supersedes the README's `NEXT_PUBLIC_GTM_ID` env var note. GA4 and any further tags are now managed from the GTM UI, no code change needed.

### Changed — 2026-07-30 (Navigation performance pass)

Measured against a production build in a real browser before and after. Client-side navigation home → `/services/digital-marketing`: total blocking from long tasks **517 ms → 210 ms**. First Load JS: service pages **152 kB → 137 kB**, blog **122 kB → 101 kB**. No visual change intended.

**Decision 028 — Site chrome hoisted into the root layout:**
Every page's `client.tsx` rendered its own `<Nav />`, `<Footer />`, and background component, so all three were destroyed and rebuilt on every navigation (verified by tagging the DOM nodes and confirming they did not survive a route change). Moved all of it into `app/layout.tsx` via new `components/layout/SiteBackground.tsx`, and stripped the wrapper from all 16 pages — home, contact, 8 service clients, blog index, 5 post clients. Pages now render only their `<main>` content. Nav and Footer DOM nodes now persist across navigation.

**Decision 029 — Topographic background is now a static asset:**
`TopoBackgroundFBM` computed a marching-squares contour field on every mount: at 1440×900 that is 36,784 grid cells, 183,920 5-octave fbm noise calls, ~1.02M marching-squares iterations and 14,054 canvas path segments — measured at ~114 ms of pure JS, excluding canvas work. It also re-ran on every `resize` with no debounce. The output was fully deterministic (hardcoded `createNoise(42)`, nothing animated), so it was spending that budget to redraw a pixel-identical image on every navigation. Pre-generated with the identical algorithm and seed to `public/images/topo-contours.svg` (272 kB raw, ~71 kB brotli) and applied as a CSS background; `next.config.js` serves it `immutable` with a one-year max-age so it is fetched once. Runtime cost is now zero. `components/ui/TopoBackgroundFBM.tsx` deleted.

**Decision 030 — GlowCard deduplicated:**
Each instance injected its own copy of the same ~1.8 kB `<style>` block and registered its own `document` pointermove listener — 9 copies on the home page, 14 on `/services/digital-marketing` (25 kB of duplicate CSS and 14 listeners writing 4 CSS custom properties each per mouse move, so 56 style writes per event). CSS moved into `globals.css` once; pointer tracking replaced by a single listener in `components/layout/PointerTracker.tsx` that writes `--x/--xp/--y/--yp` to `:root`, coalesced to one write per frame via `requestAnimationFrame`. The cards inherit the values, which is what they already wanted — their gradients use `background-attachment: fixed`, so the coordinates were always viewport-relative. GlowCard is now a plain server component with no client JS. Verified after: 0 duplicate style tags, 0 per-card listeners.

**Decision 031 — WebGL background pauses when not visible:**
`WebGLBackground` ran an unconditional `requestAnimationFrame` loop with a 5-octave fbm fragment shader at full viewport, forever, including in background tabs. Now stops on `visibilitychange` when the document is hidden and resumes when shown, and renders a single static frame instead of animating under `prefers-reduced-motion: reduce`.

**Decision 032 — Duplicated brand suffix in page titles fixed:**
`app/layout.tsx` sets a title template of `%s | Compass IT Solutions`, but eight pages already included the brand in their own metadata title, producing output like `Digital Marketing Agency in Qatar, GCC | Compass IT Solutions | Compass IT Solutions`. Stripped the redundant suffix from the blog index, all 5 blog posts, `app-development`, and `digital-marketing`, and shortened the contact title for the same reason. `openGraph.title` values are left as-is — the template does not apply to them.

### Changed — 2026-05-10 (Dark redesign pass)

**Decision 013 — Full dark design adopted:**
All content sections switched from Paper (#F4F2EC) / Mist (#ECEDEF) backgrounds to Ink (#0B0E10). Sections affected: BrandPillars, ServicesOverview, WhyCompass. Site now runs entirely in Dark Mode colour proportion (Ink 80% · Paper 15% · Signal 5%). Approved by client verbally during review session. DESIGN.md light-mode default is superseded by this decision.

**Decision 014 — Glow and topography pattern effects:**
Signal Cyan (#2BB3E6) glow box-shadows added to: primary CTA button, card hover states (shadow-glow-card), callout block (shadow-glow-signal-sm). Topography contour line SVG pattern added as section background texture on Hero, BrandPillars, and StatsBar sections. Hero gets radial Signal bloom (hero-glow) from below. No new colours introduced — all effects use Signal Cyan at reduced opacity. Approved design direction from client/partner review session 2026-05-10.

**Decision 015 — Nav sizing tightened:**
Nav height reduced from 72px to 60px. Logo text reduced from 17px to 15px. Nav link text reduced from 15px to 14px. Gap between links reduced from gap-8 to gap-6. Reason: nav was visually too heavy compared to reference site.

### Changed — 2026-05-10 (Session 2 — Interactive components pass)

**Decision 016 — GlowCard border alignment fixed:**
Metallic glow pseudo-element was sitting 1.5px outside the card border-box, creating a visible gap between glow arc and card edge. Fixed by replacing inline `border: solid var(--backup-border)` with `box-shadow: 0 0 0 var(--border-size) var(--backup-border)` so both share identical geometry. Also corrected globals.css pseudo-element border-radius from `calc(var(--radius) * 1px)` to `calc((var(--radius) + var(--border, 2)) * 1px)`.

**Decision 017 — GlowCard amber variant added:**
Added `variant` prop (`'cyan' | 'amber'`) to `components/ui/GlowCard.tsx`. Cyan default (hue 190–255) on BrandPillars. Amber (hue 36–54, saturation 82%) on WhyCompass for warm metallic gold glow. Partner can swap via prop. Note: amber here is decorative — flagged against design-system advisory-only rule for partner review.

**Decision 018 — StatsBar amber stat reverted:**
"Founded 2025" reverted from `text-beacon` to `text-signal`. Single amber value among three cyan values read as a data error, not intentional accent. All four stats now uniform signal cyan.

**Decision 019 — ServicesOverview rebuilt as radial orbital wheel:**
Replaced 4-column card grid with new `components/ui/radial-orbital-timeline.tsx`. Eight service nodes orbit a central cyan orb at radius 350px. Auto-rotates; stops on click; popup card shows category, description, related services, and CTA link. Related nodes pulse on selection. Heading overlaid top-left (pointer-events-none absolute) sharing the 880px container so heading and orbit are simultaneously visible in viewport. `lucide-react` added as npm dependency for node icons.

**Decision 020 — Orbit ring metallic glow:**
`data-glow` applied to the 700px orbit ring div. Pointer tracking on containerRef cascades CSS custom properties to ring pseudo-elements via inheritance. `background-attachment: fixed` makes the bright metallic arc appear on whichever segment of the ring is nearest the cursor. Fallback ring: `hsl(200 30% 30% / 0.25)`.

**Decision 021 — Orbit node centering on ring:**
Node calculation radius corrected from 340px to 350px (matching ring radius). Node circles (w-14, 56px) are now bisected by the ring line at all orbit positions.

**Decision 022 — Nav CTA optical centering:**
Removed `leading-none`; changed `py-[7px]` to `pt-[9px] pb-[5px]` on the nav "Start with a diagnostic" button. Uppercase Archivo has no descenders — equal padding appears bottom-heavy; extra top padding compensates for cap-height visual imbalance.

**Decision 023 — Compass logo in orbit center orb:**
Replaced placeholder white circle in orbital center with `logowhite.jpeg` via plain `<img>` tag inside `w-11 h-11 rounded-full overflow-hidden` div with `bg-[#1a7fa8]` to blend JPEG edges with the cyan gradient orb background.

### Added
- `package.json` — Next.js 14.2.21 + React 18 + TypeScript + Tailwind CSS 3.4. Matches stack confirmed in README.md.
- `tsconfig.json` — Standard Next.js 14 TypeScript config. `@/*` path alias maps to project root.
- `next.config.js` — Allows `placehold.co` in `next/image` remotePatterns per CLAUDE.md placeholder image rule.
- `tailwind.config.ts` — Extended with all 6 Compass ITS brand colours (ink, paper, signal, beacon, moss, mist), `archivo` and `jetbrains` font families using CSS variables from `next/font`, full type scale (display-xl through caption) with line-height and letter-spacing from DESIGN.md, border-radius tokens, and letter-spacing utilities.
- `app/globals.css` — CSS custom properties for all 6 brand colours. Tailwind base/components/utilities. Smooth scrolling and font-smoothing.
- `app/layout.tsx` — Loads Archivo (300/400/500/700) and JetBrains Mono (400/500/700) via `next/font/google` with CSS variable injection. Full metadata for home page per SEO.md. Organisation JSON-LD schema per SEO.md spec.
- `components/ui/Button.tsx` — Two variants: `primary` (Signal cyan bg, Ink text) and `ghost` (transparent, Paper border) per DESIGN.md button spec. Uses Next.js `Link`. Focus ring: 2px Signal offset 2px.
- `components/ui/EyebrowLabel.tsx` — JetBrains Mono, uppercase, Signal Cyan, 12px, tracking-eyebrow. Matches DESIGN.md eyebrow spec exactly.
- `components/layout/Nav.tsx` — Sticky header, Ink background, 72px height. Logo: inline SVG mark + Archivo wordmark (placeholder — awaiting brand SVG files). Services dropdown on hover (desktop), full-page overlay (mobile). Primary CTA "Start with a diagnostic" → `/contact`.
- `components/layout/Footer.tsx` — Ink background, 4-column layout (brand + Services + Company + Legal). Contact details in JetBrains Mono. Brand badge at bottom per CONTENT.md.
- `components/sections/Hero.tsx` — Dark hero, Display XL headline "Wired right. Kept running." (Archivo 300, responsive fluid sizing). Eyebrow: "NETWORK · CLOUD · CONTINUITY". Right side: animated infrastructure status mockup using Compass ITS signal system ([OK] indicators). Primary CTA "Start with a diagnostic", secondary "See how we work".
- `components/sections/BrandPillars.tsx` — Three pillars from CONTENT.md. Signal-cyan left border accent. JetBrains Mono numbered labels (01–03).
- `components/sections/ServicesOverview.tsx` — 8 services from CONTENT.md in responsive grid (1→2→3→4 cols). Service cards per DESIGN.md card spec (signal left border, paper background). CTA link per SITEMAP.md internal linking map.
- `components/sections/StatsBar.tsx` — Ink background. Four stat blocks: 2025/10+/20+/10+ per CONTENT.md company profile figures. Signal Cyan numbers at display-l scale (72px).
- `components/sections/WhyCompass.tsx` — Six reasons from CONTENT.md in 3-col grid. Mist background cards. Callout block embedded at bottom per CONTENT.md.
- `components/sections/CalloutBlock.tsx` — DESIGN.md callout spec: Ink bg, Signal left border, italic Archivo Body L, JetBrains Mono source label. Quote verbatim from CONTENT.md.
- `components/sections/ContactCTA.tsx` — Dark full-width CTA. Display L "Get in touch." heading. Copy verbatim from CONTENT.md. Phone link to +974 5149 0825.
- `app/page.tsx` — Home page assembles all sections in order: Hero → BrandPillars → ServicesOverview → StatsBar → WhyCompass → CalloutBlock → ContactCTA. Wrapped in Nav + Footer.

### Decisions Logged

**Decision 006 — Logo placeholder:**
No SVG brand files exist in `/public/brand/` at build time. Nav and Footer use an inline SVG compass-rose geometric mark + Archivo wordmark as placeholder. SVG mark intentionally simple (square + diamond + dot in Signal Cyan) to suggest the circuit-board mark aesthetic from BRAND.md. Replace with approved brand SVGs when supplied by client.

**Decision 007 — Services section heading copy gap:**
CONTENT.md does not specify a section heading for the Services overview section. Used "One partner, end-to-end." with "end-to-end" in Signal Cyan — this phrase is from CONTENT.md (Why Compass section). Flagged to client: confirm this or supply a specific services section heading.

**Decision 008 — Brand pillars section heading copy gap:**
CONTENT.md provides pillar body copy but no section-level h2. Used "Three things we don't compromise on." — direct, plain-spoken, on-brand but not verbatim from approved copy. Client to confirm.

**Decision 009 — Stats bar section heading copy gap:**
CONTENT.md specifies stat numbers/labels but no section heading for the stats bar. Used "Quiet infrastructure. Measurable outcomes." — in brand voice but not from approved copy. Client to confirm.

**Decision 010 — Hero status mockup (right column):**
No product screenshots or brand imagery available. Right column of hero uses a pure CSS/HTML "Infrastructure Monitor" status panel showing the Compass ITS signal system ([OK] states, Signal Cyan indicators, JetBrains Mono labels). This fulfils the structural role of the reference image's right-side UI panel while being 100% on-brand. Replace with actual product/service imagery when supplied.

**Decision 011 — Responsive hero font scale:**
Display XL (110px) is the desktop target per DESIGN.md. Responsive scale: 52px mobile → 72px md → 90px lg → 110px xl. Letter-spacing -0.045em preserved at all sizes. No layout shift at any breakpoint.

**Decision 012 — Services grid: 8 services, not 9:**
CONTENT.md services overview table has 8 entries. Custom Solutions is in SITEMAP.md but has no one-line description in CONTENT.md. Custom Solutions omitted from home page grid per copy rules (do not invent copy). Add when client approves a one-liner.

- `README.md` — Project overview, stack, folder structure, environment variables, scripts, and deployment notes.
- `DESIGN.md` — Full design system spec in Google Stitch DESIGN.md format for use with Claude Code and other AI coding agents. Covers colour tokens, typography scale, spacing system, component styling, logo rules, and agent prompt guide.
- `BRAND.md` — Complete brand identity reference derived from Compass IT Solutions Brand Package V1.0 (April 2026). Covers brand pillars, logo system (3 variants, 6 colour versions), colour palette (6 colours with CMYK/Pantone references), typography (Archivo + JetBrains Mono), signal/status system, and misuse rules.
- `VOICE.md` — Copywriting tone and language guide. Covers four voice attributes (Direct · Calm · Specific · Quietly warm), We Say / We Don't Say reference table, headline patterns, CTA rules, error message voice, and a list of language permanently off the site.
- `CONTENT.md` — Approved copy for all pages: Home, About, IT Services, Website Development, App Development, AI Workflows, Digital Marketing, How We Work, Contact, Footer. All statistics verified against the Compass ITS Company Profile (2025).
- `SITEMAP.md` — Full page hierarchy, URL slugs, nav structure, CTA destinations, and internal linking map for all 13 pages.
- `SEO.md` — Title tags, meta descriptions, Open Graph tags, primary and secondary keywords, JSON-LD schema markup for all 13 pages. Includes technical SEO launch checklist and global schema for the Organisation.
- `CHANGELOG.md` — This file. Follows Keep a Changelog format.

---

## Versioning Convention for This Project

Since this is a website (not a library or API), versions here track **deployment milestones**, not semantic software versions:

| Version | Meaning |
|---|---|
| `0.1.x` | Pre-launch — documentation and scaffolding phase |
| `0.2.x` | Design system and component library built |
| `0.3.x` | Pages built (static content) |
| `0.4.x` | CMS integration and dynamic content |
| `0.5.x` | Analytics, SEO, and performance hardening |
| `1.0.0` | **Public launch** — all pages live, Lighthouse 95+, Core Web Vitals green |
| `1.x.x` | Post-launch iterations, content updates, new features |

---

## [0.1.0] — 2026-05-10

### Added
- Initial project documentation suite created (7 markdown files).
- Brand Package V1.0 (April 2026) reviewed and all tokens extracted into `BRAND.md` and `DESIGN.md`.
- Company Profile (2025) reviewed and all approved copy extracted into `CONTENT.md`.
- Tech stack confirmed: Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel.
- Font choices confirmed: Archivo (primary) + JetBrains Mono (mono/labels) — both via Google Fonts, matching the brand package specification exactly.

### Decisions Logged

**Decision 001 — Stats figures:**
The brand package cover shows "30+ engineer network / 50+ clients" while the company profile body page shows "10+ professionals / 20+ clients / 10+ projects". These figures differ. `CONTENT.md` uses the profile body page figures (10+/20+/10+) as they are more specific and match the "founded 2025, growing" narrative. The 30+/50+ figures from the cover are noted as regional/aspirational. Client must confirm which set to display at launch.

**Decision 002 — DESIGN.md format:**
Adopted Google Stitch DESIGN.md open-source specification (Apache 2.0, published April 2026) as the format for the design token file. This format is natively readable by Claude Code, Cursor, GitHub Copilot Workspace, and other AI coding agents. No proprietary tooling required.

**Decision 003 — Dark vs light default:**
Site defaults to light mode (Paper `#F4F2EC` backgrounds) for content sections, matching the brand's 80/15/5 light proportion rule. Hero sections, navigation, and footer use dark mode (Ink `#0B0E10`). There is no user-toggled dark mode at launch — this is consistent with the brand's deliberate, non-reactive aesthetic.

**Decision 004 — CMS deferred:**
CMS integration (Sanity or Contentlayer) is deferred until post-launch. V1.0 launches with content hard-coded from `CONTENT.md`. CMS will be evaluated in `v1.1.x`.

**Decision 005 — Arabic / RTL deferred:**
Arabic language and RTL layout are not in scope for V1.0. The architecture (Next.js App Router) supports `next-intl` or `i18next` if added later. `hreflang` is noted in `SEO.md` as a post-launch addition.
