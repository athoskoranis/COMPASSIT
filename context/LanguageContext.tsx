'use client'
import { usePathname } from 'next/navigation'
import { t, Lang } from '@/lib/translations'

/**
 * Locale is derived from the URL, not held in state and not passed down.
 *
 * It used to be useState with a toggle() that flipped it in place, so Arabic
 * existed only as a client-side re-render of an English URL — nothing for a
 * crawler to fetch, rank, or link to.
 *
 * The first attempt at fixing that passed `lang` into a provider. It broke the
 * chrome: Nav and Footer are rendered by the root layout, which sits *outside*
 * the /ar layout, so they kept receiving "en" on Arabic pages and the language
 * switcher pointed at the page it was already on.
 *
 * Reading the pathname has no such blind spot. Every client component gets the
 * right locale wherever it sits in the tree, including chrome rendered above the
 * route that determines it, and it resolves identically on server and client
 * because the pathname is known during the server render.
 */
export function useLanguage(): { lang: Lang; tr: typeof t['en'] } {
  const pathname = usePathname()
  const lang: Lang = pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en'
  return { lang, tr: t[lang] }
}
