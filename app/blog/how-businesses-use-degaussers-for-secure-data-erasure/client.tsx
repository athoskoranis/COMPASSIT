'use client'
import Image from 'next/image'
import Link from 'next/link'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactCTA from '@/components/sections/ContactCTA'
import RelatedReading from '@/components/sections/RelatedReading'
import { relatedPosts } from '@/lib/posts'

const IMG_ONE = '/images/blog/how-businesses-use-degaussers-for-secure-data-erasure-1.jpg'
const IMG_TWO = '/images/blog/how-businesses-use-degaussers-for-secure-data-erasure-2.jpg'

const toc = [
  { label: 'What a degausser actually does', id: 'what-a-degausser-does' },
  { label: 'Where degaussing fits in a data centre', id: 'data-centre-workflow' },
  { label: 'What degaussers cannot erase', id: 'limits' },
  { label: 'Proving it happened: governance and records', id: 'governance-records' },
]

const faqs = [
  {
    q: 'What does a degausser do to a hard drive?',
    a: "A degausser applies a strong magnetic field that scrambles the magnetised regions where a hard drive or tape stores data, so the original information cannot be read back. On a hard drive it also disrupts the tracks the drive needs to position its heads, so the drive normally stops working.",
  },
  {
    q: 'Can a degausser erase SSDs and USB flash drives?',
    a: "No. Flash media stores data as electrical charge, not magnetic patterns, so a degausser does not reliably erase it. For SSDs and flash drives, businesses use cryptographic erase where the device supports it, certified software erasure, or physical destruction.",
  },
  {
    q: 'How do you prove media was degaussed?',
    a: "Keep a record for each item: serial number, date, method, the person who performed the work, a witness, and a signed certificate or log. Track the media under chain of custody from removal to sanitisation, and test a sample afterwards to confirm it is unreadable.",
  },
  {
    q: 'Should a Qatar business buy a degausser or use a service?',
    a: "It depends on volume. A business that retires media only occasionally often prefers a professional service that degausses on site, so drives never leave its premises. Whichever route you choose, check that the equipment is rated for the media you actually hold.",
  },
]

export default function DegaussersPostClient() {
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
            How Businesses Use Degaussers for Secure Data Erasure?
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">October 2026</span>
            <span className="font-jetbrains text-xs text-paper/20">·</span>
            <span className="font-jetbrains text-xs text-paper/50 tracking-eyebrow uppercase">5 min read</span>
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
            Every organisation in Qatar and the wider GCC eventually retires storage. Drives fail, servers are
            refreshed, a data centre is consolidated, a contract ends. The hardware leaves the building, and the
            data on it can leave too unless someone decides otherwise. Degaussers are one of the tools businesses
            use to make sure it doesn&apos;t.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Degaussing is often named in policy documents and rarely explained. This article covers what a
            degausser does, where it fits in a data management process, what it cannot erase, and how to show
            that the job was done properly.
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
            id="what-a-degausser-does"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What a Degausser Actually Does
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            A degausser applies a powerful magnetic field to magnetic storage media. Hard disk drives and data
            tapes hold information as tiny magnetised regions. Exposing the media to a strong enough field scrambles
            those regions, so the original data can no longer be read back. On a hard drive, the process also
            disrupts the servo tracks the drive needs to position its heads, which is why a degaussed drive
            normally stops working altogether.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            That last point matters for your records. A degaussed drive is not reusable, so degaussing suits
            end-of-life media rather than drives you plan to redeploy. For drives you want to keep using, a
            software overwrite or the drive&apos;s own secure erase command is the usual route. Degaussing is the
            right choice when a drive must never leave your control with readable data on it, and you would
            rather lose the hardware than take the risk.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_ONE}
                alt="Rows of server racks inside a data centre"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              Retired drives from the data centre still hold data until someone deliberately erases it.
            </figcaption>
          </figure>

          {/* ── Section 2 ── */}
          <h2
            id="data-centre-workflow"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Where Degaussing Fits in a Data Centre
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            In a data centre, degaussing usually sits at the end of the hardware lifecycle. Drives pulled from
            arrays after a failure or a refresh are tagged, logged, and held in a secure area until they are
            processed. A professional degausser, rated for the media in question, is then run against them in a
            controlled step that is ideally witnessed and recorded. A sample of the processed media can be tested
            afterwards to confirm the data is no longer readable.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Two practical points come up repeatedly. First, the equipment has to match the media. Modern
            high-capacity drives and tapes are built to resist magnetic change, and a degausser designed for older,
            weaker media may not be strong enough. Check the manufacturer&apos;s specification against what you
            actually hold.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Second, failed drives are a trap. A drive that died in production can still hold recoverable data,
            and businesses often overlook these because they seem worthless. Treat every retired drive as if it
            were full.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            Many firms prefer to bring in professional services rather than buy equipment, especially if they
            retire media only a few times a year. A provider can degauss on site, so drives never leave your
            premises, which is often the cleanest answer for regulated data.
          </p>

          {/* ── Section 3 ── */}
          <h2
            id="limits"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            What Degaussers Cannot Erase
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Degaussing does nothing useful on solid state media. SSDs, USB flash drives, and memory cards store
            data as electrical charge in flash chips, not as magnetic patterns, so a magnetic field does not
            reliably erase them. Most laptops and a growing share of servers now use flash, which means a degausser
            alone no longer covers a typical estate. For flash media the options are cryptographic erase where the
            device supports it, certified software erasure, or physical destruction such as shredding into small
            fragments.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-10">
            A degausser also does not touch data held in the cloud, in backups on other systems, or in copies
            sitting on devices nobody remembers. That is why data management comes before erasure. If you cannot
            list your storage assets, you cannot be sure they were all sanitised. A sensible policy uses a simple
            media matrix: magnetic drives and tape are degaussed or overwritten, flash is cryptographically erased
            or shredded, and optical media is shredded. One policy, several methods, each assigned to the media it
            works on.
          </p>

          <figure className="mb-12">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={IMG_TWO}
                alt="IT professional logging hardware assets in a secure storage room"
                width={800}
                height={450}
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 font-jetbrains text-[11px] text-ink/40 tracking-caption leading-relaxed">
              An asset register is what turns media disposal from a habit into a process you can audit.
            </figcaption>
          </figure>

          {/* ── Section 4 ── */}
          <h2
            id="governance-records"
            className="font-archivo font-medium text-ink text-[24px] md:text-[28px] leading-tight tracking-[-0.02em] mb-5 scroll-mt-24"
          >
            Proving It Happened: Governance and Records
          </h2>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Erasing the data is half the task. The other half is being able to show it happened. Data governance
            asks who is accountable, which rules apply, and what evidence exists. For media sanitisation that means
            a few concrete records: an asset register entry for each drive, its serial number, the date and method
            of sanitisation, who performed it, who witnessed it, and a signed certificate or log at the end.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-5">
            Chain of custody matters just as much. Between the moment a drive leaves a server and the moment it is
            sanitised, it should be tracked, stored securely, and handled by named people. Gaps in that chain are
            where drives go missing, and a missing drive is a data protection incident however good your
            degausser is.
          </p>
          <p className="font-barlow text-body text-ink/75 leading-[30px] mb-12">
            For Qatar businesses this ties directly into data protection obligations. Qatar&apos;s data protection
            law expects personal data to be handled with appropriate safeguards, and the NIA framework sets
            expectations for information security in regulated sectors. Disposal is part of the data lifecycle, so
            a documented process for retiring media supports your position if a regulator or client asks. Confirm
            the specifics for your sector with your compliance team or legal adviser, since requirements differ
            between industries and across GCC countries.
          </p>

          {/* Callout block */}
          <div className="mb-12 bg-ink rounded-r-lg px-8 py-7" style={{ borderLeft: '4px solid #2BB3E6' }}>
            <p className="font-barlow text-body-l text-paper italic leading-[30px] mb-4">
              &ldquo;Erasing the data is half the task. The other half is being able to show it happened.&rdquo;
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
                href="/services/it-services"
                className="font-barlow text-body text-signal hover:underline underline-offset-4 transition-colors"
              >
                IT Services — the team behind your IT team
              </Link>
            </div>
          </div>

        </div>
      </article>

      <RelatedReading posts={relatedPosts('how-businesses-use-degaussers-for-secure-data-erasure')} />
      <ContactCTA />
    </main>
  )
}
