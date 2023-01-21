//import react
import React, { useEffect } from 'react';

//import uselocation => allows us to get props from different components
import { useLocation } from 'react-router-dom'

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';

//import react router from 'react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Read_More() {
  const location = useLocation();
  console.log(location)

  useEffect(() =>{
    document.title = 'Joshua Thomas | ' + location.state.title;
  }, []);

  window.scrollTo(0, 0);

  return (
    <section className="read-more-container">
      <div className="read-more-title">
        <h1><span>{location.state.title}</span> - An Overview</h1>
      </div>
      <div className="read-more-image">
        <img src={location.state.image} alt={location.state.alt}/>
      </div>
      <div className="read-more-icons">
        <a href={location.state.githubRepo} target="_blank">
            <img src={github} title={location.state.title + "'s github repository"}/>
        </a>
                          
        <a href={location.state.openLink} target="_blank">
            <img src={openLink} title={location.state.title + "'s open link"}/>
        </a>
      </div>
      <div className="read-more-paragraph1">
        <p>{location.state.paragraph1}</p>
      </div>
      <div className="read-more-paragraph1">
        <p>{location.state.paragraph2}</p>
      </div>
      
      <div className="read-more-heading">
        <h1>{location.state.heading1_text}</h1>
        <p>{location.state.paragraph1_text}</p>
      </div>

      <div className="read-more-snippet">
        <img src={location.state.code_snippet1} alt={location.state.code_snippet1 + "IMG"}/>
      </div>

      <div className="read-more-heading">
        <h1>{location.state.heading2_text}</h1>
        <p>{location.state.paragraph2_text}</p>
      </div>

      { location.state.code_snippet2 === undefined ? 
        false 
        : 
        <div className="read-more-snippet">
          <img src={location.state.code_snippet2} alt={location.state.code_snippet2 + "IMG"}/>
        </div>
      }

        <div>
          <Link to="../pages/Read_more" state={location.state.prev}
          style={{ textDecoration: 'none' }}  >Prev</Link>
        </div>

        <div>
          <Link to="../pages/Read_more" state={location.state.next} 
          style={{ textDecoration: 'none' }}  >next</Link>
        </div>

    </section>
  )
}
