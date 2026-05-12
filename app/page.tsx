import WebGLBackground from '@/components/ui/WebGLBackground'

import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandPillars from '@/components/sections/BrandPillars'
import ServicesOverview from '@/components/sections/ServicesOverview'
import StatsBar from '@/components/sections/StatsBar'
import WhyCompass from '@/components/sections/WhyCompass'
import ContactCTA from '@/components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <WebGLBackground />
      <Nav />
      <main>
        <Hero />
        <BrandPillars />
        <ServicesOverview />
        <StatsBar />
        <WhyCompass />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
