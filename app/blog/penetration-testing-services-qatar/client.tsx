'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TopoBackground from '@/components/ui/TopoBackgroundFBM'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'

const IMG_MONITORS = '/images/blog/blog3-pentest-monitors.jpg'
const IMG_REPORT = '/images/blog/blog3-pentest-report.jpg'

const toc = [
  { label: 'What penetration testing is, and how it differs from a scan', id: 'what-it-is' },
  { label: 'How testing fits Qatar\'s NIA and NISCF framework', id: 'nia-framework' },
  { label: 'What a proper engagement actually covers', id: 'what-it-covers' },
  { label: 'Choosing a provider in Qatar', id: 'choosing-a-provider' },
]

const faqs = [
  {
    q: 'What is the difference between a penetration test and a vulnerability scan?',
    a: 'A vulnerability scan is automated — it lists known weaknesses across your systems but stops at "here is a list." A penetration test is an ethical attack carried out by people. Testers try to exploit those weaknesses the way a real attacker would, including chaining several small flaws into one serious breach that no scan would flag.',
  },
  {
    q: 'How does penetration testing support NIA compliance in Qatar?',
    a: "Qatar's National Information Assurance policy sets out the security controls organisations must implement to protect information assets. Penetration testing proves those controls hold up under attack. The NCSA also accredits penetration testing providers through the NISCF, creating a recognised national standard for who is qualified to carry this work out.",
  },
  {
    q: 'What should a proper penetration test engagement include?',
    a: 'A thorough engagement covers external testing (internet-facing systems), internal testing (assuming a compromised insider), web and mobile application testing, and social engineering where agreed. The report must be actionable and prioritised by real business risk. A retest after fixes confirms the remediation actually worked.',
  },
  {
    q: 'How often should businesses in Qatar run penetration tests?',
    a: 'Annual testing is a reasonable baseline, but you should also test after any significant change — a new application, a major infrastructure shift, or a move to the cloud. Those are exactly the moments new gaps appear. Mature organisations pair periodic testing with continuous monitoring and a regular patching routine.',
  },
]

