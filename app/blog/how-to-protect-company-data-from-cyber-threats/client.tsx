'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_ONE = '/images/blog/how-to-protect-company-data-from-cyber-threats-1.jpg'
const IMG_TWO = '/images/blog/how-to-protect-company-data-from-cyber-threats-2.jpg'

const toc = [
  { label: 'Start by knowing what data you actually hold', id: 'know-your-data' },
  { label: 'Control who can reach it', id: 'access-control' },
  { label: 'Encrypt, back up and keep watching', id: 'encrypt-backup-monitor' },
  { label: 'Prepare for a breach before it happens', id: 'breach-readiness' },
]

const faqs = [
  {
    q: 'What is the first step to protect company data?',
    a: "Find out what data you hold and where it lives. Most businesses have customer records, financial files and staff information spread across servers, laptops, cloud tools and email. You cannot protect what you have not listed, so a simple inventory ranked by sensitivity comes before any tool purchase.",
  },
  {
    q: 'Which data security solutions matter most for a small or mid-sized business?',
    a: "Multi-factor authentication, least-privilege access, encryption, tested backups, and monitoring that alerts someone who will act on it. These cover the most common ways company data is lost or exposed, and they cost far less than a specialised platform that nobody has time to run.",
  },
  {
    q: 'What should we do if we suspect a company data breach?',
    a: "Contain it first by isolating affected accounts and devices, then preserve logs and evidence before anything is wiped. Work out what data was involved, and check your obligations under Qatar's data protection law and any sector rules that apply. A written response plan agreed in advance makes each of these steps faster.",
  },
  {
    q: 'Does data security in Qatar involve legal requirements?',
    a: "Yes. Qatar has a data protection law covering personal data, and the NIA framework sets expectations for many organisations, particularly in regulated and government-linked sectors. The exact obligations depend on your industry and the data you hold, so confirm them with your compliance adviser.",
  },
]

export default function DataSecurityPostClient() {
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
            <span className="font-jetbrains text-xs text-signal tracking-eyebrow uppercase">Cybersecurity</span>
          </nav>

          <EyebrowLabel className="mb-6 block">CYBERSECURITY</EyebrowLabel>

          <h1 className="font-archivo font-medium text-paper leading-[1.1] tracking-[-0.03em] text-[32px] md:text-[44px] lg:text-[54px] max-w-[820px] mb-8">
            How to Protect Your Company Data from Cyber Threats?
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">September 2026</span>
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
            Every business in Qatar runs on data: customer records, contracts, invoices, staff files, project plans.
            As more of that moves into cloud tools, shared drives and personal devices, the question of how to protect
            your company data stops being an IT detail and becomes a business decision. A single company data breach
            can stop operations, damage client trust and bring regulatory questions you did not plan for.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            The good news is that good data security is mostly a set of unglamorous habits, not a shopping trip for
            the most expensive product. Here is how we would approach it for a Qatar or GCC business, in the order
            that tends to pay off.
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
            id="know-your-data"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Start by Knowing What Data You Actually Hold
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            The most common gap we see is not a missing firewall. It is that nobody can say, with confidence, where
            the sensitive data sits. Customer details end up in old spreadsheets, finance exports sit in download
            folders, and a former employee&apos;s laptop still holds project files. Protection efforts aimed at the
            wrong place feel busy and achieve little.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A practical first step is an inventory. List the main categories of data you hold, note where each one
            lives, and rank them by how much harm their loss or exposure would cause. Personal data, financial
            records and anything covered by client confidentiality clauses go at the top. This does not need special
            software. A shared document and a few honest conversations with each department will get you most of the
            way, and it tells you where your data security solutions should be pointed first.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ONE}
                alt="IT professional reviewing data security dashboards on a monitor"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              You cannot protect what you have not listed: start with an honest map of where sensitive data lives.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="access-control"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Control Who Can Reach It
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Most breaches begin with a stolen or guessed login, often obtained through a convincing phishing email.
            That makes access control the highest-value area for effort. Turn on multi-factor authentication for
            email, cloud platforms, remote access and anything that touches finance. It is not perfect, but it stops
            a large share of simple credential attacks and it is cheap to deploy.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Next, apply least privilege. Each person should reach the data their job needs and no more. In practice
            that means reviewing shared folders, removing old accounts when staff leave, and giving administrator
            rights only to the few people who need them. Businesses that have grown quickly often carry years of
            accumulated permissions that nobody chose deliberately.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            Staff awareness belongs here too. People are the front door. Short, regular, practical training on how to
            spot suspicious messages, and a clear and blame-free way to report them, does more than an annual
            presentation nobody remembers. When an employee reports a strange email within minutes, you often avoid
            an incident altogether.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TWO}
                alt="Employee signing in with multi-factor authentication on a laptop"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Multi-factor sign-in and least-privilege access close off the most common route to company data.
            </figcaption>
          </figure>

          {/* ── Section 3 ── */}
          <h2
            id="encrypt-backup-monitor"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Encrypt, Back Up and Keep Watching
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Encryption protects data when everything else fails. If a laptop is lost at the airport or a storage
            account is misconfigured, encrypted data is far harder to use. Enable disk encryption on company
            devices, encrypt sensitive data in cloud storage, and make sure connections between your sites and your
            cloud services are protected in transit.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Backups are your answer to ransomware and accidents, but only if they work. Keep at least one copy that
            is separate from your main network so an attacker cannot delete it along with everything else, and test
            a restore on a schedule. A backup you have never restored is a hope, not a control.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Finally, monitoring. Logs and alerts only help if a person sees them and knows what to do. Unusual
            sign-ins, large file transfers at odd hours and new administrator accounts are the kind of signals worth
            watching. Many small and mid-sized businesses do not have anyone available to do this around the clock,
            which is one reason they turn to a managed provider. Keep systems patched as well. Many incidents use
            weaknesses that had fixes available for months.
          </p>

          {/* ── Section 4 ── */}
          <h2
            id="breach-readiness"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Prepare for a Breach Before It Happens
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            No set of controls reduces the risk to zero, so the last piece is knowing what you will do on the bad
            day. A short written response plan should say who takes charge, who can isolate systems, who speaks to
            clients, and who checks your legal duties. Decisions made calmly in advance are better than decisions
            improvised at two in the morning.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            In Qatar, that plan should reflect the country&apos;s data protection law and, where it applies to you,
            the NIA framework. Sector regulators can add their own expectations, particularly in finance, healthcare
            and government-linked work. We are not your legal adviser, so confirm the specifics with someone who is,
            but do it before an incident rather than during one.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Then rehearse it. A one-hour tabletop exercise, where the team talks through a realistic scenario such as
            a compromised email account or an encrypted file server, will expose gaps in contact lists, backup
            access and decision-making. Fix those gaps and repeat once or twice a year. It is one of the cheapest
            ways to improve how you protect your data.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;You cannot protect what you have not listed, and you cannot recover what you have never tested.&rdquo;
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
                Cybersecurity — protect the data your business runs on
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

      <RelatedReading posts={relatedPosts('how-to-protect-company-data-from-cyber-threats')} />
      <ContactCTA />
    </main>
  )
}
