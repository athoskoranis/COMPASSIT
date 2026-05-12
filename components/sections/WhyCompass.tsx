'use client'
import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'
import GlowCard from '@/components/ui/GlowCard'

export default function WhyCompass() {
  const { tr } = useLanguage()
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false)
          requestAnimationFrame(() => setVisible(true))
        } else {
          setVisible(false)
        }
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why-compass" className="py-20 lg:py-24 relative z-[1]">
      <div className="max-w-content mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <EyebrowLabel className="mb-4 block">{tr.whyCompass.eyebrow}</EyebrowLabel>
            <h2 className="font-archivo text-heading-1 font-semibold text-paper tracking-[-0.025em]">
              {tr.whyCompass.heading}
            </h2>
          </div>
          <Button href="#contact" variant="primary">
            {tr.whyCompass.cta}
          </Button>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tr.whyCompass.reasons.map((reason, i) => (
            <div
              key={reason.number}
              style={{
                height: '100%',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 80}ms`,
              }}
            >
              <GlowCard variant="indigo" className="p-6 h-full">
                <span className="font-jetbrains text-xs text-signal/50 tracking-eyebrow block mb-4">
                  {reason.number}
                </span>
                <h3 className="font-barlow text-[18px] font-medium text-paper tracking-[-0.02em] leading-snug mb-3">
                  {reason.heading}
                </h3>
                <p className="font-barlow text-body text-paper/50 leading-[28px]">
                  {reason.body}
                </p>
              </GlowCard>
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-signal px-8 py-6 bg-paper/[0.03] rounded-r-lg shadow-glow-signal-sm">
          <p className="font-barlow text-body-l text-paper italic mb-3">
            {tr.whyCompass.quote}
          </p>
          <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
            {tr.whyCompass.quoteAttr}
          </span>
        </div>
      </div>
    </section>
  )
}
