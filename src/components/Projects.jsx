import React, { Component } from 'react';
import Project_Item from './Project_item';
import '../styles/style.css';

class Projects extends Component {
    render(){
        
        const projects = [
        {title: 'Apple Clone (React.js)', desc:'I created the fully responsive apple website (November 2022) from scratch . This website uses React.js, SASS & Responsive Design'},
        {title: 'tappedesigns portfolio', desc:'I created a fully responsive portfolio website for one of my friends. This website uses HTML, SASS, CSS, JavaScript & Responsive Design'},
        {title: 'MoneyBox', desc:'I created a fully responsive banking website. This website uses HTML, SASS, CSS, JavaScript(Jquery) & Responsive Design.'},
        {title: 'Kocoon version 2.0', desc:'We provide the latest information on wellbeing topics by working with charities, services and academics.'},
        {title: 'Kocoon', desc:'We are an educational platform that focuses on the wellbeing by presenting academic papers for everyone.'},
        {title: 'Blog website'},
        {title: 'Food Delivery Website'},
        {title: 'The Modern House Landing-Page'},
        {title: 'Interior-Design-Landing-Page'},
        {title: 'HoneyPot Furniture'},
        {title: 'FetchAPIs.com'},
        {title: 'Burger Palace'},
        {title: 'Orange Diner'},
        {title: 'The 5 Star'},
        {title: 'Blue Sci-fi'},
        {title: 'Compound Interest Calculator'},
        {title: 'Weight Converter'},
        {title: 'Number Guessing Game'},
        {title: 'Personal portfolio 2023'},
        {title: 'Personal portfolio 2022'},
        ]

        return (
            projects.map((value, key) => (
                <Project_Item key={key} title={value.title} desc={value.desc}/>
            ))
        )
    }
}

export default Projects;