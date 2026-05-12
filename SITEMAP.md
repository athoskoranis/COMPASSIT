# SITEMAP.md — Compass IT Solutions

> Page hierarchy, URL slugs, navigation structure, and CTA destinations. Use this as the build blueprint before scaffolding any routes in Next.js.

---

## Site Architecture

```
compass-its.com/
├── /                           Home
├── /about                      About / Who We Are
├── /services                   Services index
│   ├── /services/it-services               IT Professional Services
│   ├── /services/network-infrastructure    Network Infrastructure
│   ├── /services/cloud-solutions           Cloud Solutions
│   ├── /services/cybersecurity             Cybersecurity
│   ├── /services/web-development           Website Development
│   ├── /services/app-development           Application Development
│   ├── /services/ai-workflows              AI & Automated Workflows
│   ├── /services/custom-solutions          Custom Solutions
│   └── /services/digital-marketing         Digital Marketing
├── /how-we-work                How We Work (engagement model + ongoing support)
└── /contact                    Contact
```

---

## Page-by-Page Reference

### Home `/`

| Property | Value |
|---|---|
| Title tag | Compass IT Solutions — Wired right. Kept running. |
| Nav label | Home |
| Primary CTA | "Start with a diagnostic" → `/contact` |
| Secondary CTA | "See how we work" → `/how-we-work` |
| Key sections | Hero · Brand pillars · Services overview · Why Compass · Callout · Contact CTA |

---

### About `/about`

| Property | Value |
|---|---|
| Title tag | Who We Are — Compass IT Solutions |
| Nav label | About |
| Primary CTA | "Get in touch" → `/contact` |
| Key sections | Who we are · Stats (2025 / 10+ / 20+ / 10+) · Three pillars · Doha location |

---

### Services Index `/services`

| Property | Value |
|---|---|
| Title tag | Services & Solutions — Compass IT Solutions |
| Nav label | Services |
| Purpose | Overview grid linking to all 9 service sub-pages |
| Primary CTA per card | "See [service name]" → individual service page |
| Service line eyebrow | NETWORK · CLOUD · SECURITY · DEVELOPMENT · DIGITAL MARKETING · AI AUTOMATION |

---

### IT Services `/services/it-services`

| Property | Value |
|---|---|
| Title tag | IT Services — The IT team behind your IT team · Compass ITS |
| Nav label | IT Services |
| Primary CTA | "Start with a 30-day diagnostic" → `/contact` |
| Key sections | Headline · Why Compass callout · Stats bar · Capability table (Strategy / Delivery / Operations) |

---

### Network Infrastructure `/services/network-infrastructure`

| Property | Value |
|---|---|
| Title tag | Network Infrastructure — Compass IT Solutions |
| Nav label | Network Infrastructure |
| Primary CTA | "Plan your network" → `/contact` |
| Key sections | Service overview · Process steps · Stack · CTA |

---

### Cloud Solutions `/services/cloud-solutions`

| Property | Value |
|---|---|
| Title tag | Cloud Solutions — AWS, Azure & Hybrid · Compass ITS |
| Nav label | Cloud Solutions |
| Primary CTA | "Talk about your cloud environment" → `/contact` |
| Key sections | Service overview · Cloud platforms (AWS / Azure / MongoDB Atlas) · Process · CTA |

---

### Cybersecurity `/services/cybersecurity`

| Property | Value |
|---|---|
| Title tag | Cybersecurity — Compass IT Solutions |
| Nav label | Cybersecurity |
| Primary CTA | "Book a security assessment" → `/contact` |
| Key sections | Service overview · Fortinet partnership mention · Risk register · CTA |

---

### Website Development `/services/web-development`

| Property | Value |
|---|---|
| Title tag | Website Development — Sites that ship, measure, and keep earning · Compass ITS |
| Nav label | Website Development |
| Primary CTA | "Start your project" → `/contact` |
| Key sections | Headline · Stats bar (6–10 wks / 95+ / Green / 30-day) · 4-phase process · Callout · What we build · Stack |

