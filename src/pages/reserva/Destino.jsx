import { useNavigate } from 'react-router-dom'
import { useReserva } from './ReservaContext.jsx'

export default function Destino() {
  const { reserva, actualizar } = useReserva()
  const navigate = useNavigate()

  function siguiente(e) {
    e.preventDefault()
    navigate('/reserva/fechas')
  }

  return (
    <form onSubmit={siguiente}>
      <h2 style={{ marginTop: 0 }}>Paso 1: Destino</h2>
      <div className="field">
        <label>¿A dónde quieres viajar?</label>
        <input
          required
          value={reserva.destino}
          onChange={(e) => actualizar({ destino: e.target.value })}
          placeholder="Ej: Japón"
        />
      </div>
      <button className="btn btn-indigo" type="submit">Siguiente</button>
    </form>
  )
}
