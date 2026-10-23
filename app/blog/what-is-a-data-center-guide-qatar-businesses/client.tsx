'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_HALL = '/images/blog/what-is-a-data-center-guide-qatar-businesses-1.jpg'
const IMG_RACKS = '/images/blog/what-is-a-data-center-guide-qatar-businesses-2.jpg'

const toc = [
  { label: 'What a data center actually is', id: 'what-it-is' },
  { label: 'What sits inside: data center infrastructure', id: 'infrastructure' },
  { label: 'Data storage and high performance computing', id: 'storage-hpc' },
  { label: 'Data centers in Qatar and the GCC', id: 'qatar-gcc' },
  { label: 'Choosing between on-premises, colocation and cloud', id: 'choosing' },
]

const faqs = [
  {
    q: 'What is a data center?',
    a: 'A data center is a facility that houses the servers, storage and networking equipment an organisation depends on, together with the power, cooling and physical security that keep them running. It can be a purpose-built building, a leased hall with a few racks, or a small server room in an office.',
  },
  {
    q: 'What is the difference between a data center and the cloud?',
    a: 'The cloud is a way of buying computing as a service. It still runs inside data centers owned by a provider. The useful questions are which facility hosts your workloads, in which country, and who controls the data.',
  },
  {
    q: 'Does my Qatar business need high performance computing?',
    a: 'Most businesses do not. High performance computing links many powerful servers to work on one large problem, such as engineering simulation or AI model training. If you need it, confirm early that a facility can supply the extra power and cooling these systems demand.',
  },
  {
    q: 'What should I ask a data center provider in Qatar?',
    a: 'Ask how power and cooling are made redundant, how often failover is tested, which network carriers are present, and which certifications and audits apply to the specific facility you would use. Request the documents instead of relying on a sales summary, and check the data rules for your own sector.',
  },
]

export default function DataCenterPostClient() {
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
            What Is a Data Center? A Guide for Qatar Businesses
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
            Every email you send, every ERP screen your finance team opens and every video call your staff join runs
            on a machine somewhere. A data center is where many of those machines live. For a Qatar business, the
            term comes up in cloud migration plans, disaster recovery reviews, compliance conversations and supplier
            quotes, and it is often used loosely. This guide explains what a data center is, what is inside one, and
            how to decide where your own workloads should run.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            You do not need to become an infrastructure engineer to make a good decision. You need a clear picture of
            the parts and the trade-offs.
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
            id="what-it-is"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What a Data Center Actually Is
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A data center is a facility that houses the computing, storage and networking equipment an organisation
            depends on, along with the power, cooling and physical security that keep that equipment running. It can
            be a purpose-built building operated by a specialist provider, a few racks in a leased hall, or a small
            server room in your own office. The size varies enormously. The job is the same: keep systems available,
            safe and fast.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The word is often confused with the cloud. The cloud is a way of buying computing as a service, but it
            still runs in data centers owned by someone. When a provider says your workloads run in the cloud, the
            useful follow-up question is which facility, in which country, and under whose control.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_HALL}
                alt="Rows of server racks inside a data center hall"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              A data center holds the compute, storage and networking that business systems depend on.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="infrastructure"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Sits Inside: Data Center Infrastructure
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Data center infrastructure falls into four layers. Compute is the servers that run applications. Storage
            is the arrays and drives that hold data. Networking is the switches, routers and firewalls that connect
            everything internally and to the outside world. Facilities is everything that keeps the first three
            alive: power feeds, backup generators, uninterruptible power supplies, cooling and fire suppression.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Facilities matter more in this region than many buyers expect. Qatar&apos;s summer heat puts constant
            pressure on cooling, and a cooling failure is one of the quickest ways to take servers offline. When you
            assess a facility, ask how power and cooling are made redundant, what happens during a utility outage,
            and how often failover is actually tested. A brochure that lists redundancy is not the same as evidence
            that it works.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="storage-hpc"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Data Storage and High Performance Computing
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Data storage is the part most businesses feel first, because it affects speed, cost and recovery. Fast
            flash storage suits databases and active applications. Cheaper, slower tiers suit archives and backups. A
            sensible design places data on the tier that matches how often it is used, and keeps a tested backup in a
            separate location from the primary copy.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            High performance computing, often shortened to HPC, is a different kind of workload. It links many
            powerful servers to work on one large problem at once, such as engineering simulation, seismic analysis,
            financial modelling or training AI models. These systems draw far more power and produce far more heat
            than ordinary servers, so they need facilities designed for that density. Most businesses do not need
            HPC. If yours does, check early whether a facility can supply the power and cooling, because retrofitting
            is slow and costly.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_RACKS}
                alt="Server racks with network cabling in a data center aisle"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Storage tiers and dense compute clusters place very different demands on power and cooling.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="qatar-gcc"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Data Centers in Qatar and the GCC
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Where your data sits is a business decision as much as a technical one. Qatar&apos;s data protection law
            and the NIA framework place expectations on how certain categories of information are handled, and some
            regulated sectors have stricter rules about keeping data inside the country. Hosting locally can also
            reduce latency for users in Doha, which helps interactive applications and voice and video traffic.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Searches for a data center in Qatar or the Qatar data hub usually mean one of two things: where to host
            workloads inside the country, or how a facility connects to regional and international networks. Both
            are fair questions. Ask any provider which network carriers are present, how the facility connects to
            the wider GCC, and which certifications and audits apply to the specific site you would use. Request the
            documents rather than relying on a sales summary, and check the rules for your own sector before
            assuming any location is acceptable.
          </p>

          {/* ── Section 5 ── */}
          <h2
            id="choosing"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Choosing Between On-Premises, Colocation and Cloud
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            There are three common models. On-premises means you run your own server room. You get maximum control,
            but you carry the power, cooling, security and staffing. Colocation means you own the hardware but place
            it in a provider&apos;s facility, which gives you professional-grade power and cooling without building
            it yourself. Cloud means you rent capacity and the provider runs the hardware.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most Qatar businesses end up with a mix. Steady, predictable systems can sit well on colocated or private
            infrastructure, while variable workloads suit the cloud. Start by listing your systems, how critical each
            one is, what data it holds and which rules apply. Then match each to a model. Doing this before you talk
            to suppliers keeps the conversation about your needs rather than their products.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Whatever you choose, plan for failure. Know your recovery time targets, test your backups and write down
            who does what during an outage.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;A data center is only as dependable as the plan around it.&rdquo;
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

      <RelatedReading posts={relatedPosts('what-is-a-data-center-guide-qatar-businesses')} />
      <ContactCTA />
    </main>
  )
}