---

### Application Development `/services/app-development`

| Property | Value |
|---|---|
| Title tag | Application Development — iOS & Android · Compass ITS |
| Nav label | App Development |
| Primary CTA | "Start your app" → `/contact` |
| Key sections | Headline · Stats bar (iOS+Android / 10–16 wks / 99.5% / 30-day) · 4-phase process · Callout · Stack |

---

### AI Workflows `/services/ai-workflows`

| Property | Value |
|---|---|
| Title tag | AI Workflows — Automate the manual middle · Compass ITS |
| Nav label | AI Workflows |
| Primary CTA | "Map your first workflow" → `/contact` |
| Key sections | Headline · Deployment model · 8-step delivery grid · Human-in-the-loop callout |

---

### Custom Solutions `/services/custom-solutions`

| Property | Value |
|---|---|
| Title tag | Custom Solutions — Bespoke platforms and internal tools · Compass ITS |
| Nav label | Custom Solutions |
| Primary CTA | "Describe your problem" → `/contact` |
| Key sections | Headline · Engagement model · 8-step delivery grid · Go-live callout |

---

### Digital Marketing `/services/digital-marketing`

| Property | Value |
|---|---|
| Title tag | Digital Marketing — Marketing that compounds · Compass ITS |
| Nav label | Digital Marketing |
| Primary CTA | "Start measuring what matters" → `/contact` |
| Key sections | Headline · Stats bar · Capabilities (SEM / Strategy / Inbound / B2B) · Callout |

---

### How We Work `/how-we-work`

| Property | Value |
|---|---|
| Title tag | How We Work — Six steps, nothing skipped · Compass ITS |
| Nav label | How We Work |
| Primary CTA | "Start with step one" → `/contact` |
| Key sections | Six-step process · Stats bar (Day 1 / Weekly / Documented / We stay) · Ongoing support · Technology stack · Why Compass |

---

### Contact `/contact`

| Property | Value |
|---|---|
| Title tag | Get in Touch — Compass IT Solutions |
| Nav label | Contact |
| Primary CTA | Form submit: "Send your message" |
| Form fields | Name · Email · Organisation · What you're working on |
| Side panel | Email · Phone · Social · Location |
| Post-submit | Success message: "Message sent. We'll be in touch within one business day." |

---

## Navigation Structure

### Primary Nav (desktop)

```
[Logo]    About    Services ▾    How We Work    [Start with a diagnostic →]
```

**Services dropdown:**
IT Services · Network Infrastructure · Cloud Solutions · Cybersecurity · Website Development · App Development · AI Workflows · Custom Solutions · Digital Marketing

### Primary Nav (mobile)

Hamburger menu. Full-page overlay on open. Same links as desktop, stacked vertically. CTA button at bottom of overlay.

### Footer Nav

**Column 1 — Services**
IT Services · Network Infrastructure · Cloud Solutions · Cybersecurity · Website Development · App Development · AI Workflows · Custom Solutions · Digital Marketing

**Column 2 — Company**
About · How We Work · Contact

**Column 3 — Legal**
Privacy Policy · Cookie Policy

---

## Internal Linking Map

| From page | Link to | Link text |
|---|---|---|
| Home hero | `/contact` | "Start with a diagnostic" |
| Home hero | `/how-we-work` | "See how we work" |
| Home service cards | Each service page | "See [service name]" |
| Home Why Compass | `/contact` | "Get in touch" |
| About | `/contact` | "Get in touch" |
| All service pages | `/contact` | Service-specific CTA (see above) |
| All service pages | `/how-we-work` | "See how we work" (footer of each page) |
| How We Work | `/contact` | "Start with step one" |
| Nav (all pages) | `/contact` | "Start with a diagnostic" (primary button) |

---

## Redirects

No legacy redirects required at launch — this is a new domain. Add any future redirects to `next.config.js` under the `redirects` array and log them in `CHANGELOG.md`.
