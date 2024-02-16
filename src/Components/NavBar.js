import React from 'react';
import { Link } from 'react-router-dom';

// file and assets imports
import acelogo from '../assets/acelogo.png'
import './Navbar.css'

function NavBar() {
  return (
    <div className='container navbar'>
        <ul className='nav-list'>
            <Link to={'/'}><li className='nav-item'>Home</li></Link>
            <Link to={'/About'}><li className='nav-item'>About Us</li></Link>
            <Link to={'/Contact'}><li className='nav-item'>Contact Us</li></Link>
            <Link to={'/'}><li className='nav-item'><img src={acelogo} alt="aasthacomputer-logo" /></li></Link>
            <Link to={'/Course'}><li className='nav-item'>Courses</li></Link>
            <Link to={'/Event'}><li className='nav-item'>Events</li></Link>
            <Link to={'/Gallery'}><li className='nav-item'>Gallery</li></Link>
            <li className='nav-item'>More</li>
        </ul>
    </div>
  )
}

export default NavBar
