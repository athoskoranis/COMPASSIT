import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: ButtonVariant
  className?: string
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center leading-none font-archivo text-[15px] font-medium uppercase tracking-cta rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent'

  const variants: Record<ButtonVariant, string> = {
    primary: 'glow-btn text-ink px-7 py-[14px]',
    ghost: 'bg-transparent text-paper border border-paper/40 px-7 py-[13px] hover:border-signal hover:text-signal',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'primary'
        ? <span className="glow-btn-knockout">{children}</span>
        : children}
    </Link>
  )
}
