import {React,useContext} from 'react'
import Menu from '../../components/Dashboard/Menu'
import Sidebar from './Sidebar'
import sideBarContext from "../../context/sideBarContext";
import UsersCard from '../../components/Dashboard/UsersCard';

const Users = () => {
  const show = useContext(sideBarContext);

  return (
    <div className='flex justify-center items-center w-full bg-gray-50 shadow-xl rounded-md flex-wrap p-5 space-y-5'>
        <div className='w-full flex justify-between'>
           <h3 className='text-2xl'>Users</h3><span>Fast 10 days</span>
        </div>
        <div className='w-full space-y-5'>
            <ul className='flex text-xl justify-between items-center'>
                <li>User</li>
                <li>Room Type<span>(rooms)</span></li>
                <li>Date</li>
            </ul>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
            <UsersCard/>
        </div>
    </div>
  )
}

export default Users