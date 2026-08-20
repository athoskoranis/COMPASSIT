import type { Metadata } from 'next'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import Button from '@/components/ui/Button'

// Body copy is the approved 404 line from VOICE.md, verbatim. The spec used to
// give asahli@compass-its.com here while every user-facing surface displayed
// info@compass-its.com; the documents were aligned to the live address, so the
// two now agree and this needs no exception.
//
// "Page not found." is a structural label rather than prose; VOICE.md supplies
// the sentence beneath it, not a heading.
export const metadata: Metadata = {
  title: { absolute: 'Page not found — Compass IT Solutions' },
  robots: { index: false, follow: true },
}

const goingSomewhere = [
  { label: 'Services', href: '/services/it-services' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Who we are', href: '/about' },
]

export default function NotFound() {
  return (
    <main>
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-24 lg:py-32 relative z-10">
          <EyebrowLabel className="mb-6 block">404</EyebrowLabel>

          <h1 className="font-archivo font-light text-paper leading-none tracking-[-0.04em] text-[44px] md:text-[60px] lg:text-[72px] max-w-[600px] mb-8">
            Page not found.
          </h1>

          <p className="font-barlow text-body-l text-paper/60 max-w-[560px] leading-relaxed mb-10">
            This page doesn&apos;t exist. If you followed a link here, let us know:{' '}
            <a
              href="mailto:info@compass-its.com"
              className="text-signal hover:text-paper transition-colors"
            >
              info@compass-its.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="/" variant="primary">Back to the homepage</Button>
            <Button href="/contact" variant="ghost">Get in touch</Button>
          </div>

          {/* A dead end is a crawl dead end too. These keep both readers and
              crawlers moving into the parts of the site that matter. */}
          <div>
            <p className="font-jetbrains text-xs text-paper/30 uppercase tracking-eyebrow mb-5">
              Or try one of these
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {goingSomewhere.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-archivo text-[15px] text-paper/60 hover:text-signal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
