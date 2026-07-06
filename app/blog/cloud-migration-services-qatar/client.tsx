'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_DATACENTER = '/images/blog/blog4-cloud-datacenter.jpg'
const IMG_TEAM = '/images/blog/blog4-cloud-migration-team.jpg'

const toc = [
  { label: 'Why data residency changed the calculation', id: 'data-residency' },
  { label: 'The migration approaches that actually work', id: 'migration-approaches' },
  { label: 'The costs people miss', id: 'hidden-costs' },
  { label: 'A sensible migration sequence', id: 'migration-sequence' },
]

const faqs = [
  {
    q: 'Does Microsoft have a cloud region in Qatar?',
    a: "Yes. Microsoft launched an in-country cloud datacentre region in Qatar in 2022, offering local data residency, lower latency, and compliance support. This removed the main barrier for organisations in finance, healthcare, and government-adjacent sectors that needed to keep sensitive data within Qatar.",
  },
  {
    q: 'What are the three main cloud migration approaches?',
    a: "Rehosting (lift-and-shift) moves an application to the cloud largely as-is — fast, low-risk, right for systems you don't want to touch. Replatforming makes modest changes to use cloud-managed services. Refactoring rebuilds an application to be cloud-native, which costs most up front and pays back only for systems that genuinely need the scalability.",
  },
  {
    q: 'What hidden costs should Qatar businesses watch for in a cloud migration?',
    a: "Data egress charges, software licensing changes, underestimated re-architecting effort, and staff training costs are the most commonly missed items. A good migration plan prices all of these up front, including a few months of running old and new environments in parallel.",
  },
  {
    q: 'What is the safest sequence for a cloud migration?',
    a: "Start with a full inventory of what you run. Classify each workload by data sensitivity and coupling to other systems. Move something low-risk first to prove the process. Then sequence from least to most critical, with a tested rollback option at every stage. Your most important systems should move last.",
  },
]

export default function CloudMigrationPostClient() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link href="/blog" className="font-jetbrains text-xs text-paper/40 hover:text-signal transition-colors tracking-eyebrow uppercase">
                Blog
              </Link>
              <span className="font-jetbrains text-xs text-paper/20">/</span>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">Cloud Solutions</span>
            </nav>

            <EyebrowLabel className="mb-6 block">CLOUD SOLUTIONS</EyebrowLabel>

            <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
              Cloud Migration in Qatar: Data Residency, the Local Region, and Getting It Right
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">July 2026</span>
              <span className="font-jetbrains text-xs text-paper/20">·</span>
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">5 min read</span>
              <span className="font-jetbrains text-xs text-paper/20">·</span>
              <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">Compass ITS</span>
            </div>
          </div>
        </section>

        {/* ── ARTICLE ── */}
        <article className="bg-paper relative z-[1]">
          <div className="max-w-[740px] mx-auto px-6 lg:px-8 py-16 lg:py-24">

            {/* Lead paragraphs */}
            <p className="font-barlow text-body-l text-ink leading-[34px] mb-6">
              A few years ago, the main objection to cloud migration in Qatar was a practical one: the nearest data
              centre region was somewhere else, which meant latency and a real question about where regulated data
              physically lived. That objection has weakened. With an in-country cloud region now operating in Qatar,
              the calculation around cloud migration services Qatar has changed, and a lot of businesses that held back
              are reconsidering.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              That doesn&apos;t make migration simple. It makes it worth doing properly. Here&apos;s what actually
              matters.
            </p>

            {/* Table of contents */}
            <div className="mb-12 p-6 bg-mist rounded-lg" style={{ borderLeft: '3px solid #2BB3E6' }}>
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
              id="data-residency"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Why Data Residency Changed the Calculation
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Microsoft launched a cloud datacentre region in Qatar in 2022, offering in-country data residency
              alongside the usual benefits of lower latency and local compliance support. For organisations in finance,
              healthcare, and government-adjacent sectors, that removed the main obstacle they had been stuck on. The
              question &ldquo;but where does our data actually sit&rdquo; now has a local answer.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              This matters because of how Qatar handles information security. The National Information Assurance
              framework and the country&apos;s data protection rules push organisations to keep tight control over
              sensitive data and to know exactly where it&apos;s processed and stored. A local region lets you adopt
              mainstream cloud services while still satisfying those expectations, instead of choosing between modern
              infrastructure and compliance.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_DATACENTER}
                  alt="Modern data centre server room with rows of equipment racks"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                Qatar&apos;s in-country Azure region means data stays local — satisfying NIA requirements without sacrificing cloud benefits.
              </figcaption>
            </figure>

            {/* ── Section 2 ── */}
            <h2
              id="migration-approaches"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              The Migration Approaches That Actually Work
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Not every system should move the same way. There are three common approaches, and picking the right one
              per workload is most of the skill. Rehosting, often called lift-and-shift, moves an application to the
              cloud largely as-is. It&apos;s fast and low-risk, and it&apos;s the right call for systems you
              don&apos;t want to touch. Replatforming makes modest changes to take advantage of cloud features, such
              as swapping a self-managed database for a managed one. Refactoring rebuilds an application to be
              cloud-native, which costs the most up front and pays back only for systems that genuinely need the
              scalability.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              The mistake we see most often is treating every system as a refactor candidate because it sounds more
              modern. Most businesses get the best return by lift-and-shifting the bulk of their estate and reserving
              the deeper work for the two or three applications where it actually earns its keep.
            </p>

            {/* ── Section 3 ── */}
            <h2
              id="hidden-costs"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              The Costs People Miss
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Cloud bills surprise people, and it&apos;s rarely the headline compute price that does it. Data egress
              charges — the cost of moving data back out of the cloud — catch teams who didn&apos;t map their data
              flows. Software licensing can change in ways that erase the savings if you don&apos;t check it before
              moving. Re-architecting effort gets underestimated. And staff training is almost always left off the
              first budget, even though your team needs new skills to run the environment safely.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              A good migration plan prices all of this up front, including a few months of running old and new in
              parallel. The cheapest-looking quote is often the one that quietly left these out.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_TEAM}
                  alt="IT team mapping a cloud migration roadmap on a whiteboard"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                A realistic migration plan prices egress, licensing, training, and parallel-run costs before the first workload moves.
              </figcaption>
            </figure>

            {/* ── Section 4 ── */}
            <h2
              id="migration-sequence"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              A Sensible Migration Sequence
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Start with a full inventory of what you actually run, because most organisations are surprised by
              what&apos;s on that list. Classify each workload by how sensitive its data is and how tightly it&apos;s
              coupled to other systems. Move something low-risk first — a development environment or an internal tool
              — to prove the process and build the team&apos;s confidence. Then sequence the rest from least to most
              critical, keeping a tested rollback option at every stage. Your most important systems should move last,
              once the process is boring.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              The businesses that regret their migration almost always rushed a critical system early. The ones that
              are happy treated it as a staged programme, not a weekend cutover.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              It&apos;s also worth deciding early what you&apos;re optimising for, because not every migration has the
              same goal. Some businesses move to cut the cost and hassle of running their own hardware. Others move to
              get closer to AI and analytics services that are only practical in the cloud. A few move purely to
              satisfy a residency or resilience requirement. The right architecture looks different in each case, and a
              plan that doesn&apos;t name the goal tends to drift toward whatever the loudest vendor is selling.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              Don&apos;t treat go-live as the finish line either. The first few months after a migration are when cost
              and performance problems surface, and they&apos;re far cheaper to fix while the project team is still
              engaged. Build in a review at thirty and ninety days to right-size what you provisioned. Most
              organisations over-provision at launch and can trim the bill noticeably once they see real usage.
            </p>

            {/* Callout block */}
            <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
              <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
                &ldquo;Data residency and local compliance should be built into the design of a migration — not bolted
                on after the workloads have already moved.&rdquo;
              </p>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
                / cloud solutions practice · compass-its
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
                  href="/services/cloud-solutions"
                  className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
                >
                  Cloud Solutions — plan and run your migration
                </Link>
                <Link
                  href="/services/network-infrastructure"
                  className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
                >
                  Network Infrastructure — the foundation underneath
                </Link>
              </div>
            </div>

          </div>
        </article>

        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
