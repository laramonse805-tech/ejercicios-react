import { useNavigate } from 'react-router-dom'
import { useReserva } from './ReservaContext.jsx'

export default function Fechas() {
  const { reserva, actualizar } = useReserva()
  const navigate = useNavigate()

  function siguiente(e) {
    e.preventDefault()
    navigate('/reserva/pago')
  }

  return (
    <form onSubmit={siguiente}>
      <h2 style={{ marginTop: 0 }}>Paso 2: Fechas</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.85rem' }}>Destino: {reserva.destino || '—'}</p>
      <div className="field">
        <label>Fecha de viaje</label>
        <input
          required
          type="date"
          value={reserva.fecha}
          onChange={(e) => actualizar({ fecha: e.target.value })}
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-ghost" type="button" onClick={() => navigate('/reserva')}>Atrás</button>
        <button className="btn btn-indigo" type="submit">Siguiente</button>
      </div>
    </form>
  )
}
