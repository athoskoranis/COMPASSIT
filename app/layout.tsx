import type { Metadata } from 'next'
import { Archivo, Barlow, JetBrains_Mono, Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

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

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Compass IT Solutions — Wired right. Kept running.',
  description:
    'Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.',
  metadataBase: new URL('https://compass-its.com'),
  alternates: {
    canonical: 'https://compass-its.com',
  },
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Compass IT Solutions',
  url: 'https://compass-its.com',
  logo: 'https://compass-its.com/brand/Monogram%20Transparent.svg',
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
  email: 'asahli@compass-its.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+974-5149-0825',
    contactType: 'customer service',
    email: 'asahli@compass-its.com',
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
  areaServed: [
    { '@type': 'City', 'name': 'Doha' },
    { '@type': 'Country', 'name': 'Qatar' },
    { '@type': 'Country', 'name': 'Saudi Arabia' },
    { '@type': 'Country', 'name': 'United Arab Emirates' },
    { '@type': 'Country', 'name': 'Kuwait' },
    { '@type': 'Country', 'name': 'Bahrain' },
    { '@type': 'Country', 'name': 'Oman' },
  ],
  currenciesAccepted: 'QAR',
  priceRange: '$$',
  sameAs: ['https://instagram.com/compass.its'],
  foundingDate: '2025',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${archivo.variable} ${barlow.variable} ${jetbrainsMono.variable} ${cairo.variable} font-archivo bg-ink text-paper antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
