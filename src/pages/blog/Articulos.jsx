import { Link } from 'react-router-dom'
import { articulos } from './articulosData.js'

export default function Articulos() {
  return (
    <div>
      <h2>Artículos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {articulos.map((a) => (
          <Link
            key={a.id}
            to={`/blog/articulos/${a.id}`}
            style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 12, display: 'block' }}
          >
            <strong>{a.titulo}</strong>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{a.resumen}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
