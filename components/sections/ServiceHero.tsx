import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'

interface ServiceHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta?: string
  secondaryCta?: string
}

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = 'Start a conversation',
  secondaryCta,
}: ServiceHeroProps) {
  return (
    <section className="pt-[54px] relative z-[1] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-20 lg:py-28 relative z-10">
        <EyebrowLabel className="mb-6 block">{eyebrow}</EyebrowLabel>

        <h1 className="font-archivo font-semibold text-paper leading-none tracking-[-0.04em] text-[40px] md:text-[56px] lg:text-[72px] max-w-[820px] mb-7">
          {title}
        </h1>

        <p className="font-barlow text-[19px] text-paper/60 max-w-[560px] mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="#contact" variant="primary">{primaryCta}</Button>
          {secondaryCta && (
            <Button href="#contact" variant="ghost">{secondaryCta}</Button>
          )}
        </div>
      </div>
    </section>
  )
}