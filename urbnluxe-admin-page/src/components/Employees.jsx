import React, { useState } from 'react'

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Ana Torres', role: 'Manager' },
    { id: 2, name: 'Pedro Ruiz', role: 'Sales' },
  ]);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const addEmployee = (e) => {
    e.preventDefault();
    setEmployees([...employees, { id: Date.now(), name, role }]);
    setName(''); setRole('');
  }

  return (
    <div className='text-white'>
      <h2 className='text-2xl mb-4'>Employees</h2>
      <ul className='list-disc pl-6 mb-4'>
        {employees.map(e => <li key={e.id}>{e.name} - {e.role}</li>)}
      </ul>
      <form onSubmit={addEmployee} className='flex flex-col space-y-2 text-black'>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className='p-2 rounded'/>
        <input type="text" placeholder="Role" value={role} onChange={(e)=>setRole(e.target.value)} className='p-2 rounded'/>
        <button type="submit" className='bg-blue-600 text-white p-2 rounded'>Add Employee</button>
      </form>
    </div>
  )
}

export default Employees
