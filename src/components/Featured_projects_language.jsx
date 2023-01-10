import React from 'react';

const Featured_projects_language = (props) => {

    return (
    <div className="featured-projects-language-container"> 
        {props.language1 != undefined ?  <div><h3>{props.language1}</h3></div> : false}
        {props.language2 != undefined ?  <div><h3>{props.language2}</h3></div> : false}
        {props.language3 != undefined ?  <div><h3>{props.language3}</h3></div> : false}
        {props.language4 != undefined ?  <div><h3>{props.language4}</h3></div> : false}
        {props.language5 != undefined ?  <div><h3>{props.language5}</h3></div> : false}
    </div>
    )
}

export default Featured_projects_language;