import React from 'react'
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Featured_projects_heading from './components/Featured_projects_heading';
import Featured_projects from './components/Featured_projects';
import View_All_projects_btn from './components/View_All_projects_btn';
import Contact_section from './components/contact_section';

//image imports
import nightMode from './images/nightmode.svg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  return (
    // <Projects />
  
    <>

      <Router>
      <nav>
        <ul className="navigation">
            <div className="left">
                <h1><span>Joshua</span>Thomas.</h1>
            </div>

            <div className="right">

              <Link to="pages/projects">Projects</Link>
              <Link to="pages/blog">blog</Link>
              <Link to="pages/about">about</Link>

              <div className="night-light-mode-icon">
                  <img src={nightMode} alt="nightmode-icon" />
              </div>
            </div>
        </ul>
      </nav>

      </Router>

      
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
