import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Orders from './components/Orders'
import Customers from './components/Customers'
import Employees from './components/Employees'
import Products from './components/Products'
import Settings from './components/Settings'

function App() {
  // Estado que controla la sección activa
  const [activeSection, setActiveSection] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-64 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Section */}
        <main className="flex-1 p-6 overflow-auto">
          {activeSection === 'Dashboard' && <Dashboard />}
          {activeSection === 'Orders' && <Orders />}
          {activeSection === 'Customers' && <Customers />}
          {activeSection === 'Employees' && <Employees />}
          {activeSection === 'Products' && <Products />}
          {activeSection === 'Settings' && <Settings />}
        </main>
      </div>
    </div>
  )
}

export default App
