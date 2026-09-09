import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { googleReviews, googleRating, hasGoogleReviews } from '@/lib/reviews'

/**
 * Google reviews, as content rather than a widget.
 *
 * The rating is a link to the listing, because that is what makes it evidence:
 * a visitor can click through and read all ten themselves. A number sitting on
 * our own page proves nothing; a number that goes somewhere does.
 *
 * No third-party embed. Elfsight, Trustindex and the rest cost a subscription,
 * add a script to a page that currently ships around 325KB in total, and render
 * client-side, so the quotes would not be in the HTML a crawler reads. This is
 * static markup: no JavaScript, indexable, and styled like the rest of the site.
 *
 * Deliberately no Review or AggregateRating schema — see the note in
 * lib/reviews.ts. Displaying the rating is fine; marking it up is not.
 */
export default function GoogleReviews() {
  if (!hasGoogleReviews()) return null

  return (
    <section className="py-20 lg:py-24 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <EyebrowLabel className="mb-4 block">WHAT CLIENTS SAY</EyebrowLabel>
            <h2 className="font-archivo text-heading-1 font-semibold text-paper tracking-[-0.025em]">
              Reviewed on Google.
            </h2>
          </div>

          {/* The link is the point: the claim is checkable in one click. */}
          <a
            href={googleRating.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 shrink-0 rounded-lg border border-paper/[0.12] bg-paper/[0.03] px-5 py-3 transition-colors duration-200 hover:border-signal/40 hover:bg-paper/[0.06]"
          >
            <span className="font-archivo font-light text-paper text-[30px] leading-none tracking-[-0.02em]">
              {googleRating.score}
            </span>
            <span aria-hidden className="text-signal text-[15px] leading-none tracking-[0.1em]">
              ★★★★★
            </span>
            <span className="font-jetbrains text-xs text-paper/45 uppercase tracking-eyebrow group-hover:text-signal transition-colors duration-200">
              {googleRating.count} Google reviews →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {googleReviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col h-full rounded-xl border border-paper/[0.10] bg-paper/[0.03] p-6 m-0"
            >
              <blockquote className="font-barlow text-body text-paper/80 leading-[28px] m-0">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              {/* mt-auto pins the attribution to the bottom of the card, so the
                  three names line up across quotes of different lengths. */}
              <figcaption className="mt-auto pt-5 border-t border-paper/[0.08]">
                <span className="font-archivo font-medium text-paper text-[15px] block">
                  {review.name}
                </span>
                {/* One line either way, so every caption is the same height and
                    the three dividers align. The section heading already says
                    these are Google reviews, so the suffix was redundant. */}
                <span className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow mt-1 block">
                  {review.credential ?? 'Google review'}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
