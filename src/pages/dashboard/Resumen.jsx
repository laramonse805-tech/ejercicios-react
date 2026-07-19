import { Link } from 'react-router-dom'

export default function Resumen() {
  return (
    <div>
      <h2>Resumen</h2>
      <p style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 4px' }}>$ 12.450</p>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>Balance disponible este mes</p>
      <p style={{ fontSize: '0.85rem' }}>
        Tu perfil público: <Link to="/perfil/guillermo" style={{ color: 'var(--indigo)' }}>/perfil/guillermo</Link>
      </p>
    </div>
  )
}
