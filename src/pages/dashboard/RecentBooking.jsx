import React from 'react'
import BookingCard from '../../components/Dashboard/BookingCard'

const RecentBooking = () => {
  return (
    <div className='flex justify-center items-center w-full bg-gray-50 shadow-xl rounded-md flex-wrap p-5 space-y-5'>
        <div className='w-full flex justify-between'>
           <h3 className='text-2xl'>Recent Bookings</h3><span>Fast 10 days</span>
        </div>
        <div className='w-full space-y-5'>
            <ul className='flex text-xl justify-between'>
                <li>OrderId</li>
                <li>Date</li>
                <li>Payment Status</li>
                <li>Rooms</li>
            </ul>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>
            <BookingCard/>

        </div>
    </div>
  )
}

export default RecentBooking