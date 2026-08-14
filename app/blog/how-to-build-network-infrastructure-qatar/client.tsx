'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_COMMS_ROOM = '/images/blog/how-to-build-network-infrastructure-qatar-1.jpg'
const IMG_SITE_SURVEY = '/images/blog/how-to-build-network-infrastructure-qatar-2.jpg'

const toc = [
  { label: 'What network infrastructure actually means', id: 'what-it-means' },
  { label: 'Choosing the right network infrastructure vendors', id: 'choosing-vendors' },
  { label: 'Building in network infrastructure security from day one', id: 'security-from-day-one' },
  { label: 'Network infrastructure solutions that scale', id: 'solutions-that-scale' },
]

const faqs = [
  {
    q: 'What is network infrastructure and what does it include?',
    a: "Network infrastructure covers the routers, switches, structured cabling, wireless access points and firewalls that connect every device, application and system in a building. It also includes the physical spaces, comms cabinets and cooling, that keep that equipment running, and the design decisions that determine how much traffic it can handle.",
  },
  {
    q: 'How do I choose network infrastructure vendors in Qatar?',
    a: "Look past the sticker price on the hardware. Check that the vendor has genuine local or regional support, spare parts availability, and a response time you can live with if something fails. Favor equipment that works well with what you already have over locking every layer to a single brand for a short-term discount.",
  },
  {
    q: 'How does network infrastructure security fit into a build project?',
    a: "Security needs to be part of the design, not an add-on after installation. That means segmenting guest, staff, point-of-sale and IoT traffic onto separate VLANs, placing firewalls at the right boundaries, and logging activity from day one. This also supports the reasonable security safeguards expected under Qatar's data protection law and the NIA framework.",
  },
  {
    q: 'How do I plan network infrastructure solutions that can scale as my business grows?',
    a: "Start with a site survey that counts current devices and realistic growth, not just today's headcount. Build in spare capacity at the switch and cabling level, document the design as you go, and roll out in phases you can test before cutting traffic over, rather than one large change on a single night.",
  },
]

export default function NetworkInfrastructurePostClient() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="pt-[54px] relative z-[1] overflow-hidden">
        <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="font-jetbrains text-xs text-paper/40 hover:text-signal transition-colors tracking-eyebrow uppercase">
              Blog
            </Link>
            <span className="font-jetbrains text-xs text-paper/20">/</span>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">IT Services</span>
          </nav>

          <EyebrowLabel className="mb-6 block">IT SERVICES</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            How to Build Network Infrastructure in Qatar?
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">August 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/40 tracking-eyebrow uppercase">6 min read</span>
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
            Qatar&apos;s businesses are opening new branches, adding cloud applications, and putting more devices on
            the network than they had five years ago. All of that still has to travel over physical cabling,
            switches and wireless access points that someone has to design, install and maintain. Network
            infrastructure is the part of a technology budget that rarely gets attention until it fails, and by then
            a slow rollout or a security gap is already costing money.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Building it properly from the start, rather than patching problems as they appear, is what separates a
            network that supports growth from one that limits it. That starts with a plan, not a shopping list.
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
            id="what-it-means"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Network Infrastructure Actually Means
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Network infrastructure is the combination of routers, switches, structured cabling, wireless access
            points and firewalls that let every device, application and system in a building talk to each other and
            to the internet. It&apos;s also the comms cabinets, patch panels and cooling that keep that equipment
            running. None of it is visible to the people using it day to day, which is exactly why it&apos;s easy to
            under-invest in until something breaks.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            For a growing business in Qatar, this foundation carries more than it used to. Cloud applications, VoIP
            phone systems, point-of-sale terminals, cameras and building access systems all depend on the same
            underlying network. In hospitality and retail especially, guest wifi and payment systems sit on the same
            physical infrastructure and need to be kept apart. And in a climate where comms rooms run hot, the
            physical build, cooling, cable management and backup power, matters as much as the equipment inside it.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_COMMS_ROOM}
                alt="Structured cabling and network switches installed in a server room"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              A well-built comms room is unremarkable to look at and does most of the work.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="choosing-vendors"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Choosing the Right Network Infrastructure Vendors
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The enterprise networking market has a handful of well-known names, alongside newer vendors competing
            hard on price. The cheapest hardware on the spec sheet is rarely the cheapest option once you count
            support. Ask how a vendor handles a failed switch on a Thursday afternoon: whether replacement parts sit
            in the region or have to be shipped in, and what the actual response time is under the support contract
            you&apos;re being sold.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Interoperability matters too. Mixing brands to save money on one layer of the network can work, but only
            if someone has checked that the pieces actually talk to each other cleanly under load, not just in a
            product brochure. And avoid locking every layer, cabling, switching, wireless and firewall, to a single
            vendor purely for a short-term discount. That trade often costs more later, when you&apos;re negotiating
            renewals with no alternative supplier to compare against.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="security-from-day-one"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Building In Network Infrastructure Security From Day One
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Security added after a network is already built tends to be shallow: a firewall bolted onto the edge
            while everything behind it sits on one flat network. A better approach treats segmentation as part of
            the design. Guest wifi, staff devices, point-of-sale systems and IoT devices such as cameras or building
            controls belong on separate VLANs, with firewall rules that control what can reach what. Logging and
            monitoring should be switched on from the first day the network goes live, not added after an incident.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            This is also where network infrastructure work overlaps with the wider cyber security picture in Qatar.
            Businesses handling personal data are expected to apply reasonable safeguards under the country&apos;s
            data protection law and the NIA framework, and a segmented, logged, access-controlled network is a large
            part of meeting that bar. Treating network security as a separate project that happens later usually
            means it never quite happens.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_SITE_SURVEY}
                alt="Engineer conducting a site survey for a network infrastructure project"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              A site survey before the build decides how much rework you&apos;ll need later.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="solutions-that-scale"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Network Infrastructure Solutions That Scale
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Good network infrastructure solutions start with a site survey, not a hardware list. Count the devices
            actually connecting today, then add realistic growth: new hires, new locations, more cameras, more
            connected equipment on the shop floor. Cabling and switch ports are cheap to over-provision at build
            time and expensive to add later, so spare capacity is worth paying for up front.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Documentation is the part that gets skipped under deadline pressure and regretted every time afterward.
            A network diagram, a record of which port feeds which device, and a written change log turn a
            three-hour troubleshooting job into a ten-minute one. It also means a new IT hire or a support partner
            can pick up the network without having to reverse-engineer it first.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Rolling out in phases beats one large cutover. A phased build lets you test each section, wireless
            coverage on a floor, a new switch stack, a fresh firewall ruleset, before it carries live traffic, and
            gives you a fallback if something doesn&apos;t behave as expected. A single all-at-once change on a
            Friday night looks efficient on a project plan and is usually the reason the following Monday is
            difficult.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Nobody notices network infrastructure when it works. Every application, camera and
              point-of-sale terminal in the building is quietly depending on it anyway.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / network infrastructure practice · compass-its
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
                Network Infrastructure: plan and build the foundation
              </Link>
              <Link
                href="/services/cybersecurity"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                Cybersecurity: secure the network you build
              </Link>
            </div>
          </div>

        </div>
      </article>

      <ContactCTA />
    </main>
  )
}
