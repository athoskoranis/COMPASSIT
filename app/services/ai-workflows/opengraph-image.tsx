import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AI Workflow Automation in Qatar, GCC — Compass IT Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: '#0B0E10', padding: '80px 96px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(43,179,230,0.12) 0%, transparent 70%)' }} />
        <div style={{ display: 'flex', fontSize: 14, letterSpacing: '0.15em', color: '#2BB3E6', textTransform: 'uppercase', marginBottom: 32, fontFamily: 'monospace' }}>
          DOHA, QATAR · AI AUTOMATION
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#F4F2EC', lineHeight: 1, marginBottom: 16, letterSpacing: '-0.03em' }}>
          AI Workflow Automation
        </div>
        <div style={{ display: 'flex', fontSize: 32, fontWeight: 300, color: 'rgba(244,242,236,0.55)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 48 }}>
          Compass IT Solutions
        </div>
        <div style={{ display: 'flex', fontSize: 18, color: 'rgba(244,242,236,0.35)', letterSpacing: '0.04em' }}>
          Machine Learning · AI Chatbots · Process Automation · Data Annotation
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #2BB3E6 0%, rgba(43,179,230,0.3) 60%, transparent 100%)' }} />
      </div>
    ),
    { ...size }
  )
}
