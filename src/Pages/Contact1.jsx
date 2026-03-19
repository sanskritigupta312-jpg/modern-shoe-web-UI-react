// Contact.jsx
import React from 'react'
import './Contact1.css'

const Contact = () => {
  return (
    <div className="contact-page-wrapper"> {/* New wrapper for full page centering */}
      <div className="contact-box">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions about your order or our latest drops? We're here to help.</p>
          
          <div className="info-item">
            <strong>Email:</strong> support@nikeclone.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +1 (555) 000-SHOE
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="How can we help?" rows="5" required></textarea>
          </div>
          <button className="primary-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact