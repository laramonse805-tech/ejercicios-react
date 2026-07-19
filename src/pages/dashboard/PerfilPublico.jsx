import { Link, useParams } from 'react-router-dom'

export default function PerfilPublico() {
  const { id } = useParams()

  return (
    <div>
      <span className="pill pill-lime">React Router</span>
      <h1>Perfil público</h1>
      <div className="card" style={{ maxWidth: 360 }}>
        <div style={{ fontSize: '2rem' }}>🧑‍💻</div>
        <h2 style={{ margin: '4px 0' }}>{id}</h2>
        <p style={{ color: 'var(--ink-soft)' }}>Este es el perfil público de <strong>{id}</strong>, visible para cualquier visitante.</p>
      </div>
      <Link to="/dashboard" style={{ color: 'var(--indigo)', fontSize: '0.85rem' }}>← Volver al dashboard</Link>
    </div>
  )
}
