'use client'
import { useLanguage } from '@/context/LanguageContext'
import Button from '@/components/ui/Button'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

export default function Hero() {
  const { tr } = useLanguage()
  const { h1 } = tr.hero

  return (
    <section id="hero" className="pt-[54px] relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
        <div className="max-w-[720px]">
          <EyebrowLabel className="mb-6 block">
            {tr.hero.eyebrow}
          </EyebrowLabel>

          <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.045em] text-[52px] md:text-[72px] lg:text-[90px] xl:text-[110px] mb-7">
            <span className="font-bold">{h1.bold1}</span>{h1.plain1}
            <br />
            <span className="whitespace-nowrap">{h1.plain2}<span className="font-bold">{h1.bold2}</span></span>
          </h1>

          <p className="font-archivo text-body-l text-paper/60 max-w-[520px] mb-10">
            {tr.hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="primary">
              {tr.hero.cta}
            </Button>
            <Button href="#why-compass" variant="ghost">
              {tr.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="h-px bg-paper/10" />
      </div>
    </section>
  )
}
