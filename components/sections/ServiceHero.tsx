import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'

interface ServiceHeroProps {
  eyebrow: string
  title: string
  subtitle: string
  primaryCta?: string
  secondaryCta?: string
  /**
   * Where both buttons point. Defaults to the Qatar contact page, which is
   * right for every service page. /us overrides it: that page carries its own
   * contact block, and sending a Portland reader to a contact page headed by a
   * Doha address undoes the point of the US practice having its own footer.
   */
  ctaHref?: string
}

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = 'Start a conversation',
  secondaryCta,
  ctaHref = '/contact',
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
          <Button href={ctaHref} variant="primary">{primaryCta}</Button>
          {secondaryCta && (
            <Button href={ctaHref} variant="ghost">{secondaryCta}</Button>
          )}
        </div>
      </div>
    </section>
  )
}