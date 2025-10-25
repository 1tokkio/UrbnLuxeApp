import React from 'react';

const Orders = () => {
  const orders = [
    { 
      id: '05gvy5', 
      customer: 'Juan Pérez', 
      date: '24 Oct 2025', 
      total: '$200.000', 
      status: 'Enviado',
      product: 'iPhone 15 Pro'
    },
    { 
      id: 'mwvjmw', 
      customer: 'María López', 
      date: '22 Oct 2025', 
      total: '$350.000', 
      status: 'Pendiente',
      product: 'MacBook Air'
    },
    { 
      id: 'g97rx5', 
      customer: 'Carlos Rodríguez', 
      date: '21 Oct 2025', 
      total: '$150.000', 
      status: 'Entregado',
      product: 'AirPods Pro'
    },
    { 
      id: 'nwl4n5', 
      customer: 'Ana García', 
      date: '20 Oct 2025', 
      total: '$480.000', 
      status: 'Procesando',
      product: 'iPad Air'
    },
    { 
      id: 'ywna875', 
      customer: 'Pedro Martínez', 
      date: '19 Oct 2025', 
      total: '$275.000', 
      status: 'Cancelado',
      product: 'Apple Watch'
    },
  ];

  // Función para determinar el color del estado
  const getStatusColor = (status) => {
    switch(status) {
      case 'Enviado':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'Entregado':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'Pendiente':
        return 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30';
      case 'Procesando':
        return 'bg-purple-500/20 text-purple-300 border border-purple-500/30';
      case 'Cancelado':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Orders</h2>
        
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">ID del Pedido</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Nombre del cliente</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Producto</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Fecha</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Total</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {orders.map((order, index) => (
                  <tr key={order.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/50'}>
                    <td className="py-3 px-4 text-sm font-medium text-white">{order.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{order.customer}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{order.product}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{order.date}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-300">{order.total}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
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

export default Orders;