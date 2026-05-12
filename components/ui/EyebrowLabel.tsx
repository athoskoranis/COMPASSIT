interface EyebrowLabelProps {
  children: React.ReactNode
  className?: string
  dim?: boolean
}

export default function EyebrowLabel({ children, className = '', dim = false }: EyebrowLabelProps) {
  return (
    <span
      className={`font-jetbrains text-xs font-medium uppercase tracking-eyebrow ${
        dim ? 'text-paper/40' : 'text-signal'
      } ${className}`}
    >
      {children}
    </span>
  )
}
