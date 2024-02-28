import React from 'react'
import './certificate.css'
import rkclCertificate from '../assets/1Certificate.jpeg'

function Certificate() {
  return (
    <div className='certificate-container'>
        <h1>Certificate</h1>
        <p className='mb-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor vero, rem quia magnam necessitatibus quas eligendi dignissimos corporis ex illo reiciendis velit, distinctio ducimus temporibus aperiam iste iusto impedit minus quibusdam, perferendis cum. Cupiditate, quis.</p>
        <div className="cards mt-4">
          <div className="card">
            <div className="card-img">
              <img className='certificate-img' src={rkclCertificate} alt="" />
            </div>
            <div className="card-text">
              <span className='text'>MADE IN INDIA</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img className='certificate-img' src={rkclCertificate} alt="" />
            </div>
            <div className="card-text">
              <span className='text'>MADE IN INDIA</span>
            </div>
          </div>
          <div className="card">
            <div className="card-img">
              <img className='certificate-img' src={rkclCertificate} alt="" />
            </div>
            <div className="card-text">
              <span className='text'>MADE IN INDIA</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Certificate
