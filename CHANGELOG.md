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

### Changed — 2026-08-18 (Nav and footer blur radius cut from 16px to 4px)

**Decision 059 — the radius drops, the filter stays:**
This is deliberately *not* the change that got reverted in Decision 052. Removing `backdrop-filter` takes an element off its own composited layer, and text antialiasing changes with it — grayscale inside a composited layer, subpixel outside. That is what altered the typography. Lowering the radius keeps the filter, keeps the promotion, and therefore keeps the antialiasing identical. Only the cost of the blur changes.

**The measurement that justifies 4px.** Both surfaces sit under a near-opaque cover, so almost none of the blur was ever visible:

| Surface | Blur | Cover | Blur actually visible |
|---|---|---|---|
| Footer panel | 16px | `rgba(11,14,16,0.9)` | **10%** |
| Nav bar, floating | 16px | `bg-ink/90` | **10%** |
| Services dropdown | 16px | `bg-ink/95` | **5%** |
| Mobile menu overlay | 16px | `bg-ink/95` | **5%** |

Seen through a 10% window, 4px and 16px are not meaningfully different — but the nav is `position: fixed` and on screen throughout every scroll, so it re-blurs whatever passes behind it on every frame, at full price, for a tenth of an effect.

All four move to `backdrop-blur-sm`. It is one class name, so raising any of them back is trivial.

Verified: the footer computes `backdrop-filter: blur(4px)` and remains promoted — `backdropFilter !== 'none'` — with its background alpha unchanged at 0.9. Built CSS carries `blur(4px)` where it carried `blur(16px)`. `tsc --noEmit` and a clean `next build` pass.

**Left alone, out of scope:** `radial-orbital-timeline` still has one `backdrop-blur-lg` on its expanded-node popup at `bg-ink/95` — 95% covered, so the same argument applies, but it renders only on click and is not a scroll cost. `.glass` on the hero card keeps `blur(20px) saturate(115%)` at 72% cover, where 28% of the blur is visible and the effect is real.

**Not verified: how it looks.** The nav's blur only exists in its scrolled state, which a non-compositing pane cannot reach, so the nav was checked in source and built CSS rather than on screen.

### Changed — 2026-08-18 (Glow surfaces no longer use `background-attachment: fixed`)

**Decision 058 — 47 fixed-attachment backgrounds become 0, without losing the effect:**
Fixed-attachment backgrounds cannot be composited. The background is anchored to the viewport while the element moves under it, so all 47 repainted on every scroll frame. This removes them.

**Deleting the property alone would have broken the glow, not merely changed it.** The gradients are centred at `calc(var(--x) * 1px) calc(var(--y) * 1px)` where `--x`/`--y` are *viewport* coordinates, and `background-attachment: fixed` is precisely what makes the background's positioning area the viewport. Without it those viewport numbers are measured from each element's own top-left instead. A 231px-tall card with the pointer at viewport y=400 would place its glow 400px below its own top — outside itself. Most glows would have vanished.

So the coordinates moved into element space instead. `PointerTracker` now writes `--gx`/`--gy` on every `[data-glowcard]` and `[data-glow]` — the same pointer position expressed relative to that element — alongside the existing `:root` variables, which stay for the hue ramp. Rects are read for the whole batch before any are written, so it costs one layout rather than one per element, and offscreen surfaces are skipped.

**Scrolling now does no work here at all.** Local coordinates are recomputed on pointer movement only. Because the gradient is painted in the element's own box, scrolling changes nothing about how the element looks and the compositor can simply move it.

**The visible trade.** While scrolling *without* moving the mouse, the glow rides along with its card instead of staying anchored on screen, and corrects on the next pointer movement. That is a real behavioural difference and it is the price of the change. Before the pointer has moved at all, `--gx`/`--gy` fall back to `0`, putting the glow at each card's top-left — the same resting state as before, when `--x`/`--y` were unset and the glow sat at the viewport's top-left.

Verified: `background-attachment: fixed` count on the home page **47 → 0**, elements and pseudo-elements both. The coordinate plumbing resolves correctly end to end — writing `--gx: 120, --gy: 45` on a card produced a gradient centre of exactly `120px 45px` on the element background and on its `::before`, and `--gx: 200, --gy: 80` on the orbit ring produced `200px 80px` on its `::before`. `tsc --noEmit` and a clean `next build` pass.

**Not verified: the live update path or how any of it looks.** `PointerTracker` coalesces behind `requestAnimationFrame`, which never fires in a non-compositing pane, so the write path could only be checked by resolving the CSS by hand rather than by moving a real pointer. This is the third change in a row whose mechanism is proven and whose appearance is not.

### Added — 2026-08-18 (Offscreen home sections skip rendering)

**Decision 057 — `content-visibility: auto` on every home section below the fold:**
The home page is 5732px against a 720px viewport — roughly eight screens, seven of them offscreen at any moment — and carries 47 `background-attachment: fixed` backgrounds. Fixed-attachment backgrounds cannot be composited: each repaints every scroll frame because the background is anchored to the viewport while the element moves under it. `content-visibility: auto` stops the offscreen seven-eighths from paying that, and skips their style and layout too.

