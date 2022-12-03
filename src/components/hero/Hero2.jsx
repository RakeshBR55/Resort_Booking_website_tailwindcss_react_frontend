import React from 'react'

const Hero2 = () => {
  return (
    <div className="absolute md:-mt-44 -mt-72 w-full px-6 mx-auto">

    
    <section className="mb-32">

      <div className="relative overflow-hidden mt-10 bg-no-repeat bg-cover" style={{backgroundPosition: "50%", backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/154.jpg')", height: "500px"}}></div>

      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-800">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.7)", backdropFilter: "blur(30px)"}}>
            <h1 className="text-3xl md:text-4xl text-center xl:text-7xl font-bold tracking-tight mb-12">Welcome to Madhu Homestay <br /><span className="text-red-600">for your </span></h1>
            <a className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a className="inline-block px-7 py-3 text-white font-medium text-sm leading-snug bg-transparent text-red-600 font-medium text-xs leading-tight uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </section>
    
  
</div>
  )
}

export default Hero2