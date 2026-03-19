import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bottom-0 bg-[#2e2e2e] w-full text-center text-white py-8 position-relative">
        <footer>
          <div className="flex justify-around flex-wrap m-2">  
              <div>
                    <h2 className="text-red-500 font-semibold m-3 text-lg">Quick Links</h2>
                    <ul className='flex space-around gap-4 mb-2 flex-wrap text-sm'>
                        <NavLink to="/Hosme" className="hover:text-red-500">Home</NavLink>
                        <NavLink to="/Menu" className="hover:text-red-500">Menu</NavLink>
                        <NavLink to="/About" className="hover:text-red-500">About</NavLink>
                        <NavLink to="/Contact" className="hover:text-red-500">Contact</NavLink>
                        <NavLink to="/Login" className="hover:text-red-500">Login</NavLink>
                    </ul>
                </div>
                <div>
                    <h2 className="text-red-500 font-semibold text-lg m-5">Available On</h2>
                    <div className="flex justify-center items-center flex-wrap gap-5 m-3">
                        <a href="https://www.flipkart.com" className='size-6 hover:size-7'>
                            <img src="flipkart.png" alt="flipkart" />
                        </a>
                        <a href="https://www.amazon.com" className='size-6 hover:size-7'>
                            <img src="amazon.png" alt="amazon" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600 w-full my-4"></hr>
            <div className="flex justify-between m-3 text-[12px] text-gray-500">
                <p>&copy; 2024 YourBrand. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="/privacy-policy" className="hover:text-red-500 hover:underline">Privacy Policy</a>
                    <a href="/terms-of-service" className="hover:text-red-500 hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
           
    </div>
  )
}

export default Footer