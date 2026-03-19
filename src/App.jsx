import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      {/* Navbar stays at the top of every page */}
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/Home' element={<Hero />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom of every page */}
      <Footer />
    </div>
  )
}

export default App