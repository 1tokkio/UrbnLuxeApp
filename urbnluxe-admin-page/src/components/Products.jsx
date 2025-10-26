import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([
    { 
      id: 'LUX-001', 
      name: 'Chaqueta de Cuero Italiano', 
      category: 'Abrigos',
      brand: 'Brunello Cucinelli',
      sizes: ['46', '48', '50', '52', '54'],
      price: '$2.450.000',
      stock: 3,
      sku: 'BC-JACKET-001',
      status: 'Disponible',
      material: 'Cuero de becerro italiano'
    },
    { 
      id: 'LUX-002', 
      name: 'Blazer de Lana Merino', 
      category: 'Blazers',
      brand: 'Loro Piana',
      sizes: ['48', '50', '52'],
      price: '$1.890.000',
      stock: 2,
      sku: 'LP-BLAZER-002',
      status: 'Disponible',
      material: 'Lana merino extrafina'
    },
    { 
      id: 'LUX-003', 
      name: 'Camisa de Seda Suiza', 
      category: 'Camisas',
      brand: 'Ermenegildo Zegna',
      sizes: ['38', '39', '40', '41', '42'],
      price: '$650.000',
      stock: 8,
      sku: 'EZ-SHIRT-003',
      status: 'Disponible',
      material: 'Seda suiza 100%'
    },
    { 
      id: 'LUX-004', 
      name: 'Pantalón de Cashmere', 
      category: 'Pantalones',
      brand: 'Brioni',
      sizes: ['48', '50', '52', '54'],
      price: '$1.200.000',
      stock: 0,
      sku: 'BR-PANTS-004',
      status: 'Agotado',
      material: 'Cashmere mongol'
    },
    { 
      id: 'LUX-005', 
      name: 'Zapatos Oxford de Cordobán', 
      category: 'Calzado',
      brand: 'John Lobb',
      sizes: ['40', '41', '42', '43', '44'],
      price: '$1.550.000',
      stock: 4,
      sku: 'JL-SHOES-005',
      status: 'Disponible',
      material: 'Cuero cordobán inglés'
    },
    { 
      id: 'LUX-006', 
      name: 'Cinturón de Cocodrilo', 
      category: 'Accesorios',
      brand: 'Hermès',
      sizes: ['95', '100', '105', '110'],
      price: '$3.200.000',
      stock: 1,
      sku: 'HER-BELT-006',
      status: 'Disponible',
      material: 'Piel de cocodrilo nilótico'
    },
    { 
      id: 'LUX-007', 
      name: 'Suéter de Cachemira', 
      category: 'Knitwear',
      brand: 'Kiton',
      sizes: ['M', 'L', 'XL'],
      price: '$980.000',
      stock: 5,
      sku: 'KT-SWEATER-007',
      status: 'Disponible',
      material: 'Cachemira 100%'
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Abrigos',
    brand: '',
    sizes: [''],
    price: '',
    stock: '',
    sku: '',
    status: 'Disponible',
    material: ''
  });

  // Función para determinar el color del estado
  const getStatusColor = (status) => {
    switch(status) {
      case 'Disponible':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'Agotado':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      case 'Próximamente':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'Edición Limitada':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSizeChange = (index, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index] = value;
    setFormData(prev => ({
      ...prev,
      sizes: newSizes
    }));
  };

  const addSize = () => {
    setFormData(prev => ({
      ...prev,
      sizes: [...prev.sizes, '']
    }));
  };

  const removeSize = (index) => {
    const newSizes = formData.sizes.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      sizes: newSizes
    }));
  };

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: `LUX-${String(products.length + 1).padStart(3, '0')}`,
      ...formData,
      sizes: formData.sizes.filter(size => size.trim() !== ''),
      stock: parseInt(formData.stock) || 0
    };
    setProducts([...products, newProduct]);
    setFormData({
      name: '',
      category: 'Abrigos',
      brand: '',
      sizes: [''],
      price: '',
      stock: '',
      sku: '',
      status: 'Disponible',
      material: ''
    });
    setShowAddForm(false);
  };

  const deleteProduct = (productId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto de la colección?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-white">Productos</h2>
        
        {/* Botón de acción */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium flex items-center gap-2"
          >
            <span>+</span>
            Agregar Nueva Pieza
          </button>
        </div>

        {/* Tabla de productos */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">ID</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Producto</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Marca</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Categoría</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Tallas</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Material</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Precio</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Stock</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Estado</th>
                  <th className="py-4 px-6 text-left text-sm font-semibold text-white uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {products.map((product, index) => (
                  <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-800/50' : 'bg-gray-800/30'}>
                    <td className="py-4 px-6 text-sm font-medium text-amber-100">{product.id}</td>
                    <td className="py-4 px-6">
                      <div className="text-sm font-medium text-white">{product.name}</div>
                      <div className="text-xs text-gray-400 font-mono">{product.sku}</div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-300 font-medium">{product.brand}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">{product.category}</td>
                    <td className="py-4 px-6 text-sm text-gray-300">
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size, idx) => (
                          <span key={idx} className="bg-gray-700 px-2 py-1 rounded text-xs border border-gray-600">
                            {size}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-400 italic">{product.material}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-amber-300">{product.price}</td>
                    <td className="py-4 px-6 text-sm text-gray-300 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.stock > 5 ? 'bg-green-500/20 text-green-300' : 
                        product.stock > 0 ? 'bg-yellow-500/20 text-yellow-300' : 
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {product.stock} unidades
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm">
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-400 hover:text-red-300 transition duration-200 hover:bg-red-500/10 px-3 py-1 rounded"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal para agregar producto */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl p-8 w-full max-w-4xl max-h-[95vh] overflow-y-auto border border-amber-500/20">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-amber-100">Agregar Pieza Exclusiva</h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={addProduct} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre de la pieza"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                    <input
                      type="text"
                      name="brand"
                      placeholder="Marca (ej: Brunello Cucinelli)"
                      value={formData.brand}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                    <input
                      type="text"
                      name="material"
                      placeholder="Material (ej: Cuero italiano premium)"
                      value={formData.material}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                    <input
                      type="text"
                      name="sku"
                      placeholder="Código SKU"
                      value={formData.sku}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Abrigos">Abrigos</option>
                      <option value="Blazers">Blazers</option>
                      <option value="Camisas">Camisas</option>
                      <option value="Pantalones">Pantalones</option>
                      <option value="Knitwear">Knitwear</option>
                      <option value="Calzado">Calzado</option>
                      <option value="Accesorios">Accesorios</option>
                    </select>
                    
                    <input
                      type="text"
                      name="price"
                      placeholder="Precio (ej: $2.450.000)"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                    
                    <input
                      type="number"
                      name="stock"
                      placeholder="Stock disponible"
                      value={formData.stock}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                    
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Disponible">Disponible</option>
                      <option value="Edición Limitada">Edición Limitada</option>
                      <option value="Agotado">Agotado</option>
                      <option value="Próximamente">Próximamente</option>
                    </select>
                  </div>
                </div>

                {/* Tallas */}
                <div className="space-y-3">
                  <label className="text-amber-200 text-sm font-semibold">Tallas Disponibles</label>
                  {formData.sizes.map((size, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Talla (ej: 48, M, 42)"
                        value={size}
                        onChange={(e) => handleSizeChange(index, e.target.value)}
                        className="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                      {formData.sizes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSize(index)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-lg transition duration-200"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSize}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm transition duration-200"
                  >
                    + Agregar Talla
                  </button>
                </div>

                <div className="flex gap-3 pt-6 border-t border-gray-700">
                  <button
                    type="submit"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-lg transition duration-200 font-semibold"
                  >
                    Agregar a Colección
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-lg transition duration-200"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;