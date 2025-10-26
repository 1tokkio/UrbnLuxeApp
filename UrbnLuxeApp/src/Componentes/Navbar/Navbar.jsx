import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ carrito, usuario, onToggleSidebar, onCerrarSesion }) => {
  const navigate = useNavigate()
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0)

  const handleCerrarSesion = () => {
    onCerrarSesion()
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          URBN LUXE
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={onToggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categorias">Categorías</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link to="/carrito" className="btn btn-outline-light position-relative me-2">
              🛒
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {usuario ? (
              <div className="dropdown">
                <button 
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Hola, {usuario.nombre}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span className="dropdown-item-text">
                      <small>{usuario.email}</small>
                    </span>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item"
                      onClick={handleCerrarSesion}
                    >
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/inicio-sesion" className="btn btn-outline-light">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar