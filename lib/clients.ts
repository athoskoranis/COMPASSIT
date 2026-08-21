/**
 * Client proof — logos and named references.
 *
 * Both arrays are intentionally empty. The site has never carried a client name,
 * logo or quote; "20+ clients served" in the stats bar is the only social proof
 * anywhere on it. This is the data those assets go into.
 *
 * Nothing renders while these are empty. ClientProof returns null, so the home
 * page is unchanged until real assets arrive — no placeholder logos, no invented
 * quotes, nothing that would put fabricated social proof on a live site.
 *
 * See HANDOVER.md, request 01, for what to collect and the file specs.
 *
 * When the assets land:
 *   1. drop the SVGs into /public/clients/
 *   2. fill `clientLogos` below
 *   3. fill `references` with anything you have written permission to quote
 *   4. in app/page.tsx, swap <BrandPillars /> for <ClientProof /> — the section
 *      appears on its own once either array is non-empty
 */

export type ClientLogo = {
  /** Company name. Used as the img alt text, so write it as it should be read. */
  name: string
  /** Path under /public — e.g. '/clients/acme.svg' */
  src: string
}

export type ClientReference = {
  /** One sentence, in the client's words, about a specific outcome. */
  quote: string
  name: string
  role: string
  company: string
}

export const clientLogos: ClientLogo[] = []

export const references: ClientReference[] = []

export const hasClientProof = () => clientLogos.length > 0 || references.length > 0
