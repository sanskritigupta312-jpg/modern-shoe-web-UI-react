import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
        <nav className="nav-container">
            <div className="logo">
              <NavLink to="/" onClick={closeMenu}>
                <img src="brand_logo.png" alt="Brand Logo" />
              </NavLink>
            </div>

            {/* Hamburger Icon */}
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                <li><NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Home">Home</NavLink></li>
                <li><NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Menu">Menu</NavLink></li>
                <li><NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/About">About</NavLink></li>
                <li><NavLink onClick={closeMenu} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Contact">Contact</NavLink></li>
                <li className="mobile-only">
                    <NavLink to="/Login" onClick={closeMenu}>
                        <button className="login-button">Login</button>
                    </NavLink>
                </li>
            </ul>

            <div className="nav-actions desktop-only">
                <NavLink to="/Login">
                    <button className="login-button">Login</button>
                </NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Navbar