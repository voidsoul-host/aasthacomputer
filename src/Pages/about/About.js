import React from 'react'
import NavBar from '../../Components/NavBar'
import acelogo from '../../assets/acelogo.png'
import './about.css'
import Footer from '../../Components/Footer'

function About() {
  return (
    <div className='main-container'>
      <div className="container">
        <NavBar />
        <div className="whoWeAre d-flex mt-4">
          <div className="left leftWho">
            <h1>Who We Are : A New Belief</h1>
            <p style={{textAlign:'justify'}} className='mb-0'>"At Aastha Computers, we are more than just a coaching institute; we are a <strong style={{fontWeight: '600'}}>dynamic hub of learning, innovation, and growth.</strong> With a rich legacy spanning <strong style={{fontWeight: '600'}}>Two Decades</strong>, we have evolved into the leading destination for computer education. Our relentless commitment to excellence drives us to continuously design and offer cutting-edge courses tailored to meet the demands of the ever-evolving digital landscape. At the heart of our approach lies a blend of tradition and modernity, where we honor time-tested teaching methodologies while embracing the latest in technology and pedagogy. Our team of passionate educators is dedicated to nurturing not just academic proficiency but also critical thinking, creativity, and problem-solving skills in our students. We take pride in fostering a supportive and inclusive learning environment where every individual is empowered to unleash their full potential. <strong style={{fontWeight: '600'}}>At Aastha Computers, we believe in transforming aspirations into achievements and paving the way for a brighter future.</strong>"</p>
          </div>
          <div className="right rightWho">
            <div className="about-box z-1 d-flex">
              <div className="box-text">
                <img src={acelogo} alt="whoWeAre" />
              </div>
            </div>
          </div>
        </div>
        <div className="ourVision d-flex mt-5">
        <div className="right rightWho">
            <div className="about-box z-1 d-flex">
              <div className="box-text">
                <img src={acelogo} alt="whoWeAre" />
              </div>
            </div>
          </div>
          <div className="left leftWho">
            <h1>Our Vision : Transforming Minds, Empowering Futures</h1>
            <p style={{textAlign:'justify'}} className='mb-0'>At our institute, we envision a future where every individual is equipped with the knowledge and skills to thrive in the rapidly evolving landscape of the modern computer world. Our mission is to inspire and empower the next generation with cutting-edge technology education, fostering a culture of innovation, creativity, and digital literacy. Through personalized learning experiences and hands-on training, we aim to ignite curiosity, cultivate critical thinking, and nurture a passion for lifelong learning. Together, let's shape a world where technology serves as a tool for positive change, driving progress and prosperity for all.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
