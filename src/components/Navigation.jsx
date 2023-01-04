//react imports 
import React, { Component } from 'react';

//image imports
import nightMode from '../images/nightmode.svg';

//style imports
import '../styles/style.css';

class Navigation extends Component {
    render() {

        const navigationLinks = [
        {name: 'Projects'},
        {name: 'Blog'},
        {name: 'About'},
        {name: 'nightmode', image: {src: nightMode, alt: 'nightmode_image'}}
        ];

        return (
            <nav>
                <ul className="navigation">

                    <div className="left">
                        <h1><span>Joshua</span>Thomas.</h1>
                    </div>

                    <div className="right">
                        {navigationLinks.map((value, key) => (

                            value.name == 'nightmode' ? 
                            <div className="night-light-mode-icon">
                                <img src={value.image.src} alt={value.image.alt} />
                            </div>

                            :

                            <li key={key}> {value.name} </li>

                        ))}
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navigation
