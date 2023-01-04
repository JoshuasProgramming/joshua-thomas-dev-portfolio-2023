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

                    {navigationLinks.map((value, key) => (
                        <li key={key}> {value.name} </li>
                    ))}
                    
                </ul>
            </nav>

            
        )
    }
}

export default Navigation
