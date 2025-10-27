import React, { useState, useEffect } from 'react'
import ProductoCard from '../Componentes/ProductoCard/ProductoCard.jsx'
import { products, getProductsByCategory, formatPrice } from '../Data/Productos.js'
import './../Styles/Productos.css'

const Productos = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([])
  const [categoriaFiltro, setCategoriaFiltro] = useState('')
  const [marcaFiltro, setMarcaFiltro] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    setProductos(products)
  }, [])

  // Obtener marcas únicas para el filtro
  const marcas = [...new Set(products.map(product => product.brand))]
  const categorias = [...new Set(products.map(product => product.category))]

  const productosFiltrados = productos.filter(producto => {
    const coincideCategoria = !categoriaFiltro || producto.category === categoriaFiltro
    const coincideMarca = !marcaFiltro || producto.brand === marcaFiltro
    const coincideBusqueda = !busqueda || 
      producto.name.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.brand.toLowerCase().includes(busqueda.toLowerCase())
    
    return coincideCategoria && coincideMarca && coincideBusqueda
  })

  const limpiarFiltros = () => {
    setCategoriaFiltro('')
    setMarcaFiltro('')
    setBusqueda('')
  }

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">Nuestra Colección</h1>
          
          {/* Barra de búsqueda y filtros */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-3">
              <select 
                className="form-select"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="">Todas las categorías</option>
                {categorias.map(categoria => (
                  <option key={categoria} value={categoria}>
                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3 mb-3">
              <select 
                className="form-select"
                value={marcaFiltro}
                onChange={(e) => setMarcaFiltro(e.target.value)}
              >
                <option value="">Todas las marcas</option>
                {marcas.map(marca => (
                  <option key={marca} value={marca}>{marca}</option>
                ))}
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <button 
                className="btn btn-outline-secondary w-100"
                onClick={limpiarFiltros}
              >
                Limpiar
              </button>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="row mb-3">
            <div className="col-12">
              <p className="text-muted">
                {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="row g-4">
            {productosFiltrados.map(producto => (
              <div key={producto.id} className="col-lg-4 col-md-6">
                <ProductoCard 
                  producto={producto}
                  onAgregarAlCarrito={agregarAlCarrito}
                />
              </div>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="text-center py-5">
              <h4>No se encontraron productos</h4>
              <p className="text-muted">Intenta con otros filtros o términos de búsqueda</p>
              <button 
                className="btn btn-primary"
                onClick={limpiarFiltros}
              >
                Ver todos los productos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Productos