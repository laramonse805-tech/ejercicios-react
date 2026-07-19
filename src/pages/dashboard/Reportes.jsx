const reportes = [
  { nombre: 'Reporte de ventas — Junio', fecha: '01/07/2026' },
  { nombre: 'Reporte de gastos — Junio', fecha: '01/07/2026' },
  { nombre: 'Reporte anual 2025', fecha: '15/01/2026' },
]

export default function Reportes() {
  return (
    <div>
      <h2>Reportes</h2>
      <ul style={{ paddingLeft: 18 }}>
        {reportes.map((r) => (
          <li key={r.nombre} style={{ marginBottom: 6 }}>
            {r.nombre} <span style={{ color: 'var(--ink-soft)', fontSize: '0.8rem' }}>({r.fecha})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
