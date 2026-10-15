import type { Metadata } from 'next'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import ContactCTA from '@/components/sections/ContactCTA'
import ServiceRows from '@/components/sections/ServiceRows'
import { t } from '@/lib/translations'

// The services hub SITEMAP.md has declared since launch. Every string here is
// already-approved copy, because CONTENT.md has no block for this route: the
// one labelled "IT Services Page (/services)" is the copy for
// /services/it-services and was spent there. So the heading is the home page's
// services heading, the intro is the meta description from SEO.md verbatim, and
// the cards are the titles and descriptions already shown on the home page and
// in the footer. Nothing on this page is newly written.
export const metadata: Metadata = {
  title: { absolute: 'IT Services & Solutions — Compass IT Solutions' },
  description:
    'Network infrastructure, cloud, cybersecurity, web and app development, AI automation, and digital marketing — one partner across the full stack.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services' },
}

// Slugs pair with t.en.services.items by index, the same contract
// ServicesOverview and the footer already rely on.
//
// Each row also carries a paragraph, a photograph and its alt text (Decision
// 156). None of it is new: the photograph is the one the service's own page
// already uses, the alt text is its entry in public/images/site/credits.json,
// and the paragraph is that page's approved intro — the "Body" block in
// CONTENT.md where one exists, the Hardware Supply hero subtitle, and for
// Network, Cloud and Cybersecurity, which have no Body block, the page's meta
// description from SEO.md. Those three are flagged for their own summaries.
const rows = [
  {
    slug: 'it-services',
    image: 'it-services-server-rack-indicators',
    alt: 'Server rack with blue status indicators in a data room',
    body: 'We build and manage the technology backbone your organisation runs on. From strategic planning to day-to-day operations, our team acts as a trusted extension of your IT function.',
  },
  {
    slug: 'network-infrastructure',
    image: 'network-infrastructure-patch-panel',
    alt: 'Cables terminated into a patch panel in a network rack',
    body: 'Network design, installation, and management for businesses in Qatar. Every cable labelled, every config documented. On-call support included.',
  },
  {
    slug: 'cloud-solutions',
    image: 'cloud-solutions-distribution',
    alt: 'Cabling running from a central switch out to distributed systems',
    body: 'Cloud architecture and migration for organisations in Qatar. AWS, Microsoft Azure, and hybrid environments — built for redundancy, performance, and security.',
  },
  {
    slug: 'cybersecurity',
    image: 'cybersecurity-monitoring',
    alt: 'Code on monitors in a darkened security operations room',
    body: 'Cybersecurity for businesses in Qatar. Fortinet-backed protection, risk registers, and 24/7 incident monitoring. No fear-selling — just clear assessment.',
  },
  {
    slug: 'web-development',
    image: 'web-development-markup',
    alt: "Close-up of markup on a developer's screen",
    body: 'End-to-end web development — from scoping and information architecture through to a live, measurable, search-optimised site. Built on a process that holds up at every stage.',
  },
  {
    slug: 'app-development',
    image: 'app-development-phone-code',
    alt: 'Code displayed on a smartphone screen',
    body: 'Native and cross-platform mobile applications built for performance, usability, and long-term maintainability. From the first user flow to the App Store listing.',
  },
  {
    slug: 'ai-workflows',
    image: 'ai-workflows-neural-render',
    alt: 'Abstract render of connected nodes in a neural network',
    body: 'We deploy AI agents into the workflows your team already runs — triage, drafting, reconciliation, monitoring — so the manual middle of every process disappears. Humans stay in the loop where it matters.',
  },
  {
    slug: 'digital-marketing',
    image: 'digital-marketing-analytics',
    alt: 'Laptop showing an analytics dashboard with live figures',
    body: 'Search, content, and paid channels engineered to work together — measured weekly, optimised monthly, compounded over quarters.',
  },
  {
    slug: 'hardware-supply',
    image: 'hardware-supply-workstations',
    alt: 'Rows of identical monitors on white desks across an open-plan floor',
    body: 'Tell us how many people need equipment. We source the PCs, laptops and monitors, set them up, and install them at the desk.',
  },
]

const services = [
  ...rows.map((row, i) => ({
    ...row,
    href: `/services/${row.slug}`,
    image: `/images/site/${row.image}.jpg`,
    ...t.en.services.items[i],
  })),
  // Custom Solutions is not in t.services.items, and should not be: that array
  // also feeds the home page dial and the footer, in both languages, and this
  // route is English-only. Its copy comes straight from CONTENT.md.
  {
    slug: 'custom-solutions',
    href: '/services/custom-solutions',
    image: '/images/site/custom-solutions-build.jpg',
    alt: 'An engineer working across several screens during a build',
    category: 'BESPOKE',
    title: 'Custom Solutions',
    description: 'For the part nobody sells off the shelf.',
    body: 'Some problems do not have a product. When the workflow is yours alone, or the systems that need to talk to each other were never designed to, the answer is something built. We build web platforms, internal tools, and data products — then hand them over documented, so they outlast the engagement.',
  },
]

// Generated from the same array as the rows, so the ItemList cannot claim a
// count the page does not render — the drift that put six posts in the blog
// index schema when there were eight.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://compass-its.com/services#collectionpage',
      url: 'https://compass-its.com/services',
      name: 'IT Services & Solutions — Compass IT Solutions',
      description:
        'Network infrastructure, cloud, cybersecurity, web and app development, AI automation, and digital marketing — one partner across the full stack.',
      isPartOf: { '@id': 'https://compass-its.com/#website' },
      about: { '@id': 'https://compass-its.com/#organization' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://compass-its.com/services#itemlist',
      name: 'Compass IT Solutions services',
      numberOfItems: services.length,
      itemListElement: services.map((service, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: service.title,
        description: service.description,
        url: `https://compass-its.com${service.href}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://compass-its.com/services' },
      ],
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
            <EyebrowLabel className="mb-6 block max-w-[720px]">
              NETWORK · CLOUD · SECURITY · DEVELOPMENT · DIGITAL MARKETING · AI AUTOMATION
            </EyebrowLabel>

            <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[600px] mb-8">
              {t.en.services.heading}{' '}
              <span className="text-signal">{t.en.services.headingHighlight}</span>
            </h1>

            <p className="font-barlow text-body-l text-paper/60 max-w-[640px] leading-relaxed mb-10">
              Network infrastructure, cloud, cybersecurity, web and app development, AI automation,
              and digital marketing — one partner across the full stack.
            </p>

            <Button href="/contact" variant="primary">Get in touch</Button>
          </div>
        </section>

        {/* One row per service page, per SITEMAP.md. Decision 156. */}
        <section className="bg-paper py-20 lg:py-28 relative z-[1]">
          <div className="max-w-content mx-auto px-6 lg:px-20">
            <ServiceRows items={services} seeLabel={t.en.services.seeLabel} />
          </div>
        </section>

        <ContactCTA />
      </main>
    </>
  )
}
