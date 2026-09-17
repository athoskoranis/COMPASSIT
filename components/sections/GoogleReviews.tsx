import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { googleReviews, googleRating, hasGoogleReviews } from '@/lib/reviews'

/**
 * Google reviews, as content rather than a widget.
 *
 * Two columns: a summary panel on the left carrying the rating and the link,
 * and the individual reviews stacked on the right. The summary is the part a
 * skimming visitor takes in — one number, one link — and the quotes are there
 * for whoever wants to read further. The previous three-across row gave every
 * quote equal weight and no single anchor, which buried the rating.
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
 *
 * Two approved departures from DESIGN.md, both requested by the client and
 * logged as Decision 101 in CHANGELOG.md. Do not "correct" them back:
 *
 *   1. Stars are Beacon Amber, which DESIGN.md otherwise reserves for advisories
 *      and time-bound notices and calls never decorative. Gold stars are the
 *      universal shorthand for a rating and cyan ones do not read as one. Beacon
 *      is used rather than Google's own #FBBC05 so the exception stays inside
 *      the six-colour palette.
 *   2. The Google mark is the only off-palette colour on the site. It is
 *      unmodified and used solely to attribute the rating to its source, which
 *      is what Google's brand terms permit it for.
 */
/**
 * The Google "G", unmodified, in its four official colours.
 *
 * Inline rather than a file in /public because it ships in the HTML with no
 * second request for a 20px mark. Decorative — the sentence beside it already
 * says "Google reviews" — so it is hidden from assistive tech rather than
 * read out twice.
 */
function GoogleMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="14"
      height="14"
      aria-hidden
      focusable="false"
      className="shrink-0"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}

export default function GoogleReviews() {
  if (!hasGoogleReviews()) return null

  return (
    <section className="py-20 lg:py-24 relative z-[1] overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-10 items-stretch">
          {/* Summary panel — the rating, and the way out to check it. Stretches
              to the height of the review stack beside it, with the link pinned
              to the base, so the two columns square off rather than leaving a
              ragged gap under the shorter one. */}
          <div className="raised bracketed bg-ink rounded-xl p-8 lg:p-10 flex flex-col">
            <EyebrowLabel className="mb-5 block">WHAT CLIENTS SAY</EyebrowLabel>

            <h2 className="font-archivo text-heading-1 font-semibold text-paper tracking-[-0.025em] mb-8">
              Reviewed on Google.
            </h2>

            <div className="flex items-center gap-4">
              <span className="font-archivo font-light text-paper text-[64px] leading-none tracking-[-0.03em]">
                {googleRating.score}
              </span>
              <span
                aria-hidden
                className="text-beacon text-[19px] leading-none tracking-[0.12em]"
              >
                ★★★★★
              </span>
            </div>

            <p className="flex items-center gap-2.5 font-jetbrains text-xs text-paper/45 uppercase tracking-eyebrow mt-4 m-0">
              <GoogleMark />
              Based on {googleRating.count} Google reviews
            </p>

            {/* Plain anchor rather than <Button>, which wraps next/link and is
                built for internal routes. Same visual treatment as a ghost
                button so it still reads as the section's one action. */}
            <a
              href={googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 lg:mt-auto self-start inline-flex items-center gap-3 leading-none font-archivo text-[15px] font-medium uppercase tracking-cta rounded-xl border border-paper/40 px-7 py-[13px] text-paper transition-all duration-200 hover:border-signal hover:text-signal focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Read our reviews on Google
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* The reviews themselves. */}
          <div className="flex flex-col gap-4">
            {googleReviews.map((review) => (
              <figure
                key={review.name}
                className="rounded-xl border border-paper/[0.10] bg-paper/[0.03] p-6 m-0"
              >
                <div className="flex items-start gap-4">
                  {/* Initial rather than a photo: Google avatars are hotlinked
                      from their CDN and go stale, and we hold no image rights. */}
                  <span
                    aria-hidden
                    className="shrink-0 w-10 h-10 rounded-full bg-paper/[0.08] border border-paper/[0.12] flex items-center justify-center font-archivo font-medium text-paper text-[15px]"
                  >
                    {review.name.charAt(0)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="font-archivo font-medium text-paper text-[15px] block leading-tight">
                          {review.name}
                        </span>
                        <span className="font-jetbrains text-[11px] text-paper/40 uppercase tracking-eyebrow mt-1.5 block">
                          {review.credential ?? 'Google review'}
                        </span>
                      </div>
                      <span
                        aria-hidden
                        className="shrink-0 text-beacon text-[13px] leading-none tracking-[0.12em] mt-1"
                      >
                        ★★★★★
                      </span>
                    </div>

                    <blockquote className="font-barlow text-body text-paper/80 leading-[28px] mt-4 m-0">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
