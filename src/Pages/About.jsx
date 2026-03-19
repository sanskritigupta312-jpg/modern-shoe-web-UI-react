import React from 'react'

const About = () => {
  return (
    <div className="page-content container">
      <div className="page-header">
        <h1 className="large-title">Our Story</h1>
        <p className="subtitle">Founded in 2024, NIKE-CLONE was born out of a passion for high-performance footwear.</p>
      </div>
      
      <div className="about-main">
        <p>We believe that your feet deserve the best materials and the most innovative designs. Our team works tirelessly to source sustainable materials and engineer the most comfortable soles in the industry.</p>
        
        <div className="stats-grid">
           <div className="stat-card">
              <h2>10k+</h2>
              <p>Happy Customers</p>
           </div>
           <div className="stat-card">
              <h2>50+</h2>
              <p>Unique Designs</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default About