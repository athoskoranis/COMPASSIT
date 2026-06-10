import type { Metadata } from 'next'
import WebGLBackground from '@/components/ui/WebGLBackground'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact Compass IT Solutions — IT Support in Qatar',
  description: 'Get in touch with Compass IT Solutions. Managed IT services, network infrastructure, cybersecurity, and cloud solutions for businesses across Qatar and the GCC.',
  alternates: { canonical: 'https://compass-its.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <WebGLBackground />
      <Nav />
      <main>
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