Chosen because it is the one remaining large win that is meant to be invisible. It does not touch layer promotion, so it cannot repeat the text-antialiasing regression of Decision 052, and it does not touch the field.

`#hero` is excluded — above the fold, nothing to skip, and deferring it would only delay first paint. `StatsBar` gained `id="by-the-numbers"` so it could be targeted; it was the only section without one.

**The intrinsic sizes are measured, and the first attempt was wrong.** `contain-intrinsic-size` sizes the **content box**, so a section's vertical padding is added on top of it. Setting it from a measured `getBoundingClientRect()` height over-sized every placeholder by its padding — 1161px became a 1321px placeholder against a real 1161px section, which is exactly the scrollbar jitter this was supposed to avoid. Corrected by subtracting each section's padding (`py-20 lg:py-24`, and `py-24 lg:py-32` on `#contact`).

Values are per-breakpoint because these sections change height sharply: `#why-compass` is 958px at 1280 wide and 2058px at 375. Written mobile-first with desktop overrides above `lg`. The `auto` keyword means the browser stores each section's real height after its first render and reuses it, so these lengths only govern first paint.

Verified at both breakpoints, against the heights recorded before the change:

| | desktop 1280 | mobile 375 |
|---|---|---|
| document height before | 5732px | 8315px |
| document height after | 5734px | 8317px |
| **drift** | **+2px** | **+2px** |

Every section's placeholder matched its real rendered height exactly at both sizes — 580 / 1072 / 414 / 958 / 1231 on desktop, 1161 / 803 / 564 / 2058 / 1173 on mobile. Content is untouched: `#why-compass` still holds 1008 characters of `textContent` with its heading queryable, and the server-rendered HTML still contains every section's copy at 1349 words. `content-visibility` is a rendering optimisation only — nothing changes for crawlers or assistive technology.

`tsc --noEmit` and a clean `next build` pass.

**Not verified: whether it feels faster.** The browser pane never composites, so paint cannot be profiled and scrolling cannot be exercised — `window.scrollTo` leaves `scrollY` at 0. The mechanism and the absence of layout shift are confirmed; the improvement is not. A Performance recording or Paint-flashing pass in a real Chrome is what would settle it.

**Unsupported browsers ignore it.** `content-visibility` is Chrome/Edge, Safari 18+, Firefox 125+. Anywhere else the declaration is dropped and the page renders exactly as before.

### Removed — 2026-08-18 (A duplicate pointer listener and a dead interval in the orbital dial)

**Decision 056 — two costs in `radial-orbital-timeline` that touch neither the field nor type rendering:**

- **A second `pointermove` listener on `document`, uncoalesced and non-passive.** It wrote `--x`, `--xp`, `--y` and `--yp` on the dial's container — the same four values `PointerTracker` already writes on `:root`. Custom properties inherit, so the ring reads identical numbers without it: verified by setting `--x: 640.00` on `:root` and reading `640.00` back off both the `[data-glow]` ring and a `[data-glowcard]`. The difference is cadence. `PointerTracker` coalesces to one write per frame behind `requestAnimationFrame` and registers `{ passive: true }`; this one ran four `setProperty` calls on **every** `pointermove` event, which on a high-polling-rate mouse is several hundred a second, each invalidating style for everything below it.
- **A 20Hz `setInterval` driving `setRotationAngle`.** Dead: `autoRotate` initialised to `false` and `setAutoRotate(true)` was never called anywhere, so the timer never started. Removed with the state itself rather than left looking load-bearing. Nothing rotated before and nothing rotates now — this is cleanup, not a saving, and it is recorded as such.

**What the measurements actually said, including where a hypothesis was wrong.** The page is 461 DOM nodes and 5732px tall against a 720px viewport — roughly eight screens, most of it offscreen at any moment. It carries **47 `background-attachment: fixed` backgrounds** (9 elements plus 38 pseudo-elements), 11 `backdrop-filter`s, 13 `filter`s and 13 `box-shadow`s.

The theory that `--x`/`--y` invalidation was the bottleneck did not survive testing: forcing style plus layout after writing those variables measured **1.09×** the cost of writing an unused custom property. The pointer variables are not special. The cost is paint, not style recalc — and paint is precisely what cannot be profiled here, because the browser pane reports layout dimensions but never composites, so `requestAnimationFrame` does not fire and no frame timing exists to sample.

Verified: `[data-glow]` still inherits from `:root`; DOM node count unchanged at 461; `tsc --noEmit` and a clean `next build` pass.

### Changed — 2026-08-18 (Background orbs dimmed)

**Decision 055 — `BLOB_INTENSITY` 0.52 → 0.35 → 0.25:**
The five drifting blobs in the WebGL field read too bright. The dial is the multiplier on `influence`, which sets how strongly blob colour mixes over the background:

```glsl
float influence = min(w0+w1+w2+w3+w4, 1.0) * BLOB_INTENSITY;
col = mix(col, blobColor, influence);
```

That multiplier was a bare `0.52` inline. It is now a named `#define` at the top of the shader beside `BG`, `CYAN` and `INDIGO`, so it is a one-line dial like `RENDER_SCALE` and `TARGET_FPS`. Set to 0.35 first, then dropped again to **0.25 — a little over half the original brightness** — after the first step was still too bright. The blobs keep their shape, colour and motion — they sit further back. Tune in either direction at no cost: it is one multiply per fragment regardless.

