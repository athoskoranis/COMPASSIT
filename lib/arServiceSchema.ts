import { serviceData } from '@/lib/serviceTranslations'
import { faqNodes } from '@/lib/faqSchema'

/**
 * Page-level schema for the Arabic service routes, which had none: the English
 * pages hand-write a Service and a BreadcrumbList, and the Arabic twins reused
 * the client component without the JSON-LD. Everything here derives from
 * `serviceData[slug].ar`, so the schema says what the Arabic page says.
 *
 * Breadcrumb names: the Arabic brand name (the /ar page title) and the approved
 * nav label for Services; there is no approved Arabic "Home" string.
 */
const SERVICE_TYPE: Record<string, string> = {
  'it-services': 'Managed IT Services',
  'network-infrastructure': 'Network Infrastructure',
  'cloud-solutions': 'Cloud Computing',
  'cybersecurity': 'Cybersecurity',
  'web-development': 'Web Development',
  'app-development': 'Mobile App Development',
  'ai-workflows': 'AI Workflow Automation',
  'digital-marketing': 'Digital Marketing',
}

export function arServiceJsonLd(slug: string) {
  const d = serviceData[slug].ar
  const url = `https://compass-its.com/ar/services/${slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: d.hero.title,
        description: d.hero.subtitle,
        provider: { '@id': 'https://compass-its.com/#organization' },
        areaServed: [
          { '@type': 'Country', name: 'Qatar' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
        ],
        serviceType: SERVICE_TYPE[slug],
        inLanguage: 'ar',
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'كومباس آي تي سولوشنز', item: 'https://compass-its.com/ar' },
          { '@type': 'ListItem', position: 2, name: 'الخدمات', item: 'https://compass-its.com/services' },
          { '@type': 'ListItem', position: 3, name: d.hero.title, item: url },
        ],
      },
      ...faqNodes(d.faq),
    ],
  }
}
