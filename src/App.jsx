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

//import react router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//import pages
import Project_page from './pages/Project_page';
import Home from './pages/Home';

function App() {
  return (
    // <Projects />
  
    <>
      <Router>
        <nav>
          <ul className="navigation">
              <div className="left">
                <h1><Link to="/"><span>Joshua</span></Link>Thomas.</h1>
              </div>

              <div className="right">

                <Link to="pages/Project_page">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>

                <div className="night-light-mode-icon">
                    <img src={nightMode} alt="nightmode-icon" />
                </div>
              </div>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="pages/Project_page" element={ <Project_page/> }/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
