import type { Metadata } from 'next'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: { absolute: "Get in Touch — Compass IT Solutions" },
  description: "Start a conversation with Compass IT Solutions. Most engagements begin with a 30-day diagnostic. Doha, Qatar — +974 5149 0825 — info@compass-its.com.",
  alternates: {
    canonical: 'https://compass-its.com/contact',
    languages: { en: '/contact', ar: '/ar/contact', 'x-default': '/contact' },
  },
}


// ContactPage, as specified by SEO. Both @id references resolve to the entity
// graph declared in app/layout.tsx — #website and #organization — so this node
// joins the existing graph rather than standing on its own.
//
// BreadcrumbList is added alongside it. Every other page on the site carries one
// (services, blog posts, /about, /how-we-work); /contact was the only page-level
// schema without it, and a lone ContactPage node would have kept that gap.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://compass-its.com/contact#contactpage',
      url: 'https://compass-its.com/contact',
      name: 'Contact Compass IT Solutions',
      description:
        'Get in touch with Compass IT Solutions to discuss your IT requirements, request a quote, or learn more about our IT services.',
      isPartOf: { '@id': 'https://compass-its.com/#website' },
      about: { '@id': 'https://compass-its.com/#organization' },
      mainEntity: { '@id': 'https://compass-its.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://compass-its.com/contact' },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
      <ContactCTA headingLevel={1} />

      {/* Full-width map */}
      <div className="relative z-[1] px-6 lg:px-20 pb-16 max-w-[1280px] mx-auto">
        <p className="font-jetbrains text-[10px] text-signal uppercase tracking-eyebrow mb-4">
          FIND US
        </p>
        <div className="relative rounded-2xl overflow-hidden h-[420px] border border-paper/[0.08]">
          <iframe
            src="https://maps.google.com/maps?q=25.2896241,51.5431226&z=16&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: 'grayscale(1) invert(1) hue-rotate(180deg) brightness(0.85)',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://www.google.com/maps/place/Compass+IT+Solutions/@25.2896241,51.5431226,16z/data=!4m6!3m5!1s0x3e45c5fbdbcc7b3f:0x6efd0a359a47c968!8m2!3d25.2896241!4d51.5431226!16s%2Fg%2F11zbrn2b92"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
            aria-label="View Compass IT Solutions on Google Maps"
          />
        </div>
        <p className="font-archivo text-[13px] text-paper/40 mt-3">
          West Bay, Doha, Qatar — <a
            href="https://www.google.com/maps/place/Compass+IT+Solutions/@25.2896241,51.5431226,16z/data=!4m6!3m5!1s0x3e45c5fbdbcc7b3f:0x6efd0a359a47c968!8m2!3d25.2896241!4d51.5431226!16s%2Fg%2F11zbrn2b92"
            target="_blank"
            rel="noopener noreferrer"
            className="text-signal hover:text-paper transition-colors"
          >Open in Google Maps →</a>
        </p>
      </div>
      </main>
    </>
  )
}
