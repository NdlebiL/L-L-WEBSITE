import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      color: '#fff',
    }}>
      <div style={{
        fontSize: '5rem', fontWeight: 800, color: '#C9A84C',
        lineHeight: 1, marginBottom: '1rem', letterSpacing: '-2px',
      }}>
        404
      </div>
      <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#aaa', maxWidth: 380, marginBottom: '2.5rem', lineHeight: 1.6 }}>
        This page doesn&apos;t exist. Head back home to book a shuttle or explore our services.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            padding: '0.75rem 1.75rem', borderRadius: 8,
            background: '#C9A84C', color: '#0A0A0A',
            textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem',
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/#booking"
          style={{
            padding: '0.75rem 1.75rem', borderRadius: 8,
            background: 'transparent', color: '#C9A84C',
            border: '1.5px solid rgba(201,168,76,0.4)',
            textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
          }}
        >
          Book a Shuttle
        </Link>
      </div>
    </div>
  )
}
