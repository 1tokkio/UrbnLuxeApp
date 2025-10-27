import React from 'react';

// Componente de prueba simple
const TestComponent = ({ message = "Hola Mundo" }) => {
  return <div data-testid="test-component">{message}</div>;
};

describe('TestComponent', () => {
  it('debería renderizar el mensaje por defecto', () => {
    // Esta prueba verifica que React funciona en el entorno de testing
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('test-component')).toHaveTextContent('Hola Mundo');
  });
  
  it('debería renderizar el mensaje personalizado', () => {
    const { getByTestId } = render(<TestComponent message="Custom Message" />);
    expect(getByTestId('test-component')).toHaveTextContent('Custom Message');
  });
});