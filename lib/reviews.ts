/**
 * Google reviews — the three with substance, quoted from the Business Profile.
 *
 * Separate from lib/clients.ts on purpose. That file holds named client
 * references with a role and a company, which is what HANDOVER.md request 01
 * asks for and which these are not: a Google review gives you a display name
 * and nothing else. Inventing a job title to fill that line would be worse than
 * leaving it empty, so these live here and ClientProof stays as it is, still
 * waiting for the real thing.
 *
 * There are ten reviews, all five-star, all left within the same month. Six are
 * warm but non-specific — "a great time working with these gentlemen",
 * "Exceptional team", "Excellent service and professional team" — the kind
 * HANDOVER.md request 01 explicitly calls not useful. One is anonymous and one
 * has no text. Three say something concrete, and those are the three below.
 *
 * Each quote is verbatim. Where a review ran on past its useful sentence the
 * quote stops early rather than being reworded, and `trimmedFrom` records what
 * the reviewer actually wrote so the edit is auditable:
 *
 *   - Alex K: dropped a trailing "Highly recommended!!"
 *   - Abdul Sami: dropped a leading "Absolutely outstanding work!" and a
 *     trailing "I loved working with them."
 *   - Sami Khouri: one complete clause taken from the middle of a longer
 *     review, which also avoids reproducing a typo in the surrounding sentence
 *     ("and our company and after reaching out too many different companies").
 *
 * Nothing here is marked up as Review or AggregateRating schema, and it must
 * not be. Reviews of your own business gathered from a third-party surface are
 * self-serving review markup: against Google's structured data policy and a
 * manual-action risk. The rating is displayed as content and linked to the
 * source instead, which is verifiable by anyone who clicks it.
 */

export type GoogleReview = {
  /** Verbatim, save for the trimming recorded in `trimmedFrom`. */
  quote: string
  /** Display name exactly as it appears on the review. */
  name: string
  /** Reviewer standing on Google, where it adds weight. Optional. */
  credential?: string
  /** What the reviewer actually wrote, when the quote above is a subset. */
  trimmedFrom?: string
}

/** Live figures from the Business Profile. Update when they move. */
export const googleRating = {
  score: '5.0',
  count: 10,
  /** The place listing itself — the proof is that anyone can go and check. */
  url: 'https://www.google.com/maps/place/Compass+IT+Solutions/@25.2896241,51.5431226,16z/data=!4m6!3m5!1s0x3e45c5fbdbcc7b3f:0x6efd0a359a47c968!8m2!3d25.2896241!4d51.5431226!16s%2Fg%2F11zbrn2b92',
}

export const googleReviews: GoogleReview[] = [
  {
    quote:
      'Redesigned our entire security infrastructure very promptly and professionally as per our requirements.',
    name: 'Alex K',
    credential: 'Local Guide · 56 reviews',
    trimmedFrom:
      'Redesigned our entire security infrastructure very promptly and professionally as per our requirements. Highly recommended!!',
  },
  {
    quote: 'Compass was the only one that could assist us in the right direction.',
    name: 'Sami Khouri',
    credential: 'Local Guide · 20 reviews',
    trimmedFrom:
      'Compass IT solutions handled everything that we needed! Compass was extremely easy to work with, communication was on point, and the service was even better. We were having some difficulties and our company and after reaching out too many different companies Compass was the only one that could assist us in the right direction. Thank you again.',
  },
  {
    quote:
      'The team provided exceptional support, and the website was delivered with a fantastic design and impressive performance scores.',
    name: 'Abdul Sami',
    trimmedFrom:
      'Absolutely outstanding work! The team provided exceptional support, and the website was delivered with a fantastic design and impressive performance scores. I loved working with them.',
  },
]

export const hasGoogleReviews = () => googleReviews.length > 0
