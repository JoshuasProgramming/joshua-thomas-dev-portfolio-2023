//react imports 
import React, { Component } from 'react';
import Project_Item from './Project_item';

//style imports
import '../styles/style.css';

//image imports
import Apple from '../images/apple Clone.png';
import Tappedesigns from '../images/tappedesigns.png';
import MoneyBox from '../images/moneybox.png';
import KocoonV2 from '../images/kocoon_2.0.png';
import kocoon from '../images/Kocoon.png';
import BlogWebsite from '../images/1920x1080_Open.png';
import FoodDX from '../images/FoodDX.JPG';
import ModernHouse from '../images/The_Modern_House.JPG';
import Interior from '../images/Interior.png';
import HoneyPot from '../images/HoneyPot.png';
import FetchAPIs from '../images/fetchAPIs.JPG';
import BurgerPalace from '../images/burger palace.JPG';
import OrangeDiner from '../images/Orange Diner.JPG';
import The5Star from '../images/The 5 Star.JPG';
import BlueSciFi from '../images/Blue Sci-fi.JPG';
import CompoundInterest from '../images/compound interest calculator.JPG';
import WeightConverter from '../images/Weight Converter.JPG';
import NumberGuessingGame from '../images/number guessing game.JPG';
import portfolio2022 from '../images/portfolio.JPG';


class Projects extends Component {
    render(){
        
        const projects = [
        {title: 'Apple Clone (React.js)', desc:'I created the fully responsive apple website (November 2022) from scratch . This website uses React.js, SASS & Responsive Design', image: {src: Apple, alt: 'AppleCloneImg'} },
        {title: 'tappedesigns portfolio', desc:'I created a fully responsive portfolio website for one of my friends. This website uses HTML, SASS, CSS, JavaScript & Responsive Design',image: {src: Tappedesigns, alt: 'TappedesignsImg'}},
        {title: 'MoneyBox', desc:'I created a fully responsive banking website. This website uses HTML, SASS, CSS, JavaScript(Jquery) & Responsive Design.', image: {src: MoneyBox, alt: 'MoneyBoxImg'}},
        {title: 'Kocoon version 2.0', desc:'We provide the latest information on wellbeing topics by working with charities, services and academics.', image: {src: KocoonV2, alt: 'KocoonV2Img'}},
        {title: 'Kocoon', desc:'We are an educational platform that focuses on the wellbeing by presenting academic papers for everyone.' , image: {src: kocoon, alt: 'kocoon'}},
        {title: 'Blog website', desc:'This was a coding test, which had me create a fully responsive blog website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlogWebsite, alt: 'BlogWebsiteImg'}},
        {title: 'Food Delivery Website', desc: 'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design', image: {src: FoodDX, alt: 'FoodDX_IMG'}},
        {title: 'The Modern House Landing-Page', desc: 'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: ModernHouse, alt: 'ModernHouseImg'}},
        {title: 'Interior-Design-Landing-Page', desc:'I created a fully responsive furniture website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: Interior, alt: 'InteriorImg'}},
        {title: 'HoneyPot Furniture', desc:'This was a coding test, which had me create a fully responsive ecommerce website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: HoneyPot, alt: 'HoneyPotImg'}},
        {title: 'FetchAPIs.com',desc:'Full stack website which was has a API tracker for Covid data, weather data and movie data. Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.1. API integrations (Covid data, weather data, movie data)', image: {src: FetchAPIs, alt: 'FetchAPIsImg'}},
        {title: 'Burger Palace', desc:'Full stack website which was designed for a fast food chain company called "Burger Palace". Website uses HTML, SASS, JavaScript, PHP & Responsive Design', image: {src: BurgerPalace, alt: 'BurgerPalaceImg'}},
        {title: 'Orange Diner', desc:'Full stack website which was designed for a bar called "Orange Diner". Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: OrangeDiner, alt: 'OrangeDinerImg'}},
        {title: 'The 5 Star', desc:'Front End website which was designed for a restaurant company called "The 5 Star". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: The5Star, alt: 'The5StartIMG'}},
        {title: 'Blue Sci-fi', desc:'Front End landing page website which was designed for a company called "Blue Sci-Fi". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlueSciFi, alt: 'BlueSciFiImg'}},
        {title: 'Compound Interest Calculator', desc:'Front End website for compound interest. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: CompoundInterest, alt: 'CompoundInterestIMG'}},
        {title: 'Weight Converter', desc:'Front End website for a weight converter. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: WeightConverter, alt: 'WeightConverterIMG'}},
        {title: 'Number Guessing Game', desc:'Front End website for a number guessing game. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: NumberGuessingGame, alt: 'NumberGuessingGameIMG'}},
        // {title: 'Personal portfolio 2023', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design for 2023'},
        {title: 'Personal portfolio 2022', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design', image: {src: portfolio2022, alt: 'Portfolio2022IMG'}},
        ]

        return (
            projects.map((value, key) => (
                <Project_Item key={key} title={value.title} desc={value.desc} image={value.image.src} alt={value.image.alt}/>
            ))
        )
    }
}

export default Projects;