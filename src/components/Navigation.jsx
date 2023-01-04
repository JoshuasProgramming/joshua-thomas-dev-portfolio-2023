//react imports 
import React, { Component } from 'react';

//style imports
import '../styles/style.css';

class Navigation extends Component {
    render() {

        const navigationLinks = [
        {name: 'Projects'},
        {name: 'Blog'},
        {name: 'About'},
        ];

        return (
            <nav>
                <ul className="navigation">

                    <div className="left">
                        <h1><span>Joshua</span>Thomas.</h1>
                    </div>

                    <div className="right">
                        {navigationLinks.map((value, key) => (
                            <li key={key}> {value.name} </li>
                        ))}
                    </div>
                </ul>
            </nav>
        )
    }
}

export default Navigation
