import React, { useState } from 'react';

const Employees = () => {
  const [employees, setEmployees] = useState([
    { 
      id: 'EMP-001', 
      name: 'Ana Torres', 
      rut: '12.345.678-9', 
      email: 'ana.torres@tienda.com', 
      phone: '+56 9 1234 5678',
      role: 'Gerente',
      department: 'Administración',
      salary: '$1.500.000',
      status: 'Activo'
    },
    { 
      id: 'EMP-002', 
      name: 'Pedro Ruiz', 
      rut: '23.456.789-0', 
      email: 'pedro.ruiz@tienda.com', 
      phone: '+56 9 2345 6789',
      role: 'Vendedor',
      department: 'Ventas',
      salary: '$800.000',
      status: 'Activo'
    },
    { 
      id: 'EMP-003', 
      name: 'María González', 
      rut: '34.567.890-1', 
      email: 'maria.gonzalez@tienda.com', 
      phone: '+56 9 3456 7890',
      role: 'Cajero',
      department: 'Ventas',
      salary: '$750.000',
      status: 'Activo'
    },
    { 
      id: 'EMP-004', 
      name: 'Carlos Mendoza', 
      rut: '45.678.901-2', 
      email: 'carlos.mendoza@tienda.com', 
      phone: '+56 9 4567 8901',
      role: 'Almacenero',
      department: 'Logística',
      salary: '$700.000',
      status: 'Inactivo'
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rut: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    salary: '',
    status: 'Activo'
  });
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Activo':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'Inactivo':
        return 'bg-red-500/20 text-red-300 border border-red-500/30';
      case 'Vacaciones':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
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

  const addEmployee = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: `EMP-${String(employees.length + 1).padStart(3, '0')}`,
      ...formData
    };
    setEmployees([...employees, newEmployee]);
    setFormData({
      name: '',
      rut: '',
      email: '',
      phone: '',
      role: '',
      department: '',
      salary: '',
      status: 'Activo'
    });
    setShowAddForm(false);
  };

  const deleteEmployee = (employeeId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este empleado?')) {
      setEmployees(employees.filter(emp => emp.id !== employeeId));
    }
  };

  const openDeleteModal = (employee) => {
    setSelectedEmployee(employee);
  };

  const closeDeleteModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Empleados</h2>
        <div className="flex p-4 gap-4 mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium flex items-center gap-2"
          >
            <span>+</span>
            Agregar Nuevo Empleado
          </button>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">ID Empleado</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">RUT</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Correo</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Teléfono</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Cargo</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Departamento</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Salario</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Estado</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {employees.map((employee, index) => (
                  <tr key={employee.id} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/50'}>
                    <td className="py-3 px-4 text-sm font-medium text-white">{employee.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.rut}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.role}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{employee.department}</td>
                    <td className="py-3 px-4 text-sm font-medium text-gray-300">{employee.salary}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <button
                        onClick={() => deleteEmployee(employee.id)}
                        className="text-red-400 hover:text-red-300 transition duration-200"
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

        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-white">Agregar Nuevo Empleado</h3>
              <form onSubmit={addEmployee} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="text"
                  name="rut"
                  placeholder="RUT"
                  value={formData.rut}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Cargo"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="text"
                  name="department"
                  placeholder="Departamento"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <input
                  type="text"
                  name="salary"
                  placeholder="Salario"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                  required
                />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                  <option value="Vacaciones">Vacaciones</option>
                </select>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white p-2 rounded transition duration-200"
                  >
                    Agregar
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded transition duration-200"
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

export default Employees;