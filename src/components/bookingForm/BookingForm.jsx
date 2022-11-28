import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
    
  return (

    
<div className="p-5">
    <div className="mt-2">
    <div className="w-full flex-1">
                        <div className="my-2 p-1  flex rounded">
                        <h1 className='text-3xl mx-auto font-Rubik text-green-300'>Check Room availability</h1>
                         </div>
                    </div>
        <div className="flex flex-col md:flex-row pb-4 mb-4">
            
            <div className="flex-1">
                <div className="flex flex-col md:flex-row">
                <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="Number of rooms" type="number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "/> </div>
                    </div>
                
                    <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="Adults" type="number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "/> </div>
                    </div>
                    <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <input placeholder="children" type="number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "/> </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row pt-6">
                <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <p className='p-2 ml-4'>From:</p>
                        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat= "dd/MM/yyyy" 
      placeholderText="To"
      withPortal
    /> </div>
                    </div>
                
                   
                    <div className="w-full flex-1 mx-2">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                        <p className='p-2 ml-4 mr-4'>To:</p>
                        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat= "dd/MM/yyyy" 
      placeholderText="To"
      withPortal
    />
                             </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row ">
            
            <div className=" flex flex-col md:flex-row mx-auto">
                <button className="text-sm  mx-auto w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Go</button>
            </div>
        </div>
    </div>
</div>


    
    
    
    
  )
}

export default BookingForm






