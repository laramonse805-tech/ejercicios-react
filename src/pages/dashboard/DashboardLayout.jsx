import { NavLink, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <span className="pill pill-lime">React Router</span>
      <h1>Dashboard de Usuario 👤</h1>
      <p style={{ color: 'var(--ink-soft)' }}>Hola, Guillermo! 👋</p>

      <div className="layout-with-side">
        <nav className="side-nav">
          <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'active' : '')}>Resumen</NavLink>
          <NavLink to="/dashboard/estadisticas" className={({ isActive }) => (isActive ? 'active' : '')}>Estadísticas</NavLink>
          <NavLink to="/dashboard/reportes" className={({ isActive }) => (isActive ? 'active' : '')}>Reportes</NavLink>
          <NavLink to="/dashboard/configuracion" className={({ isActive }) => (isActive ? 'active' : '')}>Configuración</NavLink>
        </nav>
        <div className="card" style={{ borderTopColor: 'var(--lime)' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
