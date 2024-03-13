import React, { useState } from 'react'
import './location.css'

function Location() {
    const [toggle, setToggle] = useState(false)
    const Loc1 = {
        title: 'Pugal Road, Bikaner',
        Add: "Near Old BSTC College, Bangla Nagar, Pugal Road, Bikaner",
        mob: "+91 9782821666",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.750385834308!2d73.2898805!3d28.032104099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd205def9c4b%3A0xeb0301d3b5d4c8db!2sAASTHA%20COMPUTERS!5e0!3m2!1sen!2sin!4v1710358345287!5m2!1sen!2sin"
    }
    const Loc2 = {
        title: 'Mundhro Ka Chowk, Bikaner',
        Add: "Opp. Mata Ji Temple Mundhro Ka Chowk, Dammani Chowk, Bikaner",
        mob: "+91 9928004669",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14088.248893417172!2d73.28442123909605!3d28.022573964447503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd5e2b790ab7%3A0xb53f5aede6b58848!2sAastha%20Computers!5e0!3m2!1sen!2sin!4v1710352576743!5m2!1sen!2sin"
    }
    const handleToggleMap = () =>{
        setToggle(!toggle)
        console.log(toggle)
    }
  return (
    <div className='location-container w-100 mt-5'>
        <div className='location-heads'>
        <h1>Our Locations</h1>
        <p>Find your nearest location.</p>
        </div>
        <div className='d-flex locations mt-5 mb-4'>
            <div className="leftLocation">
                <h3>{Loc1.title}</h3>
                <p className='mb-2'>{Loc1.Add}</p>
                <div className="mob mt-0 d-flex" style={{alignItems: 'center', gap: '0.8rem'}}>
                    <i class="fa-solid fa-phone"></i> <a href="tel:++919782821666">Call at Branch</a>
                </div>
            </div>
            <div className="rightLocation">
                <h3>{Loc2.title}</h3>
                <p className='mb-2'>{Loc2.Add}</p>
                <div className="mob mt-0 d-flex" style={{alignItems: 'center', gap: '0.8rem'}}>
                    <i class="fa-solid fa-phone"></i> <a href="tel:+919928004669">Call at Branch</a>
                </div>
            </div>
        </div>
        <button className="btn btn-success btn-lg mt-5 fs-5 d-block" onClick={()=>handleToggleMap()}>Toggle Map</button>
        <p className='mt-4'>Map for : <strong>{toggle? Loc1.title : Loc2.title}</strong></p>
        <iframe title={toggle? Loc1.title : Loc2.title} src={toggle? Loc1.url : Loc2.url} width="100%" height="250" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Location
