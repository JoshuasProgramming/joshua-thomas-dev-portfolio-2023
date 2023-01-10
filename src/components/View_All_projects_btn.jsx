import React from 'react'

//style imports
import '../styles/style.css';

//import pages
import Project_page from '../pages/Project_page';

//import react router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function View_All_projects_btn() {
  return (

      <div className="view-all-projects-btn">
          <a href="../pages/Project_page">View all projects</a>
      </div>
  )
}

export default View_All_projects_btn