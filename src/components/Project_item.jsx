import React, { Component } from 'react';
import '../styles/style.css';

const Project_Item = (props) => {
    return(

        <div class="project-banner">
            <div className="project-banner-text">
                <h1>
                    <span>{props.title}</span>
                </h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Project_Item;