//react imports 
import React, { Component } from 'react';

//import components 
import Featured_projects_language from './Featured_projects_language';

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';
import youtube from '../icons/youtube.png';

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


class View_All_Projects extends Component {
    render(){
        
        const projects = [
        // {title: 'Apple Clone (React.js)', desc:'I created the fully responsive apple website (November 2022) from scratch . This website uses React.js, SASS & Responsive Design', image: {src: Apple, alt: 'AppleCloneImg'}, feature:false, featureAll:true},
        // {title: 'tappedesigns portfolio', desc:'I created a fully responsive portfolio website for one of my friends. This website uses HTML, SASS, CSS, JavaScript & Responsive Design',image: {src: Tappedesigns, alt: 'TappedesignsImg'}, feature:false, featureAll:true},
        // {title: 'MoneyBox', desc:'I created a fully responsive banking website. This website uses HTML, SASS, CSS, JavaScript(Jquery) & Responsive Design.', image: {src: MoneyBox, alt: 'MoneyBoxImg'}, feature:false, featureAll:true},
        // {title: 'Kocoon version 2.0', desc:'We provide the latest information on wellbeing topics by working with charities, services and academics.', image: {src: KocoonV2, alt: 'KocoonV2Img'}, feature:false, featureAll:true},
        // {title: 'Kocoon', desc:'We are an educational platform that focuses on the wellbeing by presenting academic papers for everyone.' , image: {src: kocoon, alt: 'kocoon'}, feature:false, featureAll:true},
        // {title: 'Blog website', desc:'This was a coding test, which had me create a fully responsive blog website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlogWebsite, alt: 'BlogWebsiteImg'}, feature:false, featureAll:true},
        {title: 'Food Delivery Website', desc: 'I created a fully responsive food delivery website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design', image: {src: FoodDX, alt: 'FoodDX_IMG'}, feature: true, date: 'March 31st 2022', openLink: 'https://joshuasprogramming.github.io/FoodDX/' , githubRepo: 'https://github.com/JoshuasProgramming/FoodDX', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true},
        {title: 'The Modern House Landing-Page', desc: 'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: ModernHouse, alt: 'ModernHouseImg'}, feature: true, date: 'March 22nd 2022', openLink: 'https://joshuasprogramming.github.io/The-Modern-House/', githubRepo: 'https://github.com/JoshuasProgramming/The-Modern-House', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true},
        {title: 'Interior-Design-Landing-Page', desc:'I created a fully responsive furniture website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: Interior, alt: 'InteriorImg'}, feature: true, date: 'March 19th 2022', openLink: 'https://joshuasprogramming.github.io/Interior-Design-Landing-Page/', githubRepo: 'https://github.com/JoshuasProgramming/Interior-Design-Landing-Page',language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', language5:'Flexbox', featureAll: true},
        {title: 'HoneyPot Furniture', desc:'This was a coding test, which had me create a fully responsive ecommerce website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: HoneyPot, alt: 'HoneyPotImg'}, feature:false, featureAll:true, openLink: "https://joshuasprogramming.github.io/HoneyPot-Furniture/",githubRepo: 'https://github.com/JoshuasProgramming/HoneyPot-Furniture'},
        {title: 'FetchAPIs.com',desc:'Full stack website which was has a API tracker for Covid data, weather data and movie data. Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: FetchAPIs, alt: 'FetchAPIsImg'}, feature:true, date:'February 18th 2022', openLink:'https://joshuasprogramming.github.io/Fetch-APIs.com-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Fetch-APIs.com-Responsive', language1: 'HTML', language2: 'SCSS', language3: 'PHP', language4: 'Javascript', language5:'APIs', youtubeVideo: true, youtubeLink:'https://youtu.be/F5vqx36KA3s' , featureAll:true},
        {title: 'Burger Palace', desc:'Full stack website which was designed for a fast food chain company called "Burger Palace". Website uses HTML, SASS, JavaScript, PHP & Responsive Design', image: {src: BurgerPalace, alt: 'BurgerPalaceImg'}, feature:true},
        {title: 'Orange Diner', desc:'Full stack website which was designed for a bar called "Orange Diner". Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: OrangeDiner, alt: 'OrangeDinerImg'}, feature:false, featureAll:true},
        {title: 'The 5 Star', desc:'Front End website which was designed for a restaurant company called "The 5 Star". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: The5Star, alt: 'The5StartIMG'}, feature:false, featureAll:true},
        {title: 'Blue Sci-fi', desc:'Front End landing page website which was designed for a company called "Blue Sci-Fi". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlueSciFi, alt: 'BlueSciFiImg'}, feature:false, featureAll:true},
        {title: 'Compound Interest Calculator', desc:'Front End website for compound interest. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: CompoundInterest, alt: 'CompoundInterestIMG'}, feature:false, featureAll:true},
        {title: 'Weight Converter', desc:'Front End website for a weight converter. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: WeightConverter, alt: 'WeightConverterIMG'}, feature:false, featureAll:true},
        {title: 'Number Guessing Game', desc:'Front End website for a number guessing game. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: NumberGuessingGame, alt: 'NumberGuessingGameIMG'}, feature:false, featureAll:true},
        // {title: 'Personal portfolio 2023', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design for 2023'},
        {title: 'Personal portfolio 2022', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design', image: {src: portfolio2022, alt: 'Portfolio2022IMG'}, feature:false, featureAll:true},
        ]

        return (
            projects.map((value, key) => (
                <div className="project-card" key={key}>
                    <div className="left">
                        <img src={value.image.src} alt={value.image.alt}/>
                    </div>
                    <div className="right">
                        <h1>{value.title}</h1>
                        <h4>{value.date}</h4>
                        <Featured_projects_language language1={value.language1} language2={value.language2} language3={value.language3} language4={value.language4} language5={value.language5}/>
                        <p>{value.desc}</p>
                        <div className="info">
                            <a>Read more &#x27A4;</a>
                            <a href={value.githubRepo} target="_blank">
                                <img src={github}/>
                            </a>
                            
                            <a href={value.openLink} target="_blank">
                                <img src={openLink}/>
                            </a>

                            {value.youtubeVideo == true ? 

                            <a href={value.youtubeLink} target="_blank">
                                <img src={youtube}/>
                            </a>

                            :

                            false

                            }

                        </div>
                    </div>
                </div>
            ))
        )
    }
}

export default View_All_Projects