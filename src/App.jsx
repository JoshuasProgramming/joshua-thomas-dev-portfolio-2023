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

//import social media icons
import github from './socials/github.png';
import linkedin from './socials/linkedin.png';
import instagram from './socials/instagram.png';
import codepen from './socials/codepen.png';

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

        <div className="bottom-left-social-links">
          <ul className="social-navigation">
            <a href="https://github.com/JoshuasProgramming" target="_blank"><li><img title="github" src={github} alt="github-social-icon" /></li></a>
            <a href="https://www.linkedin.com/in/joshua-thomas-dev/" target="_blank"><li><img title="linkedin" src={linkedin} alt="linkedin-social-icon" /></li></a>
            <li><img title="instagram" src={instagram} alt="instagram-social-icon" /></li>
            <li><img title="codepen" src={codepen} alt="codepen-social-icon" /></li>
          </ul>
        </div>

        <div className="bottom-right-social-links">
          <div className="social-navigation">
            <a href="mailto:joshuathomas2852@gamil.com" title='email'>joshuathomas2852@gmail.com</a>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="pages/Project_page" element={ <Project_page/> }/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
