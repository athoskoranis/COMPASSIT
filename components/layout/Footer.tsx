'use client'
import React from 'react'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { TextHoverEffect, FooterBackgroundGradient } from '@/components/ui/hover-footer'
import { useLanguage } from '@/context/LanguageContext'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width={15} height={15} className="flex-shrink-0" style={{ fill: '#25D366' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

type ContactItem = {
  Icon: React.ElementType
  iconProps?: Record<string, unknown>
  text: string
  href?: string
  external?: boolean
}

export default function Footer() {
  const { tr } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === '/'

  const serviceHrefs = [
    '/services/it-services',
    '/services/network-infrastructure',
    '/services/cloud-solutions',
    '/services/cybersecurity',
    '/services/web-development',
    '/services/app-development',
    '/services/ai-workflows',
    '/services/digital-marketing',
  ]

  const services = tr.services.items.map((item, i) => ({
    label: item.title,
    href: serviceHrefs[i] ?? '/contact',
  }))

  const contactInfo: ContactItem[] = [
    { Icon: Mail,   iconProps: { size: 15, className: 'text-signal flex-shrink-0' }, text: 'info@compass-its.com', href: 'mailto:info@compass-its.com' },
    { Icon: MapPin, iconProps: { size: 15, className: 'text-signal flex-shrink-0' }, text: 'West Bay, Doha, Qatar' },
  ]

  return (
    <footer
      className="relative z-[1] mx-4 lg:mx-8 mb-6 rounded-2xl overflow-hidden bg-ink/90 backdrop-blur-lg border border-paper/[0.12]"
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(43,179,230,0.08)' }}
    >
      <FooterBackgroundGradient />

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-20 pt-16 pb-4">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-paper/[0.08]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={isHome ? '#hero' : '/'} className="flex items-center gap-2 mb-4">
              <img
                src="/brand/Monogram%20Transparent.svg"
                alt="Compass ITS"
                className="w-6 h-6 object-contain"
                style={{ filter: 'invert(1)' }}
              />
              <span className="font-archivo font-medium text-[15px] text-paper tracking-[-0.02em]">
                Compass IT Solutions
              </span>
            </Link>
            <p className="font-archivo text-[14px] text-paper/50 leading-relaxed mb-5">
              {tr.footer.tagline}
            </p>
            {/* Map */}
            <div className="relative rounded-xl overflow-hidden h-[130px] border border-paper/[0.08]">
              <iframe
                src="https://maps.google.com/maps?q=25.2896241,51.5431226&z=16&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'grayscale(1) invert(1) hue-rotate(180deg) brightness(0.85)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/place/Compass+IT+Solutions/@25.2896241,51.5431226,16z/data=!4m6!3m5!1s0x3e45c5fbdbcc7b3f:0x6efd0a359a47c968!8m2!3d25.2896241!4d51.5431226!16s%2Fg%2F11zbrn2b92"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label="View Compass IT Solutions on Google Maps"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-5">
              {tr.footer.servicesLabel}
            </p>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-archivo text-[14px] text-paper/50 hover:text-signal transition-colors leading-snug"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-5">
              {tr.footer.companyLabel}
            </p>
            <ul className="space-y-3">
              {tr.footer.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-archivo text-[14px] text-paper/50 hover:text-signal transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-jetbrains text-[10px] text-paper/30 uppercase tracking-eyebrow mb-5">
              {tr.footer.contactLabel}
            </p>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => {
                const { Icon, iconProps, text, href, external } = item
                return (
                  <li key={i} className="flex items-center gap-3">
                    <Icon {...(iconProps ?? {})} />
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="font-archivo text-[13px] text-paper/50 hover:text-signal transition-colors tracking-caption"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="font-archivo text-[13px] text-paper/50 tracking-caption">
                        {text}
                      </span>
                    )}
                  </li>
                )
              })}
              {/* WhatsApp / phone row */}
              <li className="flex items-center gap-3">
                <WhatsAppIcon />
                <a
                  href="https://wa.me/97451490825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-archivo text-[13px] text-paper/50 hover:text-signal transition-colors tracking-caption"
                >
                  +974 5149 0825
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex flex-col gap-3 mt-5">
              <a
                href="https://www.instagram.com/compassits/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <svg width={17} height={17} viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F77737"/>
                      <stop offset="40%" stopColor="#E1306C"/>
                      <stop offset="100%" stopColor="#833AB4"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)"/>
                  <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none"/>
                </svg>
                <span className="font-archivo text-[13px] text-paper/40 group-hover:text-paper/70 transition-colors">
                  @compassits
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/compassits/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group"
              >
                <svg width={17} height={17} viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span className="font-archivo text-[13px] text-paper/40 group-hover:text-paper/70 transition-colors">
                  compassits
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 pb-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-archivo text-[13px] text-paper/30">
            {tr.footer.copyright}
          </p>
          <p className="font-jetbrains text-[10px] text-paper/20 uppercase tracking-eyebrow">
            {tr.footer.brandLine}
          </p>
        </div>
      </div>

      {/* COMPASS traced text */}
      <div className="relative z-10 lg:flex hidden h-48 -mt-4 -mb-8 px-6 lg:px-20">
        <TextHoverEffect text="COMPASS" />
      </div>
    </footer>
  )
}
