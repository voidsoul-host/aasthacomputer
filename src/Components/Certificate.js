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
    <div className='certificate-container'>
        <h1>Certificate</h1>
        <p className='mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor vero, rem quia magnam necessitatibus quas eligendi dignissimos corporis ex illo reiciendis velit, distinctio ducimus temporibus aperiam iste iusto impedit minus quibusdam, perferendis cum. Cupiditate, quis.</p>
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
