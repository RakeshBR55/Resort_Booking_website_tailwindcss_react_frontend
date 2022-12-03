import {React,useContext} from 'react'
import Menu from '../../components/Dashboard/Menu'
import Sidebar from './Sidebar'
import sideBarContext from "../../context/sideBarContext";

const Users = () => {
  const show = useContext(sideBarContext);

  return (
    <div className="flex flex-col w-full h-screen">
    <div className={show.showMenu?`fixed top-0 left-0 z-50`:`fixed top-0 -left-64 lg:left-0 w-64`}>
      <Sidebar />
    </div>
    <div className="absolute lg:w-[calc(100%-16rem)] top-0 left-0 lg:left-64 h-[200vh] p-10 bg-blue-100">
      <Menu/>
    </div>
  </div>
  )
}

export default Users