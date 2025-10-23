import React from 'react'

const Products = () => {
  const products = [
    { id: 1, name: 'Chaqueta de cuero', stock: 5 },
    { id: 2, name: 'Zapatos premium', stock: 10 },
  ];

  return (
    <div className='text-white'>
      <h2 className='text-2xl mb-4'>Products</h2>
      <ul className='list-disc pl-6'>
        {products.map(p => <li key={p.id}>{p.name} - Stock: {p.stock}</li>)}
      </ul>
    </div>
  )
}

export default Products
