'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false)
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])
  useEffect(() => { onScroll() }, [onScroll])
  return scrolled
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      strokeWidth={2.5}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 32 32"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-5 transition-transform ease-in-out duration-300 ${open ? '-rotate-45' : ''}`}
    >
      <path
        className={`transition-all ease-in-out duration-300 ${
          open
            ? '[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]'
            : '[stroke-dasharray:12_63]'
        }`}
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      />
      <path d="M7 16 27 16" />
    </svg>
  )
}

const navHrefs = [
  { key: 'about' as const,      href: '#about' },
  { key: 'services' as const,   href: '#services' },
  { key: 'whyCompass' as const, href: '#why-compass' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScroll(10)
  const floating = scrolled && !mobileOpen
  const { tr, toggle } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out">
      <header
        className={[
          'mx-auto transition-all duration-300 ease-out',
          floating
            ? 'mt-3 rounded-xl bg-ink/90 backdrop-blur-lg border border-paper/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(43,179,230,0.06)]'
            : 'bg-ink border-b border-paper/10',
        ].join(' ')}
        style={{
          maxWidth: floating ? '1020px' : '100%',
          width: '100%',
        }}
      >
      {/* Main bar */}
      <div
        className="flex items-center transition-all duration-300 w-full"
        style={{
          height: floating ? '46px' : '54px',
          padding: floating ? '0 20px' : '0 16px',
          justifyContent: 'space-between',
        }}
      >

        {/* Logo — far left */}
        <Link href="#hero" className="flex items-center flex-shrink-0">
          <img
            src="/brand/Secondary%20Transparent.svg"
            alt="Compass ITS"
            height={36}
            className="object-contain transition-all duration-300"
            style={{
              height: floating ? '95px' : '119px',
              width: 'auto',
              filter: 'invert(1)',
            }}
          />
        </Link>

        {/* Right group: nav links + CTA */}
        <div className="hidden lg:flex items-center" style={{ gap: floating ? '6px' : '12px', transition: 'gap 300ms ease-out' }}>
          {navHrefs.map(({ key, href }) => (
            <Link
              key={href}
              href={href}
              className="font-archivo text-[14px] text-paper/70 hover:text-signal transition-all duration-300 ease-out"
              style={{ padding: floating ? '0 4px' : '0 8px' }}
            >
              {tr.nav[key]}
            </Link>
          ))}

          <button
            onClick={toggle}
            className="font-jetbrains text-[11px] text-paper/50 hover:text-signal transition-colors px-2.5 py-1 border border-paper/15 hover:border-signal/40 rounded-lg"
          >
            {tr.nav.langToggle}
          </button>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center leading-none font-archivo text-[13px] font-medium uppercase tracking-cta glow-btn text-ink px-4 py-[7px] rounded-xl ml-1"
          >
            {tr.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-paper p-2 rounded-lg hover:bg-paper/10 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 z-50 bg-ink/95 backdrop-blur-lg border-t border-paper/10 overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navHrefs.map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-archivo text-[17px] text-paper/80 hover:text-signal transition-colors"
              >
                {tr.nav[key]}
              </Link>
            ))}

            <div className="pt-4 border-t border-paper/10 flex flex-col gap-3">
              <button
                onClick={toggle}
                className="font-jetbrains text-[12px] text-paper/50 hover:text-signal transition-colors px-3 py-2 border border-paper/15 hover:border-signal/40 rounded-lg text-start"
              >
                {tr.nav.langToggle}
              </button>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-full leading-none font-archivo text-[14px] font-medium uppercase tracking-cta glow-btn text-ink px-6 py-3 rounded-xl"
              >
                {tr.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      )}
      </header>
    </div>
  )
}
