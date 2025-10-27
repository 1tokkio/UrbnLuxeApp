import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById, formatPrice } from '../Data/Productos.js'
import './../Styles/ProductosDetalle.css'

const ProductosDetalle = ({ agregarAlCarrito }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [producto, setProducto] = useState(null)
  const [tallaSeleccionada, setTallaSeleccionada] = useState('')
  const [colorSeleccionado, setColorSeleccionado] = useState('')
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    const productoEncontrado = getProductById(id)
    if (productoEncontrado) {
      setProducto(productoEncontrado)
      setTallaSeleccionada(productoEncontrado.sizes[0] || '')
      setColorSeleccionado(productoEncontrado.colors[0] || '')
    }
  }, [id])

// En la función handleAgregarAlCarrito:
const handleAgregarAlCarrito = () => {
  if (producto) {
    agregarAlCarrito(producto, tallaSeleccionada, colorSeleccionado, cantidad)
    alert('Producto agregado al carrito!')
  }
}

  if (!producto) {
    return (
      <div className="container mt-5 pt-5">
        <div className="text-center">
          <h2>Producto no encontrado</h2>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => navigate('/productos')}
          >
            Volver a Productos
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={producto.image} 
            alt={producto.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/productos" className="text-decoration-none">Productos</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {producto.name}
              </li>
            </ol>
          </nav>

          <h1 className="display-5 fw-bold">{producto.name}</h1>
          <p className="text-muted h5">{producto.brand}</p>
          <p className="lead">{producto.description}</p>
          
          <div className="mb-4">
            <h2 className="text-primary">{formatPrice(producto.price)}</h2>
          </div>

          {producto.sizes.length > 0 && (
            <div className="mb-4">
              <label className="form-label fw-bold">Talla:</label>
              <div className="d-flex gap-2 flex-wrap">
                {producto.sizes.map(talla => (
                  <button
                    key={talla}
                    className={`btn ${
                      tallaSeleccionada === talla 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'
                    }`}
                    onClick={() => setTallaSeleccionada(talla)}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>
          )}

          {producto.colors.length > 0 && (
            <div className="mb-4">
              <label className="form-label fw-bold">Color:</label>
              <div className="d-flex gap-2 flex-wrap">
                {producto.colors.map(color => (
                  <button
                    key={color}
                    className={`btn ${
                      colorSeleccionado === color 
                        ? 'btn-dark' 
                        : 'btn-outline-dark'
                    }`}
                    onClick={() => setColorSeleccionado(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="form-label fw-bold">Cantidad:</label>
            <div className="d-flex align-items-center gap-3">
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                disabled={cantidad <= 1}
              >
                -
              </button>
              <span className="fw-bold fs-5">{cantidad}</span>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setCantidad(cantidad + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <button 
              className="btn btn-primary btn-lg flex-fill"
              onClick={handleAgregarAlCarrito}
              disabled={!producto.inStock}
            >
              {producto.inStock ? 'Agregar al Carrito' : 'Agotado'}
            </button>
            <button 
              className="btn btn-outline-secondary btn-lg"
              onClick={() => navigate('/productos')}
            >
              Seguir Comprando
            </button>
          </div>

          <div className="mt-4">
            <h5>Características:</h5>
            <ul className="list-unstyled">
              <li>✅ Producto 100% original</li>
              <li>✅ Envío gratis en compras sobre $50.000</li>
              <li>✅ Devolución en 30 días</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductosDetalle