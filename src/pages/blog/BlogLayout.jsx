import { NavLink, Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <div>
      <span className="pill pill-indigo">React Router</span>
      <h1>Blog Personal ✏️</h1>

      <nav className="nav-tabs">
        <NavLink to="/blog" end className={({ isActive }) => (isActive ? 'active' : '')}>Inicio</NavLink>
        <NavLink to="/blog/articulos" className={({ isActive }) => (isActive ? 'active' : '')}>Artículos</NavLink>
        <NavLink to="/blog/acerca" className={({ isActive }) => (isActive ? 'active' : '')}>Acerca de</NavLink>
        <NavLink to="/blog/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>Contacto</NavLink>
      </nav>

      <div className="card" style={{ borderTopColor: 'var(--indigo)' }}>
        <Outlet />
      </div>
    </div>
  )
}
