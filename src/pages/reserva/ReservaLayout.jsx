import { Outlet, useLocation } from 'react-router-dom'

const PASOS = [
  { path: '/reserva', label: 'Destino' },
  { path: '/reserva/fechas', label: 'Fechas' },
  { path: '/reserva/pago', label: 'Pago' },
  { path: '/reserva/confirmacion', label: 'Confirmación' },
]

export default function ReservaLayout() {
  const { pathname } = useLocation()
  const indiceActual = PASOS.findIndex((p) => p.path === pathname)

  return (
    <div>
      <span className="pill pill-sky">React Router</span>
      <h1>Reserva de Viajes ✈️</h1>
      <p style={{ color: 'var(--ink-soft)' }}>Flujo multi-paso: destino → fechas → pago → confirmación.</p>

      <div className="steps">
        {PASOS.map((paso, i) => (
          <div key={paso.path} style={{ display: 'flex', alignItems: 'center', flex: i < PASOS.length - 1 ? 1 : 'none' }}>
            <div
              className={`step-dot ${i < indiceActual ? 'done' : ''} ${i === indiceActual ? 'active' : ''}`}
              title={paso.label}
            >
              {i + 1}
            </div>
            {i < PASOS.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>

      <div className="card" style={{ maxWidth: 420, borderTopColor: 'var(--sky)' }}>
        <Outlet />
      </div>
    </div>
  )
}
