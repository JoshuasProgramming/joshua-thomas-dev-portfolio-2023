import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//import styles
import '../styles/style.css';

const Project_Item = (props) => {
    return(

        <div class="project-banner">
            <div className="project-banner-text">
                <h1>
                    <span>{props.title}</span>
                </h1>
                <p>{props.desc}</p>
                <LazyLoadImage src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}

export default Project_Item;