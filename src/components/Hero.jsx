//react imports 
import React, { Component } from 'react';

//style imports
import '../styles/style.css';

export default function Hero() {
  return (
    <section className="hero-section">
        <p>Hey I'm <span>Joshua Thomas</span></p>
        <p className='purple-text'>a Full Stack Engineer</p>
        <p>I enjoy creating sleek and responsive applications, giving the user the best experience possible.</p>
    </section>
  )
}
