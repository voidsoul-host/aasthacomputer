import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-container footer mt-5'>
      <div className="footerUp d-flex">
        <div className="fleft">
            <h3>Our Vision: Transforming Minds, Empowering Futures</h3>
            <p className='mt-4' >Our institute is dedicated to equipping students with the knowledge and skills needed to thrive in the modern computer world. We aim to foster innovation, creativity, and digital literacy, empowering individuals to embrace technology as a catalyst for positive change and endless opportunities.</p>
            <div className="socialIcons mt-5 d-flex">
                {/* instagram svg */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
            
                {/* fb svg */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><
                    path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
                
                {/* x-twitter svg */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                </svg>
            </div>
        </div>
        <div className="fright d-flex">
            <div className="pages-div">
                <h3>Pages</h3>
                <ul className='mt-4 footerUl'>
                    <li>&gt; About Us</li>
                    <li>&gt; Contact Us</li>
                    <li>&gt; Courses</li>
                    <li>&gt; Gallery</li>
                    
                </ul>
            </div>
            <div className="importantLinks">
                <h3>Important Links</h3>
                <ul className='mt-4 footerUl'>
                    <a href="tel:+919928004669">
                        <li className='list d-flex'>
                            <span>
                            <i class="fa-solid fa-phone"></i>
                            </span>
                            Call Us
                        </li>
                    </a>
                    <a href="mailto:help.aasthacomputers@gmail.com">
                        <li className='list d-flex'>
                            <span>
                            <i class="fa-solid fa-envelope"></i>
                            </span>
                            Mail at
                        </li>
                    </a>
                    {/* <li>&gt; Courses</li>
                    <li>&gt; Gallery</li> */}
                    
                </ul>
            </div>
        </div>
      </div>
      <div className="footerDown d-flex">
        <div className="footerDiv d-flex">
            <p className='footerText mb-0'>&copy; 2024 AASTHA COMPUTERS, ALL RIGHTS RESERVED</p>
            <p>Developed & Designed with &#10084;&#65039; by <span className='brandAd'><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/sanskar-purohit/">Sanskar</a></span> & <span  className='brandAd'><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/dheeraj-lakhotia/">Dheeraj</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
