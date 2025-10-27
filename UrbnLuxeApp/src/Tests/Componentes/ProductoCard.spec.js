import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

const ProductoCard = ({ producto, onAgregarAlCarrito }) => {
  return React.createElement('div', { 
    className: 'producto-card',
    'data-testid': 'producto-card'
  }, [
    React.createElement('h3', { key: 'name' }, producto.name),
    React.createElement('p', { key: 'price' }, `$${producto.price}`),
    React.createElement('p', { key: 'brand' }, producto.brand),
    React.createElement('button', { 
      key: 'button',
      onClick: onAgregarAlCarrito,
      'data-testid': 'btn-agregar'
    }, producto.inStock ? 'Agregar al Carrito' : 'Agotado')
  ]);
};

describe('ProductoCard Component', () => {
  const mockProducto = {
    id: 1,
    name: 'Camiseta Test',
    price: 25000,
    brand: 'Test Brand',
    inStock: true
  };

  const mockOnAgregar = () => {};

  it('debería renderizar la información del producto', () => {
    const { container } = render(
      React.createElement(ProductoCard, {
        producto: mockProducto,
        onAgregarAlCarrito: mockOnAgregar
      })
    );

    assert.ok(container.querySelector('.producto-card'));
  });

  it('debería mostrar el botón Agregar al Carrito cuando está en stock', () => {
    const { getByTestId } = render(
      React.createElement(ProductoCard, {
        producto: mockProducto,
        onAgregarAlCarrito: mockOnAgregar
      })
    );

    const boton = getByTestId('btn-agregar');
    assert.strictEqual(boton.textContent, 'Agregar al Carrito');
  });

  it('debería mostrar Agotado cuando no está en stock', () => {
    const productoSinStock = { ...mockProducto, inStock: false };
    
    const { getByTestId } = render(
      React.createElement(ProductoCard, {
        producto: productoSinStock,
        onAgregarAlCarrito: mockOnAgregar
      })
    );

    const boton = getByTestId('btn-agregar');
    assert.strictEqual(boton.textContent, 'Agotado');
  });
});