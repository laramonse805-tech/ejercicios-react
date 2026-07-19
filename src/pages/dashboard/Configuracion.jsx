import { useState } from 'react'

export default function Configuracion() {
  const [notificaciones, setNotificaciones] = useState(true)

  return (
    <div>
      <h2>Configuración</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <input
          type="checkbox"
          style={{ width: 'auto' }}
          checked={notificaciones}
          onChange={(e) => setNotificaciones(e.target.checked)}
        />
        Recibir notificaciones por correo
      </label>
    </div>
  )
}
