import { useEffect, useRef, useState } from 'react'

const AUTORES = ['Ana', 'Luis', 'Camila', 'Pedro']
const MENSAJES_DEMO = [
  '¡Hola! ¿cómo va todo?',
  'Terminando el ejercicio de useEffect 💪',
  'Este mensaje llegó solo, sin recargar la página',
  '¿Alguien probó el reto extra?',
  'El scroll automático quedó genial',
  'Nos vemos en la próxima clase 👋',
]

export default function Chat() {
  const [mensajes, setMensajes] = useState([
    { id: 0, autor: 'Sistema', texto: 'Conectando al chat...', hora: horaActual() },
  ])
  const [texto, setTexto] = useState('')
  const finRef = useRef(null)

  // useEffect #1: simula la conexión al montar
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMensajes((prev) => [...prev, { id: 1, autor: 'Sistema', texto: 'Conectado ✅', hora: horaActual() }])
    }, 600)
    return () => clearTimeout(timeout)
  }, [])

  // useEffect #2: escucha "nuevos mensajes" cada pocos segundos (simulado con setInterval)
  useEffect(() => {
    let contador = 2
    const interval = setInterval(() => {
      const autor = AUTORES[Math.floor(Math.random() * AUTORES.length)]
      const texto = MENSAJES_DEMO[Math.floor(Math.random() * MENSAJES_DEMO.length)]
      setMensajes((prev) => [...prev, { id: contador++, autor, texto, hora: horaActual() }])
    }, 4000)

    // limpieza: se desconecta al desmontar el componente
    return () => clearInterval(interval)
  }, [])

  // useEffect #3 (reto extra resuelto): scroll automático al último mensaje
  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes])

  function enviarMensaje(e) {
    e.preventDefault()
    if (!texto.trim()) return
    setMensajes((prev) => [...prev, { id: Date.now(), autor: 'Tú', texto, hora: horaActual() }])
    setTexto('')
  }

  return (
    <div>
      <span className="pill pill-teal">useEffect</span>
      <h1>Chat en Tiempo Real 💬</h1>
      <p style={{ color: 'var(--ink-soft)' }}>Simula mensajes entrantes cada 4 segundos con setInterval.</p>

      <div className="card" style={{ maxWidth: 460, display: 'flex', flexDirection: 'column', height: 420 }}>
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {mensajes.map((m) => (
            <div key={m.id} style={{ alignSelf: m.autor === 'Tú' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
              <div
                style={{
                  background: m.autor === 'Tú' ? 'var(--indigo)' : m.autor === 'Sistema' ? 'var(--border)' : 'var(--teal-soft)',
                  color: m.autor === 'Tú' ? '#fff' : 'var(--ink)',
                  borderRadius: 12,
                  padding: '8px 12px',
                  fontSize: '0.88rem',
                }}
              >
                {m.autor !== 'Sistema' && <strong style={{ display: 'block', fontSize: '0.72rem', opacity: 0.75 }}>{m.autor}</strong>}
                {m.texto}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--ink-soft)', textAlign: m.autor === 'Tú' ? 'right' : 'left' }}>
                {m.hora}
              </div>
            </div>
          ))}
          <div ref={finRef} />
        </div>
        <form onSubmit={enviarMensaje} style={{ display: 'flex', gap: 8, marginTop: 10 }}>
          <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe un mensaje..." />
          <button className="btn btn-teal" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

function horaActual() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
