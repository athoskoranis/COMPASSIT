import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
  /**
   * Save the file rather than navigate to it, so the reader keeps the page they
   * were on. Same-origin only — browsers ignore the attribute cross-origin and
   * navigate instead.
   */
  download?: boolean
}

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  download = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center leading-none font-archivo text-[15px] font-medium uppercase tracking-cta rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent'

  const variants: Record<ButtonVariant, string> = {
    primary: 'liquid-fill px-7 py-[14px]',
    ghost: 'bg-transparent text-paper border border-paper/40 px-7 py-[13px] hover:border-signal hover:text-signal',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  // next/link is for routes. A download and a protocol link are neither: Link
  // would try to route a PDF (replacing the page with the file) and has nothing
  // to offer mailto: or tel:.
  if (download || /^(mailto:|tel:)/.test(href)) {
    return (
      <a href={href} download={download || undefined} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
