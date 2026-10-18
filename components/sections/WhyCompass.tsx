'use client'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import { reasonIcons } from '@/components/ui/ReasonIcons'

// "Six reasons the work sticks." — on /, /ar and /how-we-work (Decision 162).
//
// Each reason gets a line drawing in the same hand as the How We Work stepper
// icons, set straight on the section with no card around it, and the quote
// closes the section on a rule. This replaces the indigo GlowCards: DESIGN.md
// keeps Indigo out of product UI, so the section is now Ink, Paper and Signal
// only. The reasons are parallel claims, not a sequence, so their 01–06
// numbers are no longer shown.
//
// The reasons used to fade in when scrolled into view, starting from opacity
// 0. That is gone too: the copy is visible at rest, for readers and crawlers.
export default function WhyCompass() {
  const { tr } = useLanguage()

  return (
    <section id="why-compass" className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-content mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <EyebrowLabel className="mb-4 block">{tr.whyCompass.eyebrow}</EyebrowLabel>
            <h2 className="font-archivo text-[32px] leading-[36px] lg:text-heading-1 font-normal text-paper tracking-[-0.025em]">
              {tr.whyCompass.heading}
            </h2>
          </div>
          <Button href="#contact" variant="primary">
            {tr.whyCompass.cta}
          </Button>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 lg:gap-y-16">
          {tr.whyCompass.reasons.map((reason, i) => {
            const Icon = reasonIcons[i]
            return (
              <li key={reason.number} className="flex flex-col">
                <span className="block w-24 h-24 lg:w-[120px] lg:h-[120px] mb-6">{Icon && <Icon />}</span>
                <h3 className="font-archivo font-normal text-paper text-[22px] lg:text-[24px] leading-[30px] tracking-[-0.015em] mb-3">
                  {reason.heading}
                </h3>
                <p className="font-barlow text-body leading-[28px] text-paper/60">{reason.body}</p>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 lg:mt-20 pt-8 border-t border-paper/[0.15] flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-8">
          <p className="font-archivo font-light text-paper text-[22px] lg:text-[28px] leading-[1.3] tracking-[-0.02em]">
            {tr.whyCompass.quote}
          </p>
          <span className="font-jetbrains text-xs text-signal tracking-eyebrow shrink-0">
            {tr.whyCompass.quoteAttr}
          </span>
        </div>
      </div>
    </section>
  )
}
