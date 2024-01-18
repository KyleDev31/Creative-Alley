import React from "react"
import './Navbar.css';
  const Navbar = () => {
  return (
   
      <nav className="fixed w-full top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img src="creative alley logo.png" className=" mr-3 h-10 sm:h-10" alt="My Logo" />
                  <h2 className="text-2xl text-white font-bold font-serif italic hover:text-cyan-600">
                  
                    </h2>
                    </div>
                    </div>
                    <div className="container mx-auto p-2">
                    <div className="flex items-center justify-center">
                    <div className="flex space-x-3">
            <a href="#homepage" className="text-white text-sm font-medium hover:from-pink-600 bg-gradient-to-r hover:text-white rounded-md px-3 py-2">
              Home
            </a>
            <a href="#servicespage" className="text-white text-sm font-medium hover:from-pink-600 bg-gradient-to-r hover:text-white rounded-md px-3 py-2">
              Services
            </a>
            <a href="#aboutpage" className="text-white text-sm font-medium hover:from-cyan-600 bg-gradient-to-r hover:text-white rounded-md px-3 py-2">
              About Us
            </a>
            <a href="#Testimonialpage" className="text-white text-sm font-medium hover:from-cyan-600 bg-gradient-to-r hover:text-white rounded-md px-3 py-2">
              Testimonials
            </a>
            </div>
            </div>
      </div>
      </div>
      </div>
      </nav>
         
  )
};
export default Navbar;