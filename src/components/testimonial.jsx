import React from 'react'

import testimonial1 from '../testimonial_images/testimonial 1.png';

function testimonials() {
  return (
    <div className="testimonials">
        <p>Testimonials &#8650;</p>
        <img src={testimonial1} alt="testimonial1" />
        <div className="testimonials-info">
        <h3>Tarrazy Guemri</h3>
        </div>
        <p className="text">Creating my website with Joshua was effortless, he exceeded my aesthetic expectations and was responsive to my requests. Transfer of files was smooth, allowing me to launch my website quickly. Joshua is highly professional and easy to work with.</p>
    </div>
  )
}

export default testimonials