import React from 'react'

const ProfileDetails = () => {
  return (
    <div className=' bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md'>
        <div className='flex justify-between py-2 border-b-[1px]'>
            Contact<span>abhi@gmail.com</span>
        </div>
        <div className='flex justify-between py-2 border-b-[1px]'>
            email<span>abhi@gmail.com</span>
        </div>
        <div className='flex justify-between py-2 border-b-[1px]'>
            Rooms Booked<span>Nothing</span>
        </div>
    </div>
  )
}

export default ProfileDetails