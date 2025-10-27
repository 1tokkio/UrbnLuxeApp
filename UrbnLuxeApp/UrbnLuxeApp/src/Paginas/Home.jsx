import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">
                URBN <span className="text-primary">LUXE</span>
              </h1>
              <p className="lead mb-4">
                Descubre la última tendencia en moda urbana. Estilo, calidad y actitud en cada prenda.
              </p>
              <Link to="/productos" className="btn btn-primary btn-lg">
                Explorar Colección
              </Link>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Moda Urbana"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-section">
        <div className="container">
          <h2 className="text-center mb-5">Categorías Destacadas</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Streetwear</h5>
                  <p className="card-text">Lo último en tendencias urbanas</p>
                  <Link to="/categorias" className="btn btn-outline-primary">
                    Explorar
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Accesorios</h5>
                  <p className="card-text">Complementa tu estilo</p>
                  <Link to="/categorias" className="btn btn-outline-primary">
                    Explorar
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Calzado</h5>
                  <p className="card-text">Zapatillas y más</p>
                  <Link to="/categorias" className="btn btn-outline-primary">
                    Explorar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home