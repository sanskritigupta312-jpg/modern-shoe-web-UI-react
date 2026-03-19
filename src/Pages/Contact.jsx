import React from 'react'
import Button from '../components/Button'
import { MdMessage } from "react-icons/md"
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className='m-5 p-4'>
        <h1 className='text-4xl font-bold m-7 pl-5'>Contact Us</h1>
        <p className='m-7 pl-5 font-poppins text-base text-gray-600'>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,EMAIL,OR SOCIAL MEDIA.</p>
        <div className='flex justify-center items-center flex-wrap p-7'>
          <div>
            <div className='flex flex-wrap gap-4.5 w-full justify-center items-center'>
              <Button text="VIA SUPPORT CHAT" icons={<MdMessage className="text-2xl" />}/>
              <Button text="VIA CALL" icons={<IoMdCall className="text-2xl" />}/>
            </div>
            <button className="flex justify-center flex-wrap items-center gap-2 mt-4 text-black font-semibold border-2 border-black p-3 rounded-md w-full hover:bg-black hover:text-white transition duration-300">
                <HiMail className="text-2xl"/>
                VIA EMAIL FORM
            </button>
            <form className='flex flex-col m-7'>
              <label htmlFor='name' className='top-8 relative ml-3 bg-white p-2 text-sm w-14'>Name</label>
              <input type="text" name="name" className='border-2 border-gray-300 rounded-md p-3 mt-4'/>
              <label htmlFor='email' className='top-8 relative ml-3 bg-white p-2 text-sm w-14'>Email</label>
              <input type="email" name="email" className='border-2 border-gray-300 rounded-md p-3 mt-4'/>
              <label htmlFor='text' className='top-8 relative ml-3 bg-white p-2 text-sm w-14'>Text</label>
              <textarea name="text" className='border-2 border-gray-300 rounded-md p-3 mt-4 h-32'/>
            </form>
          </div>
          <img src='Service_image.svg' alt='service image' className='w-full max-w-min m-9 py-7'></img>
        </div>
    </div>
  )
}

export default Contact