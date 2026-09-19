import type { Metadata } from 'next'
import UsPageClient from './client'

/**
 * No `alternates.languages` here, deliberately.
 *
 * hreflang declares that two URLs are the same content aimed at different
 * languages or regions. This page is not a US edition of a Gulf page — the
 * service does not exist in Qatar, so there is no counterpart to point at, and a
 * non-reciprocal annotation is one Google ignores at best. A self-referencing
 * canonical is the whole of the correct answer here.
 */
export const metadata: Metadata = {
  title: { absolute: 'POS Analytics & Restaurant Reporting — Portland, Oregon · Compass ITS' },
  description:
    'Custom reporting built on your point-of-sale data. Prime cost, labor by daypart, and item-level margin for restaurants, bars and retail across Portland and Oregon.',
  alternates: { canonical: '/us' },
  openGraph: {
    title: 'POS Analytics for Restaurants & Retail — Portland, Oregon',
    description:
      'The numbers your POS will not show you. Prime cost, labor as a percentage of sales by daypart, and item-level margin — built on the POS you already run.',
    url: '/us',
    locale: 'en_US',
  },
}

/**
 * The Service node names #us-practice as its provider, not #organization. The
 * Oregon entity is declared in app/us/layout.tsx and appears only once
 * lib/us.ts holds a real identity, so until then this reference points at a node
 * that is not on the page.
 *
 * That is the right trade. A dangling provider reference is a soft failure
 * Google tolerates; naming the Doha entity as the provider of a Portland service
 * would be a wrong statement about the business, and it would put Gulf contact
 * data behind a US service in the knowledge graph.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Point-of-Sale Analytics',
      description:
        'Custom reporting dashboards built on point-of-sale system APIs for restaurants, bars, cafes and retail. Prime cost, labor as a percentage of sales by daypart, item-level margin and multi-location roll-up.',
      provider: { '@id': 'https://compass-its.com/#us-practice' },
      areaServed: [
        { '@type': 'City', name: 'Portland' },
        { '@type': 'State', name: 'Oregon' },
        { '@type': 'Country', name: 'United States' },
      ],
      serviceType: 'Business Intelligence',
      url: 'https://compass-its.com/us',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'POS Analytics', item: 'https://compass-its.com/us' },
      ],
    },
  ],
}

export default function UsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UsPageClient />
    </>
  )
}
