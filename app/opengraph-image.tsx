import { ImageResponse } from 'next/og'

export const alt = 'ApexFactory.ai — Peak Performance. Factory Scale.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#050505', fontFamily: 'sans-serif',
        border: '1px solid #1e1e1e',
      }}>
        <div style={{ fontSize: 72, fontWeight: 800, color: '#c9a84c', letterSpacing: '0.08em' }}>APEXFACTORY.AI</div>
        <div style={{ fontSize: 28, color: '#8a8578', marginTop: 20, letterSpacing: '0.1em' }}>Peak Performance. Factory Scale.</div>
      </div>
    ),
    { ...size }
  )
}
