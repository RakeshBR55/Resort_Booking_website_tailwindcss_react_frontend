import Sidebar from './Sidebar'
import React from 'react'
import DashHero from './DashHero'

const Dashboard = () => {
  return (
    <div className='flex w-full h-screen'>
      <Sidebar/>
      <DashHero/>
    </div>
  )
}

export default Dashboard