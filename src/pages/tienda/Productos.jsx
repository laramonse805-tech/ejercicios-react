import { Link } from 'react-router-dom'
import { productos } from './productosData.js'

export default function Productos() {
  return (
    <div>
      <h2>Productos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
        {productos.map((p) => (
          <Link
            key={p.id}
            to={`/tienda/productos/${p.id}`}
            style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 14, textAlign: 'center' }}
          >
            <div style={{ fontSize: '2rem' }}>{p.emoji}</div>
            <p style={{ margin: '6px 0 2px', fontSize: '0.85rem', fontWeight: 600 }}>{p.nombre}</p>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ink-soft)' }}>${p.precio.toLocaleString('es-CL')}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
