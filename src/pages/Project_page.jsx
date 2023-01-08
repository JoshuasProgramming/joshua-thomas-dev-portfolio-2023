import React from 'react'

import Projects from '../components/Projects';
import Featured_projects from '../components/Featured_projects'
import Featured_projects_heading from '../components/Featured_projects_heading';
import Featured_projects_language from '../components/Featured_projects_language';

function projects_page() {
  return (
    <>
    <Projects/>
    <Featured_projects_heading />
    <Featured_projects />
    </>
  )
}

export default projects_page