import React, { Component } from 'react';
import Project_Item from './Project_item';
import '../styles/style.css';

class Projects extends Component {
    render(){
        
        const projects = [
        {title: 'Apple Clone (React.js)'},
        {title: 'tappedesigns portfolio'},
        {title: 'MoneyBox'},
        {title: 'Kocoon version 2.0'},
        {title: 'Kocoon'},
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
                <Project_Item key={key} title={value.title}/>
            ))
        )
    }
}

export default Projects;