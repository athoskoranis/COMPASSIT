import type { Metadata } from 'next'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import BrandPillars from '@/components/sections/BrandPillars'
import ContactCTA from '@/components/sections/ContactCTA'

// Copy is verbatim from CONTENT.md "About Page (/about)"; title and description
// verbatim from SEO.md. Sections follow SITEMAP.md: who we are, stats, three
// pillars, Doha location.
export const metadata: Metadata = {
  title: { absolute: 'Who We Are — Compass IT Solutions' },
  description:
    'Founded in 2025, Compass IT Solutions is a managed IT services provider based in Doha, Qatar. Network infrastructure, cloud, cybersecurity, and development.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about' },
}

const stats = [
  { value: '2025', label: 'Year founded' },
  { value: '10+', label: 'Professionals' },
  { value: '20+', label: 'Clients served' },
  { value: '10+', label: 'Projects delivered' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://compass-its.com/about#aboutpage',
      url: 'https://compass-its.com/about',
      name: 'Who We Are — Compass IT Solutions',
      isPartOf: { '@id': 'https://compass-its.com/#website' },
      about: { '@id': 'https://compass-its.com/#organization' },
      publisher: { '@id': 'https://compass-its.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://compass-its.com' },
        { '@type': 'ListItem', position: 2, name: 'Who We Are', item: 'https://compass-its.com/about' },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
            <EyebrowLabel className="mb-6 block">COMPASS ITS · ABOUT</EyebrowLabel>

            <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[600px] mb-8">
              Who we are.
            </h1>

            <div className="max-w-[640px] space-y-6 mb-10">
              <p className="font-barlow text-body-l text-paper/60 leading-relaxed">
                Compass IT Solutions builds the quiet infrastructure that lets ambitious teams move
                without friction — wired right the first time, kept running for the long haul.
              </p>
              <p className="font-barlow text-body-l text-paper/60 leading-relaxed">
                Founded in 2025, we are a managed IT services provider specialising in network
                infrastructure, cloud solutions, and cybersecurity. We serve ambitious organisations
                across Qatar and the region — delivering technology that works reliably in the
                background, so your people can focus on the work that matters.
              </p>
              <p className="font-barlow text-body-l text-paper/60 leading-relaxed">
                We don&apos;t disappear after deployment. Every engagement begins with understanding your
                environment and ends only when the system is documented, stable, and performing
                exactly as promised.
              </p>
            </div>

            <Button href="/contact" variant="primary">Get in touch</Button>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-24 relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-paper/10">
              {stats.map((stat) => (
                <div key={stat.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <p className="font-archivo font-light text-paper text-[44px] lg:text-[56px] leading-none tracking-[-0.03em] mb-3">
                    {stat.value}
                  </p>
                  <p className="font-jetbrains text-xs text-paper/40 uppercase tracking-eyebrow">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-jetbrains text-xs text-signal uppercase tracking-eyebrow mt-14">
              Doha, Qatar
            </p>
          </div>
        </section>

        <BrandPillars />
        <ContactCTA />
      </main>
    </>
  )
}
