import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ carrito, usuario, onToggleSidebar, onCerrarSesion }) => {
  const navigate = useNavigate();
  const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);

  const handleCerrarSesion = () => {
    onCerrarSesion();
    navigate('/'); // Redirigir al home después de cerrar sesión
  };

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
            {/* Icono del carrito */}
            <Link to="/carrito" className="btn btn-outline-light position-relative me-3">
              🛒
              {totalItems > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Menú de usuario */}
            {usuario ? (
              <div className="dropdown">
                <button 
                  className="btn btn-outline-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  👤 {usuario.nombre}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <span className="dropdown-item-text text-muted small">
                      {usuario.email}
                    </span>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item" to="/carrito">
                      🛒 Mi Carrito
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/productos">
                      🛍️ Seguir Comprando
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item text-danger"
                      onClick={handleCerrarSesion}
                    >
                      🚪 Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/inicio-sesion" className="btn btn-outline-light">
                👤 Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;