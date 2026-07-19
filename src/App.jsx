import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Clima from './pages/Clima.jsx'
import Chat from './pages/Chat.jsx'
import Pomodoro from './pages/Pomodoro.jsx'
import Noticias from './pages/Noticias.jsx'

import BlogLayout from './pages/blog/BlogLayout.jsx'
import BlogInicio from './pages/blog/Inicio.jsx'
import Articulos from './pages/blog/Articulos.jsx'
import ArticuloDetalle from './pages/blog/ArticuloDetalle.jsx'
import Acerca from './pages/blog/Acerca.jsx'
import Contacto from './pages/blog/Contacto.jsx'

import TiendaLayout from './pages/tienda/TiendaLayout.jsx'
import Productos from './pages/tienda/Productos.jsx'
import ProductoDetalle from './pages/tienda/ProductoDetalle.jsx'
import Carrito from './pages/tienda/Carrito.jsx'
import Checkout from './pages/tienda/Checkout.jsx'
import { CarritoProvider } from './pages/tienda/CarritoContext.jsx'

import DashboardLayout from './pages/dashboard/DashboardLayout.jsx'
import Resumen from './pages/dashboard/Resumen.jsx'
import Estadisticas from './pages/dashboard/Estadisticas.jsx'
import Reportes from './pages/dashboard/Reportes.jsx'
import Configuracion from './pages/dashboard/Configuracion.jsx'
import PerfilPublico from './pages/dashboard/PerfilPublico.jsx'

import ReservaLayout from './pages/reserva/ReservaLayout.jsx'
import { ReservaProvider } from './pages/reserva/ReservaContext.jsx'
import Destino from './pages/reserva/Destino.jsx'
import Fechas from './pages/reserva/Fechas.jsx'
import Pago from './pages/reserva/Pago.jsx'
import Confirmacion from './pages/reserva/Confirmacion.jsx'

function Breadcrumb() {
  const { pathname } = useLocation()
  if (pathname === '/') return null
  return (
    <div className="breadcrumb">
      <Link to="/">Inicio</Link> <span> / </span>{pathname}
    </div>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="topbar">
        <Link to="/" className="brand">
          <span className="brand-dot" />
          Ejercicios Semana 8 · React
        </Link>
        <Breadcrumb />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* useEffect */}
        <Route path="/clima" element={<Clima />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/noticias" element={<Noticias />} />

        {/* Blog Personal */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogInicio />} />
          <Route path="articulos" element={<Articulos />} />
          <Route path="articulos/:id" element={<ArticuloDetalle />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>

        {/* Tienda Online */}
        <Route
          path="/tienda/*"
          element={
            <CarritoProvider>
              <TiendaLayout />
            </CarritoProvider>
          }
        >
          <Route index element={<Productos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:id" element={<ProductoDetalle />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Dashboard de Usuario */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Resumen />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="reportes" element={<Reportes />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
        <Route path="/perfil/:id" element={<PerfilPublico />} />

        {/* Reserva de Viajes (multi-paso) */}
        <Route
          path="/reserva/*"
          element={
            <ReservaProvider>
              <ReservaLayout />
            </ReservaProvider>
          }
        >
          <Route index element={<Destino />} />
          <Route path="fechas" element={<Fechas />} />
          <Route path="pago" element={<Pago />} />
          <Route path="confirmacion" element={<Confirmacion />} />
        </Route>

        <Route path="*" element={<h2>404 — Página no encontrada</h2>} />
      </Routes>
    </div>
  )
}
