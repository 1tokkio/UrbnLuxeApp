// Claves para localStorage
const STORAGE_KEYS = {
  USUARIOS: 'urbnLuxeUsuarios',
  USUARIO_ACTUAL: 'urbnLuxeUsuarioActual',
  CARRITO: 'urbnLuxeCarrito',
  PRODUCTOS: 'urbnLuxeProductos'
}

// Gestión de Usuarios
export const usuariosStorage = {
  // Obtener todos los usuarios
  getUsuarios: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USUARIOS)) || []
    } catch (error) {
      console.error('Error al obtener usuarios:', error)
      return []
    }
  },

  // Guardar usuarios
  setUsuarios: (usuarios) => {
    try {
      localStorage.setItem(STORAGE_KEYS.USUARIOS, JSON.stringify(usuarios))
    } catch (error) {
      console.error('Error al guardar usuarios:', error)
    }
  },

  // Obtener usuario actual
  getUsuarioActual: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.USUARIO_ACTUAL)) || null
    } catch (error) {
      console.error('Error al obtener usuario actual:', error)
      return null
    }
  },

  // Guardar usuario actual
  setUsuarioActual: (usuario) => {
    try {
      if (usuario) {
        localStorage.setItem(STORAGE_KEYS.USUARIO_ACTUAL, JSON.stringify(usuario))
      } else {
        localStorage.removeItem(STORAGE_KEYS.USUARIO_ACTUAL)
      }
    } catch (error) {
      console.error('Error al guardar usuario actual:', error)
    }
  },

  // Registrar nuevo usuario
  registrarUsuario: (usuarioData) => {
    const usuarios = usuariosStorage.getUsuarios()
    const nuevoUsuario = {
      id: Date.now(),
      ...usuarioData,
      fechaRegistro: new Date().toISOString(),
      carritos: {} // Objeto para almacenar carritos por sesión
    }
    
    usuarios.push(nuevoUsuario)
    usuariosStorage.setUsuarios(usuarios)
    usuariosStorage.setUsuarioActual(nuevoUsuario)
    
    return nuevoUsuario
  },

  // Iniciar sesión
  iniciarSesion: (email, password) => {
    const usuarios = usuariosStorage.getUsuarios()
    const usuario = usuarios.find(u => u.email === email && u.password === password)
    
    if (usuario) {
      usuariosStorage.setUsuarioActual(usuario)
      return usuario
    }
    return null
  },

  // Cerrar sesión
  cerrarSesion: () => {
    usuariosStorage.setUsuarioActual(null)
  }
}

// Gestión del Carrito
export const carritoStorage = {
  // Obtener carrito actual (vinculado al usuario)
  getCarrito: () => {
    try {
      const usuarioActual = usuariosStorage.getUsuarioActual()
      if (usuarioActual) {
        // Si hay usuario, obtener su carrito específico
        const usuarios = usuariosStorage.getUsuarios()
        const usuario = usuarios.find(u => u.id === usuarioActual.id)
        return usuario?.carrito || []
      } else {
        // Si no hay usuario, usar carrito anónimo
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.CARRITO)) || []
      }
    } catch (error) {
      console.error('Error al obtener carrito:', error)
      return []
    }
  },

  // Guardar carrito
  setCarrito: (carrito) => {
    try {
      const usuarioActual = usuariosStorage.getUsuarioActual()
      
      if (usuarioActual) {
        // Si hay usuario, guardar en su perfil
        const usuarios = usuariosStorage.getUsuarios()
        const usuarioIndex = usuarios.findIndex(u => u.id === usuarioActual.id)
        
        if (usuarioIndex !== -1) {
          usuarios[usuarioIndex].carrito = carrito
          usuariosStorage.setUsuarios(usuarios)
          
          // Actualizar también el usuario actual
          const usuarioActualizado = { ...usuarioActual, carrito }
          usuariosStorage.setUsuarioActual(usuarioActualizado)
        }
      } else {
        // Si no hay usuario, guardar en localStorage general
        localStorage.setItem(STORAGE_KEYS.CARRITO, JSON.stringify(carrito))
      }
    } catch (error) {
      console.error('Error al guardar carrito:', error)
    }
  },

  // Limpiar carrito
  clearCarrito: () => {
    carritoStorage.setCarrito([])
  },

  // Transferir carrito anónimo a usuario al iniciar sesión
  transferirCarritoAnonimo: (usuarioId) => {
    const carritoAnonimo = JSON.parse(localStorage.getItem(STORAGE_KEYS.CARRITO)) || []
    
    if (carritoAnonimo.length > 0) {
      const usuarios = usuariosStorage.getUsuarios()
      const usuarioIndex = usuarios.findIndex(u => u.id === usuarioId)
      
      if (usuarioIndex !== -1) {
        // Combinar carritos (evitar duplicados)
        const carritoUsuario = usuarios[usuarioIndex].carrito || []
        const carritoCombinado = [...carritoUsuario]
        
        carritoAnonimo.forEach(itemAnonimo => {
          const existente = carritoCombinado.find(item => item.id === itemAnonimo.id)
          if (existente) {
            existente.cantidad += itemAnonimo.cantidad
          } else {
            carritoCombinado.push(itemAnonimo)
          }
        })
        
        usuarios[usuarioIndex].carrito = carritoCombinado
        usuariosStorage.setUsuarios(usuarios)
        
        // Limpiar carrito anónimo
        localStorage.removeItem(STORAGE_KEYS.CARRITO)
      }
    }
  }
}

// Gestión de Productos
export const productosStorage = {
  getProductos: () => {
    try {
      const productosGuardados = localStorage.getItem(STORAGE_KEYS.PRODUCTOS)
      return productosGuardados ? JSON.parse(productosGuardados) : null
    } catch (error) {
      console.error('Error al obtener productos:', error)
      return null
    }
  },

  setProductos: (productos) => {
    try {
      localStorage.setItem(STORAGE_KEYS.PRODUCTOS, JSON.stringify(productos))
    } catch (error) {
      console.error('Error al guardar productos:', error)
    }
  }
}

export default STORAGE_KEYS