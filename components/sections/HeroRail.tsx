'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { latestPost } from '@/lib/posts'
import { outlines } from '@/lib/outlines'

// The three markets, as the Compass Group hero shows them: the country's shape,
// its own name for itself, and ours. Shown the same on / and /ar — the pair of
// names is already bilingual. "السعودية" rather than the full state name, as on
// the group site: the full name does not fit a third of the rail on one line.
const markets = [
  { code: 'QA', ar: 'قطر', en: 'Qatar' },
  { code: 'SA', ar: 'السعودية', en: 'Saudi Arabia' },
  { code: 'AE', ar: 'الإمارات', en: 'UAE' },
] as const

// A fixed square with the shape fitted inside, so Qatar (tall) and Saudi (wide)
// take the same width and the names beside them line up.
function CountryMark({ code }: { code: string }) {
  const o = outlines[code]
  if (!o) return null
  return (
    <svg
      viewBox={`0 0 ${o.width} ${o.height}`}
      preserveAspectRatio="xMidYMid meet"
      className="h-11 w-11 flex-none"
      aria-hidden="true"
    >
      <path
        d={o.d}
        className="fill-signal/20 stroke-signal"
        strokeWidth={1.4}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

// Hero rail: the markets served, then the newest article. The post comes from
// lib/posts so it tracks the blog index rather than being duplicated here.
export default function HeroRail() {
  const { tr } = useLanguage()
  const { servingLabel, latestLabel } = tr.hero.rail

  return (
    <div className="mt-10 flex flex-col gap-[18px]">
      {/* Serving. The label is for screen readers only: the shapes and names
          say it, and the group hero carries no visible label either. */}
      <ul aria-label={servingLabel} className="grid max-w-[540px] grid-cols-1 gap-x-8 gap-y-5 border-t border-paper/[0.14] pt-5 sm:grid-cols-3">
        {markets.map((m) => (
          <li key={m.code} className="flex items-center gap-3.5">
            <CountryMark code={m.code} />
            <div className="min-w-0">
              {/* No dir on either line: both inherit the page's direction, so
                  the pair sits on the same edge on / and on /ar. lang is enough
                  for a screen reader to switch voice, and the bidi algorithm
                  shapes a lone Arabic word correctly. Cairo is set directly
                  because the globals.css swap only fires under dir=rtl. */}
              <p lang="ar" className="text-[19px] font-semibold leading-snug text-paper" style={{ fontFamily: "var(--font-cairo), 'Cairo', sans-serif" }}>
                {m.ar}
              </p>
              <p className="-mt-0.5 font-archivo text-[14px] font-semibold tracking-[-0.018em] text-paper/55">
                {m.en}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {/* Latest article */}
      <Link
        href={`/blog/${latestPost.slug}`}
        className="group flex items-center gap-[15px] max-w-[540px] rounded-lg border border-paper/[0.11] bg-paper/[0.03] p-[15px] transition-colors duration-200 hover:border-signal/40 hover:bg-paper/[0.06]"
      >
        <Image
          src={latestPost.image}
          alt=""
          width={72}
          height={58}
          className="w-[72px] h-[58px] shrink-0 rounded-md object-cover border border-paper/10"
        />
        <span className="block min-w-0">
          <span className="block font-jetbrains text-[8.5px] font-medium uppercase tracking-caption text-signal mb-[5px]">
            {latestLabel} · {latestPost.category}
          </span>
          <span className="block font-archivo text-[14px] font-medium text-paper tracking-[-0.01em] leading-[1.3] group-hover:text-signal transition-colors duration-200">
            {latestPost.title}
          </span>
          <span className="block font-jetbrains text-[9px] uppercase tracking-[0.1em] text-paper/50 mt-[6px]">
            {latestPost.date} · {latestPost.readTime}
          </span>
        </span>
      </Link>
    </div>
  )
}
