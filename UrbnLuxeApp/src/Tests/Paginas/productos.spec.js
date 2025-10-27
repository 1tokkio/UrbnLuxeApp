import { describe, it } from 'node:test';
import assert from 'node:assert';

const mockProductosPage = {
  productos: [
    { id: 1, name: 'Camiseta Test', category: 'camisetas', brand: 'Brand A' },
    { id: 2, name: 'Hoodie Test', category: 'sudaderas', brand: 'Brand B' },
    { id: 3, name: 'Zapatillas Test', category: 'calzado', brand: 'Brand C' }
  ],
  
  filtrarPorCategoria: function(categoria) {
    return categoria 
      ? this.productos.filter(p => p.category === categoria)
      : this.productos;
  },
  
  buscarProductos: function(query) {
    return this.productos.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase())
    );
  }
};

describe('Página Productos', () => {
  it('debería retornar todos los productos por defecto', () => {
    const productos = mockProductosPage.filtrarPorCategoria();
    assert.strictEqual(productos.length, 3);
  });

  it('debería filtrar productos por categoría', () => {
    const productosCamisetas = mockProductosPage.filtrarPorCategoria('camisetas');
    assert.strictEqual(productosCamisetas.length, 1);
    assert.strictEqual(productosCamisetas[0].category, 'camisetas');
  });

  it('debería buscar productos por nombre', () => {
    const resultados = mockProductosPage.buscarProductos('Hoodie');
    assert.strictEqual(resultados.length, 1);
    assert.strictEqual(resultados[0].name, 'Hoodie Test');
  });

  it('debería retornar array vacío para búsqueda sin resultados', () => {
    const resultados = mockProductosPage.buscarProductos('xyz123');
    assert.deepStrictEqual(resultados, []);
  });
});