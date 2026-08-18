import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import BrandPillars from '@/components/sections/BrandPillars'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsBar from '@/components/sections/StatsBar'
import WhyCompass from '@/components/sections/WhyCompass'
import ContactCTA from '@/components/sections/ContactCTA'

// The home page had no metadata export at all, so it inherited the layout's and
// ended up as the only route on the site without a self-referencing canonical —
// which SEO.md requires of every page. Title and description stay identical to
// the layout defaults; this exists for the canonical and to pin the OG url.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BrandPillars />
      <ServicesOverview />
      <StatsBar />
      <WhyCompass />
      <ContactCTA />
    </main>
  )
}
