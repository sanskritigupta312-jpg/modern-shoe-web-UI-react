import React from 'react';
import Button from '../components/Button';
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import './Contact.css'; 

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-header'>Contact Us</h1>
      <p className='contact-subtext'>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! 
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU 
        CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY 
        PHONE, EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className='contact-content-wrapper'>
        <div className="form-section">
          {/* Buttons are outside the form tag */}
          <div className='button-group'>
    <Button text="VIA SUPPORT CHAT" icons={<MdMessage size={20} />} />
    <Button text="VIA CALL" icons={<IoMdCall size={20} />} />
          </div>

          <button className="email-form-btn">
    <HiMail size={24} />
    VIA EMAIL FORM
          </button>

          {/* Form starts here */}
          <form className='contact-form'>
    <div className="input-group">
      <label htmlFor='name' className='form-label'>Name</label>
      <input type="text" id="name" name="name" className='form-input' />
    </div>

    <div className="input-group">
      <label htmlFor='email' className='form-label'>Email</label>
      <input type="email" id="email" name="email" className='form-input' />
    </div>

    <div className="input-group">
      <label htmlFor='text' className='form-label'>Text</label>
      <textarea id="text" name="text" className='form-textarea' />
    </div>
    
    {/* Optional: Add a submit button here */}
          </form>
       </div>

        <img src='Service_image.svg' alt='service image' className='service-image' />
      </div>
    </div>
  );
};

export default Contact;