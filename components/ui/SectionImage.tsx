import Image from 'next/image'

/**
 * A contextual photograph inside a page section.
 *
 * ── What these images are, and what they must never claim ───────────────────
 *
 * Stock photography, licensed from Pexels. They illustrate the subject of a
 * section; they are not photographs of Compass work, Compass staff or a client
 * site, and no caption may imply otherwise. The same rule that keeps
 * ClientProof empty applies here — a photo captioned "structured cabling at a
 * client site" would be a claim about work nobody can point to.
 *
 * Attribution is not required by the Pexels licence, but every file's
 * photographer and source URL are recorded in /public/images/site/credits.json
 * so the provenance of anything on the site can be checked.
 *
 * ── Why these sit below the fold ────────────────────────────────────────────
 *
 * Never `priority`, never in a hero. The site targets Lighthouse 95+ and Core
 * Web Vitals green, and Core Web Vitals is a ranking signal where a decorative
 * photograph is not. An image above the fold becomes the LCP element and puts
 * that target at risk to no SEO gain. Below the fold it lazy-loads and costs
 * nothing until it is nearly in view.
 *
 * The fixed aspect ratio is what keeps CLS at zero: the box is reserved before
 * the file arrives, so nothing moves when it does.
 */

export default function SectionImage({
  src,
  alt,
  aspect = 'aspect-[16/9]',
  className = '',
}: {
  /** Path under /public, e.g. '/images/site/foo.jpg' */
  src: string
  /**
   * Describes what is in the frame, for a reader who cannot see it. Not a
   * place to repeat the page's keywords — Google has been discounting that
   * since long before it could read the picture itself.
   */
  alt: string
  aspect?: string
  className?: string
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-xl border border-paper/[0.10] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
        className="object-cover"
      />
      {/* Ink wash. The photographs are someone else's colour temperature and
          the page is Ink and Signal; without this they sit on the page as
          foreign objects rather than as part of it. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10 mix-blend-multiply"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/25" />
    </div>
  )
}
