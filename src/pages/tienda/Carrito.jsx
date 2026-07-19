import { Link, useNavigate } from 'react-router-dom'
import { useCarrito } from './CarritoContext.jsx'

export default function Carrito() {
  const { items, quitar, total } = useCarrito()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/tienda/productos" className="btn btn-indigo" style={{ display: 'inline-block', marginTop: 8 }}>
          Ver productos
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Carrito</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((i) => (
          <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
            <div>
              <strong>{i.emoji} {i.nombre}</strong>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                {i.cantidad} × ${i.precio.toLocaleString('es-CL')}
              </p>
            </div>
            <button className="btn btn-ghost" onClick={() => quitar(i.id)}>Quitar</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, fontWeight: 700 }}>
        <span>Total</span>
        <span>${total.toLocaleString('es-CL')}</span>
      </div>
      <button className="btn btn-indigo" style={{ marginTop: 12, width: '100%' }} onClick={() => navigate('/tienda/checkout')}>
        Ir a pagar
      </button>
    </div>
  )
}
