import { Link } from 'react-router-dom'

const useEffectExercises = [
  { to: '/clima', icon: '☁️', title: 'App del Clima', desc: 'Clima actual por ciudad usando una API real (Open-Meteo).' },
  { to: '/chat', icon: '💬', title: 'Chat en Tiempo Real', desc: 'Mensajes simulados que llegan cada pocos segundos.' },
  { to: '/pomodoro', icon: '🍅', title: 'Pomodoro Timer', desc: 'Temporizador de productividad con sesiones guardadas.' },
  { to: '/noticias', icon: '📰', title: 'Feed de Noticias', desc: 'Noticias que se refrescan automáticamente (setInterval).' },
]

const routerExercises = [
  { to: '/blog', icon: '✏️', title: 'Blog Personal', desc: 'Navegación entre inicio, artículos y detalle.' },
  { to: '/tienda', icon: '🛒', title: 'Tienda Online', desc: 'Productos, detalle, carrito y checkout.' },
  { to: '/dashboard', icon: '👤', title: 'Dashboard de Usuario', desc: 'Layout con rutas anidadas y perfil público.' },
  { to: '/reserva', icon: '✈️', title: 'Reserva de Viajes', desc: 'Flujo multi-paso: destino, fechas, pago y confirmación.' },
]

function Section({ title, color, items }) {
  return (
    <>
      <div className="section-title">
        <span className="bar" style={{ background: color }} />
        <h2 style={{ margin: 0 }}>{title}</h2>
      </div>
      <div className="grid-home">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="home-tile">
            <span style={{ fontSize: '1.6rem' }}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div>
      <h1 className="display" style={{ fontSize: '1.9rem', marginBottom: 4 }}>
        Proyectos &amp; Ejercicios en React
      </h1>
      <p style={{ color: 'var(--ink-soft)', marginTop: 0 }}>
        useEffect y React Router aplicados a casos de la vida real. Elige un ejercicio para verlo funcionando.
      </p>

      <Section title="useEffect — Sincroniza tu app con el mundo real" color="var(--teal)" items={useEffectExercises} />
      <Section title="React Router — Navegación en apps SPA" color="var(--indigo)" items={routerExercises} />
    </div>
  )
}
