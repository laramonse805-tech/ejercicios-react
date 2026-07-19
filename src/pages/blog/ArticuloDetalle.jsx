import { Link, useParams } from 'react-router-dom'
import { articulos } from './articulosData.js'

export default function ArticuloDetalle() {
  const { id } = useParams()
  const articulo = articulos.find((a) => a.id === id)

  if (!articulo) {
    return (
      <div>
        <p>Artículo no encontrado.</p>
        <Link to="/blog/articulos">← Volver a artículos</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/blog/articulos" style={{ color: 'var(--indigo)', fontSize: '0.85rem' }}>← Volver a artículos</Link>
      <h2>{articulo.titulo}</h2>
      <p>{articulo.contenido}</p>
    </div>
  )
}
