import React from 'react';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className='text-3xl font-bold hidden md:block mt-4 border-b p-4 flex justify-between items-center text-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>URBN LUXE</h1>
      <ul className='flex flex-col mt-5 text-xl px-4'>
        {[
          {name: 'Dashboard', icon: <FaTachometerAlt />},
          {name: 'Orders', icon: <FaShoppingCart />},
          {name: 'Customers', icon: <FaUsers />},
          {name: 'Employees', icon: <FaUser />},
          {name: 'Products', icon: <FaBox />},
          {name: 'Settings', icon: <FaCog />},
        ].map((item) => (
          <li 
            key={item.name} 
            className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
              hover:bg-blue-600 hover:text-white ${activeSection === item.name ? 'bg-blue-600 text-white' : ''}`}
            onClick={() => setActiveSection(item.name)}
          >
            {item.icon}
            <span className='hidden md:inline'>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar;
