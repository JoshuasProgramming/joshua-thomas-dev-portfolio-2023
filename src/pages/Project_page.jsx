import React from 'react'
import { useEffect } from 'react';

import View_All_Projects from '../components/View_All_Projects';

function Projects_page() {

  useEffect(() =>{
    document.title = 'Joshua Thomas | Projects';
  }, []);

  return (
    <>
    <section className="hero-section project-page">
      <p className='text'>All projects show my progression as</p>
      <div className='purple-text'>a Front End Developer</div>
    </section>
        
    <View_All_Projects/>

    </>
  )
}

export default Projects_page