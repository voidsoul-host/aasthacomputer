import React from 'react'
import phstudentduotone from '../assets/ph_student-duotone.png'
import award from '../assets/award.png'

function Hero() {
  return (
    <div className='hero-container mt-5'>
      <div className="left">
        <h1 className='mb-4'>Empowering Minds for a Tech-Driven Future.</h1>
        <p className='mb-5'>Our institute is dedicated to equipping students with the knowledge and skills needed to thrive in the modern computer world. We aim to foster innovation, creativity, and digital literacy, empowering individuals to embrace technology as a catalyst for positive change and endless opportunities.</p>
        <button className="btn btn-warning w-50 hero-btn">Contact Us &gt;</button>
      </div>
      <div className="right">
        <div className="hero-box z-1 students d-flex">
          <div className="box-text">
            <h1 className='fs-1'>50K+</h1>
            <h5 className='px-3'>Students</h5>
          </div>
          <div className="box-vector">
            <img src={phstudentduotone} alt="student-vector" />
          </div>
        </div>
        <div className="hero-box experience z-3 d-flex">
          <div className="box-text">
            <h1 className='fs-2'>20+</h1>
            <h6>YEARS EXPERIENCE</h6>
          </div>
          {/* <div className="box-vector">
            <img src={phstudentduotone} alt="student" />
          </div> */}
        </div>
        <div className="hero-box awards z-2 d-flex">
          <div className="box-text mt-5 award-text">
            <h1>125+</h1>
            <h5 className='px-2'>Awards</h5>
          </div>
          <div className="box-vector award-vector">
            <img src={award} alt="student" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
