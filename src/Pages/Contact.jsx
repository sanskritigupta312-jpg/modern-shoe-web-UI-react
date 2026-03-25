import React from 'react'
import Button from '../components/Button'
import { MdMessage } from "react-icons/md"
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
        <h1 className='contact-title'>Contact Us</h1>

        <p className='contact-desc'>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! 
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN 
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>

        <div className='contact-wrapper'>
          <div>
            <div className='contact-buttons'>
              <Button text="VIA SUPPORT CHAT" icons={<MdMessage className="icon"/>}/>
              <Button text="VIA CALL" icons={<IoMdCall className="icon"/>}/>
            </div>

            <button className="email-btn">
                <HiMail className="icon"/>
                VIA EMAIL FORM
            </button>

            <form className='contact-form'>
              <label className='label'>Name</label>
              <input type="text" name="name" className='input'/>

              <label className='label'>Email</label>
              <input type="email" name="email" className='input'/>

              <label className='label'>Text</label>
              <textarea name="text" className='textarea'/>
            </form>
          </div>

          <img src='Service_image.svg' alt='service' className='contact-image'/>
        </div>
    </div>
  )
}

export default Contact