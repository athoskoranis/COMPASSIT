import { usIdentity, hasUsIdentity } from '@/lib/us'

/**
 * Everything under /us is the Oregon practice. This layout exists to scope the
 * US business entity to that subtree, the same way app/ar/layout.tsx scopes
 * Arabic to /ar.
 *
 * The root layout renders its own `#organization` node — Doha address, Qatari
 * phone, Gulf service area — on every route on the site, and that is left
 * exactly as it is. Decision 098 corrected a 3.7km address contradiction in that
 * entity, and HANDOVER.md item 05 records that Name/Address/Phone consistency is
 * one of the few signals genuinely driving local ranking here. Adding an Oregon
 * address to it would undo that work.
 *
 * So the US practice is a second entity, not an edit to the first. Two
 * LocalBusiness nodes on one domain is an ordinary multi-location pattern; what
 * makes it read correctly rather than as a contradiction is a distinct `@id`
 * and an explicit `parentOrganization` pointing back at the Doha entity.
 *
 * `areaServed` on the parent still lists only Doha, Qatar, Saudi Arabia and the
 * UAE, and that is deliberate — the parent describes the Gulf MSP business and
 * the branch below carries its own. Logged so nobody reconciles the two by
 * widening the parent and diluting its local signal.
 *
 * Nothing is emitted until lib/us.ts holds a real entity. See the note there.
 */

const usPracticeJsonLd = () => ({
  '@context': 'https://schema.org',
  '@id': 'https://compass-its.com/#us-practice',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: usIdentity.legalName,
  url: 'https://compass-its.com/us',
  parentOrganization: { '@id': 'https://compass-its.com/#organization' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: usIdentity.streetAddress,
    addressLocality: usIdentity.addressLocality,
    addressRegion: usIdentity.addressRegion,
    postalCode: usIdentity.postalCode,
    addressCountry: 'US',
  },
  telephone: usIdentity.telephone,
  email: usIdentity.email,
  areaServed: [
    { '@type': 'City', name: 'Portland' },
    { '@type': 'State', name: 'Oregon' },
    { '@type': 'Country', name: 'United States' },
  ],
  currenciesAccepted: 'USD',
  priceRange: '$$',
})

export default function UsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {hasUsIdentity() && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(usPracticeJsonLd()) }}
        />
      )}
      {children}
    </>
  )
}
