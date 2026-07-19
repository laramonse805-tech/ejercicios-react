import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return <p>✅ ¡Gracias por tu mensaje! Te responderé pronto.</p>
  }

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
        <div className="field">
          <label>Nombre</label>
          <input required placeholder="Tu nombre" />
        </div>
        <div className="field">
          <label>Mensaje</label>
          <textarea required rows={4} placeholder="Escribe tu mensaje" />
        </div>
        <button className="btn btn-indigo" type="submit">Enviar</button>
      </form>
    </div>
  )
}
