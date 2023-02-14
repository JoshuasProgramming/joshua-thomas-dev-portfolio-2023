//react imports 
import React, { Component } from 'react';

//import components 
import Featured_projects_language from './Featured_projects_language';
import View_All_Projects from '../components/View_All_Projects';

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';
import youtube from '../icons/youtube.png';

//style imports
import '../styles/style.css';

//import react router from 'react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


/**
 * 
 * @param {*} props 
 * @returns project-card with data based on the object from projects.jsx
 * 
 * If an attribute from object, 'projects' in projects.jsx has 'feature: true' then we'll proceed, and insert data into the project card (e.g: title, date, image, ...).
 * 
 */


const Featured_projects = (props) => {   
    if(props.feature == true){
        return (
            <div className="project-card">
                <div className="left">
                    <img src={props.image} alt={props.alt}/>
                </div>
                <div className="right">
                    <h1>{props.title}</h1>
                    <h4>{props.date}</h4>
                    <Featured_projects_language language1={props.language1} language2={props.language2} language3={props.language3} language4={props.language4} language5={props.language5}/>
                    <p>{props.desc}</p>
                    <div className="info">
                    <Link to="../pages/Read_more" state={{title: props.title, image: props.image, alt: props.image, paragraph1: props.paragraph1, 
                        paragraph2: props.paragraph2, githubRepo:props.githubRepo, openLink: props.openLink, language1:props.language1, language2:props.language2,
                        language3:props.language3, language4:props.language4, language5:props.language5, code_snippet1:props.code_snippet1, 
                        heading1_text: props.heading1_text, paragraph1_text: props.paragraph1_text, heading2_text: props.heading2_text, 
                        paragraph2_text: props.paragraph2_text, code_snippet2: props.code_snippet2}} 
                        style={{ textDecoration: 'none' }}  >Read more &#x27a4;</Link>
                        <a href={props.githubRepo} target="_blank" alt="github" aria-label="go to github repository">
                            <img src={github} alt="github" aria-label="go to github repository"/>
                        </a>
                        
                        <a href={props.openLink} target="_blank" alt="openLink" aria-label="go to open link">
                            <img src={openLink} alt="openLink" aria-label="go to open link"/>
                        </a>

                        {props.youtubeVideo == true ? 

                        <a href={props.youtubeLink} target="_blank" alt="youtube" aria-label="go to youtube video">
                            <img src={youtube} alt="youtube" aria-label="go to youtube video"/>
                        </a>

                        :

                        false

                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Featured_projects;