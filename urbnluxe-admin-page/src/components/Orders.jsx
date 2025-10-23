import React from 'react'

const Orders = () => {
  // Aquí podrías cargar tus pedidos reales o de ejemplo
  const orders = [
    { id: 1, customer: 'Juan Pérez', total: '$200', status: 'Shipped' },
    { id: 2, customer: 'María López', total: '$350', status: 'Pending' },
  ];

  return (
    <div className='text-white'>
      <h2 className='text-2xl mb-4'>Orders</h2>
      <table className='w-full table-auto text-black dark:text-white'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className='text-center border-b border-gray-500'>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orders
