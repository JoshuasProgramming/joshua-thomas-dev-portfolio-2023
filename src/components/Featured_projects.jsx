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
                        <a>Read more &#x27A4;</a>
                        <a href={props.githubRepo} target="_blank">
                            <img src={github}/>
                        </a>
                        
                        <a href={props.openLink} target="_blank">
                            <img src={openLink}/>
                        </a>

                        {props.youtubeVideo == true ? 

                        <a href={props.youtubeLink} target="_blank">
                            <img src={youtube}/>
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
