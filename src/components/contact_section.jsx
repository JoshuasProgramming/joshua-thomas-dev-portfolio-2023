//react imports 
import React, { Component } from 'react';

//style imports
import '../styles/style.css';

export default function contact_section() {
    return (
      <section className="hero-section contact">
          <p><div className='purple-text'>Get In Touch</div></p>
          <p className='text'>If you would like to discuss your project further or have any questions, please don't hesitate to contact me.</p>
    
          <div className="cv-container">
            <a>Email Me</a>
          </div>
      </section>
    )
}