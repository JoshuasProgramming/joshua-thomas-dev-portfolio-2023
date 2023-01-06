import React from 'react';

const Featured_projects_language = (props) => {

    return (
    <div className="featured-projects-language-container"> 
        <div><h3>{props.language1}</h3></div>
        <div><h3>{props.language2}</h3></div>
        <div><h3>{props.language3}</h3></div>
        <div><h3>{props.language4}</h3></div>
    </div>
    )
}

export default Featured_projects_language;