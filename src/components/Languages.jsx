//react imports 
import React, { Component } from 'react';

//icon imports
import ReactIcon from '../icons/react_icon.png';
import JS from '../icons/javascript.png';
import json from '../icons/json.png';
import php from '../icons/php.png';
import Sass from '../icons/sass.png';
import Css from '../icons/css.png';
import Html from '../icons/html.png';
import bigcommerce from '../icons/bigcommerce.png';
import typescript from '../icons/typescript.png';

//style imports
import '../styles/style.css';

class Languages extends Component {
    render(){

        const icons = [
            {images: {src: ReactIcon, alt: 'react-image'}, name: 'react'},
            {images: {src: JS, alt: 'js-image'}, name: 'javascript (ES6 / ES7)'},
            {images: {src: typescript, alt: 'Typescript-image'}, name:'typescript'},
            {images: {src: json, alt: 'json-image'}, name: 'json'},
            {images: {src: php, alt: 'php-image'}, name: 'php'},
            {images: {src: Sass, alt: 'sass-image'}, name: 'SASS / SCSS'},
            {images: {src: Css, alt: 'css-image'}, name: 'CSS'},
            {images: {src: Html, alt: 'html-image'}, name: 'HTML'},
            {images: {src: bigcommerce, alt: 'bigcommerce-image'}, name: 'bigcommerce'}
        ];

        return(
            <div className="icon-container">
                <div className="top">
                    <p>Languages which I use &#8650; </p>
                </div>
                
                <div className="icons">
                {
                     icons.map((value, key) => (
                        <img title={value.name} key={key} src={value.images.src} alt={value.images.alt}/>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Languages