import { Link, useNavigate, useParams } from 'react-router-dom'
import { productos } from './productosData.js'
import { useCarrito } from './CarritoContext.jsx'

export default function ProductoDetalle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { agregar } = useCarrito()
  const producto = productos.find((p) => p.id === id)

  if (!producto) {
    return (
      <div>
        <p>Producto no encontrado.</p>
        <Link to="/tienda/productos">← Volver</Link>
      </div>
    )
  }

  function handleAgregar() {
    agregar(producto)
    navigate('/tienda/carrito')
  }

  return (
    <div>
      <Link to="/tienda/productos" style={{ color: 'var(--indigo)', fontSize: '0.85rem' }}>← Volver a productos</Link>
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 12, flexWrap: 'wrap' }}>
        <div style={{ fontSize: '4rem' }}>{producto.emoji}</div>
        <div>
          <h2 style={{ margin: '0 0 4px' }}>{producto.nombre}</h2>
          <p style={{ color: 'var(--ink-soft)', margin: '0 0 8px' }}>{producto.descripcion}</p>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 12px' }}>
            ${producto.precio.toLocaleString('es-CL')}
          </p>
          <button className="btn btn-indigo" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}
