import React from 'react';

const Customers = () => {
  const customers = [
    { 
      id: 'CLI-001', 
      name: 'Juan Pérez', 
      rut: '12.345.678-9', 
      email: 'juan.perez@mail.com', 
      productsPurchased: 5,
      totalSpent: '$349.950',
      lastPurchase: '24 Oct 2025',
      status: 'Activo'
    },
    { 
      id: 'CLI-002', 
      name: 'María López', 
      rut: '23.456.789-0', 
      email: 'maria.lopez@mail.com', 
      productsPurchased: 3,
      totalSpent: '$189.990',
      lastPurchase: '22 Oct 2025',
      status: 'Activo'
    },
    { 
      id: 'CLI-003', 
      name: 'Carlos Rodríguez', 
      rut: '34.567.890-1', 
      email: 'carlos.rodriguez@mail.com', 
      productsPurchased: 8,
      totalSpent: '$519.920',
      lastPurchase: '21 Oct 2025',
      status: 'Premium'
    },
    { 
      id: 'CLI-004', 
      name: 'Ana García', 
      rut: '45.678.901-2', 
      email: 'ana.garcia@mail.com', 
      productsPurchased: 2,
      totalSpent: '$129.990',
      lastPurchase: '20 Oct 2025',
      status: 'Activo'
    },
    { 
      id: 'CLI-005', 
      name: 'Pedro Martínez', 
      rut: '56.789.012-3', 
      email: 'pedro.martinez@mail.com', 
      productsPurchased: 1,
      totalSpent: '$69.990',
      lastPurchase: '19 Oct 2025',
      status: 'Activo'
    },
    { 
      id: 'CLI-006', 
      name: 'Laura Fernández', 
      rut: '67.890.123-4', 
      email: 'laura.fernandez@mail.com', 
      productsPurchased: 12,
      totalSpent: '$899.880',
      lastPurchase: '18 Oct 2025',
      status: 'Premium'
    },
    { 
      id: 'CLI-008', 
      name: 'Roberto Vargas', 
      rut: '89.012.345-6', 
      email: 'roberto.vargas@mail.com', 
      productsPurchased: 4,
      totalSpent: '$279.960',
      lastPurchase: '17 Oct 2025',
      status: 'Activo'
    },
    { 
      id: 'CLI-009', 
      name: 'Isabel Castro', 
      rut: '90.123.456-7', 
      email: 'isabel.castro@mail.com', 
      productsPurchased: 6,
      totalSpent: '$419.940',
      lastPurchase: '16 Oct 2025',
      status: 'Premium'
    },
  ];

  // Filtrar solo clientes que han comprado al menos una vez
  const customersWithPurchases = customers.filter(customer => customer.productsPurchased > 0);

  // Función para determinar el color del estado del cliente
  const getStatusColor = (status) => {
    switch(status) {
      case 'Activo':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'Premium':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      case 'Inactivo':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      case 'Nuevo':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Clientes</h2>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-400">
            Mostrando {customersWithPurchases.length} clientes con compras realizadas
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">ID Cliente</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">RUT</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Correo</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Productos Comprados</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Total Gastado</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Última Compra</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {customersWithPurchases.map((customer, index) => (
                  <tr key={customer.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/50'}>
                    <td className="py-3 px-4 text-sm font-medium text-white">{customer.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{customer.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{customer.rut}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{customer.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-300 text-center">{customer.productsPurchased}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-300">{customer.totalSpent}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{customer.lastPurchase}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;