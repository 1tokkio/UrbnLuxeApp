// test.js - Prueba básica de que Node.js funciona
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe('Prueba de Verificación del Sistema', () => {
  it('debería pasar una prueba básica', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('debería verificar strings', () => {
    assert.strictEqual('URBN LUXE', 'URBN LUXE');
  });

  it('debería trabajar con arrays', () => {
    const productos = ['camiseta', 'hoodie'];
    assert.ok(productos.includes('hoodie'));
  });
});