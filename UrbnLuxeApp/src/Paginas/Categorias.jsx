import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductoCard from '../Componentes/ProductoCard/ProductoCard'
import { products, getProductsByCategory, formatPrice } from './../Productos.js'
import './../Styles/Categorias.css'

const Categorias = ({ agregarAlCarrito }) => {
  const [categoriaActiva, setCategoriaActiva] = useState('todos')
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const categorias = [
    {
      id: 'todos',
      nombre: 'Todos los Productos',
      icono: '📦',
      count: products.length
    },
    {
      id: 'hombre',
      nombre: 'Ropa Hombre',
      icono: '👨',
      count: products.filter(p => p.category === 'camisetas' || p.category === 'sudaderas' || p.category === 'pantalones').length
    },
    {
      id: 'mujer',
      nombre: 'Ropa Mujer',
      icono: '👩',
      count: products.filter(p => p.category === 'poleras' || p.category === 'chaquetas').length
    },
    {
      id: 'calzado',
      nombre: 'Zapatillas',
      icono: '👟',
      count: products.filter(p => p.category === 'calzado').length
    },
    {
      id: 'accesorios',
      nombre: 'Accesorios',
      icono: '🕶️',
      count: products.filter(p => p.category === 'accesorios').length
    },
    {
      id: 'chaquetas',
      nombre: 'Chaquetas',
      icono: '🧥',
      count: products.filter(p => p.category === 'chaquetas').length
    }
  ]

  useEffect(() => {
    filtrarProductos(categoriaActiva)
  }, [categoriaActiva])

  const filtrarProductos = (categoria) => {
    let productosFiltrados = []

    switch (categoria) {
      case 'todos':
        productosFiltrados = products
        break
      case 'hombre':
        productosFiltrados = products.filter(p => 
          p.category === 'camisetas' || 
          p.category === 'sudaderas' || 
          p.category === 'pantalones'
        )
        break
      case 'mujer':
        productosFiltrados = products.filter(p => 
          p.category === 'poleras' || 
          p.category === 'chaquetas'
        )
        break
      case 'calzado':
        productosFiltrados = products.filter(p => p.category === 'calzado')
        break
      case 'accesorios':
        productosFiltrados = products.filter(p => p.category === 'accesorios')
        break
      case 'chaquetas':
        productosFiltrados = products.filter(p => p.category === 'chaquetas')
        break
      default:
        productosFiltrados = products
    }

    setProductosFiltrados(productosFiltrados)
  }

  const getCategoriaActual = () => {
    return categorias.find(cat => cat.id === categoriaActiva)
  }

  return (
    <div className="categorias-page">
      <div className="container mt-5 pt-5">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold mb-3">Explorar por Categorías</h1>
            <p className="lead text-muted">
              Descubre nuestra colección organizada por categorías
            </p>
          </div>
        </div>

        {/* Navegación de Categorías */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="categorias-nav">
              {categorias.map(categoria => (
                <button
                  key={categoria.id}
                  className={`categoria-btn ${categoriaActiva === categoria.id ? 'active' : ''}`}
                  onClick={() => setCategoriaActiva(categoria.id)}
                >
                  <span className="categoria-icono">{categoria.icono}</span>
                  <span className="categoria-nombre">{categoria.nombre}</span>
                  <span className="categoria-count">{categoria.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Información de la Categoría Actual */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="categoria-info">
              <h2 className="categoria-titulo">
                {getCategoriaActual()?.icono} {getCategoriaActual()?.nombre}
              </h2>
              <p className="categoria-subtitulo">
                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div className="row g-4">
          {productosFiltrados.map(producto => (
            <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductoCard 
                producto={producto}
                onAgregarAlCarrito={agregarAlCarrito}
              />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay productos */}
        {productosFiltrados.length === 0 && (
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="no-products">
                <h3>No hay productos en esta categoría</h3>
                <p className="text-muted mb-4">
                  Prueba con otra categoría o explora todos nuestros productos
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setCategoriaActiva('todos')}
                >
                  Ver Todos los Productos
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Banner de Categorías */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="categorias-banner">
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="banner-card hombre">
                    <div className="banner-content">
                      <h4>Colección Hombre</h4>
                      <p>Estilo urbano para él</p>
                      <button 
                        className="btn btn-outline-light"
                        onClick={() => setCategoriaActiva('hombre')}
                      >
                        Explorar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="banner-card mujer">
                    <div className="banner-content">
                      <h4>Colección Mujer</h4>
                      <p>Tendencias femeninas</p>
                      <button 
                        className="btn btn-outline-light"
                        onClick={() => setCategoriaActiva('mujer')}
                      >
                        Explorar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="banner-card accesorios">
                    <div className="banner-content">
                      <h4>Accesorios</h4>
                      <p>Complementa tu estilo</p>
                      <button 
                        className="btn btn-outline-light"
                        onClick={() => setCategoriaActiva('accesorios')}
                      >
                        Explorar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categorias