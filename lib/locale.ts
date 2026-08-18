import type { Lang } from './translations'

// Routes that exist in Arabic. Everything else — the blog and its posts — has no
// Arabic content at all, so there is nothing to link to and nothing to index.
export const AR_ROUTES = [
  '/',
  '/contact',
  '/services/it-services',
  '/services/network-infrastructure',
  '/services/cloud-solutions',
  '/services/cybersecurity',
  '/services/web-development',
  '/services/app-development',
  '/services/ai-workflows',
  '/services/digital-marketing',
] as const

export const hasArabic = (path: string) => (AR_ROUTES as readonly string[]).includes(path)

/** The English path for any route, with the /ar prefix removed. */
export function toEnglish(path: string): string {
  if (path === '/ar') return '/'
  return path.startsWith('/ar/') ? path.slice(3) : path
}

/**
 * The Arabic counterpart of a path, or the Arabic home page when the route has
 * no Arabic version. Sending a reader from an English blog post to the Arabic
 * home is a compromise, but it beats a dead link or a 404.
 */
export function toArabic(path: string): string {
  if (path.startsWith('/ar')) return path
  return hasArabic(path) ? (path === '/' ? '/ar' : `/ar${path}`) : '/ar'
}

/** hreflang alternates for a route, for use in `alternates.languages`. */
export function alternatesFor(englishPath: string) {
  if (!hasArabic(englishPath)) return undefined
  return {
    en: englishPath,
    ar: englishPath === '/' ? '/ar' : `/ar${englishPath}`,
  }
}

export const dirFor = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr')
