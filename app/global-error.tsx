'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div style={{
          minHeight: '100vh',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'Inter, system-ui, sans-serif',
          color: '#fff',
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 16,
            background: '#111', border: '1.5px solid rgba(201,168,76,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, marginBottom: '1.5rem',
          }}>
            ⚠
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            L & L Shuttle Services
          </h1>
          <p style={{ color: '#aaa', maxWidth: 400, marginBottom: '2rem', lineHeight: 1.6 }}>
            We&apos;re experiencing a technical issue. Please refresh the page or reach
            us directly on WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                padding: '0.75rem 1.75rem', borderRadius: 8,
                background: '#C9A84C', color: '#0A0A0A',
                border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: '0.95rem',
              }}
            >
              Refresh
            </button>
            <a
              href="https://wa.me/27787760388"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '0.75rem 1.75rem', borderRadius: 8,
                background: 'transparent', color: '#C9A84C',
                border: '1.5px solid rgba(201,168,76,0.4)',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
