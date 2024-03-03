import React from 'react'

import NavBar from '../../Components/NavBar';
import './Home.css';
import Hero from '../../Components/Hero';
import Certificate from '../../Components/Certificate';
import ContactUs from '../../Components/ContactUs';

function Home() {
  
  // bg-color e5eaf5 for home-main-container
  return (
    <div className='home-main-container'> 
      <div className='navbar-section container'>
      <NavBar />
      <Hero />
      <Certificate />
      <ContactUs />
      </div>
    </div>
  )
}

export default Home
