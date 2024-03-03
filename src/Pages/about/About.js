import React from 'react'
import NavBar from '../../Components/NavBar'
import acelogo from '../../assets/acelogo.png'
import './about.css'

function About() {
  return (
    <div className='main-container'>
      <div className="container">
        <NavBar />
        <div className="whoWeAre d-flex">
          <div className="left leftWho">
            <h1>WHO WE ARE</h1>
            <p className='mb-0 mt-5'>We are a group of students who are passionate about technology and want to make the world a better place.</p>
          </div>
          <div className="right rightWho">
            
          <div className="about-box z-1 d-flex">
            <div className="box-text">
              <img src={acelogo} alt="whoWeAre" />
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
