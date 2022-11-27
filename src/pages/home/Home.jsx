import  Carousel  from '../../components/carousel/Carousel'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import BookingForm from '../../components/bookingForm/BookingForm'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <BookingForm/>
      <Hero />
    </div>
  )
}

export default Home