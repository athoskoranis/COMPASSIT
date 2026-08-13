'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_RISK = '/images/blog/how-cyber-security-reduces-business-risks-1.jpg'
const IMG_ACCESS = '/images/blog/how-cyber-security-reduces-business-risks-2.jpg'

const toc = [
  { label: 'What "business risk" means once cyber security enters the picture', id: 'what-risk-means' },
  { label: 'Where the exposure to cyber criminals actually comes from', id: 'where-exposure-comes-from' },
  { label: 'The controls that do the heavy lifting', id: 'controls-that-work' },
  { label: 'Choosing security companies you can rely on', id: 'choosing-security-companies' },
]

const faqs = [
  {
    q: 'How does cyber security reduce business risk?',
    a: 'It works on two fronts at once: lowering the odds that an attack succeeds, through access controls, patching, and monitoring, and limiting the damage when one does get through, through backups and a tested incident response plan. Both together turn cyber security from an IT cost into a direct reduction in financial, operational, and reputational risk.',
  },
  {
    q: 'What does a data breach actually cost a business in Qatar?',
    a: "Beyond the direct cost of investigating and containing an incident, a data breach can trigger notification obligations and legal exposure under Qatar's data protection law and the NIA framework. Add in the operational cost of systems being offline and the slower cost of lost client trust, and the total is almost always higher than the cost of the controls that would have prevented it.",
  },
  {
    q: 'What access controls should a business have in place?',
    a: 'The basics carry most of the weight: multi-factor authentication on every account that matters, access limited to what each role actually needs, and a process for removing access the moment someone leaves or changes roles. These controls mean a single stolen password or compromised account cannot reach everything in the business.',
  },
  {
    q: 'How do I choose between security companies?',
    a: "Look for a provider offering ongoing monitoring and response, not just a one-time audit, and one who explains risk in business terms rather than technical jargon alone. They should be able to speak specifically to how Qatar's regulatory requirements apply to your business, not just recite a generic checklist.",
  },
]

export default function CyberSecurityRiskPostClient() {
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
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">Cybersecurity</span>
          </nav>

          <EyebrowLabel className="mb-6 block">CYBERSECURITY</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            How Cyber Security Reduces Business Risks?
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
            Every business in Qatar now runs on data: customer records, financial details, supplier contracts,
            internal communications. That makes cyber security less of a technical checkbox and more of a direct
            lever on how much risk the business is carrying at any given moment. A company that takes
            cybersecurity for business seriously isn&apos;t buying peace of mind in the abstract. It is reducing
            the odds of a costly data breach and shrinking how much damage one would do if it happened anyway.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            None of this requires an unlimited budget or a full-time security team. It requires the right controls
            in the right order, and an honest look at where the exposure actually sits.
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
            id="what-risk-means"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What &ldquo;Business Risk&rdquo; Means Once Cyber Security Enters the Picture
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Talk to a board about cyber security and the conversation tends to drift toward firewalls and antivirus
            software. Talk to the same board about business risk and the conversation is about money, operations,
            and reputation, three things a serious cyber incident touches all at once.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A data breach carries a direct cost: investigating what happened, notifying affected customers, and in
            many cases, legal exposure under Qatar&apos;s data protection law and the obligations set out in the NIA
            framework. There is also an operational cost that is easy to underestimate. Systems taken offline during
            an incident mean staff cannot work, orders cannot be processed, and clients cannot be served, sometimes
            for days at a time.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Then there is reputation. Clients who trust a business with their data expect that trust to be honoured.
            A public data breach undoes years of that trust in a single news cycle, and rebuilding it takes far
            longer than the technical fix did. Cyber security&apos;s job, in that light, isn&apos;t to make an
            attack impossible. It is to lower the odds of one succeeding and cap the damage when something
            eventually gets through, because eventually, for most businesses, something will.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_RISK}
                alt="Team reviewing a business risk dashboard on a laptop screen"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Cyber security lowers the odds of an incident and limits the damage when one gets through.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="where-exposure-comes-from"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Where the Exposure to Cyber Criminals Actually Comes From
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most incidents don&apos;t start with a clever, targeted attack. They start with a phishing email that
            looks routine, a password reused from another account, or a piece of software that was due for a patch
            three months ago. Cyber criminals don&apos;t need to be sophisticated when the easiest way in is a
            person clicking a link on a busy morning.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Smaller and mid-sized businesses in Qatar and across the GCC are increasingly in scope, not because they
            are specifically targeted, but because cyber crime today is largely automated and opportunistic.
            Attackers scan large numbers of companies looking for the ones with the weakest defenses, and a business
            holding customer payment details or supplier access is worth breaking into whether it has 20 staff or
            2,000.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Third parties add another route in. A vendor with access to your systems, a contractor with a shared
            login, or a cloud service left on default settings all extend where cyber threats can enter, often
            outside the visibility of whoever is responsible for security internally.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="controls-that-work"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            The Controls That Do the Heavy Lifting
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Access controls are the single highest-leverage item on this list. Not every employee needs access to
            every system, and multi-factor authentication turns a stolen password from a full compromise into a
            dead end. Limiting what any one account can reach means a single mistake stays a single mistake instead
            of becoming a company-wide incident.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Patching and monitoring come next. Unpatched software is one of the most common doors cyber criminals
            walk through, and it is one of the most preventable. Monitoring adds the other half: knowing when
            something unusual is happening, a login at 3am, a large file transfer, an unfamiliar device, before it
            turns into a full data breach.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Backups and an incident response plan decide how bad the worst day actually is. Backups tested
            regularly mean ransomware is an inconvenience rather than an existential threat. A response plan,
            rehearsed rather than filed away, decides whether a breach is contained in hours or drags on for weeks
            while everyone works out who does what.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ACCESS}
                alt="Close-up of a secure login screen showing multi-factor authentication"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Access controls turn a single stolen password into a dead end instead of a company-wide incident.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="choosing-security-companies"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Choosing Security Companies You Can Rely On
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Not every provider calling itself a security company is offering the same thing. Some sell a single
            audit and a report; others build an ongoing relationship where monitoring, patching, and response are
            continuous work, not an annual event. For most businesses, the second model is the one that actually
            reduces risk over time, because cyber threats don&apos;t pause between assessments.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A good sign is a provider that explains findings in terms of business risk, not just technical jargon,
            and can point to how Qatar&apos;s regulatory requirements apply to your specific business rather than a
            generic checklist. A less encouraging sign is a pitch built entirely around fear, or a promise that a
            single product solves the problem outright. No product does that alone.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The businesses that get the most value tend to treat cyber security as a standing part of how they
            operate, the same way they treat accounting or payroll, rather than a project that finishes and gets
            filed away.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Cyber security isn&apos;t something you buy once and forget. It&apos;s a set of habits and
              controls that keep paying off every single day nothing goes wrong.&rdquo;
            </p>
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
              / security practice · compass-its
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
                href="/services/cybersecurity"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                Cybersecurity — protect what matters
              </Link>
              <Link
                href="/services/it-services"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                IT Services — the team behind your IT team
              </Link>
            </div>
          </div>

        </div>
      </article>

      <ContactCTA />
    </main>
  )
}
