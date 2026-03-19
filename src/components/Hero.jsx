import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Experience unparalleled comfort and style with our premium footwear collection. Crafted for those who value quality and design.</p>
            
            <div className="hero-btn-group">
                <button className='primary-btn'>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>   

            <div className="shopping-availability">
               <p>Also Available On</p>
               <div className="brand-icons">
                  <img src="amazon.png" alt="Amazon Logo" />
                  <img src="flipkart.png" alt="Flipkart Logo" />
               </div>
            </div>
        </div>
        
        <div className="hero-image-container">
            <img src="shoe_image.png" alt="Featured Shoe" className="floating-img" />
        </div>
    </main>
  )
}

export default Hero