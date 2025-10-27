// Mock de localStorage para pruebas
export const mockLocalStorage = () => {
  const storage = {};
  return {
    getItem: jest.fn((key) => storage[key] || null),
    setItem: jest.fn((key, value) => {
      storage[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete storage[key];
    }),
    clear: jest.fn(() => {
      Object.keys(storage).forEach(key => delete storage[key]);
    })
  };
};

// Mock de productos para pruebas
export const mockProducts = [
  {
    id: 1,
    name: "Camiseta Test",
    price: 24990,
    image: "test.jpg",
    description: "Test product",
    brand: "Test Brand",
    category: "camisetas",
    inStock: true
  },
  {
    id: 2,
    name: "Hoodie Test",
    price: 45990,
    image: "test2.jpg",
    description: "Test product 2",
    brand: "Test Brand",
    category: "sudaderas",
    inStock: true
  }
];

// Mock de usuario para pruebas
export const mockUser = {
  id: 1,
  nombre: "Test User",
  email: "test@test.com",
  carrito: []
};