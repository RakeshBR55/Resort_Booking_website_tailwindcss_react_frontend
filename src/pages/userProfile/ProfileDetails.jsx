import React from 'react'

const ProfileDetails = ({name="",email="",contact=""}) => {
  return (
    <div className=' bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md'>
      <div className='flex justify-between py-2 border-b-[1px]'>
            Name<span>{name}</span>
        </div>
        <div className='flex justify-between py-2 border-b-[1px]'>
            Contact<span>{contact}</span>
        </div>
        <div className='flex justify-between py-2 border-b-[1px]'>
            email<span>{email}</span>
        </div>
        
    </div>
  )
}

export default ProfileDetails