import React from 'react'
import Card from './Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataLine, dataBar } from '../assets/chartData'
import {Line, Bar} from 'react-chartjs-2'
import {Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement} from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
  return (
    <div className='grow p-8'>
        <h2 className='text-2xl font-bold text-white mb-4'>Panel principal</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            <Card icon={<FaShoppingCart />} title="Pedidos" value="140"/>
            <Card icon={<FaBox />} title="Productos" value="120"/>
            <Card icon={<FaUsers />} title="Usuarios" value="30"/>
            <Card icon={<FaCog />} title="Ajustes" value="11"/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='bg-white p-4 text-white dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg font-semibold mb-4'>Datos de ventas</h3>
                <Line data={dataLine} />
            </div>
            <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                <h3 className='text-lg text-white font-semibold mb-4'>Datos de productos</h3>
                <Bar data={dataBar} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard