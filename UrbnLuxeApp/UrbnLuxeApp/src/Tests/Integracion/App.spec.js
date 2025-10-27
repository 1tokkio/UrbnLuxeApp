import { describe, it } from 'node:test';
import assert from 'node:assert';

const mockApp = {
  estado: {
    usuario: null,
    carrito: [],
    productos: []
  },
  
  inicializar: function() {
    this.estado = {
      usuario: null,
      carrito: [],
      productos: []
    };
    return this.estado;
  },
  
  login: function(usuarioData) {
    this.estado.usuario = { id: 1, ...usuarioData };
    return this.estado.usuario;
  },
  
  logout: function() {
    this.estado.usuario = null;
  }
};

describe('Aplicación URBN LUXE', () => {
  it('debería inicializar con estado correcto', () => {
    const estado = mockApp.inicializar();
    
    assert.strictEqual(estado.usuario, null);
    assert.deepStrictEqual(estado.carrito, []);
    assert.deepStrictEqual(estado.productos, []);
  });

  it('debería permitir login de usuario', () => {
    mockApp.inicializar();
    const usuario = mockApp.login({ nombre: 'Test', email: 'test@test.com' });
    
    assert.ok(usuario);
    assert.strictEqual(usuario.nombre, 'Test');
    assert.strictEqual(mockApp.estado.usuario.nombre, 'Test');
  });

  it('debería permitir logout de usuario', () => {
    mockApp.inicializar();
    mockApp.login({ nombre: 'Test', email: 'test@test.com' });
    mockApp.logout();
    
    assert.strictEqual(mockApp.estado.usuario, null);
  });
});