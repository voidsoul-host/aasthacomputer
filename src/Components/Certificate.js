import React, { useState } from 'react'
import './certificate.css'
import rkclCertificate from '../assets/certificates/1Certificate.jpeg'
import dcoCertificate from '../assets/certificates/1Certificate.jpeg'
import basicCertificate from '../assets/certificates/1Certificate.jpeg'

function Certificate() {
  const [certificates, setCertificates] = useState([
    {
      title: 'Typing Certificate',
      imagePath: rkclCertificate,
    },
    {
      title: 'DIPLOMA IN COMPUTER OPERATOR (DCO)',
      imagePath: dcoCertificate,
    },
    {
      title: 'Basic Fundamentals Certificate',
      imagePath: basicCertificate,
    },
  ])
  
  return (
    <div className='certificate-container mb-5'>
        <h1>Certificate</h1>
        <p className='mb-0'>Our institute offers courses that provide essential certificates crucial for students' career advancement. These certificates not only validate their skills but also open doors to exciting opportunities, ensuring a bright and promising future.</p>
        <div className="cards mt-4">
          {
            certificates.map((certificate, index) =>{
              console.log('hit')
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img className='certificate-img' src={certificate.imagePath} alt="" />
                  </div>
                  <div className="card-text">
                    <span className='text'>{certificate.title}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Certificate
