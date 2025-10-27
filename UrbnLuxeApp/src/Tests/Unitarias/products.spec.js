// Pruebas para las funciones de productos
import { formatPrice, getProductById } from '../../Data/Productos.js';

describe('Funciones de Productos', () => {
  
  describe('formatPrice', () => {
    it('debería formatear precio 24990 como $24.990', () => {
      assert.strictEqual(formatPrice(24990), '$24.990');
    });
    
    it('debería formatear precio 1000 como $1.000', () => {
      assert.strictEqual(formatPrice(1000), '$1.000');
    });
  });
  
  describe('getProductById', () => {
    it('debería encontrar producto con ID 1', () => {
      const producto = getProductById(1);
      assert.ok(producto);
      assert.strictEqual(producto.id, 1);
      assert.strictEqual(producto.name, 'Camiseta Essential');
    });
    
    it('debería retornar undefined para ID que no existe', () => {
      const producto = getProductById(9999);
      assert.strictEqual(producto, undefined);
    });
  });
  
  describe('getProductsByCategory', () => {
    it('debería filtrar productos por categoría calzado', () => {
      const productosCalzado = getProductsByCategory('calzado');
      assert.ok(Array.isArray(productosCalzado));
      productosCalzado.forEach(producto => {
        assert.strictEqual(producto.category, 'calzado');
      });
    });
  });
  
  describe('searchProducts', () => {
    it('debería buscar productos por nombre', () => {
      const resultados = searchProducts('Camiseta');
      assert.ok(Array.isArray(resultados));
      assert.ok(resultados.length > 0);
    });
    
    it('debería retornar array vacío para búsqueda sin resultados', () => {
      const resultados = searchProducts('xyz123nonexistent');
      assert.deepStrictEqual(resultados, []);
    });
  });
});