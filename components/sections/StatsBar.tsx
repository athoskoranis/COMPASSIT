'use client'
import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

function parseStat(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1]), suffix: match[2] }
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) { setDisplay(0); return }
    const duration = 650
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target])

  return <>{display}{suffix}</>
}

export default function StatsBar() {
  const { tr } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false)
          requestAnimationFrame(() => setActive(true))
        } else {
          setActive(false)
        }
      },
      { threshold: 0.4 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 lg:py-24 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-14">
          <EyebrowLabel className="mb-4 block">{tr.stats.eyebrow}</EyebrowLabel>
          <h2 className="font-archivo text-heading-2 font-medium text-paper tracking-[-0.02em]">
            {tr.stats.heading}
          </h2>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-paper/10"
        >
          {tr.stats.items.map((stat) => {
            const { num, suffix } = parseStat(stat.value)
            return (
              <div key={stat.label} className="text-center lg:px-8">
                <p className="font-archivo font-light leading-none mb-3 text-signal" style={{ fontSize: '72px', lineHeight: '1' }}>
                  <CountUp target={num} suffix={suffix} active={active} />
                </p>
                <p className="font-jetbrains text-xs text-paper/40 uppercase tracking-eyebrow">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
