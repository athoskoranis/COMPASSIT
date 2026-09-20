import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "تواصل معنا — كومباس آي تي سولوشنز" },
  description: "معظم مشاريعنا تبدأ بمحادثة. أخبرنا بما تعمل عليه وسنعود إليك خلال يوم عمل واحد. خدمات تقنية معلومات مُدارة في الدوحة، قطر — هاتف 0825 5149 974+.",
  alternates: {
    canonical: '/ar/contact',
    languages: { en: '/contact', ar: '/ar/contact', 'x-default': '/contact' },
  },
  // Share card. Declaring openGraph here stops the root
  // app/opengraph-image.tsx reaching this route, so it has to name one
  // explicitly — see app/ar/page.tsx for why it is the English card.
  openGraph: { url: '/ar/contact', locale: 'ar_QA', images: ['/contact/opengraph-image'] },
  twitter: { images: ['/contact/opengraph-image'] },
}

import ContactCTA from '@/components/sections/ContactCTA'

export default function ArabicContactPage() {
  return (
    <main>
      <ContactCTA headingLevel={1} />
    </main>
  )
}
