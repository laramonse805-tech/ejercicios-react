import { useEffect, useState } from 'react'

// Usa Open-Meteo (API gratuita, sin necesidad de API key) en lugar de OpenWeather
// para que el ejercicio funcione "out of the box".
async function geocodificarCiudad(ciudad) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudad)}&count=1&language=es`
  const res = await fetch(url)
  if (!res.ok) throw new Error('No se pudo buscar la ciudad')
  const data = await res.json()
  if (!data.results || data.results.length === 0) throw new Error('Ciudad no encontrada')
  return data.results[0]
}

async function obtenerClima(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`
  const res = await fetch(url)
  if (!res.ok) throw new Error('No se pudo obtener el clima')
  return res.json()
}

const CODIGOS = {
  0: '☀️ Despejado', 1: '🌤️ Mayormente despejado', 2: '⛅ Parcialmente nublado', 3: '☁️ Nublado',
  45: '🌫️ Niebla', 48: '🌫️ Niebla con escarcha', 51: '🌦️ Llovizna leve', 61: '🌧️ Lluvia leve',
  63: '🌧️ Lluvia moderada', 65: '🌧️ Lluvia fuerte', 71: '🌨️ Nieve leve', 80: '🌦️ Chubascos', 95: '⛈️ Tormenta',
}

export default function Clima() {
  const [ciudadInput, setCiudadInput] = useState('Santiago')
  const [ciudadBuscada, setCiudadBuscada] = useState('Santiago')
  const [clima, setClima] = useState(null)
  const [lugar, setLugar] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  // useEffect #1: obtener datos cada vez que cambia la ciudad buscada
  useEffect(() => {
    let cancelado = false

    async function cargarClima() {
      setCargando(true)
      setError(null)
      try {
        const geo = await geocodificarCiudad(ciudadBuscada)
        const data = await obtenerClima(geo.latitude, geo.longitude)
        if (!cancelado) {
          setLugar(geo)
          setClima(data.current)
        }
      } catch (err) {
        if (!cancelado) setError(err.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    cargarClima()

    // limpieza: evita actualizar el estado si el componente ya cambió de ciudad/desmontó
    return () => {
      cancelado = true
    }
  }, [ciudadBuscada])

  function handleSubmit(e) {
    e.preventDefault()
    if (ciudadInput.trim()) setCiudadBuscada(ciudadInput.trim())
  }

  return (
    <div>
      <span className="pill pill-sky">useEffect</span>
      <h1>App del Clima ☁️</h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Al montar y cada vez que cambia la ciudad, se hace fetch a la API. Se maneja loading y errores.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 20, maxWidth: 360 }}>
        <input
          value={ciudadInput}
          onChange={(e) => setCiudadInput(e.target.value)}
          placeholder="Nombre de la ciudad"
        />
        <button className="btn btn-teal" type="submit">Buscar</button>
      </form>

      <div className="card" style={{ maxWidth: 360, textAlign: 'center', borderTopColor: 'var(--sky)' }}>
        {cargando && <p>Cargando clima...</p>}
        {error && <p style={{ color: '#c0392b' }}>⚠️ {error}</p>}
        {!cargando && !error && clima && (
          <>
            <div style={{ fontSize: '2rem' }}>{CODIGOS[clima.weather_code] ?? '🌡️'}</div>
            <div style={{ fontSize: '3rem', fontWeight: 700 }}>{Math.round(clima.temperature_2m)}°C</div>
            <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
              {lugar?.name}{lugar?.country ? `, ${lugar.country}` : ''}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
              Viento: {clima.wind_speed_10m} km/h
            </p>
          </>
        )}
      </div>

      <div className="card" style={{ marginTop: 16, background: 'var(--sky-soft)', border: 'none', borderTop: 'none' }}>
        <strong>Reto extra:</strong> autocompletar ciudades con búsqueda (debounce) usando otro useEffect
        que dispare la llamada a la API de geocoding 300ms después de dejar de escribir.
      </div>
    </div>
  )
}
