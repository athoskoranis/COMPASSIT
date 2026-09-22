import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تواصل معنا — كومباس آي تي سولوشنز" },
  description: "معظم مشاريعنا تبدأ بمحادثة. أخبرنا بما تعمل عليه وسنعود إليك خلال يوم عمل واحد. خدمات تقنية معلومات مُدارة في الدوحة، قطر — هاتف 0825 5149 974+.",
  alternates: {
    canonical: '/ar/contact',
    languages: { en: '/contact', ar: '/ar/contact', 'x-default': '/contact' },
  },
  // Share card. Declaring openGraph here stops the file-convention image
  // reaching this route, so it names the Arabic card explicitly.
  openGraph: { url: '/ar/contact', locale: 'ar_QA', images: ['/images/og/ar-share-card.png'] },
  twitter: { images: ['/images/og/ar-share-card.png'] },
}

import ContactCTA from '@/components/sections/ContactCTA'

export default function ArabicContactPage() {
  return (
    <main>
      <ContactCTA headingLevel={1} />
    </main>
  )
}
