import React from 'react'
import { useEffect } from 'react';

// import Projects from '../components/Projects';
// import Featured_projects from '../components/Featured_projects'
// import Featured_projects_heading from '../components/Featured_projects_heading';
// import Featured_projects_language from '../components/Featured_projects_language';
import View_All_Projects from '../components/View_All_Projects';

function Projects_page() {

  useEffect(() =>{
    document.title = 'Joshua Thomas | Projects';
  }, []);

  return (
    <>
    {/* <Projects/> */}
    <section class="hero-section project-page">
      <p className='text'>All projects show my progression as</p>
      <p><div className='purple-text'>a Full Stack Engineer</div></p>
    </section>
        
    <View_All_Projects/>

    </>
  )
}

export default Projects_page