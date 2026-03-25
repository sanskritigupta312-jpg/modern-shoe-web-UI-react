import React from 'react';
import { NavLink } from 'react-router-dom';
import "Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-content">
          <div>
            <h2 className="footer-heading">Quick Links</h2>
            <ul className="footer-nav-list">
              <NavLink to="/Home" className="footer-link">Home</NavLink>
              <NavLink to="/Menu" className="footer-link">Menu</NavLink>
              <NavLink to="/About" className="footer-link">About</NavLink>
              <NavLink to="/Contact" className="footer-link">Contact</NavLink>
              <NavLink to="/Login" className="footer-link">Login</NavLink>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Available On</h2>
            <div className="available-icons">
              <a href="https://www.flipkart.com" className="store-link">
                <img src="flipkart.png" alt="flipkart" />
              </a>
              <a href="https://www.amazon.com" className="store-link">
                <img src="amazon.png" alt="amazon" />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-bar">
          <p>&copy; 2024 YourBrand. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="/privacy-policy" className="bottom-link">Privacy Policy</a>
            <a href="/terms-of-service" className="bottom-link">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;