export default function PenTestPostClient() {
  return (
    <>
      <TopoBackground />
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className="pt-[54px] relative z-[1] overflow-hidden">
          <div className="max-w-content mx-auto px-6 lg:px-20 py-16 lg:py-24 relative z-10">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8">
              <Link href="/blog" className="font-jetbrains text-xs text-paper/40 hover:text-signal transition-colors tracking-eyebrow uppercase">
                Blog
              </Link>
              <span className="font-jetbrains text-xs text-paper/20">/</span>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">Cybersecurity</span>
            </nav>

            <EyebrowLabel className="mb-6 block">CYBERSECURITY</EyebrowLabel>

            <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
              Penetration Testing in Qatar: What It Is and Why NIA Compliance Increasingly Expects It
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
              Plenty of businesses in Qatar run a vulnerability scan, see a clean-looking report, and assume they&apos;re
              secure. They aren&apos;t, necessarily. A scan tells you which doors look unlocked. It doesn&apos;t tell you
              whether an attacker could actually walk through them, chain a few weaknesses together, and reach your
              customer database. That is what penetration testing services in Qatar are for, and it&apos;s also why the
              country&apos;s regulatory framework increasingly expects them.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              The threat side is not abstract. As more of the economy moves online, the attack surface grows with it,
              and the regulator has responded by building out a structured compliance regime that real testing supports.
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
              id="what-it-is"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              What Penetration Testing Is, and How It Differs from a Scan
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              A vulnerability assessment is automated. It uses tools to list known weaknesses across your systems.
              Useful, fast, and cheap, but it stops at &ldquo;here is a list.&rdquo; A penetration test is an ethical
              attack carried out by people. Testers try to exploit those weaknesses the way a real attacker would,
              including combining several small flaws into one serious breach that no single scan result would flag.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              The distinction matters because the dangerous incidents are usually the chained ones. An out-of-date
              library here, an over-permissioned account there, a forgotten test server with a default password.
              Individually they look minor. Strung together they become the path to your data. A scan rarely catches
              that story. A competent tester is specifically looking for it.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_MONITORS}
                  alt="Cybersecurity professional reviewing penetration test results across multiple monitors"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                A penetration tester chains vulnerabilities together the way a real attacker would — looking for the path a scan won&apos;t flag.
              </figcaption>
            </figure>

            {/* ── Section 2 ── */}
            <h2
              id="nia-framework"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              How Testing Fits Qatar&apos;s NIA and NISCF Framework
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Qatar&apos;s National Cyber Security Agency runs the National Information Security Compliance Framework,
              and the National Information Assurance policy sits inside it. The NIA policy applies across business
              segments, not just government, and it sets out the security controls organisations are expected to
              implement to protect their information assets.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              Penetration testing supports that framework directly. Controls on paper are only worth something if they
              hold up under attack, and testing is how you prove they do. The NCSA also accredits penetration testing
              service providers through the framework, which means there is now a recognised standard for who is
              qualified to carry this work out in Qatar. The country&apos;s National Cyber Security Strategy, which runs
              to 2030, has pushed this from a nice-to-have toward an expected part of a serious security programme.
            </p>

            {/* ── Section 3 ── */}
            <h2
              id="what-it-covers"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              What a Proper Engagement Actually Covers
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              A real penetration test starts with scoping. You and the tester agree what&apos;s in bounds, what&apos;s
              off limits, and what the goals are. From there a thorough engagement usually spans several types of
              testing. External testing targets your internet-facing systems, the way an outside attacker would start.
              Internal testing assumes someone is already inside — whether a malicious employee or a compromised laptop
              — and checks how far they could get. Web and mobile application testing digs into your custom software.
              Social engineering, where agreed, tests whether staff can be tricked into handing over access.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
              Two things separate a useful engagement from a box-ticking one. The report has to be actionable,
              prioritised by real business risk rather than a raw severity score. And there should be a retest after
              you&apos;ve fixed the findings, to confirm the fixes actually worked. A test with no retest leaves you
              guessing.
            </p>

            <figure className="mb-12">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={IMG_REPORT}
                  alt="Penetration test report on screen showing findings ranked by severity"
                  width={800}
                  height={450}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
                A useful pentest report prioritises findings by real business risk — not just raw severity scores.
              </figcaption>
            </figure>

            {/* ── Section 4 ── */}
            <h2
              id="choosing-a-provider"
              className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
            >
              Choosing a Provider in Qatar
            </h2>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Look for accreditation under the NISCF, because that tells you the provider meets the national standard
              for this work. Ask how they handle your data during and after the test, and confirm it stays within
              arrangements that satisfy local requirements. Be wary of any provider that hands you a scanner&apos;s
              output dressed up as a penetration test. The give-away is a report with hundreds of low-severity items
              and no narrative explaining how a real attacker would actually break in.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              Frequency is the other question. Annual testing is a reasonable baseline, but you should also test after
              any significant change — a new application, a major infrastructure shift, a move to the cloud. Those are
              exactly the moments new gaps appear.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
              It also helps to be clear about what a test is not. A penetration test is a snapshot of a moment in
              time, not a permanent certificate. The day after a clean report, a new misconfiguration or an unpatched
              system can open a fresh hole. That&apos;s why mature organisations pair periodic testing with continuous
              monitoring and a real patching routine. The test tells you where you stand today and gives you a
              prioritised list to act on. The ongoing discipline is what keeps you there.
            </p>
            <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
              One more practical point worth making to leadership. The cost of a thorough test is almost always a
              fraction of the cost of the breach it would have caught. Framing it as an insurance question rather than
              an IT line item tends to get the budget approved faster, and it&apos;s the more accurate way to think
              about it.
            </p>

            {/* Callout block */}
            <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
              <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
                &ldquo;If you&apos;re preparing for NIA compliance or simply want to know where you&apos;d actually
                break, the right starting point is scoping an engagement that fits your environment — not running
                another scan.&rdquo;
              </p>
              <span className="font-jetbrains text-xs text-signal tracking-eyebrow">
                / cybersecurity practice · compass-its
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
      <Footer />
    </>
  )
}
