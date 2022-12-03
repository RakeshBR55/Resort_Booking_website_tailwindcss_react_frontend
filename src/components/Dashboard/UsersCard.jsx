import React from 'react'
import user from '../../assets/User.jpg'
const UsersCard = ({userId,fullName,roomType,booking,date}) => {
  return (
    <div>
      <ul className="flex justify-between border-b-[1px] items-center">
        <li className='flex justify-center items-center space-x-2'>
            <img src={user} alt="User image" className='w-10 rounded-md'/>
            <span>
                <h3>Manoj Bhat</h3>
                <p>bhatmanoj@gmail.com</p>
            </span>
        </li>
        <li>{userId}</li>
        <li>{roomType}</li>
        <li>{booking}</li>
        <li>{date}</li>
      </ul>
    </div>
  )
}

export default UsersCard