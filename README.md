# Compass IT Solutions — Website

> **Wired right. Kept running.**
> Corporate website for Compass IT Solutions, a managed IT services provider based in Doha, Qatar.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Key Documentation](#key-documentation)
- [Pages & Sitemap](#pages--sitemap)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Project Overview

This is the official marketing and services website for **Compass IT Solutions** (compass-its.com). The company provides network infrastructure, cloud solutions, cybersecurity, web/app development, AI workflow automation, and digital marketing services to organisations across Qatar and the wider region.

The site serves three primary goals:

1. **Lead generation** — Prospective clients find Compass ITS via search and convert through a contact/inquiry form.
2. **Credibility & trust** — The site must read as a senior, competent operation. Every word, colour, and layout decision reinforces the brand pillars: Wired right · Plain-spoken · In it for the run.
3. **Service discovery** — Visitors identify which service line matches their need and understand the engagement model before they call.

**Target audience:** CTOs, IT managers, operations directors, and founders at mid-market organisations across Qatar and the GCC region.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS | Headless (TBD — Sanity or Contentlayer) |
| Fonts | Archivo (Google Fonts) · JetBrains Mono (Google Fonts) |
| Deployment | Vercel |
| Analytics | GA4 + Google Tag Manager |
| Performance target | Lighthouse 95+ · Core Web Vitals green at launch |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+ or pnpm 9+

### Installation

```bash
git clone https://github.com/YOUR_ORG/compass-its-website.git
cd compass-its-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

---

## Folder Structure

```
compass-its-website/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/        # Public-facing routes
│   │   ├── page.tsx        # Home
│   │   ├── about/          # About / Who We Are
│   │   ├── services/       # Services index
│   │   │   ├── network-infrastructure/
│   │   │   ├── cloud-solutions/
│   │   │   ├── cybersecurity/
│   │   │   ├── web-development/
│   │   │   ├── app-development/
│   │   │   ├── ai-workflows/
│   │   │   ├── custom-solutions/
│   │   │   └── digital-marketing/
│   │   ├── how-we-work/
│   │   └── contact/
│   ├── layout.tsx          # Root layout (fonts, analytics, metadata)
│   └── globals.css         # Tailwind base + CSS custom properties
├── components/
│   ├── ui/                 # Base components (Button, Card, Badge, etc.)
│   ├── layout/             # Header, Footer, Nav
│   └── sections/           # Page section components (Hero, Services, etc.)
├── lib/                    # Utilities, constants, helpers
├── public/
│   ├── brand/              # Logo files (SVG, PNG variants)
│   └── images/             # Photography and illustrations
├── content/                # MDX or JSON content files (if using Contentlayer)
├── DESIGN.md               # Design tokens & component spec for Claude Code
├── BRAND.md                # Brand identity rules (color, type, logo)
├── VOICE.md                # Copywriting tone and language guidelines
├── CONTENT.md              # All page copy, stats, service descriptions
├── SITEMAP.md              # Page hierarchy, URL slugs, CTA map
├── SEO.md                  # Meta titles, descriptions, keywords per page
├── CHANGELOG.md            # Build decisions and version history
└── README.md               # This file
```

---

## Key Documentation

Before writing any component or copy, read these files in order:

| File | Purpose |
|---|---|
| `DESIGN.md` | Color tokens, typography scale, spacing, component patterns — the spec Claude Code uses to generate on-brand UI |
| `BRAND.md` | Logo usage rules, color proportions, misuse cases |
| `VOICE.md` | Tone attributes, word choices, examples of right/wrong copy |
| `CONTENT.md` | Final approved copy for every page section |
| `SITEMAP.md` | URL structure, page hierarchy, navigation |
| `SEO.md` | Meta tags, Open Graph, keyword targets |

---

## Pages & Sitemap

| Page | Route |
|---|---|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Network Infrastructure | `/services/network-infrastructure` |
| Cloud Solutions | `/services/cloud-solutions` |
| Cybersecurity | `/services/cybersecurity` |
| Website Development | `/services/web-development` |
| App Development | `/services/app-development` |
| AI Workflows | `/services/ai-workflows` |
| Custom Solutions | `/services/custom-solutions` |
| Digital Marketing | `/services/digital-marketing` |
| How We Work | `/how-we-work` |
| Contact | `/contact` |

---

## Environment Variables

Create a `.env.local` file at the project root. Never commit this file.

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact form (e.g. Resend, Formspree, or custom API)
CONTACT_FORM_API_KEY=your_key_here
CONTACT_FORM_TO_EMAIL=info@compass-its.com
```

---

## Scripts

```bash
npm run dev          # Start local dev server on :3000
npm run build        # Production build
npm run start        # Serve production build locally
npm run lint         # ESLint check
npm run type-check   # TypeScript check
npm run lighthouse   # Run Lighthouse CI audit (requires lighthouse CLI)
```

---

## Deployment

The site deploys automatically to **Vercel** on push to `main`.

- **Production URL:** compass-its.com
- **Preview URLs:** Generated per pull request by Vercel

DNS is managed separately. Contact the project owner before making changes to DNS records or domain configuration.

---

## Contact

**Project owner:** Compass IT Solutions
**Email:** info@compass-its.com
**Phone:** +974 5149 0825
**Social:** @compass.its
**Brand enquiries:** brand@compass-its.com
