// Everything under /ar renders in Arabic on the server. That is the point: before
// this, Arabic was a client-side re-render of an English URL, so there was no
// Arabic document for a crawler to fetch, rank or link to.
//
// No provider here — useLanguage() derives the locale from the pathname, so the
// chrome rendered by the root layout above this one resolves to Arabic too.
//
// lang and dir sit on this wrapper rather than on <html>, because only a root
// layout may render <html> and the English routes cannot move into a locale
// segment without breaking the blog bot, which writes into app/blog/. The inline
// script corrects the document element before first paint so the RTL layout never
// flashes left-to-right. Google determines page language from visible content and
// hreflang rather than the lang attribute, so the cost here is accessibility
// rather than ranking, and the script covers that.
const setDocumentLocale = `document.documentElement.lang='ar';document.documentElement.dir='rtl';`

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ar" dir="rtl">
      <script dangerouslySetInnerHTML={{ __html: setDocumentLocale }} />
      {children}
    </div>
  )
}
