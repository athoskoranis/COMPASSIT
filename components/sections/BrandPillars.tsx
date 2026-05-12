'use client'
import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import GlowCard from '@/components/ui/GlowCard'

export default function BrandPillars() {
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
      { threshold: 0.2 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 lg:py-24 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="mb-14">
          <EyebrowLabel className="mb-4 block">
            {(() => {
              const [a, b, c] = tr.brandPillars.eyebrow.split(' · ')
              return <>{a} · <span className="text-paper">{b}</span> · {c}</>
            })()}
          </EyebrowLabel>
          <h2 className="font-archivo text-heading-2 font-semibold text-paper tracking-[-0.02em]">
            {tr.brandPillars.heading}
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tr.brandPillars.pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              style={{
                height: '100%',
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 120}ms`,
              }}
            >
              <GlowCard variant="indigo" className="p-6 h-full">
                <span className="font-jetbrains text-xs text-signal/60 tracking-eyebrow block mb-4">
                  {pillar.number}
                </span>
                <h3 className="font-barlow text-[22px] font-medium text-paper leading-tight tracking-[-0.02em] mb-4">
                  {pillar.heading}
                </h3>
                <p className="font-barlow text-body text-paper/55 leading-[28px]">
                  {pillar.body}
                </p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
