import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext(null)

export function CarritoProvider({ children }) {
  const [items, setItems] = useState([])

  function agregar(producto) {
    setItems((prev) => {
      const existente = prev.find((i) => i.id === producto.id)
      if (existente) {
        return prev.map((i) => (i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i))
      }
      return [...prev, { ...producto, cantidad: 1 }]
    })
  }

  function quitar(id) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function vaciar() {
    setItems([])
  }

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
  const cantidadTotal = items.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <CarritoContext.Provider value={{ items, agregar, quitar, vaciar, total, cantidadTotal }}>
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  return useContext(CarritoContext)
}
