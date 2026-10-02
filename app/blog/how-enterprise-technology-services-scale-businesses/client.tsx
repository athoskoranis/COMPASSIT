'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_ONE = '/images/blog/how-enterprise-technology-services-scale-businesses-1.jpg'
const IMG_TWO = '/images/blog/how-enterprise-technology-services-scale-businesses-2.jpg'

const toc = [
  { label: 'What enterprise technology services actually include', id: 'what-it-includes' },
  { label: 'Enterprise application integration: connecting what you already run', id: 'integration' },
  { label: 'Enterprise application development: when off-the-shelf stops fitting', id: 'custom-apps' },
  { label: 'Enterprise architecture consulting: decisions that keep growth affordable', id: 'architecture' },
]

const faqs = [
  {
    q: 'What are enterprise technology services?',
    a: 'They are the services that connect, build and structure the systems a larger business runs on: application integration, custom application development, architecture consulting and the managed operations that keep them running. The aim is to remove manual effort and technical limits that slow growth.',
  },
  {
    q: 'What is enterprise application integration?',
    a: 'It is the work of making separate business systems such as ERP, CRM, HR and finance exchange data reliably. A central integration layer or well-designed APIs usually works better than many direct connections, because each new system links to one place instead of to every other system.',
  },
  {
    q: 'When should a company build custom enterprise applications instead of buying software?',
    a: 'Build when a process is central to how you compete and no product handles it without heavy compromise. Buy for commodity functions such as payroll or basic accounting. A good partner will tell you which is which, even when the answer is to buy.',
  },
  {
    q: 'Where should a Qatar business start with enterprise technology services?',
    a: 'Start with an inventory of the systems you run and the single process that causes the most manual work or delay. Fix that with a small, measurable change, then use the evidence to decide the next step. A short assessment is usually enough to identify the right starting point.',
  },
]

export default function EnterpriseTechPostClient() {
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
            How Enterprise Technology Services Scale Businesses?
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
            Growth rarely breaks a business all at once. It shows up as small frictions: a second office whose systems
            don&apos;t talk to the first, a finance team re-keying data from the sales platform, a new service line that
            needs its own tooling. In Qatar and across the GCC, where companies are expanding into new sectors and
            neighbouring markets, those frictions arrive quickly. Enterprise technology services exist to deal with
            them before they become the thing that limits growth.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The term is broad, so this article is specific about what it covers and where each part earns its place.
            The short version: connect what you have, build only what you must, and decide the foundations on purpose.
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
            id="what-it-includes"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Enterprise Technology Services Actually Include
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Enterprise technology services is a wide label, so it helps to break it into the parts that matter for
            growth. There are four: integration, which connects the systems you already run; application development,
            which builds software where nothing off the shelf fits; architecture consulting, which decides how the
            pieces fit together over the next several years; and the managed operations that keep it all running. A
            business rarely needs all four at once, but it usually needs to know which one is its bottleneck.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The mistake we see most often is buying in the wrong order. A company commissions a new application before
            anyone has mapped how data moves between its existing systems, and the new tool becomes one more island.
            Starting with an honest inventory of what you run, who depends on it, and where information gets copied by
            hand is dull work. It also decides whether the rest of the spend pays off.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ONE}
                alt="IT team mapping business systems on a whiteboard during a planning session"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Scaling starts with an honest inventory of the systems you run and how data moves between them.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="integration"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Enterprise Application Integration: Connecting What You Already Run
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most growing businesses in Qatar are not starting from a blank page. They have an ERP, a CRM, an HR system,
            a finance package, and often a few industry-specific tools bought at different times by different people.
            Enterprise application integration is the work of making those systems exchange data reliably, so a signed
            contract in one place creates the right records in the others without anyone retyping it.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The approach matters more than the product. Point-to-point connections are quick to build and painful to
            maintain, because every new system multiplies the number of links to look after. A central integration
            layer, whether that is an integration platform or a well-designed set of APIs, keeps each system talking to
            one place instead of to every other system.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            When you evaluate enterprise application integration software, ask how it handles failures, who gets alerted
            when a message does not arrive, and how easily you can replace one connected system later. Connected data
            also ends the argument over whose spreadsheet is right, which matters to a business adding branches or
            entities across the GCC.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="custom-apps"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Enterprise Application Development: When Off-the-Shelf Stops Fitting
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Packaged software covers the common cases well. Where it stops fitting is usually in the processes that make
            your business different: an approval chain specific to your sector, a customer onboarding flow shaped by
            local regulation, a field operation with its own scheduling rules. Forcing those into a generic product
            leads to workarounds, and workarounds are where errors and delays accumulate.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Enterprise application development makes sense when a process is central to how you compete and no product
            handles it without heavy compromise. It makes less sense for commodity functions like payroll or basic
            accounting, where buying is almost always cheaper than building. A good partner will tell you which side of
            that line each requirement falls on, even when the honest answer is to buy.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Custom does not have to mean starting from nothing. Well-run projects build on existing components, connect
            to the integration layer described above, and ship in small releases that users can try early. Arabic and
            English support, local date and currency handling, and alignment with Qatar&apos;s data protection
            requirements belong in the first specification, not in a retrofit.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TWO}
                alt="Developers reviewing an enterprise application design on a shared screen"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Custom software earns its cost where a process is central to how the business competes.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="architecture"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Enterprise Architecture Consulting: Decisions That Keep Growth Affordable
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Architecture is the set of decisions that are expensive to reverse: where data lives, how systems
            authenticate users, which parts run in the cloud and which stay on premises, and how you separate one
            business unit from another. Enterprise architecture consulting exists to make those decisions deliberately,
            with the next few years of growth in mind, rather than letting them be made by whichever project happened to
            come first.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            In this region, a few questions come up repeatedly. Where must certain data physically reside, given sector
            rules and the NIA framework? How will a new entity or country be added without rebuilding identity and
            access? What happens to the business if a single system or supplier fails? An architecture review answers
            these on paper, when changing course costs a conversation, instead of after go-live, when it costs a
            project.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Security belongs inside this work, not beside it. Access control, logging and network segmentation are far
            cheaper to design in than to add around a system that is already in use.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Put together, these services scale a business by removing the manual effort that grows in step with
            headcount. Integration cuts re-keying, custom applications encode what makes you different, and
            architecture keeps the foundation from needing a rebuild every time you grow. None of it needs to arrive as
            one large programme. A sensible first step is a short assessment of your current systems and the one
            process that hurts most, followed by a small, measurable change. Evidence from that first change tells you
            where to go next.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Connect what you have, build only what you must, and decide the foundations on purpose.&rdquo;
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
                IT Services: the team behind your IT team
              </Link>
              <Link
                href="/services/ai-workflows"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                AI Workflows: map your first automation
              </Link>
            </div>
          </div>

        </div>
      </article>

      <RelatedReading posts={relatedPosts('how-enterprise-technology-services-scale-businesses')} />
      <ContactCTA />
    </main>
  )
}
