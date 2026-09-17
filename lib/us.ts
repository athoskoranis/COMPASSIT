/**
 * The US practice — route detection and the Oregon entity's identity.
 *
 * The identity fields below are intentionally empty. The US entity does not
 * exist yet: the name, the Oregon address and the phone number are blocked on
 * entity formation and a name conflict check, and nothing in this repository
 * can invent them.
 *
 * Nothing renders while they are empty. `app/us/layout.tsx` emits no structured
 * data and the footer drops its contact block rather than falling back to the
 * Doha one. That mirrors `lib/clients.ts`, and for the same reason: publishing a
 * placeholder address in schema is worse than publishing none, because Google
 * reads it as a real business location and the site starts contradicting itself
 * the way it did before Decision 098.
 *
 * When the entity exists:
 *   1. fill `usIdentity` below
 *   2. the `#us-practice` node and the US footer appear on their own
 *   3. add the /us routes to `lib/sitemap-entries.ts` and bump CONTENT_UPDATED
 *
 * See `compass-its-us-architecture-addendum.md` and the service handover's open
 * items 2, 3 and 5.
 */

/** Every route under the US practice sits beneath this prefix. */
export const US_PREFIX = '/us'

/** True for /us and anything below it. Not true for /uskit or similar. */
export const isUsRoute = (path: string) =>
  path === US_PREFIX || path.startsWith(`${US_PREFIX}/`)

export type UsIdentity = {
  /** The registered Oregon entity name, once formed. */
  legalName: string
  streetAddress: string
  addressLocality: string
  /** Two-letter state code, e.g. 'OR'. */
  addressRegion: string
  postalCode: string
  /** E.164, e.g. '+1-503-555-0100'. */
  telephone: string
  email: string
}

export const usIdentity: UsIdentity = {
  legalName: '',
  streetAddress: '',
  addressLocality: '',
  addressRegion: '',
  postalCode: '',
  telephone: '',
  email: '',
}

/**
 * Every field has to be present before anything ships. A partial address is
 * still a wrong address in structured data, so this is deliberately all-or-
 * nothing rather than a per-field check.
 */
export const hasUsIdentity = () =>
  Object.values(usIdentity).every((value) => value.trim().length > 0)
