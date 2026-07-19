# Ejercicios Semana 8 — React (useEffect + React Router)

Proyecto de Vite + React que implementa los 8 ejercicios de la ficha:

**useEffect**
- App del Clima (usa la API pública gratuita de Open-Meteo, sin API key)
- Chat en Tiempo Real (mensajes simulados con `setInterval`)
- Pomodoro Timer (persistencia de sesiones en `localStorage`)
- Feed de Noticias (refresco automático cada 30s)

**React Router**
- Blog Personal (`/blog`, `/blog/articulos`, `/blog/articulos/:id`, `/blog/acerca`, `/blog/contacto`)
- Tienda Online (`/tienda`, `/tienda/productos/:id`, `/tienda/carrito`, `/tienda/checkout`)
- Dashboard de Usuario (rutas anidadas + `/perfil/:id`)
- Reserva de Viajes multi-paso (`/reserva`, `/reserva/fechas`, `/reserva/pago`, `/reserva/confirmacion`, con progreso guardado en `localStorage`)

## Cómo correrlo

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (por defecto http://localhost:5173).

## Estructura

```
src/
  App.jsx              # todas las rutas
  pages/
    Home.jsx            # menú principal con los 8 ejercicios
    Clima.jsx
    Chat.jsx
    Pomodoro.jsx
    Noticias.jsx
    blog/                # Blog Personal
    tienda/              # Tienda Online (con Context para el carrito)
    dashboard/           # Dashboard de Usuario
    reserva/             # Reserva de Viajes (con Context para el flujo)
```

## Notas

- La App del Clima requiere conexión a internet (llama a `api.open-meteo.com`).
- Los demás ejercicios funcionan totalmente offline con datos simulados.