**One trap worth recording.** The comment introducing the `#define` was first written with an em-dash, putting a non-ASCII character inside GLSL source. Shader compilers may reject bytes above 0x7F even inside comments, and a failed compile here means a black background with only a `console.error` to show for it. Replaced with `--`, and the shader source is now verified ASCII-only. Keep GLSL comments ASCII.

Verified in the browser against the live WebGL context, not just the file: fragment shader `COMPILE_STATUS` true with an empty info log, program `LINK_STATUS` true, context not lost. `getShaderSource()` on the running program reports `#define BLOB_INTENSITY 0.25`, no `uMouse`, no `uClicks`, zero non-ASCII characters, and `ACTIVE_UNIFORMS` down from 5 to **2** — `uRes` and `uTime`, confirming Decision 054's removals took effect in the compiled program. Canvas buffer 1280×720 at `devicePixelRatio` 1.5, so `RENDER_SCALE` still holds. Clean `next build` passes.

**Not verified:** how it looks. The browser pane reports layout dimensions but does not composite, so screenshots still fail. Both values were chosen by judgement and adjusted on the client's feedback, not matched to a reference.

### Removed — 2026-08-18 (Dead shader uniforms and their pointer listeners)

**Decision 054 — `uMouse`, `uMouseIn` and `uClicks` drove nothing:**
All three were declared in the fragment shader and read by `main()` **zero times** — verified by extracting the shader body and counting occurrences, against `uRes` at 3 and `uTime` at 2. The shader has never had a pointer response. Removed along with everything that existed to feed them: three `window` pointer listeners, the `local()` mapper, the easing step in `draw()`, the four-slot click ring buffer and its per-frame `Float32Array(16)` upload.

The listeners were the part that cost. `pointermove` on `window` without `{ passive: true }` blocks scrolling until the handler returns, and `PointerTracker` already runs one rAF-coalesced listener for the whole site — this was a second, uncoalesced one feeding uniforms nobody read.

Invisible by construction: nothing here reaches layer promotion, which is what caused the typography regression in Decision 052. No compositing change, no paint change.

Verified: no reference to any of the removed identifiers survives outside explanatory comments; `tsc --noEmit` passes.

### Changed — 2026-08-18 (Shader render scale and frame rate, and nothing else)

**Decision 053 — the two dials from Decision 044 that do not touch layer promotion:**
Decision 052 reverted the whole optimisation pass because it changed how type rendered. The cause was layer promotion: removing `backdrop-filter` and `will-change: filter` moved elements off their own composited layers, and text antialiasing changes with them — grayscale in a composited layer, subpixel outside one. Those two stay reverted. These two do not go near it:

- **`RENDER_SCALE = 1`** — the canvas draws at CSS resolution rather than `min(devicePixelRatio, 2)`. Measured on a 1.5x display: buffer went from 1920×1080 to 1280×720, **0.45× the fragments**. On a 2x display it is a quarter. Nothing about the element's compositing changes; only how many fragments the shader evaluates.
- **`TARGET_FPS = 30`** — the drift is `uTime * 0.22` for the blobs and `uTime * 0.012` for the contours, so nothing on screen moves fast enough for 30 and 60 to differ, and the compositor gets back half the GPU time it was competing for.

Both are named constants at the top of the file so they are one-line dials. `RENDER_SCALE` is the only value here that is a genuine resolution change — the field is smooth gradients plus a contour line at 1.8% opacity so it should not read as softer, but `1.5` keeps most of the saving if it does.

**Not reapplied, deliberately:** `backdrop-filter` and `will-change: filter` stay as they were before this session. Also left alone are the shader's dead `uMouse`/`uMouseIn`/`uClicks` uniforms and their three non-passive `pointermove` listeners — invisible, and a real scroll-blocking hazard, but outside what was asked for here.

Verified: canvas buffer 1280×720 against a 1265×720 CSS box at `devicePixelRatio` 1.5; `git diff` against the revert touches one file; `tsc --noEmit` and a clean `next build` pass. The frame throttle is verified by code and type check only — the browser pane reports layout dimensions but is not compositing, so `requestAnimationFrame` does not fire and the rate cannot be sampled here.

### Reverted — 2026-08-18 (Home and contact look restored to pre-optimisation)

**Decision 052 — the visual changes from Decisions 044, 046 and 047 are reverted at the client's request:**
The typography and the background orbs were not wanted. Everything that altered the rendered appearance is back to its state at `0c8d6fa`, byte-identical:

- **`WebGLBackground` is the field on `/` and `/contact` again**, restored in full — `min(devicePixelRatio, 2)`, 60fps, and the pointer uniforms. `SiteBackground` imports it again. `AuroraBackground` is unreferenced once more, exactly as it was before this session touched it.
- **`GlowCard` gets `backdrop-blur-[2px]` back**, and `will-change: filter` returns to both `[data-glowcard] [data-glowcard]` and `[data-glow] [data-glow]`. These two are the likeliest cause of the typography complaint: `backdrop-filter` and `will-change` both force layer promotion, and text in a composited layer is antialiased differently — grayscale rather than subpixel. Removing them changed how type rendered on every glow card and on the orbital dial, which is a visual change the performance rationale did not account for.
- **`Cairo` is preloaded again** — `preload: false` removed.

