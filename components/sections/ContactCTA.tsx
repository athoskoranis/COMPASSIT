'use client'
import { useLanguage } from '@/context/LanguageContext'
import Button from '@/components/ui/Button'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

export default function ContactCTA() {
  const { tr } = useLanguage()
  return (
    <section id="contact" className="py-24 lg:py-32 relative z-[1]">
      <div className="max-w-content mx-auto px-6 lg:px-20 text-center">
        <EyebrowLabel className="mb-6 block">{tr.contact.eyebrow}</EyebrowLabel>

        <h2 className="font-archivo font-light text-paper tracking-[-0.04em] text-[48px] md:text-[64px] lg:text-[72px] leading-none mb-6">
          {tr.contact.heading}
        </h2>

        <p className="font-archivo text-body-l text-paper/55 max-w-[480px] mx-auto mb-10">
          {tr.contact.body}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" variant="primary">
            {tr.contact.cta}
          </Button>
          <a
            href="tel:+97451490825"
            className="inline-flex items-center font-archivo text-[15px] font-medium text-paper/60 hover:text-signal transition-colors gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 3a1 1 0 011-1h2.5a1 1 0 011 .79l.5 2.5a1 1 0 01-.29.93L5.79 7.15c.9 1.73 2.32 3.14 4.06 4.06l.93-.93a1 1 0 01.93-.29l2.5.5A1 1 0 0115 11.5V14a1 1 0 01-1 1C6.27 15 1 9.73 1 3a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
            +974 5149 0825
          </a>
        </div>
      </div>
    </section>
  )
}
