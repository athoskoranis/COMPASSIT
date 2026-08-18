import type { Metadata } from 'next'
import { Archivo, Barlow, JetBrains_Mono, Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import SiteBackground from '@/components/layout/SiteBackground'
import PointerTracker from '@/components/layout/PointerTracker'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500', '700'],
})

// preload: false because Cairo only ever applies under [dir="rtl"] (globals.css),
// which needs the language toggle. Preloaded, four weights of an Arabic subset
// were fetched on every English page load and used by none of them. Without the
// hint the browser still fetches it the moment the toggle flips -- just not
// before, and not on the critical path for the visitor who never flips it.
const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'Compass IT Solutions — Managed IT Services, Qatar',
    template: '%s | Compass IT Solutions',
  },
  description:
    'Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.',
  metadataBase: new URL('https://compass-its.com'),
  openGraph: {
    siteName: 'Compass IT Solutions',
    type: 'website',
    locale: 'en_QA',
    title: 'Compass IT Solutions — Managed IT Services, Qatar',
    description:
      'Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@compass.its',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'xiAflnEPGwvyy6_7lRtOuDOYSyucnZIndZmpaBRpAzs',
  },
}

const GTM_ID = 'GTM-KZ59QK4H'

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`

// Entity graph. The blog index CollectionPage points at #organization and
// #website by @id, so those anchors have to exist somewhere the crawler will
// see them — declared here, in the layout that renders on every route. Without
// them both references dangle and resolve to nothing.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@id': 'https://compass-its.com/#organization',
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: 'Compass IT Solutions',
      url: 'https://compass-its.com',
      logo: 'https://compass-its.com/brand/compass-its-horizontal-dark.svg',
      image: 'https://compass-its.com/opengraph-image',
      description:
        'Managed IT services provider specialising in network infrastructure, cloud solutions, and cybersecurity. Based in Doha, Qatar.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'West Bay',
        addressLocality: 'Doha',
        addressRegion: 'Ad Dawhah',
        addressCountry: 'QA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.3209,
        longitude: 51.5295,
      },
      hasMap: 'https://maps.google.com/?q=West+Bay,+Doha,+Qatar',
      telephone: '+974-5149-0825',
      email: 'info@compass-its.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+974-5149-0825',
        contactType: 'customer service',
        email: 'info@compass-its.com',
        availableLanguage: ['English', 'Arabic'],
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      // Qatar, Saudi Arabia and the UAE only. Kuwait, Bahrain and Oman were listed
      // here but are not served — declaring markets you do not cover misrepresents
      // the business in structured data. Matches the areaServed on every service page.
      areaServed: [
        { '@type': 'City', 'name': 'Doha' },
        { '@type': 'Country', 'name': 'Qatar' },
        { '@type': 'Country', 'name': 'Saudi Arabia' },
        { '@type': 'Country', 'name': 'United Arab Emirates' },
      ],
      currenciesAccepted: 'QAR',
      priceRange: '$$',
      sameAs: ['https://instagram.com/compass.its'],
      foundingDate: '2025',
    },
    {
      '@id': 'https://compass-its.com/#website',
      '@type': 'WebSite',
      url: 'https://compass-its.com',
      name: 'Compass IT Solutions',
      publisher: { '@id': 'https://compass-its.com/#organization' },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${barlow.variable} ${jetbrainsMono.variable} ${cairo.variable} font-archivo bg-ink text-paper antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          {/* Chrome lives here, not in each page — so navigating between routes
              reuses it instead of tearing it down and rebuilding it. */}
          <SiteBackground />
          <PointerTracker />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