**Kept, because none of it is visible:** the `hover-footer` `NaN` fix (Decision 043, console-only), the passive scroll listener on `Nav` (behaviour, not appearance), the removal of four unreferenced components (Decision 045), and the aurora CSS improvements from Decision 046 — the aurora renders nowhere now, so its stops and keyframes have no effect either way.

**Also kept in full:** the entity graph and blog schema (Decisions 049, 050) and the brand asset renames (Decision 051). Verified after the revert: `/blog` still declares `numberOfItems: 8`, `#organization` and `#website` still resolve, and both brand assets still load.

Verified: `<canvas>` present, zero `.aurora-blob` elements rendered, `backdrop-filter: blur(2px)` on the cards, `will-change: filter` on the inner bloom, `tsc --noEmit` passes, console clean.

**The performance findings from Decision 044 still stand and are now un-actioned.** The scroll cost that prompted them — nine fixed-attachment gradients, eleven backdrop filters and a full-resolution 60fps shader per frame — is back. If the stutter returns, the fix has to come from somewhere that does not change how the page looks: the render scale and frame rate on the shader are invisible dials, unlike the layer-promotion changes that caused this revert.

### Changed — 2026-08-18 (Brand assets renamed to the names `BRAND.md` specifies)

**Decision 051 — the four vector assets now carry their documented names:**
`BRAND.md` has always listed a fourteen-file asset set. Four files existed, none under those names, which is how Decision 050 found every blog post pointing `publisher.logo` at a 404. Renamed with `git mv` so history follows them:

| Vendor name | Documented name | Geometry |
|---|---|---|
| `Secondary Transparent.svg` | `compass-its-horizontal-dark.svg` | mark left, wordmark right — 4.35:1 |
| `Primary Transparent.svg` | `compass-its-stacked-dark.svg` | mark above wordmark — 1.41:1 |
| `Monogram Transparent.svg` | `compass-its-monogram-dark.svg` | mark only — 1.11:1 |
| `Monogram Hero.svg` | `compass-its-monogram-dark-hero.svg` | tight crop, outside the documented set, unused |

Which file was which was measured, not guessed — `getBBox()` on each path in the browser. Naive coordinate parsing of the path data had returned ~1:1 for all four and would have mislabelled them. Worth recording that **the vendor's "Primary" is the stacked lockup and its "Secondary" is the horizontal one**, the reverse of the priority `BRAND.md` sets, where horizontal is the default for all placements.

**The 404 is now fixed at the source rather than papered over.** Decision 050 added a redirect from `/brand/compass-its-horizontal-dark.svg` because the blog bot emits that path and the file did not exist. It exists now, correctly named, so the redirect is removed — a redirect whose source is a real file would shadow the asset. The bot's URL resolves directly, 200, no hop, and it gets the horizontal lockup the name promises. `#organization` now declares the same asset, so the entity logo and every bot-written post agree.

**A 308 shipped in Decision 050 had to be cleaned up after.** That redirect was `permanent: true`, and 308 is cached hard by browsers and crawlers. It reached production. Renaming its target away would have left anyone holding the cached redirect following it to a 404 — caught in the browser, where a cache-busted request returned 200 while the plain one still followed the stale 308 to the old path. `next.config.js` now redirects all four vendor names to their new ones, which covers the stale cache and any external link to a vendor-named asset. Sources are percent-encoded: Next matches the raw pathname, so a `source` written with literal spaces silently never fires.

**`BRAND.md`'s asset list now describes what exists**, rather than a set that was never committed:

- The reversed/white variants are not files. Every asset is `fill:black`; the nav reverses its logo at runtime with `filter: invert(1)`. `compass-its-horizontal-white.svg`, `-stacked-white`, `-monogram-white` and `-monogram-signal` do not exist and cannot be produced by renaming — they need to come from the brand owner.
- Favicons and OG images are generated by Next.js file convention (`app/icon.svg`, `app/opengraph-image.tsx`, plus per-route variants), so `favicon.ico`, the four `favicon-*.png`, `apple-touch-icon.png` and `og-image.png` are correctly absent.

Verified: all four new names 200; all four vendor names 308 to the right target, byte sizes confirming each mapping; every `<img>` on the home page loads with non-zero natural dimensions; `#organization`'s logo resolves 200; no stale reference to an old name anywhere in `app/` or `components/`; `tsc --noEmit` and a clean `next build` pass.

### Changed — 2026-08-18 (Entity graph consolidated site-wide)

**Decision 050 — 24 anonymous Organization nodes become one referenced entity:**
Decision 049 created `#organization` and `#website` so the blog `CollectionPage` had something to point at. Every other page still declared its own copy of the company: eight service pages with an inline `provider`, eight blog posts with an inline `author` and `publisher` — **24 anonymous `Organization` nodes across 16 pages**, none carrying an `@id`, so none of them merged. A crawler saw two dozen loosely similar organizations rather than one entity, which is exactly the fragmentation an entity graph exists to remove. All 24 now resolve to `{ '@id': 'https://compass-its.com/#organization' }` and inherit the node the layout already publishes — name, url, logo, address, geo, telephone, opening hours, areaServed, founding date.

