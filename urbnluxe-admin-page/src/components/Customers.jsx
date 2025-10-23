import React from 'react'

const Customers = () => {
  const customers = [
    { id: 1, name: 'Juan Pérez', email: 'juan@mail.com' },
    { id: 2, name: 'María López', email: 'maria@mail.com' },
  ];

  return (
    <div className='text-white'>
      <h2 className='text-2xl mb-4'>Customers</h2>
      <ul className='list-disc pl-6'>
        {customers.map(c => <li key={c.id}>{c.name} - {c.email}</li>)}
      </ul>
    </div>
  )
}

export default Customers
