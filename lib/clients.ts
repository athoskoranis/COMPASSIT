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

// Marks are colour PNGs with transparency at 128px tall, from the originals on
// compass-arabia.com, the group's surveying company, whose client roster these
// come from. White backgrounds were knocked out and dark pixels lifted (blacks
// and greys to light grey, saturated colours to mid-lightness) so every mark
// reads on Ink without losing its brand colour. The section eyebrow says "Clients & Affiliates", which is the accurate
// claim at group level. Alt text is the company name as it should be read.
export const clientLogos: ClientLogo[] = [
  { name: 'Qatar Airways', src: '/clients/qatar-airways.png' },
  { name: 'QatarEnergy', src: '/clients/qatar-energy.png' },
  { name: 'Qatar University', src: '/clients/qatar-university.png' },
  { name: 'ASTAD', src: '/clients/astad.png' },
  { name: 'Midmac Contracting', src: '/clients/midmac.png' },
  { name: 'Khatib & Alami', src: '/clients/khatib-alami.png' },
  { name: 'Consolidated Contractors Company', src: '/clients/ccc.png' },
  { name: 'Acciona', src: '/clients/acciona.png' },
  { name: 'Bilfinger', src: '/clients/bilfinger.png' },
  { name: 'Meinhardt', src: '/clients/meinhardt.png' },
  { name: 'Artelia', src: '/clients/artelia.png' },
  { name: 'RSM', src: '/clients/rsm.png' },
  { name: 'Al Faisal Holding', src: '/clients/al-faisal-holding.png' },
  { name: 'Alghanim International', src: '/clients/alghanim-international.png' },
  { name: 'Al Balagh Trading & Contracting', src: '/clients/al-balagh.png' },
  { name: 'Qatar Primary Materials Company', src: '/clients/qpmc.png' },
  { name: 'Al Khalij Cement Company', src: '/clients/al-khalij-cement.png' },
  { name: 'Mekdam Holding Group', src: '/clients/mekdam-holding.png' },
  { name: 'Bin Arbaid Holding', src: '/clients/bin-arbaid-holding.png' },
  { name: 'Black Cat Engineering & Construction', src: '/clients/black-cat-engineering.png' },
]

export const references: ClientReference[] = []

export const hasClientProof = () => clientLogos.length > 0 || references.length > 0
