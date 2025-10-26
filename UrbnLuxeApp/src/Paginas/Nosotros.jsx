import React, { useState } from 'react'
import './../Styles/Nosotros.css'

const Nosotros = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validación de nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    // Validación de teléfono
    const phoneRegex = /^[0-9+-\s()]{8,}$/
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido'
    }

    // Validación de mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length === 0) {
      // Simular envío del formulario
      console.log('Formulario enviado:', formData)
      setEnviado(true)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      })
      setTimeout(() => setEnviado(false), 5000)
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <div className="nosotros-page">
      {/* Hero Section */}
      <section className="nosotros-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="nosotros-titulo">Sobre URBN LUXE</h1>
              <p className="nosotros-subtitulo">
                Más que una marca, un estilo de vida urbano
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="nuestra-historia py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-titulo">Nuestra Historia</h2>
              <p className="historia-texto">
                URBN LUXE nació en 2020 con la visión de revolucionar la moda urbana, 
                combinando estilo, calidad y conciencia social. Lo que comenzó como 
                un pequeño proyecto entre amigos, hoy se ha convertido en un referente 
                de la moda streetwear en Latinoamérica.
              </p>
              <p className="historia-texto">
                Nos especializamos en prendas que no solo destacan por su diseño 
                vanguardista, sino también por su calidad excepcional y producción 
                responsable. Cada pieza cuenta una historia y está diseñada para 
                aquellos que buscan expresar su identidad a través de la moda.
              </p>
              <div className="estadisticas">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>5K+</h3>
                      <p>Clientes Satisfechos</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>18</h3>
                      <p>Marcas Exclusivas</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>3</h3>
                      <p>Años de Experiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="historia-imagen">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Nuestra tienda URBN LUXE"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="valores-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-titulo">Nuestros Valores</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="valor-card text-center">
                <div className="valor-icono">🎯</div>
                <h4>Calidad Premium</h4>
                <p>
                  Seleccionamos cuidadosamente cada material para garantizar 
                  durabilidad y comfort excepcional en todas nuestras prendas.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="valor-card text-center">
                <div className="valor-icono">🌱</div>
                <h4>Sostenibilidad</h4>
                <p>
                  Comprometidos con el medio ambiente y prácticas de producción 
                  responsables en toda nuestra cadena de suministro.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="valor-card text-center">
                <div className="valor-icono">💫</div>
                <h4>Innovación</h4>
                <p>
                  Siempre a la vanguardia de las tendencias, creando diseños 
                  únicos que definen el estilo urbano contemporáneo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto y Redes Sociales */}
      <section className="contacto-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="section-titulo">Contáctanos</h2>
              <div className="info-contacto">
                <div className="contacto-item">
                  <span className="contacto-icono">📧</span>
                  <div>
                    <h5>Email</h5>
                    <p>info@urbnluxe.com</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <span className="contacto-icono">📞</span>
                  <div>
                    <h5>Teléfono</h5>
                    <p>+56 9 1234 5678</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <span className="contacto-icono">📍</span>
                  <div>
                    <h5>Ubicación</h5>
                    <p>Av. Providencia 1234, Santiago, Chile</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <span className="contacto-icono">🕒</span>
                  <div>
                    <h5>Horario</h5>
                    <p>Lunes a Viernes: 10:00 - 20:00<br/>
                       Sábados: 11:00 - 19:00</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="redes-sociales">
                <h5>Síguenos en:</h5>
                <div className="redes-links">
                  <a href="#" className="red-social-link" aria-label="Instagram">
                    <span className="red-social-icono">📷</span>
                    Instagram
                  </a>
                  <a href="#" className="red-social-link" aria-label="Facebook">
                    <span className="red-social-icono">👥</span>
                    Facebook
                  </a>
                  <a href="#" className="red-social-link" aria-label="TikTok">
                    <span className="red-social-icono">🎵</span>
                    TikTok
                  </a>
                  <a href="#" className="red-social-link" aria-label="Twitter">
                    <span className="red-social-icono">🐦</span>
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="formulario-contacto">
                <h3 className="formulario-titulo">Déjanos un Mensaje</h3>
                {enviado && (
                  <div className="alert alert-success" role="alert">
                    ¡Gracias por tu mensaje! Te contactaremos pronto.
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                    {errors.nombre && (
                      <div className="invalid-feedback">{errors.nombre}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                    {errors.telefono && (
                      <div className="invalid-feedback">{errors.telefono}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje *
                    </label>
                    <textarea
                      className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.mensaje && (
                      <div className="invalid-feedback">{errors.mensaje}</div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-enviar">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros