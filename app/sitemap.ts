import { MetadataRoute } from 'next'

const BASE = 'https://compass-its.com'

const services = [
  'it-services',
  'network-infrastructure',
  'cloud-solutions',
  'cybersecurity',
  'web-development',
  'app-development',
  'ai-workflows',
  'digital-marketing',
]

// Article dates are fixed, not build-time — a post that hasn't changed
// shouldn't report a fresh lastModified on every deploy.
const posts = [
  { slug: 'how-to-build-network-infrastructure-qatar', published: '2026-08-14' },
  { slug: 'how-cyber-security-reduces-business-risks', published: '2026-08-13' },
  { slug: 'cloud-artificial-intelligence-it-innovation', published: '2026-08-13' },
  { slug: 'generative-ai-consulting-qatar', published: '2026-07-06' },
  { slug: 'cloud-migration-services-qatar', published: '2026-07-06' },
  { slug: 'penetration-testing-services-qatar', published: '2026-07-06' },
  { slug: 'ai-agents-for-business-gcc', published: '2026-07-06' },
  { slug: 'ai-workflow-automation-gcc-businesses', published: '2026-06-01' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...services.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.published),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
