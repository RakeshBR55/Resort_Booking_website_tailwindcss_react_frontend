import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full h-[90px] bg-black'>
        <div className=' max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
            <h1 className='text-[#00d8ff]'>DEFI</h1>
        </div>
        <div className='hidden md:flex'>
            <ul className='flex text-white items-center'>
                <li>Platform</li>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>
                <button className='ml-4'>Use Defi</button>
            </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        


        </div>
       
        {/* Mobile menu */}
        <div className= {nav ? ' w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>


        
        <ul>
                <li>Platform</li>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>
                <button className='m-8'>Use Defi</button>
            </ul>




            </div>
        </div>
    </div>

  )
}

export default Navbar





{/* <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1" for="formGridCode_month">Month</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_month"/>
    </div>
    <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1" for="formGridCode_year">Year</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_year"/>
    </div>
    <div className="w-full px-2 md:w-1/3">
      <label className="block mb-1" for="formGridCode_cvc">CVC</label>
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="formGridCode_cvc"/>
    </div> */}








// import React,{useState} from 'react'
// import Datepicker from "react-tailwindcss-datepicker";





// const BookingForm = () => {
//     const [value, setValue] = useState({
//         startDate: new Date(),
//         endDate: new Date().setMonth(11)
//     });
    
//     const handleValueChange = (newValue) => {
//         console.log("newValue:", newValue);
//         setValue(newValue);
//     }
//   return (



    
//     <div className='w-80'>
//             <Datepicker
//                 value={value}
//                 onChange={handleValueChange}
//                 showShortcuts={true}
                
//             />
//         </div>
    
    
//   )
// }

// export default BookingForm





{/* <form className=' h-60 relative w-3/4 flex flex-wrap bg-green-300 md:h-12 items-center rounded-2xl justify-center mx-auto mt-5 z-40'>
    <div className="w-full px-2 md:w-1/5">
      
      <input className="w-full flex h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" placeholder='Rooms' id="formGridCode_month"/>
    </div>
    <div className="w-full px-2 md:w-1/5">
      
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" placeholder='Adults' id="formGridCode_year"/>
    </div>
    <div className="w-full px-2 md:w-1/5">
      
      <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="number" placeholder='Childrens' id="formGridCode_cvc"/>
    </div>
    <div className='w-full h-10 px-3 md:w-1/5'>
            <Datepicker
                value={value}
                onChange={handleValueChange}
                
                className='placeholder:hello'
                
                
            />
    </div>
    <button
                        type="submit"
                        className="w-full h-10 text-center py-3 rounded bg-green-500 text-white hover:bg-yellow-800 focus:outline-none my-1 md:w-20 placeholder:hello"
                    >GO</button>
    </form> */}