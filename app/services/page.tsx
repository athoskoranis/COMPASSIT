import type { Metadata } from 'next'
import Link from 'next/link'
import { Monitor, Wifi, Cloud, Shield, Globe, Smartphone, Cpu, TrendingUp } from 'lucide-react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import ContactCTA from '@/components/sections/ContactCTA'
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

// Slugs and icons pair with t.en.services.items by index, the same contract
// ServicesOverview and the footer already rely on. SITEMAP.md declares nine
// sub-pages; /services/custom-solutions has no copy and no route, so it is
// absent rather than linked to a 404. Add it here when the page exists.
const services = [
  { slug: 'it-services',            icon: Monitor    },
  { slug: 'network-infrastructure', icon: Wifi       },
  { slug: 'cloud-solutions',        icon: Cloud      },
  { slug: 'cybersecurity',          icon: Shield     },
  { slug: 'web-development',        icon: Globe      },
  { slug: 'app-development',        icon: Smartphone },
  { slug: 'ai-workflows',           icon: Cpu        },
  { slug: 'digital-marketing',      icon: TrendingUp },
].map((meta, i) => ({
  ...meta,
  href: `/services/${meta.slug}`,
  ...t.en.services.items[i],
}))

// Generated from the same array as the grid, so the ItemList cannot claim a
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
            <EyebrowLabel className="mb-6 block max-w-[560px]">
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

        {/* Overview grid — one card per service page, per SITEMAP.md */}
        <section className="bg-paper py-20 lg:py-28 relative z-[1]">
          <div className="max-w-content mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group flex flex-col rounded-xl border border-ink/[0.12] bg-ink/[0.02] p-8 transition-all duration-200 hover:border-signal/50 hover:bg-ink/[0.04]"
                  >
                    <Icon size={22} className="text-signal mb-6" aria-hidden />

                    <span className="font-jetbrains text-xs font-medium uppercase tracking-eyebrow text-ink/40 mb-3 block">
                      {service.category}
                    </span>

                    <h2 className="font-archivo font-medium text-ink text-[22px] leading-tight tracking-[-0.02em] mb-3 group-hover:text-signal transition-colors duration-200">
                      {service.title}
                    </h2>

                    <p className="font-barlow text-body text-ink/60 leading-[28px] mb-7">
                      {service.description}
                    </p>

                    <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase mt-auto group-hover:underline underline-offset-4">
                      {t.en.services.seeLabel} {service.title} →
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
    </>
  )
}
