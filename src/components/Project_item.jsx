import React, { Component } from 'react';
import '../styles/style.css';

const Project_Item = (props) => {
    return(

        <div class="project-banner">
            <p>{props.title}</p>
        </div>

        
    )
}

export default Project_Item;