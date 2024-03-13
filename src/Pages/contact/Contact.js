import React from 'react'
import NavBar from '../../Components/NavBar'
import ContactUs from '../../Components/ContactUs'
import Footer from '../../Components/Footer'

function Contact() {
  return (
    <div className='main-container'>
      <div className="container">
        <NavBar />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
