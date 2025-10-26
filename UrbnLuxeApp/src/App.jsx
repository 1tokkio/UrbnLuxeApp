import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Componentes/Navbar/Navbar'
import Sidebar from './Componentes/Sidebar/Sidebar'
import Home from './Paginas/Home'
import Productos from './Paginas/Productos'
import ProductosDetalle from './Paginas/ProductosDetalle'
import Categorias from './Paginas/Categorias'
import Carrito from './Paginas/Carrito'
import InicioSesion from './Paginas/InicioSesion'
import Nosotros from './Paginas/Nosotros'
import { useAppState } from './Hooks/appState.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const {
    usuario,
    carrito,
    productos,
    registrarUsuario,
    iniciarSesion,
    cerrarSesion,
    agregarAlCarrito,
    eliminarDelCarrito,
    actualizarCantidad,
    limpiarCarrito
  } = useAppState()

  const [sidebarAbierto, setSidebarAbierto] = React.useState(false)

  const toggleSidebar = () => {
    setSidebarAbierto(!sidebarAbierto)
  }

  return (
    <Router>
      <div className="App">
        <Navbar 
          carrito={carrito} 
          usuario={usuario}
          onToggleSidebar={toggleSidebar}
          onCerrarSesion={cerrarSesion}
        />
        <Sidebar 
          abierto={sidebarAbierto} 
          onCerrar={() => setSidebarAbierto(false)}
          usuario={usuario}
          onCerrarSesion={cerrarSesion}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={
              <Productos 
                productos={productos}
                agregarAlCarrito={agregarAlCarrito} 
              />
            } />
            <Route path="/producto/:id" element={
              <ProductosDetalle 
                productos={productos}
                agregarAlCarrito={agregarAlCarrito} 
              />
            } />
            <Route path="/categorias" element={
              <Categorias 
                productos={productos}
                agregarAlCarrito={agregarAlCarrito} 
              />
            } />
            <Route path="/carrito" element={
              <Carrito 
                carrito={carrito}
                eliminarDelCarrito={eliminarDelCarrito}
                actualizarCantidad={actualizarCantidad}
                limpiarCarrito={limpiarCarrito}
                usuario={usuario}
              />
            } />
            <Route path="/inicio-sesion" element={
              <InicioSesion 
                usuario={usuario}
                onRegistrar={registrarUsuario}
                onIniciarSesion={iniciarSesion}
                onCerrarSesion={cerrarSesion}
              />
            } />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App