**This also fixed a live break.** Every one of the eight blog posts set `publisher.logo` to `/brand/compass-its-horizontal-dark.svg`. That file has never existed — `/public/brand/` holds `Monogram Hero.svg`, `Monogram Transparent.svg`, `Primary Transparent.svg` and `Secondary Transparent.svg`. The filename comes from `BRAND.md`, which documents an asset set that was never committed under those names. Confirmed 404 on every post. Since a publisher logo that does not resolve is precisely the signal this markup exists to send, that was the schema failing at its main job while validating cleanly.

**The bot could not be left to reintroduce it.** The blog automation runs outside this repo — its commits create `app/blog/<slug>/page.tsx` and `client.tsx`, and append to `lib/posts.ts` and `app/sitemap.ts`. Its page template is not editable from here, so every future post will keep emitting the same inline publisher and the same missing logo path. `next.config.js` now permanently redirects `/brand/compass-its-horizontal-dark.svg` to the asset `#organization` declares, so the URL resolves no matter who writes it.

Verified by simulating a bot publish — a post appended to `lib/posts.ts` plus a page carrying the bot's verbatim inline template:

- the blog `ItemList` picked it up with no intervention, `numberOfItems` 8 → 9, new post at position 1
- the bot-shaped page rendered 200 with its inline publisher intact, and its logo URL resolved 200 through the redirect
- simulation reverted; `git status` showed only the 17 intended files

Graph checked on every page type — home, blog index, contact, two blog posts, three service pages: **zero dangling references site-wide**. `tsc --noEmit` and a clean `next build` pass.

**Still outstanding, for whoever owns the bot:** its template should emit `author` and `publisher` as `{ "@id": "https://compass-its.com/#organization" }`. Until it does, new posts stay valid and their logo resolves, but they declare their own anonymous Organization instead of joining the graph — the redirect is a safety net, not the fix.

### Added — 2026-08-18 (Blog index `CollectionPage` + `ItemList` schema)

**Decision 049 — SEO-supplied blog collection schema, with two faults in it corrected:**
Added the `CollectionPage` + `ItemList` graph requested for `/blog`, in the structure supplied. Two things in the markup as given would not have worked:

- **It listed six posts; the blog has eight.** The supplied `itemListElement` began at *How Cloud Artificial Intelligence Is Driving IT Innovation*, the site's third post, omitting `how-to-build-network-infrastructure-qatar` and `how-cyber-security-reduces-business-risks` — both auto-published by `blog-pumper` after the markup was written. `numberOfItems: 6` on a page rendering eight article links is a mismatch a crawler can see. The `ItemList` is now built from `lib/posts.ts`, for the reason that file already states about the index and hero rail: it is the single source of truth, and anything that restates it goes stale. The bot's next post now gets schema without anyone remembering to add it.
- **`isPartOf` and `publisher` referenced `@id` nodes that existed nowhere on the site.** No `@id` appeared anywhere in the codebase, so both references dangled — the `CollectionPage` would have had no publisher and belonged to no website. `app/layout.tsx` now emits an `@graph`: the existing `LocalBusiness`/`ProfessionalService` node carries `@id: https://compass-its.com/#organization`, and a `WebSite` node sits at `#website` publishing from it. Declared in the layout so the anchors are present on every route, ready for other pages to reference.

Verified on the rendered page: both `ld+json` blocks parse; four nodes defined (`#organization`, `#website`, `/blog#collectionpage`, `/blog#itemlist`); all four `@id` references resolve, zero dangling; `numberOfItems` 8 matches 8 actual items, order Descending. `tsc --noEmit` and `next build` pass.

**Left as supplied:** the schema `description` ("Technology, infrastructure, and IT insights for businesses in Qatar and the GCC.") does not match the page's meta description ("Thinking out loud on technology, infrastructure, and what makes IT work in Qatar and the GCC."). That is a copy decision for whoever owns the SEO brief, not a defect.

### Removed — 2026-08-18 (`WebGLBackground.tsx`)

**Decision 048 — The shader goes:**
Decision 047 kept `components/ui/WebGLBackground.tsx` in the tree after the aurora replaced it, on the argument that a working implementation of the previous look is worth more than an abandoned experiment. That argument does not survive contact with Decision 045, which deleted four components for exactly the condition this one was left in. Consistency wins: nothing imports it, so it goes, and git history holds it if the old look is ever wanted back.

Removes 90 lines of GLSL and its WebGL setup — shader compilation, program linking, uniform plumbing, the resize and visibility handlers, the rAF loop. The stale comment in `SiteBackground` that pointed at the file as still-present is corrected.

`CHANGELOG` references to `WebGLBackground` in Decisions 044 and 047 are left alone. They are the record of what the component did while it existed, and rewriting them would make the history lie.

Verified: `tsc --noEmit` and a clean `next build` both pass, no `gl_FragColor` or `OES_standard_derivatives` anywhere under `.next/static/`, `/` and `/contact` still render five `.aurora-blob` elements, `/blog` still renders the static texture, console clean.

### Changed — 2026-08-18 (Aurora replaces the WebGL field on `/` and `/contact`)

**Decision 047 — `SiteBackground` serves `AuroraBackground` where it used to serve `WebGLBackground`:**
Decision 046 made the aurora cheap but left it imported by nothing. It is now the animated field on the two routes that had one. Every other route keeps the static contour texture, unchanged.

The two draw the same kind of thing at very different prices. The shader ran a fullscreen pass built from two 5-octave `fbm()` calls per fragment, every frame, forever — even at the reduced resolution and 30fps from Decision 044, that is real GPU work on every device that loads the home page. The aurora is five gradient layers the compositor translates and nothing else: no filter, no per-frame rasterisation, no WebGL context.

`WEBGL_ROUTES` is renamed `AURORA_ROUTES`. `AuroraBackground` picks up `aria-hidden`, matching the static texture it sits alongside — it is decoration and has no business in the accessibility tree.

Verified on the running site: `/` and `/contact` render five `.aurora-blob` elements and no `<canvas>`; `/services/cybersecurity` and `/blog` render the static texture and no blobs. Computed styles on the blobs are `filter: none`, `will-change: transform`, `mix-blend-mode: screen`, with `blob-drift-*` running and eight gradient stops on blob 4. `/images/topo-lines.svg` resolves. Console clean, `tsc --noEmit` and `next build` both pass, and no `gl_FragColor` or `OES_standard_derivatives` survives in any client chunk.

**Deleted by Decision 048 above.** `components/ui/WebGLBackground.tsx` was left in the tree here on the argument that a working implementation of the previous look is worth keeping. That did not survive comparison with Decision 045, which deleted four components for the same condition, so the shader is now gone too.

### Changed — 2026-08-18 (Aurora field kept, made cheap)

**Decision 046 — The aurora blobs and contour lines stay; what made them expensive does not:**
Decision 045 removed `AuroraBackground` along with the other unreferenced components. Reinstated on request, with the cost taken out rather than the feature:

- **Dropped `filter: blur(80px)` from `.aurora-blob`.** Every blob is a radial-gradient already fading through four or five stops to transparent — that *is* a blur, drawn for free by the gradient rasteriser. The 80px filter pass ran over surfaces up to 1100×860, five of them, under `mix-blend-mode: screen`, and added almost nothing visible. Where it was doing real work — the steeper indigo falloffs on blobs 4 and 5, which ran 0.90 to 0.25 across a quarter of the radius — extra stops at 10%, 40% and 68% carry it instead.
- **Dropped `scale()` from all five `blob-drift-*` keyframes, keeping `translate()`.** Scaling a promoted layer forces it to re-rasterise at every new size; a pure translate is handed to the compositor and costs nothing per frame. The blobs still roam, they no longer breathe.
- **`will-change: transform` stays.** Unlike the `will-change: filter` removed in Decision 044, this one is honest: transform is what animates here.
- **`.topo-lines-pattern` now loads `/images/topo-lines.svg` instead of an inlined `data:` URI.** That was 1,786 bytes of encoded SVG sitting in a render-blocking stylesheet on every page, including all the ones that never draw it. As a file it loads in parallel, caches on its own terms, and `next.config.js` gives it the same immutable header as `topo-contours.svg`.
- **Added a `prefers-reduced-motion` rule.** Five infinite animations had no reduced-motion path; the WebGL field already had one.

Verified: all six `.aurora-blob*` classes present in the built stylesheet, `blur(80px)` gone, no `data:image/svg` left in any built CSS, `/images/topo-lines.svg` serves 200. `tsc --noEmit` and `next build` both pass.

**Wired in by Decision 047 above.** At the time of this decision `AuroraBackground` was still imported by nothing; it is now the animated field on `/` and `/contact`.

### Removed — 2026-08-18 (Unreferenced components in `components/ui/`)

> **Partly superseded by Decision 046 above.** `AuroraBackground` and its CSS were reinstated on request and made cheap instead. The other four components, the dependency and the type shim stay removed. The line-count figure below describes the state before that reinstatement.

**Decision 045 — Five components nothing imports, and everything that existed only to serve them:**
`AuroraBackground`, `MeshDrift`, `TopoBackground`, `TopoBackgroundStatic` and `WhatsAppButton` were each defined in their own file and referenced from nowhere — verified across every file type, not just `.tsx`. They cost nothing at runtime, since a module outside the import graph is never built, but they anchored things that did cost:

- **`.aurora-blob`, `.aurora-blob-1` through `-5`, and the five `blob-drift-*` keyframes** shipped in `globals.css` on every page. Hand-written CSS in the base layer is not purged the way unused Tailwind classes are.
- **`.topo-lines-pattern`** went with them — a ten-path contour SVG inlined as a `data:` URI, used only by `AuroraBackground`.
- **`@chriscourses/perlin-noise`** was imported by `TopoBackground` alone, so the dependency and its hand-written type shim (`types/chriscourses__perlin-noise.d.ts`, and with it the whole `types/` directory) are gone. `TopoBackgroundStatic` carried its own inlined perlin and never used the package.

`globals.css` drops from 494 to 376 lines. `tsconfig.json` needed no change — it globs `**/*.ts` rather than naming `types/`.

