import React from 'react'

import NavBar from '../../Components/NavBar';
import './Home.css';

function Home() {
  
  // bg-color e5eaf5 for home-main-container
  return (
    <div className='home-main-container'> 
      <div className='navbar-section container'>
      <NavBar />
      </div>
    </div>
  )
}

export default Home
