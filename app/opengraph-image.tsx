import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Skynetlabs Wellness Demo — Five premium landing concepts';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #03060d 0%, #0e3a4a 60%, #1a1a40 100%)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          padding: 80,
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 8,
            color: '#5eead4',
            textTransform: 'uppercase',
            marginBottom: 40,
            fontFamily: 'monospace',
          }}
        >
          SKYNETLABS · WELLNESS DEMO
        </div>
        <div style={{ fontSize: 96, lineHeight: 1.05, fontWeight: 400, maxWidth: 1000, display: 'flex', flexDirection: 'column' }}>
          <span>Five directions.</span>
          <span style={{ fontStyle: 'italic', color: '#9ca3af' }}>One you.</span>
        </div>
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 18,
            fontFamily: 'monospace',
            letterSpacing: 2,
          }}
        >
          <span>HELIX · APOTHECARY · GLASS · CODEX · MAISON</span>
          <span>skynetjoe.com</span>
        </div>
      </div>
    ),
    size,
  );
}
