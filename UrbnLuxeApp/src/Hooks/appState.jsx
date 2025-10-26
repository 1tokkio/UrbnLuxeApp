import { useState, useEffect } from 'react'
import { usuariosStorage, carritoStorage, productosStorage } from '../localStorage.js'
import { products } from '../Productos.js'

export const useAppState = () => {
  const [usuario, setUsuario] = useState(null)
  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([])

  // Cargar estado inicial desde localStorage
  useEffect(() => {
    // Cargar usuario
    const usuarioGuardado = usuariosStorage.getUsuarioActual()
    if (usuarioGuardado) {
      setUsuario(usuarioGuardado)
    }

    // Cargar productos
    const productosGuardados = productosStorage.getProductos()
    if (productosGuardados) {
      setProductos(productosGuardados)
    } else {
      // Si no hay productos guardados, usar los de data/products y guardarlos
      setProductos(products)
      productosStorage.setProductos(products)
    }

    // Cargar carrito (después de cargar usuario para tener el correcto)
    const carritoGuardado = carritoStorage.getCarrito()
    setCarrito(carritoGuardado)
  }, [])

  // Registrar usuario
  const registrarUsuario = (usuarioData) => {
    const nuevoUsuario = usuariosStorage.registrarUsuario(usuarioData)
    setUsuario(nuevoUsuario)
    
    // Transferir carrito anónimo al nuevo usuario
    carritoStorage.transferirCarritoAnonimo(nuevoUsuario.id)
    
    // Actualizar carrito con el del usuario
    const carritoUsuario = carritoStorage.getCarrito()
    setCarrito(carritoUsuario)
    
    return nuevoUsuario
  }

  // Iniciar sesión
  const iniciarSesion = (email, password) => {
    const usuario = usuariosStorage.iniciarSesion(email, password)
    if (usuario) {
      setUsuario(usuario)
      
      // Transferir carrito anónimo al usuario
      carritoStorage.transferirCarritoAnonimo(usuario.id)
      
      // Actualizar carrito con el del usuario
      const carritoUsuario = carritoStorage.getCarrito()
      setCarrito(carritoUsuario)
    }
    return usuario
  }

  // Cerrar sesión
  const cerrarSesion = () => {
    usuariosStorage.cerrarSesion()
    setUsuario(null)
    
    // Mantener el carrito como anónimo
    const carritoActual = carritoStorage.getCarrito()
    setCarrito(carritoActual)
  }

  // Agregar al carrito
  const agregarAlCarrito = (producto, tallaSeleccionada = '', colorSeleccionado = '', cantidad = 1) => {
    setCarrito(prev => {
      const productoConVariante = {
        ...producto,
        tallaSeleccionada,
        colorSeleccionado,
        cantidad,
        idUnico: `${producto.id}-${tallaSeleccionada}-${colorSeleccionado}` // ID único para variantes
      }

      const existente = prev.find(item => 
        item.idUnico === productoConVariante.idUnico
      )

      let nuevoCarrito
      if (existente) {
        nuevoCarrito = prev.map(item =>
          item.idUnico === productoConVariante.idUnico
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      } else {
        nuevoCarrito = [...prev, productoConVariante]
      }

      // Guardar en localStorage
      carritoStorage.setCarrito(nuevoCarrito)
      return nuevoCarrito
    })
  }

  // Eliminar del carrito
  const eliminarDelCarrito = (idUnico) => {
    setCarrito(prev => {
      const nuevoCarrito = prev.filter(item => item.idUnico !== idUnico)
      carritoStorage.setCarrito(nuevoCarrito)
      return nuevoCarrito
    })
  }

  // Actualizar cantidad en carrito
  const actualizarCantidad = (idUnico, cantidad) => {
    if (cantidad === 0) {
      eliminarDelCarrito(idUnico)
    } else {
      setCarrito(prev => {
        const nuevoCarrito = prev.map(item =>
          item.idUnico === idUnico ? { ...item, cantidad } : item
        )
        carritoStorage.setCarrito(nuevoCarrito)
        return nuevoCarrito
      })
    }
  }

  // Limpiar carrito
  const limpiarCarrito = () => {
    setCarrito([])
    carritoStorage.clearCarrito()
  }

  return {
    usuario,
    carrito,
    productos,
    setProductos,
    registrarUsuario,
    iniciarSesion,
    cerrarSesion,
    agregarAlCarrito,
    eliminarDelCarrito,
    actualizarCantidad,
    limpiarCarrito
  }
}