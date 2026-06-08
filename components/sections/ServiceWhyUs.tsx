import EyebrowLabel from '@/components/ui/EyebrowLabel'

interface Credential {
  title: string
  description: string
}

interface ServiceWhyUsProps {
  eyebrow?: string
  heading: string
  intro?: string
  points: string[]
  credentialsHeading?: string
  credentials?: Credential[]
}

export default function ServiceWhyUs({
  eyebrow,
  heading,
  intro,
  points,
  credentialsHeading,
  credentials,
}: ServiceWhyUsProps) {
  return (
    <section className="py-20 lg:py-28 relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        {eyebrow && (
          <EyebrowLabel className="mb-5 block">{eyebrow}</EyebrowLabel>
        )}

        <h2 className="font-archivo font-semibold text-paper tracking-[-0.03em] text-[32px] md:text-[44px] leading-none mb-6 max-w-[720px]">
          {heading}
        </h2>

        {intro && (
          <p className="font-barlow text-[17px] text-paper/60 max-w-[680px] mb-10 leading-relaxed">
            {intro}
          </p>
        )}

        <ul className="flex flex-col gap-4 mb-16">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-[6px] flex-shrink-0 w-[3px] h-5 rounded-full bg-signal" />
              <span className="font-barlow text-[16px] text-paper/70 leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {credentials && credentials.length > 0 && (
          <>
            {credentialsHeading && (
              <h3 className="font-archivo font-medium text-paper text-[24px] tracking-[-0.03em] mb-8">
                {credentialsHeading}
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="border border-paper/[0.12] rounded-xl p-6 bg-paper/[0.04]"
                >
                  <h4 className="font-archivo font-medium text-paper text-[16px] mb-2">
                    {c.title}
                  </h4>
                  <p className="font-barlow text-[14px] text-paper/55 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
