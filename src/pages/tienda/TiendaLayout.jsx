import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useCarrito } from './CarritoContext.jsx'

export default function TiendaLayout() {
  const { cantidadTotal } = useCarrito()
  const navigate = useNavigate()

  return (
    <div>
      <span className="pill pill-pink">React Router</span>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Tienda Online 🛒</h1>
        <button className="btn btn-indigo" onClick={() => navigate('/tienda/carrito')}>
          Carrito ({cantidadTotal})
        </button>
      </div>

      <nav className="nav-tabs">
        <NavLink to="/tienda" end className={({ isActive }) => (isActive ? 'active' : '')}>Inicio</NavLink>
        <NavLink to="/tienda/productos" className={({ isActive }) => (isActive ? 'active' : '')}>Productos</NavLink>
        <NavLink to="/tienda/carrito" className={({ isActive }) => (isActive ? 'active' : '')}>Carrito</NavLink>
      </nav>

      <div className="card" style={{ borderTopColor: 'var(--pink)' }}>
        <Outlet />
      </div>
    </div>
  )
}
