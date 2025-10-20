import React from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-16 md:ml-64 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard */}
        <main className="flex-1 p-6 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
