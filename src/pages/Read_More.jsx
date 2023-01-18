//import react
import React from 'react';

import { useLocation } from 'react-router-dom'

export default function Read_More(props) {
  const location = useLocation();
  console.log(location)
  return (
    <section className="read-more-container">
      <div className="read-more-title">
        <h1>{location.state.title}</h1>
      </div>
      <div className="read-more-image">
        <img src={location.state.image} alt={location.state.alt}/>
      </div>
    </section>
  )
}
