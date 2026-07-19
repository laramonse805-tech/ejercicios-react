import { useEffect, useState } from 'react'

const DURACION_FOCO = 25 * 60
const DURACION_DESCANSO = 5 * 60

export default function Pomodoro() {
  const [segundos, setSegundos] = useState(DURACION_FOCO)
  const [corriendo, setCorriendo] = useState(false)
  const [modo, setModo] = useState('foco') // 'foco' | 'descanso'
  const [sesiones, setSesiones] = useState(() => {
    const guardado = localStorage.getItem('pomodoro-sesiones')
    return guardado ? Number(guardado) : 0
  })

  // useEffect #1: cuenta el tiempo cada segundo mientras está corriendo
  useEffect(() => {
    if (!corriendo) return

    const interval = setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // limpieza: pausar/reiniciar cancela el interval anterior
    return () => clearInterval(interval)
  }, [corriendo])

  // useEffect #2: cuando llega a 0, notifica y cambia de modo
  useEffect(() => {
    if (segundos !== 0) return
    setCorriendo(false)

    if (modo === 'foco') {
      const nuevas = sesiones + 1
      setSesiones(nuevas)
      alert('¡Sesión completada! Hora de un descanso 🎉')
      setModo('descanso')
      setSegundos(DURACION_DESCANSO)
    } else {
      alert('Descanso terminado. ¡A concentrarse de nuevo! 🍅')
      setModo('foco')
      setSegundos(DURACION_FOCO)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segundos])

  // useEffect #3 (reto extra): guardar las sesiones en localStorage
  useEffect(() => {
    localStorage.setItem('pomodoro-sesiones', String(sesiones))
  }, [sesiones])

  function reiniciar() {
    setCorriendo(false)
    setModo('foco')
    setSegundos(DURACION_FOCO)
  }

  const mm = String(Math.floor(segundos / 60)).padStart(2, '0')
  const ss = String(segundos % 60).padStart(2, '0')

  return (
    <div>
      <span className="pill pill-teal">useEffect</span>
      <h1>Pomodoro Timer 🍅</h1>
      <p style={{ color: 'var(--ink-soft)' }}>Temporizador de productividad. El progreso se guarda en localStorage.</p>

      <div className="card" style={{ maxWidth: 320, textAlign: 'center' }}>
        <span className="pill" style={{ background: modo === 'foco' ? 'var(--teal-soft)' : 'var(--indigo-soft)', color: modo === 'foco' ? 'var(--teal)' : 'var(--indigo)' }}>
          {modo === 'foco' ? 'Enfoque' : 'Descanso'}
        </span>
        <div style={{ fontSize: '3.2rem', fontWeight: 700, margin: '12px 0' }}>{mm}:{ss}</div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button className="btn btn-teal" onClick={() => setCorriendo(true)} disabled={corriendo}>Iniciar</button>
          <button className="btn btn-ghost" onClick={() => setCorriendo(false)} disabled={!corriendo}>Pausar</button>
          <button className="btn btn-ghost" onClick={reiniciar}>Reiniciar</button>
        </div>
        <p style={{ marginTop: 14, color: 'var(--ink-soft)', fontSize: '0.85rem' }}>Sesiones completadas: {sesiones}</p>
      </div>
    </div>
  )
}
