'use client'
import { useLanguage } from '@/context/LanguageContext'

export default function CalloutBlock() {
  const { tr } = useLanguage()
  return (
    <section className="py-16 lg:py-20 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-[720px] mx-auto border-l-4 border-signal px-8 py-7 bg-paper/[0.04] rounded-r-lg shadow-glow-signal-sm">
          <p className="font-archivo text-body-l text-paper italic leading-[30px] mb-4">
            {tr.callout.quote}
          </p>
          <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
            {tr.callout.attr}
          </span>
        </div>
      </div>
    </section>
  )
}
