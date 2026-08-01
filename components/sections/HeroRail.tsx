'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { latestPost } from '@/lib/posts'

// Hero rail: the markets served, then the newest article. The post comes from
// lib/posts so it tracks the blog index rather than being duplicated here.
export default function HeroRail() {
  const { tr } = useLanguage()
  const { servingLabel, countries, latestLabel } = tr.hero.rail

  return (
    <div className="mt-10 flex flex-col gap-[18px]">
      {/* Serving */}
      <div className="flex flex-wrap items-center border-t border-paper/[0.14] pt-4">
        <span className="font-jetbrains text-[9.5px] font-medium uppercase tracking-caption text-signal pe-[13px] border-e border-paper/[0.12]">
          {servingLabel}
        </span>
        {countries.map((country, i) => (
          <span
            key={country}
            className={`font-archivo text-[14px] text-paper/70 px-[13px] ${
              i < countries.length - 1 ? 'border-e border-paper/[0.12]' : ''
            }`}
          >
            {country}
          </span>
        ))}
      </div>

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
          <span className="block font-jetbrains text-[9px] uppercase tracking-[0.1em] text-paper/40 mt-[6px]">
            {latestPost.date} · {latestPost.readTime}
          </span>
        </span>
      </Link>
    </div>
  )
}
