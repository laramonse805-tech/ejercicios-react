const datos = [
  { mes: 'Ene', valor: 40 }, { mes: 'Feb', valor: 65 }, { mes: 'Mar', valor: 50 },
  { mes: 'Abr', valor: 80 }, { mes: 'May', valor: 55 }, { mes: 'Jun', valor: 90 },
]

export default function Estadisticas() {
  const max = Math.max(...datos.map((d) => d.valor))
  return (
    <div>
      <h2>Estadísticas</h2>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 140 }}>
        {datos.map((d) => (
          <div key={d.mes} style={{ textAlign: 'center', flex: 1 }}>
            <div
              style={{
                height: `${(d.valor / max) * 100}px`,
                background: 'var(--indigo)',
                borderRadius: '6px 6px 0 0',
              }}
            />
            <span style={{ fontSize: '0.72rem', color: 'var(--ink-soft)' }}>{d.mes}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
