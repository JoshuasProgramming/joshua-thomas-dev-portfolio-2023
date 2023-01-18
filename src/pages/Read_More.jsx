//import react
import React from 'react';

import { useLocation } from 'react-router-dom'

export default function Read_More(props) {
  const location = useLocation();
  console.log(location);

  return (
    <h1>{location.state.title}</h1>
  )
}
