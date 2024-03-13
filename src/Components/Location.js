import React from 'react'

function Location() {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14088.248893417172!2d73.28442123909605!3d28.022573964447503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd5e2b790ab7%3A0xb53f5aede6b58848!2sAastha%20Computers!5e0!3m2!1sen!2sin!4v1710352576743!5m2!1sen!2sin'
  return (
    <div>
        <iframe title='Aastha Comptuers' src={mapUrl} width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Location
