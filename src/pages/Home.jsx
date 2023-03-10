import React, { useEffect } from 'react'
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Languages from '../components/Languages';
import Featured_projects_heading from '../components/Featured_projects_heading';
import Featured_projects from '../components/Featured_projects';
import View_All_projects_btn from '../components/View_All_projects_btn';
import Contact_section from '../components/contact_section';
import Testimonials from '../components/testimonial';

function Home() {

  useEffect(() =>{
    document.title = 'Joshua Thomas | Home';
  }, []);

  return (  
    <> 
      <Hero />
      <Languages/>
      <Featured_projects_heading/>
      <Featured_projects/>
      <Projects />
      <View_All_projects_btn/>
      <Contact_section/>
      <Testimonials/>
    </>
  );
}

export default Home;
