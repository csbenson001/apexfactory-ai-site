import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0a0a0a', border: '2px solid #c9a84c', borderRadius: 4,
      }}>
        <span style={{ color: '#c9a84c', fontSize: 18, fontWeight: 900, fontFamily: 'sans-serif' }}>A</span>
      </div>
    ),
    { ...size }
  )
}
