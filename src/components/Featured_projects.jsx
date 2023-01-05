//react imports 
import React, { Component } from 'react';

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
                    <p>{props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Featured_projects;
