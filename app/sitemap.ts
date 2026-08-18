import { MetadataRoute } from 'next'

const BASE = 'https://compass-its.com'

// Bump when the copy on the static pages changes. See the note in sitemap().
const CONTENT_UPDATED = '2026-08-18'

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
  // Static pages report the date their content last actually changed, not the
  // date of the build. lastModified: new Date() meant every deploy told Google
  // that the home page, contact page and all eight service pages had been
  // modified -- which trains it to ignore the signal entirely. Bump this when
  // page copy changes; 2026-08-18 is when titles and meta descriptions were
  // reset from SEO.md across every one of these routes.
  const contentUpdated = new Date(CONTENT_UPDATED)

  // The blog index genuinely does change whenever a post lands, and that date is
  // already known, so it is derived rather than declared.
  const newestPost = posts
    .map((p) => p.published)
    .sort()
    .reverse()[0]

  return [
    {
      url: BASE,
      lastModified: contentUpdated,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE}/contact`,
      lastModified: contentUpdated,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...services.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: contentUpdated,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/blog`,
      lastModified: new Date(newestPost),
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
