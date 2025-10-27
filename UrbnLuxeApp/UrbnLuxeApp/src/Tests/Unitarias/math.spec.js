// PRUEBA SUPER BÁSICA PARA VERIFICAR EL SISTEMA
describe('Sistema de Pruebas - Verificación', () => {
  
  it('debería pasar una prueba básica de matemáticas', () => {
    expect(1 + 1).toBe(2);
  });
  
  it('debería verificar strings', () => {
    expect('URBN LUXE').toBe('URBN LUXE');
  });
  
  it('debería trabajar con arrays', () => {
    const productos = ['camiseta', 'hoodie', 'zapatillas'];
    expect(productos).toContain('hoodie');
  });
});

console.log('🧪 Sistema de pruebas cargado correctamente');