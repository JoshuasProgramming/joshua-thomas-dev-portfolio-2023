//react imports 
import React, { Component } from 'react';

//icon imports
import ReactIcon from '../icons/react_icon.png';
import JS from '../icons/javascript.png';
import json from '../icons/json.png';
import Sass from '../icons/sass.png';
import Css from '../icons/css.png';
import Html from '../icons/html.png';

//style imports
import '../styles/style.css';

class Languages extends Component {
    render(){

        const icons = [
            {images: {src: ReactIcon, alt: 'react-image'}},
            {images: {src: JS, alt: 'js-image'}},
            {images: {src: json, alt: 'json-image'}},
            {images: {src: Sass, alt: 'sass-image'}},
            {images: {src: Css, alt: 'css-image'}},
            {images: {src: Html, alt: 'html-image'}}
        ];

        return(
            <div className="icon-container">
                <div className="top">
                    <p>Languages which I use</p>
                </div>
                
                <div className="icons">
                {
                     icons.map((value, key) => (
                        <img key={key} src={value.images.src} alt={value.images.alt}/>
                    ))
                }
                </div>
                
            </div>
           
        )
    }
}

export default Languages