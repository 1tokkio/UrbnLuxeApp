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

    // Validaciones de nombre, email, telefono y mensaje
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    const phoneRegex = /^[0-9+-\s()]{8,}$/
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Ingresa un teléfono válido'
    }

  
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
      {}
      <section className="nosotros-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="nosotros-titulo">Sobre URBN LUXE</h1>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="nuestra-historia py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-titulo">Nuestra Historia</h2>
              <p className="historia-texto">
                URBN LUXE nació en 2025 con la visión de ofrecer al cliente una seleccion de prendas premium, 
                combinando estilo, calidad y conciencia social. Lo que comenzó como 
                un pequeño proyecto entre amigos, hoy se ha convertido en una tienda real y funcional.
              </p>
              <p className="historia-texto">
                Principalmente nuestras prendas son seleccionadas para una parte de la poblacion, cada prenda es 
                elegida por su calidad excepcional y producción responsable.
              </p>
              <div className="estadisticas">
                <div className="row text-center">
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>1</h3>
                      <p>Clientes Satisfechos</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>10</h3>
                      <p>Marcas Exclusivas</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="estadistica-item">
                      <h3>1</h3>
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
                    <p>+56 9 XXXX 5678</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <span className="contacto-icono">📍</span>
                  <div>
                    <h5>Ubicación</h5>
                    <p>Egaña 651, 5480000 Puerto Montt, Los Lagos</p>
                  </div>
                </div>
                <div className="contacto-item">
                  <span className="contacto-icono">🕒</span>
                  <div>
                    <h5>Horario</h5>
                    <p>Lunes a Viernes: 9:00 - 20:00<br/>
                       Sábados: 11:00 - 14:00</p>
                  </div>
                </div>
              </div>

              {}
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