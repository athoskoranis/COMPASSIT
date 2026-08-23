# HANDOVER.md — Compass IT Solutions website

> What the site needs from people, rather than from code. Ordered by what unblocks
> the most value. Everything here is either waiting on an asset, a decision, or an
> account nobody in the codebase can reach.
>
> Last reviewed 21 August 2026.

---

## 01 — Client logos and named references

**Blocking:** the client proof section on the home page. Built, mounted, and
rendering nothing until this arrives.

The site currently carries **no client name, no logo and no quote anywhere**.
`20+ clients served` in the stats bar is the only social proof on it. For a
managed services provider selling to CTOs and operations directors, that is
usually the single largest gap between traffic and enquiries — a visitor has no
way to check that anyone else trusted you first.

`components/sections/ClientProof.tsx` and `lib/clients.ts` are already in place.
Both arrays are empty, the section returns `null`, and the home page is unchanged.
It appears the moment either array has one entry. Nothing placeholder ships in
the meantime, deliberately: an invented quote on a live site is worse than no
quote.

### Logos — what to collect

| Requirement | Detail |
|---|---|
| Format | `.svg` preferred. `.png` with transparency at 2x acceptable |
| Colour | Single-colour or monochrome versions if they exist |
| Shape | Landscape lockups, trimmed of surrounding padding |
| Count | Six fit the grid. Fewer is fine — the grid reflows |
| Permission | Written permission to display each mark publicly |
| Destination | `/public/clients/<company>.svg` |

Logos render at 40% opacity on the Ink background, lifting to 70% on hover, so
they sit behind the copy rather than competing with it. Full-colour marks with
busy backgrounds will look wrong at that treatment — monochrome is worth asking
for.

### References — what to collect

One sentence per client, in their own words, about **a specific outcome**. Not a
compliment. The difference:

> Useful: *"They found the switch that had been dropping our warehouse orders for
> eight months."*
>
> Not useful: *"Compass are a great partner and very professional."*

Each needs a name, a role, a company, and written permission to publish all
three. **Two named references beat six anonymous logos** — if you can only get one
thing, get a named quote.

---

## 02 — Native Arabic review

**Blocking:** nothing. Live now and working, but unverified.

The ten Arabic routes under `/ar` carry titles and meta descriptions composed from
Arabic already approved in `lib/translations.ts` and `lib/serviceTranslations.ts`,
trimmed and joined to fit the length rules in `SEO.md`.

The source strings are approved. **The trimming and joining are not native work.**
They should be read by an Arabic speaker before being treated as final. The
relevant section is `## Arabic Pages` in `SEO.md`, which carries the same warning.

Two specific things to check: whether the mixed-script titles read naturally
(`خدمات الأمن السيبراني في قطر ودول الخليج · Compass ITS`), and whether the
Arabic-Indic phone digits are the right convention for the audience.

---

## 03 — Reversed logo files

**Blocking:** nothing. The site works around it.

`BRAND.md` documents seven logo files. Four do not exist:

- `compass-its-horizontal-white.svg`
- `compass-its-stacked-white.svg`
- `compass-its-monogram-white.svg`
- `compass-its-monogram-signal.svg`

Every asset in `/public/brand/` is `fill: black`. Where the logo sits on Ink — the
nav is the only such placement today — it is reversed at runtime with
`filter: invert(1)`. That works, but it is a workaround, and it means the mark on
dark is a mathematical inversion rather than an approved asset.

Request from `brand@compass-its.com`. Export from the master vector, never from a
raster source.

---

## 04 — Blog publisher template

**Blocking:** nothing. A build-time guard covers the known gap.

Blog posts are written by an automated publisher whose page template lives outside
this repository. Two gaps have surfaced so far:

1. **`openGraph` with no `images` key.** Eight published posts shipped with no
   `og:image`, sharing as bare links on every social surface. Next's
   file-convention image does not reach post segments, so each post has to declare
   it. `scripts/ensure-blog-og.mjs` runs on `prebuild` and repairs any post missing
   it, on every build including the deploy host.
2. **A hand-written `ItemList` count.** The blog index schema was supplied listing
   six posts when the site had eight. That is now generated from `lib/posts.ts`, so
   it cannot drift.

Both are patched in this repo. **Neither is fixed at source.** Whoever maintains
the template should add `images: ['/blog/opengraph-image']` to it, and treat
anything else the template omits as a third gap waiting to be found. Run
`npm run check:og` to see the current state without modifying anything.

---

## 05 — Google Business Profile

**Blocking:** nothing on the site. Affects how Google reconciles your contact data.

The WhatsApp number was wrong sitewide until today — every button pointed at
`+974 5149 0825`, the calling line, rather than the WhatsApp account. Fixed in the
buttons, the links and the structured data.

If the Business Profile has a chat or WhatsApp entry, it needs the same correction
to **+1 971 506 0879**.

**Do not change the primary phone.** It should stay `+974 5149 0825`. Local ranking
leans on Name/Address/Phone consistency across the site, the schema and the
profile, and all three currently agree. A `+1` number as the primary phone on a
Doha listing would break that and read as a mismatch to buyers looking for a local
provider.

---

## 06 — Which mailbox receives the contact form

**Blocking:** nothing visible. Worth confirming once.

`app/api/contact/route.ts` sends to `process.env.SMTP_USER`, so the repository
cannot say where enquiries land. Every public surface — footer, contact page,
organisation schema, the 404 — displays `info@compass-its.com`, and the
specification files were aligned to that today.

Confirm that `SMTP_USER` is the mailbox someone actually reads. If enquiries are
going somewhere unmonitored, everything else in this document is academic.

---

## 07 — Custom Solutions page

**Blocking:** nothing. One route left of the two this item used to carry.

`SITEMAP.md` declares `/services/custom-solutions` among the service sub-pages.
`CONTENT.md` has **no copy** for it. It needs writing before it can be built —
and until it is, the services index deliberately shows eight cards rather than
nine, because a ninth linking to a 404 is worse than an absence.

Whoever writes it should follow the shape of the other eight blocks in
`CONTENT.md`: heading, Signal Cyan subheading, body, a Why Compass callout with
a mono source label, four key stats, and a capability table. Add the slug to the
`services` array in `app/services/page.tsx`, `app/sitemap.ts`,
`components/layout/Nav.tsx` and `components/layout/Footer.tsx`, and a card
appears in the grid.

**`/services` is done** — built 21 August. Note for the record that this item
previously said `CONTENT.md` had copy for it. It did not: the block headed
`## IT Services Page (/services)` is the copy for `/services/it-services` and
was spent there. The index was assembled from strings already approved
elsewhere — the home page's services heading, the meta description in `SEO.md`,
and the eight card titles and descriptions in `lib/translations.ts` — so no new
prose was invented. See Decision 083.

---

## 08 — OG images on `/about` and `/how-we-work`

**Blocking:** nothing. Two pages share as bare links.

Next's root `app/opengraph-image.tsx` does **not** cascade into child route
segments — the same limitation that put item 04 on this list. Confirmed by
inspection: `/` and all eight `/services/*` pages emit an `og:image`;
`/about` and `/how-we-work` emit no image meta tag at all.

`/services` had the same gap and got `app/services/opengraph-image.tsx` when it
was built, following the sibling service pages. The fix for the other two is the
same file, roughly 30 lines each, no assets required — it renders from
`next/og`. Not done here because it sits outside the services index.

Check any new top-level route for this before shipping it. `npm run check:og`
covers the blog only.

---

## Not outstanding

Recorded so nobody re-opens them:

- **Sitemap submission.** Done. Submitted at 31 URLs; now 33 — the ninth blog
  post the publisher added on 21 August, and the services index — including the
  ten Arabic routes. A resubmission is not required: the sitemap is fetched, not
  pushed, and every new post arrives the same way.
- **Blog images.** The 19MB in `/public/images/blog` is repository weight only.
  Every reference goes through `next/image`; the heaviest file is served as 112KB
  of WebP.
- **`www` redirect.** `308`, path-preserving, single hop. Correct as-is.
- **Contact email discrepancy.** Five specification files said `asahli@`, the site
  said `info@`. Aligned to `info@`, confirmed as intended.
