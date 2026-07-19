import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCarrito } from './CarritoContext.jsx'

export default function Checkout() {
  const { items, total, vaciar } = useCarrito()
  const navigate = useNavigate()
  const [confirmado, setConfirmado] = useState(false)

  function confirmarCompra(e) {
    e.preventDefault()
    setConfirmado(true)
    vaciar()
  }

  if (confirmado) {
    return (
      <div>
        <h2>✅ ¡Compra confirmada!</h2>
        <p style={{ color: 'var(--ink-soft)' }}>Gracias por tu pedido. Te llegará un correo con el detalle.</p>
        <button className="btn btn-indigo" onClick={() => navigate('/tienda')}>Volver a la tienda</button>
      </div>
    )
  }

  if (items.length === 0) {
    return <p>No hay productos en el carrito para pagar.</p>
  }

  return (
    <div>
      <h2>Resumen de compra</h2>
      {items.map((i) => (
        <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: 4 }}>
          <span>{i.cantidad} × {i.nombre}</span>
          <span>${(i.precio * i.cantidad).toLocaleString('es-CL')}</span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, margin: '10px 0 16px' }}>
        <span>Total a pagar</span>
        <span>${total.toLocaleString('es-CL')}</span>
      </div>
      <form onSubmit={confirmarCompra} style={{ maxWidth: 320 }}>
        <div className="field">
          <label>Nombre en la tarjeta</label>
          <input required placeholder="Nombre completo" />
        </div>
        <div className="field">
          <label>Dirección de envío</label>
          <input required placeholder="Calle, número, ciudad" />
        </div>
        <button className="btn btn-indigo" type="submit">Confirmar compra</button>
      </form>
    </div>
  )
}
