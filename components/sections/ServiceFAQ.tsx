import EyebrowLabel from '@/components/ui/EyebrowLabel'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <section className="py-20 lg:py-28 border-t border-paper/[0.08] relative z-[1]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <EyebrowLabel className="mb-5 block">FAQ</EyebrowLabel>

        <h2 className="font-archivo font-light text-paper tracking-[-0.04em] text-[32px] md:text-[44px] leading-none mb-12 max-w-[560px]">
          Common questions
        </h2>

        <div className="flex flex-col gap-8 max-w-[800px]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-paper/[0.10] pb-8">
              <h3 className="font-archivo font-medium text-paper text-[18px] mb-3 leading-snug">
                {faq.question}
              </h3>
              <p className="font-barlow text-[16px] text-paper/60 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
