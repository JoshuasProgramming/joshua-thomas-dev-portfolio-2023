import React from 'react'

//style imports
import '../styles/style.css';

//import react router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function View_All_projects_btn() {
  return (

      <div className="view-all-projects-btn">
          <Link to="pages/Project_page">View all projects</Link>
      </div>
  )
}

export default View_All_projects_btn