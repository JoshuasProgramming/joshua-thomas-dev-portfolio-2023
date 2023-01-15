import React from 'react'

import testimonial1 from '../testimonial_images/testimonial 1.png';

function testimonials() {
  return (
    <div className="hero-section">
        <div className="top">
            <p>Testimonials</p>
            <img src={testimonial1} alt="testimonial1" />
            <p className="text">Creating my website with Joshua was effortless, he exceeded my aesthetic expectations and was responsive to my requests. Transfer of files was smooth, allowing me to launch my website quickly. Joshua is highly professional and easy to work with.</p>
        </div>
    </div>
  )
}

export default testimonials