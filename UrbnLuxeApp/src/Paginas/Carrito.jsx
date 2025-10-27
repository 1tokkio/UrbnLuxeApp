import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../Data/Productos.js'
import '../Styles/Carrito.css'

const Carrito = ({ carrito, eliminarDelCarrito, actualizarCantidad, limpiarCarrito, usuario }) => {
  const total = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0)

  if (carrito.length === 0) {
    return (
      <div className="carrito-page">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Tu carrito está vacío</h2>
              <p className="lead mb-4">Visita nuestro nuevo catalogo y añade algunos a tu carrito</p>
              <Link to="/productos" className="btn btn-primary btn-lg">
                Explorar Productos
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="carrito-page">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Tu Carrito</h1>
            {usuario && (
              <div className="alert alert-info">
                <strong>Hola, {usuario.nombre}!</strong> Tu carrito está guardado en tu cuenta.
              </div>
            )}
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            {carrito.map(item => (
              <div key={item.idUnico} className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </div>
                    <div className="col-md-4">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-primary fw-bold">{formatPrice(item.price)}</p>
                      {item.tallaSeleccionada && (
                        <p className="card-text">
                          <small>Talla: {item.tallaSeleccionada}</small>
                        </p>
                      )}
                      {item.colorSeleccionado && (
                        <p className="card-text">
                          <small>Color: {item.colorSeleccionado}</small>
                        </p>
                      )}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => actualizarCantidad(item.idUnico, item.cantidad - 1)}
                        >
                          -
                        </button>
                        <span className="mx-3 fw-bold">{item.cantidad}</span>
                        <button 
                          className="btn btn-outline-secondary"
                          onClick={() => actualizarCantidad(item.idUnico, item.cantidad + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <p className="fw-bold">{formatPrice(item.price * item.cantidad)}</p>
                    </div>
                    <div className="col-md-1">
                      <button 
                        className="btn btn-danger"
                        onClick={() => eliminarDelCarrito(item.idUnico)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-end mb-4">
              <button 
                className="btn btn-outline-danger"
                onClick={limpiarCarrito}
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen del Pedido</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong>Total:</strong>
                  <strong>{formatPrice(total)}</strong>
                </div>
                <button className="btn btn-primary w-100 btn-lg">
                  Proceder al Pago
                </button>
                {!usuario && (
                  <div className="mt-3 text-center">
                    <small className="text-muted">
                      <Link to="/inicio-sesion">Inicia sesión</Link> para guardar tu carrito
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrito