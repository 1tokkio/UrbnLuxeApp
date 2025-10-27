import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { renderHook, act } from '@testing-library/react';
import React from 'react';

// Mock simple del hook useAppState
const useAppState = () => {
  const [carrito, setCarrito] = React.useState([]);
  const [usuario, setUsuario] = React.useState(null);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, { ...producto, cantidad: 1 }]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const registrarUsuario = (usuarioData) => {
    const nuevoUsuario = { id: Date.now(), ...usuarioData };
    setUsuario(nuevoUsuario);
    return nuevoUsuario;
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return {
    usuario,
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    registrarUsuario,
    cerrarSesion
  };
};

describe('useAppState Hook', () => {
  it('debería inicializar con estado por defecto', () => {
    const { result } = renderHook(() => useAppState());
    
    assert.strictEqual(result.current.usuario, null);
    assert.deepStrictEqual(result.current.carrito, []);
  });

  it('debería agregar producto al carrito', () => {
    const { result } = renderHook(() => useAppState());
    const producto = { id: 1, name: 'Test Product', price: 100 };

    act(() => {
      result.current.agregarAlCarrito(producto);
    });

    assert.strictEqual(result.current.carrito.length, 1);
    assert.strictEqual(result.current.carrito[0].id, 1);
    assert.strictEqual(result.current.carrito[0].cantidad, 1);
  });

  it('debería registrar un usuario', () => {
    const { result } = renderHook(() => useAppState());
    const usuarioData = { nombre: 'Test', email: 'test@test.com' };

    act(() => {
      result.current.registrarUsuario(usuarioData);
    });

    assert.ok(result.current.usuario);
    assert.strictEqual(result.current.usuario.nombre, 'Test');
    assert.strictEqual(result.current.usuario.email, 'test@test.com');
  });
});