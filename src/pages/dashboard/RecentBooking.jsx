import React from 'react'
import BookingCard from '../../components/Dashboard/BookingCard'
import useFetch from '../../hooks/useFetch'


const RecentBooking = () => {
  const {data,loading,err,reFetch} = useFetch('http://127.0.0.1:8800/api/admin/bookings')
  console.log(data)
  return (
    <div className='flex justify-between items-center w-full bg-gray-50 shadow-xl rounded-md flex-wrap p-5 space-y-5'>
        <div className='w-full flex justify-between flex-wrap'>
           <h3 className='text-2xl'>Recent Bookings</h3><span>Fast 10 days</span>
        </div>
        <div className='w-full space-y-5 flex flex-col'>
            <div className='flex flex-col lg:flex-row text-xl justify-between flex-wrap'>
                <span>Date</span>
                <span>Room</span>
                <span>Booked By</span>
            </div>
            {
              data.map( item => {
                return (
                  <BookingCard checkIn={item.checkIn.substring(0,10)} checkOut={item.checkOut.substring(0,10)} roomDetails={item.roomDetails} name={item.userId['fullName']} email={item.userId['email']} />
                )
              })
            }

        </div>
    </div>
  )
}

export default RecentBooking