import Image from 'next/image'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { clientLogos, references, hasClientProof } from '@/lib/clients'

/**
 * Client proof — Option N from the design canvas.
 *
 * Returns null while lib/clients.ts is empty, which it is today. That is
 * deliberate: a placeholder logo row or an invented quote is worse than no
 * social proof at all, so this section simply does not exist until the assets
 * do. Adding one logo or one reference brings it to life.
 *
 * The reference sits left and the logo grid right, because a named person
 * saying something specific outranks a wall of marks. Logos are dimmed and lift
 * on hover so they read as evidence rather than decoration.
 */
export default function ClientProof() {
  if (!hasClientProof()) return null

  const reference = references[0]

  return (
    <section className="py-20 lg:py-24 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div
          className={`grid grid-cols-1 gap-14 ${
            reference && clientLogos.length ? 'lg:grid-cols-2 lg:gap-16' : ''
          }`}
        >
          {reference && (
            <div>
              <blockquote className="font-archivo font-light text-paper text-[26px] md:text-[30px] leading-[38px] tracking-[-0.025em] m-0">
                &ldquo;{reference.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 mt-7">
                <span aria-hidden className="w-8 h-px bg-signal shrink-0" />
                <span className="font-jetbrains text-xs text-paper/45 uppercase tracking-eyebrow">
                  {reference.name} · {reference.role} · {reference.company}
                </span>
              </div>
            </div>
          )}

          {clientLogos.length > 0 && (
            <div>
              <EyebrowLabel dim className="mb-5 block">
                Worked with
              </EyebrowLabel>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-paper/10 border border-paper/10 rounded-lg overflow-hidden">
                {clientLogos.map((logo) => (
                  <div
                    key={logo.src}
                    className="bg-ink h-[84px] flex items-center justify-center px-5"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="max-h-8 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
