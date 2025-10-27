import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../Data/Productos.js'
import './ProductoCard.css'

const ProductoCard = ({ producto, onAgregarAlCarrito }) => {
  const handleAgregarCarrito = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onAgregarAlCarrito(producto)
  }

  return (
    <div className="producto-card">
      <div className="producto-imagen-container">
        <img 
          src={producto.image} 
          alt={producto.name}
          className="producto-imagen"
        />
        <div className="producto-overlay">
          <button 
            className="btn btn-primary btn-agregar"
            onClick={handleAgregarCarrito}
          >
            Agregar al Carrito
          </button>
        </div>
        {!producto.inStock && (
          <div className="producto-agotado">
            Agotado
          </div>
        )}
      </div>
      
      <div className="producto-info">
        <span className="producto-marca">{producto.brand}</span>
        <h5 className="producto-nombre">{producto.name}</h5>
        <p className="producto-descripcion">{producto.description}</p>
        <div className="producto-precio-container">
          <span className="producto-precio">{formatPrice(producto.price)}</span>
        </div>
        <div className="producto-actions">
          <Link 
            to={`/producto/${producto.id}`}
            className="btn btn-outline-secondary btn-sm"
          >
            Ver Detalles
          </Link>
          <button 
            className="btn btn-primary btn-sm"
            onClick={handleAgregarCarrito}
            disabled={!producto.inStock}
          >
            {producto.inStock ? 'Agregar' : 'Agotado'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductoCard