//react imports 
import React, { Component } from 'react';

//style imports
import '../styles/style.css';

//import images
import CV from '../images/Joshua_Thomas_CV.pdf';

export default function Hero() {
  return (
    <section className="hero-section">
        <p>Hey I'm <span>Joshua Thomas</span> <br></br> <div className='purple-text'>a Front End Developer</div></p>
        <p className='text'>I enjoy creating sleek and responsive applications<br></br>giving the user the best experience possible.</p>

        <div className="cv-container">
          <a href={CV} download>Download my CV</a>
        </div>
    </section>
  )
}
