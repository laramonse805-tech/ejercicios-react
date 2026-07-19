import { Link } from 'react-router-dom'
import { articulos } from './articulosData.js'

export default function Inicio() {
  return (
    <div>
      <h2>Bienvenido a mi blog</h2>
      <p style={{ color: 'var(--ink-soft)' }}>Un espacio para compartir lo que voy aprendiendo de React.</p>
      <h3 style={{ fontSize: '1rem' }}>Últimos artículos</h3>
      <ul>
        {articulos.slice(0, 3).map((a) => (
          <li key={a.id}>
            <Link to={`/blog/articulos/${a.id}`} style={{ color: 'var(--indigo)', fontWeight: 600 }}>{a.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
