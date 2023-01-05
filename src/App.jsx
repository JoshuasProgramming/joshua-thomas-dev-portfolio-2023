import React from 'react'
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Featured_projects_heading from './components/Featured_projects_heading';
import Featured_projects from './components/Featured_projects';

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
    </>
  );
}

export default App;
