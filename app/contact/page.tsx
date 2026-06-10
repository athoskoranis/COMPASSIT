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
      <Footer />
    </>
  )
}
