import React from 'react'
import BookingForm from '../bookingForm/BookingForm'


const Hero = () => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover w-full mt-28 ml-10 lg:mx-auto"
      style={{
        backgroundPposition: "50%",
        backgroundImage: "url('https://images.unsplash.com/photo-1566571807426-61eca847576f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')",
        height: "500px"
      }}
    >
    
      <div
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}
      >
        <div className="flex justify-center items-left h-full">
        <div className="mt-10 p-10">
          <BookingForm />
        </div>
        
          <div className="text-center text-white px-6 md:px-12 pt-10 mt-10">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              The best place to enjoy <br /><span>your weekend</span>
            </h1>
            <button
              type="button"
              className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  
}

export default Hero