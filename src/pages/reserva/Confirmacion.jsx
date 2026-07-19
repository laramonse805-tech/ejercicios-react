import { useNavigate } from 'react-router-dom'
import { useReserva } from './ReservaContext.jsx'

export default function Confirmacion() {
  const { reserva, reiniciar } = useReserva()
  const navigate = useNavigate()

  function nuevaReserva() {
    reiniciar()
    navigate('/reserva')
  }

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>✅ ¡Reserva confirmada!</h2>
      <ul style={{ paddingLeft: 18, color: 'var(--ink-soft)' }}>
        <li>Destino: {reserva.destino}</li>
        <li>Fecha: {reserva.fecha}</li>
        <li>Tarjeta: **** **** **** {reserva.tarjeta.slice(-4)}</li>
      </ul>
      <button className="btn btn-indigo" onClick={nuevaReserva}>Hacer otra reserva</button>
    </div>
  )
}
