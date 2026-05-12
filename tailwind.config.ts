import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E10',
        paper: '#F4F2EC',
        signal: '#2BB3E6',
        beacon: '#E8A33D',
        indigo: '#35267A',
        mist: '#ECEDEF',
      },
      fontFamily: {
        archivo: ['var(--font-archivo)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['110px', { lineHeight: '100px', letterSpacing: '-0.045em', fontWeight: '300' }],
        'display-l': ['72px', { lineHeight: '68px', letterSpacing: '-0.04em' }],
        'heading-1': ['44px', { lineHeight: '46px', letterSpacing: '-0.025em' }],
        'heading-2': ['30px', { lineHeight: '34px', letterSpacing: '-0.02em' }],
        'body-l': ['21px', { lineHeight: '30px' }],
        'body': ['17px', { lineHeight: '28px' }],
        'caption': ['14px', { lineHeight: '20px', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        sm: '2px',
        md: '6px',
        lg: '12px',
        xl: '20px',
      },
      letterSpacing: {
        eyebrow: '0.12em',
        caption: '0.14em',
        cta: '0.06em',
      },
      boxShadow: {
        'glow-signal': '0 0 24px rgba(43,179,230,0.40)',
        'glow-signal-sm': '0 0 14px rgba(43,179,230,0.18)',
        'glow-card': '0 0 0 1px rgba(43,179,230,0.15), 0 0 20px rgba(43,179,230,0.07)',
      },
    },
  },
  plugins: [],
}

export default config
