import Sidebar from './Sidebar'
import React from 'react'
import DashHero from './DashHero'
import Menu from './Menu'

const Dashboard = () => {
  return (
    <div className='flex w-full h-screen'>

      <Sidebar/>
      <div className='flex-1 p-10 bg-blue-50'>
      <Menu/>
      <DashHero/>
      </div>
    </div>
  )
}

export default Dashboard