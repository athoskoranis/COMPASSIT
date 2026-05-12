# SEO.md — Compass IT Solutions

> Meta titles, meta descriptions, Open Graph tags, keyword targets, and schema markup notes for every page. All targets reflect the Lighthouse 95+ and Core Web Vitals green standard from the brand package.

---

## Global SEO Rules

- **Title format:** `[Page-specific title] — Compass IT Solutions` (≤ 60 characters)
- **Meta description:** 140–160 characters. Plain language. No keyword stuffing. Match the voice in `VOICE.md`.
- **Canonical:** Every page sets a self-referencing canonical tag.
- **hreflang:** Not required at launch (single language, single region).
- **robots meta:** `index, follow` on all public pages.
- **Sitemap:** Generate `sitemap.xml` automatically via Next.js `next-sitemap` or the built-in App Router sitemap function. Submit to Google Search Console post-launch.
- **robots.txt:** Disallow `/api/` routes. Allow all public pages.

---

## Open Graph & Social Defaults

These apply to all pages unless overridden by a page-specific OG block below.

```html
<meta property="og:site_name" content="Compass IT Solutions" />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://compass-its.com/brand/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_QA" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@compass.its" />
```

**OG image spec:** 1200 × 630px · Dark Ink background · Horizontal logo (white) · Tagline "Wired right. Kept running." in Archivo 300 · Signal Cyan accent line. File: `/public/brand/og-image.png`.

---

## Page-by-Page SEO Specs

---

### Home `/`

**Title tag (58 chars):**
Compass IT Solutions — Wired right. Kept running.

**Meta description (155 chars):**
Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.

**Primary keyword target:**
managed IT services Qatar

**Secondary keywords:**
IT solutions Doha · MSP Qatar · network infrastructure Qatar · cloud services Doha · IT support Qatar

**OG title:** Compass IT Solutions — Managed IT Services, Qatar
**OG description:** Same as meta description.

**Schema markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Compass IT Solutions",
  "url": "https://compass-its.com",
  "logo": "https://compass-its.com/brand/compass-its-horizontal-dark.svg",
  "description": "Managed IT services provider specialising in network infrastructure, cloud solutions, and cybersecurity. Based in Doha, Qatar.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Doha",
    "addressRegion": "West Bay",
    "addressCountry": "QA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+974-5149-0825",
    "contactType": "customer service",
    "email": "asahli@compass-its.com"
  },
  "sameAs": [
    "https://instagram.com/compass.its"
  ],
  "foundingDate": "2025"
}
```

---

### About `/about`

**Title tag (52 chars):**
Who We Are — Compass IT Solutions

**Meta description (152 chars):**
Founded in 2025, Compass IT Solutions is a managed IT services provider based in Doha, Qatar. Network infrastructure, cloud, cybersecurity, and development.

**Primary keyword:**
Compass IT Solutions about

**Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Who We Are — Compass IT Solutions",
  "url": "https://compass-its.com/about"
}
```

---

### Services Index `/services`

**Title tag (55 chars):**
IT Services & Solutions — Compass IT Solutions

**Meta description (158 chars):**
Network infrastructure, cloud, cybersecurity, web and app development, AI automation, and digital marketing — one partner across the full stack.

**Primary keyword:**
IT services Qatar

---

### IT Services `/services/it-services`

**Title tag (59 chars):**
IT Professional Services — Compass IT Solutions

**Meta description (157 chars):**
Managed IT services for Qatar-based organisations. 24/7 on-call, 99.9% uptime SLA, onsite and remote coverage. Starts with a 30-day diagnostic.

**Primary keyword:**
managed IT services Doha

**Secondary keywords:**
IT outsourcing Qatar · remote IT support Qatar · IT managed services provider Qatar

**Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "IT Professional Services",
  "provider": { "@type": "Organization", "name": "Compass IT Solutions" },
  "areaServed": { "@type": "Country", "name": "Qatar" },
  "description": "Managed IT services including strategy, delivery, outsourcing, and 24/7 remote monitoring."
}
```

---

### Network Infrastructure `/services/network-infrastructure`

**Title tag (60 chars):**
Network Infrastructure — Compass IT Solutions

**Meta description (154 chars):**
Network design, installation, and management for businesses in Qatar. Every cable labelled, every config documented. On-call support included.

**Primary keyword:**
network infrastructure Qatar

**Secondary keywords:**
Cisco network Qatar · network installation Doha · IT infrastructure Qatar

---

### Cloud Solutions `/services/cloud-solutions`

**Title tag (57 chars):**
Cloud Solutions — AWS, Azure & Hybrid · Compass ITS

**Meta description (156 chars):**
Cloud architecture and migration for organisations across Qatar. AWS, Microsoft Azure, and hybrid environments — built for redundancy, performance, and security.

**Primary keyword:**
cloud solutions Qatar

**Secondary keywords:**
AWS Qatar · Azure migration Qatar · cloud migration Doha · hybrid cloud Qatar

---

### Cybersecurity `/services/cybersecurity`

**Title tag (52 chars):**
Cybersecurity — Compass IT Solutions

**Meta description (153 chars):**
Cybersecurity services for businesses in Qatar. Fortinet-backed protection, risk registers, and 24/7 incident monitoring. No fear-selling — just clear assessment.

**Primary keyword:**
cybersecurity services Qatar

**Secondary keywords:**
Fortinet Qatar · IT security Doha · network security Qatar · cybersecurity MSP Qatar

---

### Website Development `/services/web-development`

**Title tag (59 chars):**
Website Development — Compass IT Solutions

**Meta description (155 chars):**
End-to-end website development for organisations in Qatar. Lighthouse 95+, Core Web Vitals green at launch, 30-day post-launch support. Next.js and WordPress.

**Primary keyword:**
web development Qatar

**Secondary keywords:**
website development Doha · Next.js agency Qatar · WordPress development Qatar · web agency Doha

---

### App Development `/services/app-development`

**Title tag (59 chars):**
App Development — iOS & Android · Compass ITS

**Meta description (156 chars):**
Native and cross-platform mobile app development for businesses in Qatar. iOS and Android. Crash-free 99.5%+ before submission. 30-day post-launch support.

**Primary keyword:**
mobile app development Qatar

**Secondary keywords:**
iOS app development Qatar · Android app Qatar · React Native Qatar · Flutter development Doha

---

### AI Workflows `/services/ai-workflows`

**Title tag (58 chars):**
AI Workflows & Automation — Compass IT Solutions

**Meta description (155 chars):**
AI agent deployment for business workflows across Qatar. Triage, drafting, reconciliation, and reporting — automated. Humans stay in the loop where it matters.

**Primary keyword:**
AI automation Qatar

**Secondary keywords:**
workflow automation Doha · AI agents Qatar · business process automation Qatar

---

### Custom Solutions `/services/custom-solutions`

**Title tag (59 chars):**
Custom Solutions — Web Platforms & Internal Tools · Compass ITS

**Meta description (154 chars):**
Bespoke web platforms, internal tools, and data analytics products for organisations in Qatar. Built, tested, documented, and handed over with full runbooks.

**Primary keyword:**
custom web platform development Qatar

---

### Digital Marketing `/services/digital-marketing`

**Title tag (57 chars):**
Digital Marketing — Compass IT Solutions

**Meta description (157 chars):**
Search, social, and email marketing for organisations in Qatar. Measured weekly, optimised monthly. SEM, SEO, inbound, and B2B communication strategies.

**Primary keyword:**
digital marketing Qatar

**Secondary keywords:**
SEO Qatar · Google Ads Qatar · digital marketing agency Doha · inbound marketing Qatar

---

### How We Work `/how-we-work`

**Title tag (56 chars):**
How We Work — Six Steps, Nothing Skipped · Compass ITS

**Meta description (155 chars):**
Every Compass engagement runs on the same six-step model — Discovery through Reporting. Weekly checkpoints, documented deliverables, and we stay after go-live.

**Primary keyword:**
IT engagement model Qatar

---

### Contact `/contact`

**Title tag (50 chars):**
Get in Touch — Compass IT Solutions

**Meta description (154 chars):**
Start a conversation with Compass IT Solutions. Most engagements begin with a 30-day diagnostic. Doha, Qatar — +974 5149 0825 — asahli@compass-its.com.

**Primary keyword:**
Compass IT Solutions contact

**Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Get in Touch — Compass IT Solutions",
  "url": "https://compass-its.com/contact"
}
```

---

## Technical SEO Checklist (At Launch)

- [ ] `sitemap.xml` generated and submitted to Google Search Console
- [ ] `robots.txt` blocks `/api/` routes, allows all public pages
- [ ] All pages have a unique title tag (≤ 60 chars)
- [ ] All pages have a unique meta description (140–160 chars)
- [ ] All pages have a self-referencing canonical tag
- [ ] All images have descriptive `alt` text
- [ ] All images are served in WebP or AVIF format
- [ ] No images above 200KB (compress at build time via `next/image`)
- [ ] Core Web Vitals: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1
- [ ] Lighthouse score ≥ 95 on all pages (desktop and mobile)
- [ ] JSON-LD schema blocks in place on Home, Contact, and all service pages
- [ ] GA4 and GTM tags fire on page view — verified in GTM Preview
- [ ] Conversion event fires on contact form submission
- [ ] `hreflang` added if Arabic or multilingual version is added later
