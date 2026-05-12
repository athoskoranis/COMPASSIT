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
  openGraph: {
    siteName: 'Compass IT Solutions',
    type: 'website',
    locale: 'en_QA',
    title: 'Compass IT Solutions — Managed IT Services, Qatar',
    description:
      'Managed IT services for organisations across Qatar and the GCC. Network infrastructure, cloud, cybersecurity, and web development — wired right the first time.',
    images: [{ url: '/brand/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@compass.its',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Compass IT Solutions',
  url: 'https://compass-its.com',
  logo: 'https://compass-its.com/brand/compass-its-horizontal-dark.svg',
  description:
    'Managed IT services provider specialising in network infrastructure, cloud solutions, and cybersecurity. Based in Doha, Qatar.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Doha',
    addressRegion: 'West Bay',
    addressCountry: 'QA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+974-5149-0825',
    contactType: 'customer service',
    email: 'asahli@compass-its.com',
  },
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