**Kept:** `public/images/topo-contours.svg`. Despite the name it belongs to `SiteBackground`, which serves it as the static field on every non-WebGL route, and `next.config.js` sets its immutable cache header. Nothing to do with the deleted `TopoBackground`.

Verified: `tsc --noEmit` and `next build` both pass, home page renders, console clean.

### Changed — 2026-08-18 (Home page scroll cost)

**Decision 044 — The home page was paying for four effects nobody can see:**
Scrolling the front page stuttered. Measured on the rendered page, every scroll frame had to repaint 9 `GlowCard`s worth of `background-attachment: fixed` gradients, re-run 11 backdrop filters, and composite all of it over a full-screen WebGL canvas redrawing at 60fps with a shader that runs two 5-octave `fbm()` calls per fragment. Four changes, none of which alter the design:

- **`WebGLBackground` renders at CSS resolution, not `min(devicePixelRatio, 2)`.** On a 2x display that was four times the fragment work. The field is smooth gradients plus a contour line at 1.8% opacity — there is nothing in it a retina pixel grid resolves.
- **`WebGLBackground` runs at 30fps.** The drift is `uTime * 0.22` for the blobs and `uTime * 0.012` for the contours. At that speed 30 and 60 are indistinguishable, and the halved GPU time is time the compositor gets back.
- **Removed the shader's dead pointer machinery.** `uMouse`, `uMouseIn` and `uClicks` were declared, fed by three window listeners, an easing step and a four-slot click ring buffer, and referenced nowhere in `main()`. The shader has never had a pointer response. The listeners were the part that cost: `pointermove` on window without `{passive: true}` blocks scroll, and it duplicated the one `PointerTracker` already runs site-wide. Nav's scroll listener is now passive for the same reason.
- **Dropped `backdrop-blur-[2px]` from `GlowCard` and `will-change: filter` from both outer-bloom rules.** Blurring a smooth gradient by 2px returns the same gradient, at the price of ten composited layers re-running a backdrop filter per frame. `will-change: filter` hinted at a value that never changes — only the background beneath it moves — so it promoted nine elements to their own layers and then defeated raster caching on each. The hero card's `.glass` blur(20px) is untouched: that one is a real effect on a single element. Card contrast is unaffected — blur does not dim.

Verified after: backdrop-filtered elements 11 → 2, `will-change: filter` elements 9 → 0, console clean, `tsc --noEmit` and `next build` both pass. Frame timings were not captured — the browser pane was hidden for this session, which pins `window.innerWidth` to 0.

**Also changed:** `Cairo` is now `preload: false` in `app/layout.tsx`. It only applies under `[dir="rtl"]`, which needs the language toggle, so four weights of an Arabic subset were on the critical path for every English visitor and used by none of them.

**Flagged, then removed** — see Decision 045 below.

### Fixed — 2026-08-18 (Footer reveal mask emitted NaN on every page load)

**Decision 043 — `TextHoverEffect` no longer measures a cursor position it does not have:**
`components/ui/hover-footer.tsx` seeded its `cursor` state at `{x: 0, y: 0}` and ran the measuring effect immediately on mount. Two problems came out of that, and the second was visible in the console on every route, since the footer renders site-wide:

- The SVG is sized `width="100%" height="100%"`. Before layout settles its rect can be `0 × 0`, so `(cursor.y - rect.top) / rect.height` divides by zero and returns `NaN`. SVG rejects `cx="NaN%"` outright — two errors per page load.
- Even with a valid rect, `{0, 0}` is a real viewport coordinate, not an absence of one. The mask positioned itself relative to the top-left of the window before anyone had moved the mouse.

`cursor` now starts as `null` and the effect returns early until a pointer has actually been over the SVG, with a second guard for a zero-sized rect. The resting mask stays at the declared `50% / 50%` until the first real `mousemove`, which is what the component always intended. Verified: pointer at 25% width / 50% height resolves to `cx: 24.93%`, `cy: 50%`, and the console is clean on load. No visual change at rest or on hover.

### Changed — 2026-08-01 (DESIGN.md button and input spec)

**Decision 042 — Button and input spec updated to describe what actually ships:**
`DESIGN.md` specified `radius-md` (6px) for buttons and inputs; both have been `radius-xl` (20px) in code since launch. Spec updated to match, since the pill shape is plainly deliberate and a spec that contradicts the build actively misleads — `CLAUDE.md` requires every agent to follow `DESIGN.md` before generating UI, so an inaccurate spec produces wrong output.

Two further divergences corrected in the same pass, both larger than the radius:

- **The primary button is not a solid Signal block.** It is the `.liquid-fill` treatment — Ink body, 1.5px Signal border, Paper text, with Signal pouring down from the top edge on hover. The spec described `background: #2BB3E6; color: #0B0E10`, which is not what any button on the site looks like. The solid version is retained in the spec as the correct choice on Paper surfaces, where the liquid fill has no dark body to sit against.
- **Ghost border is 1px Paper at 40%,** not 1.5px `currentColor`.
- **Inputs use Barlow, not Archivo** — entered text is body copy, and the type rules assign body copy to Barlow. Documented with separate fill and border values for Paper versus Ink/`.glass` surfaces, since contrast depends on what is behind them.

