import React from 'react'
import './contactus.css'

function ContactUs() {
  return (
    <div className='contact-container mt-5'>
      <h1>Contact Us</h1>
      <p className='mb-5 mt-4'>Connect with us effortlessly through our Contact Us section. Your inquiries and feedback are valuable to us, and we're here to assist you every step of the way. Let's start a conversation today!</p>
      <div className="contactForm mt-5">
        <form action="" className=''>
          <div className="d-flex form-div">
          <div className="form-div-one">
            <div className="form-floating mb-2">
              <input type="text" className="form-control" id="floatingName" placeholder="e.g. Sanskar Purohit" required/>
              <label htmlFor="floatingName">Full Name</label>
            </div>
            <div className="form-floating mb-2">
              <input type="email" className="form-control" id="floatingEmail" placeholder="e.g. name@example.com" required/>
              <label htmlFor="floatingEmail">Email Address</label>
            </div>
            <div className="form-floating">
              <input type="number" className="form-control" id="floatingNumber" placeholder="e.g. 9876543210" required/>
              <label htmlFor="floatingNumber">Phone Number</label>
            </div>
          </div>
          <div className="form-div-two">
            <div className="form-floating h-100">
              <textarea type="textarea" className="form-control h-100" id="floatingMessage" placeholder="e.g. Arrange a Callback for me!"></textarea>
              <label htmlFor="floatingMessage">Message</label>
            </div>
          </div>
          </div>
          <button type="submit" className='btn btn-secondary mt-4'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
