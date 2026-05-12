'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { t, Lang } from '@/lib/translations'

interface LanguageContextValue {
  lang: Lang
  tr: typeof t['en']
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  tr: t.en,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return (
    <LanguageContext.Provider value={{
      lang,
      tr: t[lang],
      toggle: () => setLang(l => l === 'en' ? 'ar' : 'en'),
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
