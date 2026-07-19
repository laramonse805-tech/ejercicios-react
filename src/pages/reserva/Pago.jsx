import { useNavigate } from 'react-router-dom'
import { useReserva } from './ReservaContext.jsx'

export default function Pago() {
  const { reserva, actualizar } = useReserva()
  const navigate = useNavigate()

  function siguiente(e) {
    e.preventDefault()
    navigate('/reserva/confirmacion')
  }

  return (
    <form onSubmit={siguiente}>
      <h2 style={{ marginTop: 0 }}>Paso 3: Pago</h2>
      <p style={{ color: 'var(--ink-soft)', fontSize: '0.85rem' }}>
        {reserva.destino || '—'} · {reserva.fecha || '—'}
      </p>
      <div className="field">
        <label>Número de tarjeta</label>
        <input
          required
          maxLength={19}
          value={reserva.tarjeta}
          onChange={(e) => actualizar({ tarjeta: e.target.value })}
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-ghost" type="button" onClick={() => navigate('/reserva/fechas')}>Atrás</button>
        <button className="btn btn-indigo" type="submit">Confirmar y pagar</button>
      </div>
    </form>
  )
}
