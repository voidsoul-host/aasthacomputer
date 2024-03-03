import React from 'react'

import NavBar from '../../Components/NavBar';
import './Home.css';
import Hero from '../../Components/Hero';
import Certificate from '../../Components/Certificate';
import ContactUs from '../../Components/ContactUs';
import Footer from '../../Components/Footer';

function Home() {
  
  // bg-color e5eaf5 for home-main-container
  return (
    <div className='main-container'> 
      <div className=' container'>
      <NavBar />
      <Hero />
      <Certificate />
      <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Home
