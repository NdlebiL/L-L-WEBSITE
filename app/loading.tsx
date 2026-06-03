export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.25rem',
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        border: '3px solid #1a1a1a',
        borderTopColor: '#C9A84C',
        animation: 'spin 0.75s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <span style={{
        color: '#C9A84C', fontFamily: 'Inter, sans-serif',
        fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase',
      }}>
        Loading
      </span>
    </div>
  )
}
