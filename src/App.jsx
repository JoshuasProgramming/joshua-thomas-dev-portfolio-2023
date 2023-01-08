import React from 'react'
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Featured_projects_heading from './components/Featured_projects_heading';
import Featured_projects from './components/Featured_projects';
import View_All_projects_btn from './components/View_All_projects_btn';
import Contact_section from './components/contact_section';

function App() {
  return (
    // <Projects />
  
    <>
      <Navigation />
      <Hero />
      <Languages/>
      <Featured_projects_heading/>
      <Featured_projects/>
      <Projects />
      <View_All_projects_btn/>
      <Contact_section/>
    </>
  );
}

export default App;
