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

/**
 * The href a link should carry for the language currently being read.
 *
 * ── Why this exists ─────────────────────────────────────────────────────────
 *
 * The nav and footer render Arabic labels on /ar — useLanguage() derives the
 * locale from the pathname, so the words were already right — while every href
 * stayed pointed at the English URL. The Arabic home page linked to fifteen
 * internal URLs and not one of them was Arabic.
 *
 * Two costs, and the second is the expensive one. A reader who picked Arabic
 * was returned to English by the next thing they clicked. And a crawler
 * arriving at /ar found no path onward: the only link any Arabic page had was
 * the toggle on its English twin, so ten pages of Arabic content sat with one
 * inbound link each and passed no authority between themselves. Content Google
 * can barely reach ranks like content that isn't there.
 *
 * ── Why it falls back to English rather than /ar ────────────────────────────
 *
 * Only ten routes exist in Arabic. toArabic() sends anything else to the
 * Arabic home page, which is the right answer for the language toggle — the
 * reader asked for Arabic and gets the most useful Arabic page available.
 *
 * It is the wrong answer for a nav link. "About" has to lead to About; a nav
 * where four items quietly land on the home page is broken navigation, and a
 * crawler reading four different anchor texts all pointing at /ar learns
 * nothing from any of them. So a route with no Arabic version keeps its
 * English href: a real destination, honestly labelled, and one fewer page that
 * has to exist before the nav works.
 */
export function localeHref(path: string, lang: Lang): string {
  if (lang !== 'ar') return toEnglish(path)
  return hasArabic(path) ? toArabic(path) : path
}

/** hreflang alternates for a route, for use in `alternates.languages`. */
export function alternatesFor(englishPath: string) {
  if (!hasArabic(englishPath)) return undefined
  return {
    en: englishPath,
    ar: englishPath === '/' ? '/ar' : `/ar${englishPath}`,
    // Fallback for a reader whose language matches neither annotation.
    'x-default': englishPath,
  }
}

export const dirFor = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr')
