import React from 'react'
import { Link } from 'react-router-dom'
import './Carrito.css'

const Carrito = ({ carrito, eliminarDelCarrito, actualizarCantidad, abierto, onCerrar }) => {
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

  if (!abierto) return null

  return (
    <div className="carrito-modal">
      <div className="carrito-overlay" onClick={onCerrar}></div>
      <div className="carrito-content">
        <div className="carrito-header">
          <h5>Tu Carrito</h5>
          <button className="carrito-close" onClick={onCerrar}>×</button>
        </div>
        
        <div className="carrito-items">
          {carrito.length === 0 ? (
            <p className="text-center text-muted py-4">Tu carrito está vacío</p>
          ) : (
            carrito.map(item => (
              <div key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} className="carrito-item-img" />
                <div className="carrito-item-info">
                  <h6>{item.nombre}</h6>
                  <p>${item.precio}</p>
                  <div className="carrito-item-controls">
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.cantidad}</span>
                    <button 
                      onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="btn btn-sm btn-danger"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
        
        {carrito.length > 0 && (
          <div className="carrito-footer">
            <div className="carrito-total">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <Link to="/carrito" className="btn btn-primary w-100" onClick={onCerrar}>
              Ver Carrito Completo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carrito