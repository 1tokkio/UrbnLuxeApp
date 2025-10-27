import { 
  usuariosStorage, 
  carritoStorage, 
  productosStorage 
} from '../../Utils/localStorage.js'

describe('LocalStorage Utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  
  describe('usuariosStorage', () => {
    it('debería obtener usuarios vacíos por defecto', () => {
      const usuarios = usuariosStorage.getUsuarios();
      assert.deepStrictEqual(usuarios, []);
    });
    
    it('debería guardar y obtener usuarios correctamente', () => {
      const usuarios = [{ id: 1, nombre: 'Test', email: 'test@test.com' }];
      usuariosStorage.setUsuarios(usuarios);
      
      const usuariosObtenidos = usuariosStorage.getUsuarios();
      assert.deepStrictEqual(usuariosObtenidos, usuarios);
    });
  });
  
  describe('carritoStorage', () => {
    it('debería obtener carrito vacío por defecto', () => {
      const carrito = carritoStorage.getCarrito();
      assert.deepStrictEqual(carrito, []);
    });
    
    it('debería guardar y obtener carrito correctamente', () => {
      const carrito = [{ id: 1, nombre: 'Producto', precio: 100, cantidad: 1 }];
      carritoStorage.setCarrito(carrito);
      
      const carritoObtenido = carritoStorage.getCarrito();
      assert.deepStrictEqual(carritoObtenido, carrito);
    });
  });
});