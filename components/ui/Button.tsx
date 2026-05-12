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
    'inline-flex items-center font-archivo text-[15px] font-medium uppercase tracking-cta rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-transparent'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-signal text-ink px-7 py-[14px] hover:bg-signal/90 shadow-glow-signal hover:shadow-[0_0_32px_rgba(43,179,230,0.55)] transition-shadow duration-200',
    ghost: 'bg-transparent text-paper border border-paper/40 px-7 py-[13px] hover:border-signal hover:text-signal',
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
