//react imports 
import React, { Component, useState } from 'react';

//import components 
import Featured_projects_language from './Featured_projects_language';

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';

//style imports
import '../styles/style.css';

const Featured_projects = (props) => {   
    
    if(props.feature == true){
        // props.language == undefined ? false : console.log(props.language + " " + props.title);
        return (
            <div className="project-card">
                <div className="left">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="right">
                    <h1>{props.title}</h1>
                    <h4>{props.date}</h4>
                    <Featured_projects_language/>
                    <p>{props.desc}</p>
                    <div className="info">
                        <a>Read more &#x27A4;</a>
                        <a href={props.githubRepo} target="_blank">
                            <img src={github}/>
                        </a>
                        
                        <a href={props.openLink} target="_blank">
                            <img src={openLink}/>
                        </a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured_projects;
