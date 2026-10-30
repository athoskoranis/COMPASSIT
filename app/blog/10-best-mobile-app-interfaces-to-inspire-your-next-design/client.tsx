'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_ONE = '/images/blog/10-best-mobile-app-interfaces-to-inspire-your-next-design-1.jpg'
const IMG_TWO = '/images/blog/10-best-mobile-app-interfaces-to-inspire-your-next-design-2.jpg'

const toc = [
  { label: 'What a good mobile app interface does', id: 'good-interface' },
  { label: 'Patterns 1 to 5: first run and everyday use', id: 'first-five' },
  { label: 'Patterns 6 to 10: trust, language and access', id: 'last-five' },
  { label: 'Turning inspiration into a real design', id: 'from-inspiration' },
]

const faqs = [
  {
    q: 'What makes a mobile app interface good?',
    a: "A good interface lets a new user finish the main task quickly without instructions. It shows one clear primary action per screen, uses familiar patterns for navigation and input, gives feedback after every tap, and stays readable and usable for people with different abilities and in different languages.",
  },
  {
    q: 'Why does Arabic and English support matter for phone apps in the GCC?',
    a: "Many customers in Qatar and the wider GCC move between Arabic and English. Arabic reads right to left, so layouts, icons, and animations need to mirror properly. Building bilingual support in from the start is far cheaper than retrofitting it after launch.",
  },
  {
    q: 'How should I use interface inspiration without copying another app?',
    a: "Borrow the underlying pattern, not the visual identity. Study why a flow works, then test it with your own users and your own content. Patterns like bottom tab bars or step-by-step onboarding are shared conventions, but your colours, wording, and structure should reflect your brand and your audience.",
  },
  {
    q: 'What should I look for in a mobile app development company in the Gulf?',
    a: "Look for a team that starts with your users and processes, shows working prototypes early, handles Arabic and English layouts properly, and plans for security, data protection, and ongoing support after launch. Ask how they test on real devices and how they handle changes once users give feedback.",
  },
]

export default function MobileAppInterfacesPostClient() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="font-jetbrains text-xs text-paper/50 hover:text-signal transition-colors tracking-eyebrow uppercase">
              Blog
            </Link>
            <span className="font-jetbrains text-xs text-paper/20">/</span>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">IT Services</span>
          </nav>

          <EyebrowLabel className="mb-6 block">IT SERVICES</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            10 Best Mobile App Interfaces to Inspire Your Next Design
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">October 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">6 min read</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">By Adam Sahli</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE ── */}
      <article className="bg-paper relative z-[1]">
        <div className="max-w-[740px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

          {/* Lead paragraphs */}
          <p className="font-barlow text-body-l text-ink leading-[34px] mb-6">
            For most users, the interface is the product. Nobody sees your architecture or your back end. They see
            the screens, and within a few seconds they decide whether the app respects their time. For businesses in
            Qatar and across the GCC, where customers move between Arabic and English and expect banking, delivery,
            and government services on their phones, that first impression carries real weight.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            This is not a ranking of famous apps. It describes ten mobile app interfaces patterns that consistently
            work, so you can brief a designer or a mobile app development company with something concrete instead of
            a vague wish for something that looks modern.
          </p>

          {/* Table of contents */}
          <div className="mb-12 p-6 bg-mist rounded-lg bracketed bracketed-light">
            <p className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase mb-4">In this article</p>
            <ol className="space-y-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="flex gap-4 font-barlow text-body text-ink/70 hover:text-signal transition-colors leading-snug"
                  >
                    <span className="font-jetbrains text-xs text-signal/50 mt-[4px] shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── Section 1 ── */}
          <h2
            id="good-interface"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What a Good Mobile App Interface Does
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Before the patterns, a working definition. A good interface lets a new user finish the main task without
            reading instructions. It puts one clear action on each screen, uses conventions people already know, and
            confirms every tap with some kind of feedback. It also stays usable when the user is one-handed, in bright
            sunlight, or reading in their second language.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Phone apps compete with the rest of the home screen. Users compare your booking flow with the best one
            they have used anywhere, not with your direct competitor. That is why studying strong patterns is worth
            the time, whichever market you build for.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ONE}
                alt="Designer reviewing several mobile app screens side by side on a desk"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Comparing screens side by side shows which patterns earn their place and which are decoration.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="first-five"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Patterns 1 to 5: First Run and Everyday Use
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>1. Focused onboarding.</strong> The best first-run screens ask for as little as possible. Two or
            three short steps explain the value, request only the permissions the app needs right now, and let the
            user skip ahead. Asking for notifications, location, and contacts all at once is a fast way to lose
            someone.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>2. Bottom tab bar.</strong> Phones keep getting taller, which puts the thumb zone at the bottom
            of the screen. A bar of three to five labelled destinations keeps the main sections within easy reach and
            tells users where they are. Labels beat icons alone, because icons are interpreted differently by
            different people.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>3. A single-purpose home screen.</strong> Good home screens answer one question: what does this
            person most likely want to do now? A delivery app shows the active order first. A banking app shows
            balances and the two or three actions people repeat daily. Everything else is one tap further away.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>4. Search-first discovery.</strong> When the catalogue is large, a prominent search field with
            recent queries and tolerant matching does more than any amount of menu design. Handling misspellings and
            transliterated Arabic names is a detail that users notice immediately.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            <strong>5. Card-based feeds.</strong> Cards group an image, a title, and one action into a unit that scans
            quickly and adapts to different screen sizes. They work well for listings, offers, and updates, provided
            each card carries one clear action and the spacing gives the eye somewhere to rest.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TWO}
                alt="Person using a phone app with a clean card-based layout"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Clear cards and a reachable tab bar keep everyday tasks within a thumb&apos;s reach.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="last-five"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Patterns 6 to 10: Trust, Language and Access
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>6. Low-friction checkout.</strong> Payment screens should show the total early, remember saved
            details, and avoid surprise steps. Each extra field is a place for someone to give up, so remove every
            field you can fill in for them.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>7. True bilingual layouts.</strong> This one matters most in our region. A proper Arabic
            interface is not a translated copy of the English one. Layouts mirror right to left, directional icons
            such as arrows and back buttons flip, numerals and mixed-language text are handled deliberately, and
            fonts are chosen for Arabic, not just tolerated. Teams that plan for this at the start avoid a painful
            rebuild later.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>8. Visible status tracking.</strong> Orders, applications, tickets, and deliveries all benefit
            from a simple progress view that shows what has happened and what comes next. It reduces support
            requests because users can answer their own question.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            <strong>9. Biometric sign-in with a sensible fallback.</strong> Fingerprint and face unlock make returning
            to an app quick, and they pair well with sensitive actions such as confirming a payment. Always offer a
            fallback, and explain clearly what is being stored and why. Trust is part of the interface.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            <strong>10. Accessible type, contrast, and dark mode.</strong> Readable text sizes, strong contrast, tap
            targets large enough for real fingers, and a dark theme that respects the system setting are no longer
            extras. They help everyone, including users in low light or with limited vision, and they signal that the
            team cared about the details.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="from-inspiration"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Turning Inspiration Into a Real Design
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Collecting screenshots is the easy part. The useful step is asking why a pattern works and whether the
            same reason applies to your users. A tab bar that suits a retail app may be wrong for a field-service
            tool used with gloves on. Borrow the principle, then test it with your own customers and your own
            content.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Prototype early. A clickable mock-up tested with five or six real users will surface problems that no
            amount of internal debate finds. It is also the cheapest moment to change your mind, long before anyone
            writes production code.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            When you choose a partner, the same logic applies. Whether you are comparing a mobile app development
            company in UAE, a Dubai studio, or a team closer to home in Doha, ask to see working prototypes, ask how
            they handle Arabic and English layouts, and ask what happens after launch. Interfaces need maintenance as
            operating systems change and users tell you what they actually want. Good mobile app development treats
            launch as the start of the work.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Borrow the principle, not the paint. Study why a pattern works, then test it with your own
              users.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / it services practice · compass-its
            </span>
          </div>

          {/* FAQ */}
          <div className="border-t border-ink/10 pt-12 mb-12">
            <h3 className="font-archivo font-medium text-ink text-[20px] tracking-[-0.02em] mb-8">
              Common questions
            </h3>
            <div className="space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <h4 className="font-archivo font-medium text-ink text-[17px] mb-3">{q}</h4>
                  <p className="font-barlow text-body text-ink/65 leading-[28px]">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related services */}
          <div className="p-6 bg-mist rounded-lg">
            <p className="font-jetbrains text-xs text-ink/40 tracking-eyebrow uppercase mb-4">Related services</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/it-services"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                IT Services — the team behind your IT team
              </Link>
              <Link
                href="/services/ai-workflows"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                AI Workflows — map your first automation
              </Link>
            </div>
          </div>

        </div>
      </article>

      <RelatedReading posts={relatedPosts('10-best-mobile-app-interfaces-to-inspire-your-next-design')} />
      <ContactCTA />
    </main>
  )
}
