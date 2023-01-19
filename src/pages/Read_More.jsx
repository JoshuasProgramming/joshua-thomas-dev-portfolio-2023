//import react
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom'

export default function Read_More(props) {
  const location = useLocation();
  console.log(location)

  useEffect(() =>{
    document.title = 'Joshua Thomas | ' + location.state.title;
  }, []);

  return (
    <section className="read-more-container">
      <div className="read-more-title">
        <h1><span>{location.state.title}</span> - An Overview</h1>
      </div>
      <div className="read-more-image">
        <img src={location.state.image} alt={location.state.alt}/>
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

      <div className="read-more-snippet">
        <img src={location.state.code_snippet2} alt={location.state.code_snippet2 + "IMG"}/>
      </div>

    </section>
  )
}
