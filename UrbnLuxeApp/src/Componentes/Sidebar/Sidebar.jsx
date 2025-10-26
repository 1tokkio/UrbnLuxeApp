import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ abierto, onCerrar }) => {
  return (
    <>
      <div className={`sidebar-overlay ${abierto ? 'active' : ''}`} onClick={onCerrar}></div>
      
      <div className={`sidebar ${abierto ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h5 className="sidebar-title">URBN LUXE</h5>
          <button className="sidebar-close" onClick={onCerrar}>×</button>
        </div>
        
        <div className="sidebar-content">
          <Link to="/" className="sidebar-link" onClick={onCerrar}>
            Inicio
          </Link>
          <Link to="/productos" className="sidebar-link" onClick={onCerrar}>
            Productos
          </Link>
          <Link to="/categorias" className="sidebar-link" onClick={onCerrar}>
            Categorías
          </Link>
          <Link to="/nosotros" className="sidebar-link" onClick={onCerrar}>
            Nosotros
          </Link>
          <Link to="/carrito" className="sidebar-link" onClick={onCerrar}>
            Carrito
          </Link>
          <Link to="/inicio-sesion" className="sidebar-link" onClick={onCerrar}>
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar