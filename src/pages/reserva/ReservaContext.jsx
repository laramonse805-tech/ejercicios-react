import { createContext, useContext, useEffect, useState } from 'react'

const ReservaContext = createContext(null)

const ESTADO_INICIAL = { destino: '', fecha: '', tarjeta: '' }

export function ReservaProvider({ children }) {
  // Reto extra: guardar progreso en localStorage
  const [reserva, setReserva] = useState(() => {
    const guardado = localStorage.getItem('reserva-progreso')
    return guardado ? JSON.parse(guardado) : ESTADO_INICIAL
  })

  useEffect(() => {
    localStorage.setItem('reserva-progreso', JSON.stringify(reserva))
  }, [reserva])

  function actualizar(campos) {
    setReserva((prev) => ({ ...prev, ...campos }))
  }

  function reiniciar() {
    setReserva(ESTADO_INICIAL)
    localStorage.removeItem('reserva-progreso')
  }

  return (
    <ReservaContext.Provider value={{ reserva, actualizar, reiniciar }}>
      {children}
    </ReservaContext.Provider>
  )
}

export function useReserva() {
  return useContext(ReservaContext)
}
