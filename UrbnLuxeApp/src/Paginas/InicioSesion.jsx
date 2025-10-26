import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/InicioSesion.css'

const InicioSesion = ({ usuario, onRegistrar, onIniciarSesion, onCerrarSesion }) => {
  const [esRegistro, setEsRegistro] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const validarFormulario = () => {
    if (esRegistro) {
      if (!formData.nombre.trim()) {
        return 'El nombre es requerido'
      }
      if (formData.password.length < 6) {
        return 'La contraseña debe tener al menos 6 caracteres'
      }
      if (formData.password !== formData.confirmPassword) {
        return 'Las contraseñas no coinciden'
      }
    }
    
    if (!formData.email.trim()) {
      return 'El email es requerido'
    }
    if (!formData.password) {
      return 'La contraseña es requerida'
    }
    
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errorValidacion = validarFormulario()
    if (errorValidacion) {
      setError(errorValidacion)
      return
    }

    try {
      if (esRegistro) {
        // Registrar nuevo usuario
        onRegistrar({
          nombre: formData.nombre,
          email: formData.email,
          password: formData.password
        })
      } else {
        // Iniciar sesión
        const usuario = onIniciarSesion(formData.email, formData.password)
        if (!usuario) {
          setError('Email o contraseña incorrectos')
          return
        }
      }
      
      // Limpiar formulario y redirigir
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
      navigate('/')
      
    } catch (error) {
      setError('Error al procesar la solicitud')
    }
  }

  const handleCerrarSesion = () => {
    onCerrarSesion()
    navigate('/')
  }

  if (usuario) {
    return (
      <div className="inicio-sesion-page">
        <div className="container mt-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <h3>¡Hola, {usuario.nombre}!</h3>
                  <p className="text-muted">Has iniciado sesión correctamente</p>
                  <div className="mt-4">
                    <button 
                      className="btn btn-outline-danger me-2"
                      onClick={handleCerrarSesion}
                    >
                      Cerrar Sesión
                    </button>
                    <button 
                      className="btn btn-primary"
                      onClick={() => navigate('/')}
                    >
                      Seguir Comprando
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="inicio-sesion-page">
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4">
                  {esRegistro ? 'Crear Cuenta' : 'Iniciar Sesión'}
                </h2>
                
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {esRegistro && (
                    <div className="mb-3">
                      <label className="form-label">Nombre Completo</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  {esRegistro && (
                    <div className="mb-3">
                      <label className="form-label">Confirmar Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                  
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    {esRegistro ? 'Registrarse' : 'Iniciar Sesión'}
                  </button>
                </form>
                
                <div className="text-center">
                  <button 
                    className="btn btn-link"
                    onClick={() => {
                      setEsRegistro(!esRegistro)
                      setError('')
                      setFormData({
                        nombre: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                      })
                    }}
                  >
                    {esRegistro 
                      ? '¿Ya tienes cuenta? Inicia Sesión' 
                      : '¿No tienes cuenta? Regístrate'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InicioSesion