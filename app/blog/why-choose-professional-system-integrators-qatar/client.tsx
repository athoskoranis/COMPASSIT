'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_NETWORK = '/images/blog/why-choose-professional-system-integrators-qatar-1.jpg'
const IMG_SECURITY = '/images/blog/why-choose-professional-system-integrators-qatar-2.jpg'

const toc = [
  { label: 'What a system integrator actually does', id: 'what-integrators-do' },
  { label: 'Security integration: access control and network access control', id: 'security-integration' },
  { label: 'Cisco and multi-vendor networks', id: 'cisco-multi-vendor' },
  { label: 'What to ask before you sign', id: 'what-to-ask' },
]

const faqs = [
  {
    q: 'What does a system integrator do?',
    a: 'A system integrator designs, installs, configures and connects separate technology products so they work as one environment. In practice that means networks, security systems, access control, servers and software that share data and are managed together, with one party accountable for the result.',
  },
  {
    q: 'Why use security system integrators instead of buying products directly?',
    a: 'Security products only protect you when they are configured to work together. An integrator connects physical access control, cameras, network security and identity systems, tests the connections, and documents the result. Buying separately often leaves gaps between the products that nobody owns.',
  },
  {
    q: 'What is the difference between an access control system and network access control?',
    a: 'An access control system governs who can enter physical spaces such as offices, server rooms and floors. Network access control governs which users and devices can connect to your network and what they can reach once connected. They solve different problems and work best when they share the same identity data.',
  },
  {
    q: 'What should I ask a system integrator in Qatar before hiring them?',
    a: 'Ask who is accountable when two products disagree, what documentation you receive at handover, how they test before go-live, what support looks like afterwards, and how their design handles Qatar data protection and NIA framework requirements. Vague answers to any of these are a warning sign.',
  },
]

export default function SystemIntegratorsPostClient() {
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
            Why Choose Professional System Integrators in Qatar?
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
            Most businesses in Qatar do not have a shortage of technology. They have switches from one supplier,
            cameras from another, a door system installed by a third, and a firewall nobody has looked at since the
            day it went in. Each product works. Together, they leave gaps. That is the problem professional system
            integrators exist to solve, and it is why the choice of integrator matters more than the choice of any
            single product.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Whether you are fitting out a new office in Lusail, upgrading a site in an industrial area, or tidying up
            years of piecemeal purchases in Doha, the question is the same: who is responsible for making all of this
            behave as one system?
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
            id="what-integrators-do"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What a System Integrator Actually Does
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A reseller sells you a product. A system integrator takes responsibility for the outcome. The work
            starts before anything is bought: understanding how your business operates, which sites and people are
            involved, and what has to keep running while changes happen. From there the integrator designs the
            environment, selects products that fit it, installs and configures them, tests the connections between
            them, and documents what was built.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            The value is in the joins. A network that carries camera traffic, a door system that reads from your
            staff directory, a firewall policy that matches how your teams really work: none of these come from a
            product box. They come from someone who has done the integration before and knows where it tends to go
            wrong. When something fails at 2am, you want one party who understands the whole chain, not three
            vendors each pointing at the other two.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_NETWORK}
                alt="Network equipment in a server room being configured by an engineer"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              The value of integration is in the joins between systems, not in any single product.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="security-integration"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Security Integration: Access Control and Network Access Control
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Security is where poor integration costs the most. Two terms are often confused here. An access control
            system decides who can walk into a building, a floor or a server room. Network access control decides
            which people and devices can join your network, and what they can reach once they are on it. One protects
            physical space, the other protects digital space, and an attacker who defeats either one may reach the
            same assets.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Good security system integrators connect the two. When an employee leaves, their badge and their network
            account should be disabled from the same decision, not by two teams on two different days. When a visitor
            plugs a laptop into a meeting room port, network access control should treat it as an unknown device and
            place it on a restricted segment, rather than trusting it because it is inside the building.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            This is also where cybersecurity system integrators earn their keep. Network security is not a single
            appliance. It is segmentation, firewall rules, identity, logging and monitoring that agree with each
            other. For organisations in Qatar, the design also has to respect local data protection law and the NIA
            framework, which is far easier to plan for at the start than to retrofit after an audit finding.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_SECURITY}
                alt="Secured entrance with an electronic access control reader"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Physical access control and network access control work best when they share the same identity data.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="cisco-multi-vendor"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Cisco and Multi-Vendor Networks
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Many Qatar enterprises run their core network on Cisco equipment, and searches for a system Cisco
            integrator are common for that reason. Cisco gear is widely deployed and well documented, but owning it
            does not mean it is configured well. Switching, wireless, firewalls and network access control policy
            all need to be designed together, and the default settings rarely match what a given business needs.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Real environments are rarely single-vendor. You may have Cisco switching, a different firewall, cameras
            from a security supplier and door controllers from yet another. A capable integrator is comfortable
            across vendors and recommends what fits your requirements rather than what is easiest to sell. Be
            cautious of any integrator whose design always seems to land on one brand. The right question is not
            which logo is on the box, but whether the pieces have been tested together.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="what-to-ask"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What to Ask Before You Sign
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Choosing among the top system integrators in Qatar comes down to a handful of practical questions. The
            answers tell you more than a brochure will.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Who is accountable when two products disagree? The answer should be one named party. What will you
            receive at handover? Expect network diagrams, configuration records, access lists and admin procedures,
            not just a working system and a invoice. How is the work tested before go-live, and how is it tested
            again after changes? What does support look like once the project team leaves, including who answers the
            phone and how quickly?
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Ask also about the boring parts. How will the integrator handle your existing equipment rather than
            replacing everything? How will they keep your operations running during cutover? How does their design
            deal with Qatar data protection requirements and the NIA framework? An integrator who has worked in the
            region will answer these without hesitation. One who has not will change the subject to product features.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Finally, look for an integrator who will tell you what not to buy. The best advice often removes a line
            from the quote. A partner who treats your budget as something to protect, and who documents everything
            so you are never locked into them, is usually the one who will still be useful in five years.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;The value of an integrator is in the joins: the places where one product ends and another begins.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / systems practice · compass-its
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
                href="/services/network-infrastructure"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                Network Infrastructure — design and build
              </Link>
              <Link
                href="/services/cybersecurity"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                Cybersecurity — protect what you have built
              </Link>
            </div>
          </div>

        </div>
      </article>

      <RelatedReading posts={relatedPosts('why-choose-professional-system-integrators-qatar')} />
      <ContactCTA />
    </main>
  )
}