Radius token table also revised: `radius-md` no longer claims buttons and inputs, `radius-lg` notes that all bracketed surfaces use it, and `radius-xl` now lists buttons and inputs.

**Flagged, not changed:** two surfaces use `rounded-2xl` (Tailwind's default 16px, outside this system) — the footer panel and the contact page map frame. The config extends rather than replaces Tailwind's scale, so those classes still resolve. Both should be `radius-xl`; changing them alters the visible shape of the footer, so it needs a decision rather than a quiet patch.

### Fixed — 2026-08-01 (Radius audit)

**Decision 041 — Arabic callout corners were 8px where English is 12px:**
Swept every radius declaration in the codebase after three mismatches in two days. One further real bug: the `[dir="rtl"] .rounded-r-lg` override in `globals.css` wrote `0.5rem`, which is **Tailwind's default `lg`**, not this project's. `tailwind.config.ts` redefines `lg` as 12px, so the mirrored corner came out 8px while the English side rendered 12px. Affects the 7 quotation callouts — five blog posts, `CalloutBlock`, and the WhyCompass pull quote — and only in Arabic, which is why it went unnoticed. Now 12px on both sides.

Audit results for the rest:

| Surface | Verdict |
|---|---|
| All 7 `.bracketed` surfaces | Correct — every one uses `rounded-lg`, matching the 12px bracket radius |
| Services dial orbit ring | Correct — 700px element with `--radius: 350` is a true circle, and the `+1px` border makes the glow concentric |
| `.glow-btn::before` | Correct — uses `border-radius: inherit` |
| OG image blobs | Correct — `borderRadius: 50%` on square elements |

**Separate finding, not changed:** `Button.tsx` and the contact-card inputs use `rounded-xl` (20px), while `DESIGN.md` specifies `radius-md` (6px) for both buttons and form fields. That is code diverging from the spec rather than two elements disagreeing with each other, and the pill shape is plainly deliberate on the live site — so the correct fix is updating `DESIGN.md`, which needs a decision rather than a patch.

**Root cause worth remembering:** this project overrides Tailwind's radius scale (`lg` 8→12px, `xl` 12→20px). Any radius value copied from Tailwind's documentation, or any raw `rem` value, will silently disagree with the token of the same name.

**Decision 040 — GlowCard spotlight corner radius matched to the card:**
The glow traced a tighter corner than the card it outlines. `GlowCard` renders its surface with `rounded-xl` (20px per the Tailwind config) but passed `--radius: 12` to the glow, and `globals.css` derives the pseudo-element corner as `(--radius + --border)` — so the glow drew a 13.5px arc around a 20px corner, 6.5px too tight. Visible as the glow line cutting inside the card at each corner. Set `--radius: 20` so the derived arc is 21.5px, concentric with a 20px corner offset outward by the 1.5px border. Also corrects the nested outer-bloom element, which reads the same variable.

Third instance of the same underlying pattern in two days — a corner radius hardcoded next to a surface whose radius is set elsewhere (see Decisions 033a and 038). Worth treating any standalone `--radius` or `border-radius` near a `rounded-*` class as suspect.

### Changed — 2026-08-01 (Bracket radius and card glow)

**Decision 038 — Bracket radius matches the panel radius, not the standoff:**
Decision 037 derived the mark radius from the offset (`calc(12px + offset)`) so the arc stayed concentric with the panel corner. Reviewed on screen, the client preferred the mark to repeat the panel's own corner shape instead, so `--bracket-radius` is a flat 12px again, independent of standoff. Both readings are defensible; this is a look call, and the flat version keeps the two curves identical rather than parallel. `DESIGN.md` corrected — it briefly instructed never to set the value by hand, which no longer applies.

**Decision 039 — Card glow substantially reduced:**
The pointer-tracked spotlight on `GlowCard` was reading as a hard neon outline rather than a subtle sweep, most visibly on the BrandPillars and WhyCompass cards (both the indigo variant). Reduced across the board:

Tuned in two passes — the first went too far and lost the sweep, so the values landed at roughly half the original rather than a third:

| Knob | Original | First pass (too low) | Final |
|---|---|---|---|
| `brightness()` on the border spot | 2 | 1.15 | **1.5** |
| `--border-spot-opacity` (cyan / amber) | 1 | 0.32 | **0.6** |
| `--border-spot-opacity` (indigo) | 1 | 0.28 | **0.55** |
| `--border-light-opacity` (cyan / amber) | 0.75 / 0.80 | 0.20 | **0.4** |
| `--border-light-opacity` (indigo) | 0.08 | 0.04 | **0.06** |
| `--bg-spot-opacity` | 0.06 / 0.10 / 0.18 | 0.035 / 0.05 / 0.07 | **0.05 / 0.075 / 0.12** |
| `--outer` (outer bloom) | 1 | 0.3 | **0.55** |

Affects all three GlowCard consumers — BrandPillars, WhyCompass, and the service page sub-service cards. The orbit ring on the services dial uses the separate `[data-glow]` rules and its `brightness(2.8)` is deliberately untouched, since that effect is the dial's focal point rather than card furniture.

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
