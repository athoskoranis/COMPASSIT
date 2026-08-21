import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import BrandPillars from '@/components/sections/BrandPillars'
import ClientProof from '@/components/sections/ClientProof'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsBar from '@/components/sections/StatsBar'
import WhyCompass from '@/components/sections/WhyCompass'
import ContactCTA from '@/components/sections/ContactCTA'

// The home page had no metadata export at all, so it inherited the layout's and
// ended up as the only route on the site without a self-referencing canonical —
// which SEO.md requires of every page. Title and description stay identical to
// the layout defaults; this exists for the canonical and to pin the OG url.
export const metadata: Metadata = {
  title: { absolute: "Compass IT Solutions — Wired right. Kept running." },
  description: "Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.",
  alternates: {
    canonical: '/',
    languages: { en: '/', ar: '/ar', 'x-default': '/' },
  },
  openGraph: { url: '/' },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandPillars />
      {/* Renders nothing until lib/clients.ts has a logo or a reference. Once it
          does, this is the section that replaces BrandPillars above. */}
      <ClientProof />
      <ServicesOverview />
      <StatsBar />
      <WhyCompass />
      <ContactCTA />
    </main>
  )
}
