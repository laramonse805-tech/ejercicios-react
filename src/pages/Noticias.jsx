import { useEffect, useState } from 'react'

const INTERVALO_MS = 30000 // refresca cada 30 segundos

const BANCO_TITULARES = [
  'React 19 trae nuevas mejoras de rendimiento',
  'Cómo useEffect cambió la forma de sincronizar componentes',
  'Guía rápida para dominar React Router en 2026',
  'Tips para evitar bucles infinitos con useEffect',
  'Por qué la limpieza (cleanup) es tan importante',
  'Comparativa: SPA vs SSR en proyectos reales',
]

// Simula una llamada a una API de noticias (reemplázalo por fetch() a tu API real)
function obtenerNoticiasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const cantidad = 3
      const noticias = Array.from({ length: cantidad }).map((_, i) => ({
        id: `${Date.now()}-${i}`,
        titulo: BANCO_TITULARES[Math.floor(Math.random() * BANCO_TITULARES.length)],
        publicadoHace: 0,
      }))
      resolve(noticias)
    }, 500)
  })
}

export default function Noticias() {
  const [noticias, setNoticias] = useState([])
  const [favoritos, setFavoritos] = useState(new Set())
  const [cargando, setCargando] = useState(true)
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null)

  async function cargar() {
    const nuevas = await obtenerNoticiasSimuladas()
    setNoticias((prev) => [...nuevas, ...prev].slice(0, 12))
    setUltimaActualizacion(new Date())
    setCargando(false)
  }

  // useEffect #1: trae noticias al montar
  useEffect(() => {
    cargar()
  }, [])

  // useEffect #2: refresca cada X segundos (setInterval) y limpia el intervalo al desmontar
  useEffect(() => {
    const interval = setInterval(cargar, INTERVALO_MS)
    return () => clearInterval(interval)
  }, [])

  function toggleFavorito(id) {
    setFavoritos((prev) => {
      const copia = new Set(prev)
      copia.has(id) ? copia.delete(id) : copia.add(id)
      return copia
    })
  }

  return (
    <div>
      <span className="pill pill-amber">useEffect</span>
      <h1>Feed de Noticias 📰</h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Se refresca automáticamente cada {INTERVALO_MS / 1000}s.
        {ultimaActualizacion && ` Última actualización: ${ultimaActualizacion.toLocaleTimeString()}`}
      </p>

      <div className="card" style={{ maxWidth: 480, borderTopColor: 'var(--amber)' }}>
        {cargando && <p>Cargando noticias...</p>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {noticias.map((n) => (
            <div key={n.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>{n.titulo}</p>
                <span style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>hace instantes</span>
              </div>
              <button
                onClick={() => toggleFavorito(n.id)}
                style={{ background: 'none', border: 'none', fontSize: '1.1rem' }}
                aria-label="Marcar como favorito"
              >
                {favoritos.has(n.id) ? '⭐' : '☆'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 16, background: 'var(--amber-soft)', border: 'none', borderTop: 'none' }}>
        <strong>Reto extra resuelto:</strong> puedes marcar noticias como favoritas con la estrella ⭐.
      </div>
    </div>
  )
}
