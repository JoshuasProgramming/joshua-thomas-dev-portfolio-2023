//react imports 
import React, { Component } from 'react';

//import components 
import Featured_projects_language from './Featured_projects_language';
import Read_more_btn from './Read_more_btn';

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';
import youtube from '../icons/youtube.png';

//style imports
import '../styles/style.css';

//import pages 
import Read_more from '../pages/Read_more';

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
import portfolio2023 from '../images/portfolio2023.png';

//import react router from 'react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


class View_All_Projects extends Component {
    render(){
        const projects = [
        {title: 'Apple Clone (React.js)', desc:'I created the fully responsive apple website (November 2022) from scratch . This website uses React.js, SASS & Responsive Design', image: {src: Apple, alt: 'AppleCloneImg'}, feature:false, featureAll:true, date:'In production', language1:'React', language2:'React Props', language3:'SCSS', Language4:'Responsive Design', language5:'HTML', openLink: 'https://apple-clone-reactjs.netlify.app/', githubRepo:'https://github.com/JoshuasProgramming/apple-clone',},
        {title: 'tappedesigns portfolio', desc:'I created a fully responsive portfolio website for one of my friends. This website uses HTML, SASS, CSS, JavaScript & Responsive Design',image: {src: Tappedesigns, alt: 'TappedesignsImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', Language3:'Responsive Design', language4:'Freelance Work', date:'December 30th 2022', openLink:'https://joshuasprogramming.github.io/tappedesigns_portfolio', githubRepo:'https://github.com/joshuasprogramming/tappedesigns_portfolio'},
        {title: 'MoneyBox', desc:'I created a fully responsive banking website. This website uses HTML, SASS, CSS, JavaScript(Jquery) & Responsive Design.', image: {src: MoneyBox, alt: 'MoneyBoxImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4: 'JavaScript ( Jquery )', date: 'November 15th 2022', openLink: 'https://joshuasprogramming.github.io/MoneyBox', githubRepo: 'https://github.com/JoshuasProgramming/MoneyBox'},
        {title: 'Kocoon version 2.0', desc:'We provide the latest information on wellbeing topics by working with charities, services and academics.', image: {src: KocoonV2, alt: 'KocoonV2Img'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4:'Freelance Work', language5: 'JavaScript', date: 'August 4th 2022', openLink: 'https://joshuasprogramming.github.io/Kocoon-ver.2/', githubRepo:'https://github.com/JoshuasProgramming/Kocoon-ver.2'},
        {title: 'Kocoon', desc:'We are an educational platform that focuses on the wellbeing by presenting academic papers for everyone.' , image: {src: kocoon, alt: 'kocoon'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4:'Freelance Work', language5: 'JavaScript', date:'August 2nd 2022', openLink:'https://joshuasprogramming.github.io/Kocoon', githubRepo: 'https://github.com/JoshuasProgramming/Kocoon', paragraph1:'Kocoon is an educational platform that focuses on the wellbeing by presenting academic papers for everyone. I designed and developed version 1.0 of the fully responsive website. This website uses HTML, SASS, JavaScript & Responsive Design. Future updates to this website will continue as time goes on.', paragraph2: 'I really enjoyed the process of breaking down the website that I had to make, via divide and conquer. The lessons learned are below:' },
        {title: 'Blog website', desc:'This was a coding test, which had me create a fully responsive blog website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlogWebsite, alt: 'BlogWebsiteImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', date:'May 5th 2022', openLink:'https://joshuasprogramming.github.io/Think-Tank', githubRepo: 'https://github.com/JoshuasProgramming/Think-Tank'},
        {title: 'Food Delivery Website', desc: 'I created a fully responsive food delivery website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design', image: {src: FoodDX, alt: 'FoodDX_IMG'}, feature: true, date: 'March 31st 2022', openLink: 'https://joshuasprogramming.github.io/FoodDX/' , githubRepo: 'https://github.com/JoshuasProgramming/FoodDX', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true},
        {title: 'The Modern House Landing-Page', desc: 'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: ModernHouse, alt: 'ModernHouseImg'}, feature: true, date: 'March 22nd 2022', openLink: 'https://joshuasprogramming.github.io/The-Modern-House/', githubRepo: 'https://github.com/JoshuasProgramming/The-Modern-House', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true, paragraph1:'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.'},
        {title: 'Interior-Design-Landing-Page', desc:'I created a fully responsive furniture website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: Interior, alt: 'InteriorImg'}, feature: true, date: 'March 19th 2022', openLink: 'https://joshuasprogramming.github.io/Interior-Design-Landing-Page/', githubRepo: 'https://github.com/JoshuasProgramming/Interior-Design-Landing-Page',language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', language5:'Flexbox', featureAll: true},
        {title: 'HoneyPot Furniture', desc:'This was a coding test, which had me create a fully responsive ecommerce website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: HoneyPot, alt: 'HoneyPotImg'}, date: 'March 17th 2022', feature:false, featureAll:true, openLink: "https://joshuasprogramming.github.io/HoneyPot-Furniture/",githubRepo: 'https://github.com/JoshuasProgramming/HoneyPot-Furniture', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'FetchAPIs.com',desc:'Full stack website which was has a API tracker for Covid data, weather data and movie data. Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: FetchAPIs, alt: 'FetchAPIsImg'}, feature:true, date:'February 18th 2022', openLink:'https://joshuasprogramming.github.io/Fetch-APIs.com-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Fetch-APIs.com-Responsive', language1: 'HTML', language2: 'SCSS', language3: 'PHP', language4: 'Javascript', language5:'APIs', youtubeVideo: true, youtubeLink:'https://youtu.be/F5vqx36KA3s' , featureAll:true},
        {title: 'Burger Palace', desc:'Full stack website which was designed for a fast food chain company called "Burger Palace". Website uses HTML, SASS, JavaScript, PHP & Responsive Design', image: {src: BurgerPalace, alt: 'BurgerPalaceImg'}, feature:true, date: 'February 16th 2022', openLink: 'https://joshuasprogramming.github.io/Burger-Palace-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Burger-Palace-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', language5: 'PHP'},
        {title: 'Orange Diner', desc:'Full stack website which was designed for a bar called "Orange Diner". Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: OrangeDiner, alt: 'OrangeDinerImg'}, feature:false, featureAll:true, date: 'February 19th 2022', openLink: 'https://joshuasprogramming.github.io/Orange-Diner-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Orange-Diner-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'The 5 Star', desc:'Front End website which was designed for a restaurant company called "The 5 Star". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: The5Star, alt: 'The5StartIMG'}, feature:false, featureAll:true, date: 'February 16th 2022', openLink:'https://joshuasprogramming.github.io/The-5-Star-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/The-5-Star-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Blue Sci-fi', desc:'Front End landing page website which was designed for a company called "Blue Sci-Fi". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlueSciFi, alt: 'BlueSciFiImg'}, feature:false, featureAll:true, date: 'February 13th 2022', openLink:'https://joshuasprogramming.github.io/Blue-Sci-Fi-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Blue-Sci-Fi-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Compound Interest Calculator', desc:'Front End website for compound interest. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: CompoundInterest, alt: 'CompoundInterestIMG'}, feature:false, featureAll:true, date:'February 9th 2022', openLink:'https://joshuasprogramming.github.io/Compound-Interest-Calculator-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Compound-Interest-Calculator-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Weight Converter', desc:'Front End website for a weight converter. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: WeightConverter, alt: 'WeightConverterIMG'}, feature:false, featureAll:true, date:'February 12th 2022',openLink:'https://joshuasprogramming.github.io/Weight-Converter-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Weight-Converter-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Number Guessing Game', desc:'Front End website for a number guessing game. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: NumberGuessingGame, alt: 'NumberGuessingGameIMG'}, feature:false, featureAll:true, date:'February 12th 2022', openLink:'https://joshuasprogramming.github.io/Number-Guessing-Game-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Number-Guessing-Game-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Personal portfolio 2022', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design', image: {src: portfolio2022, alt: 'Portfolio2022IMG'}, feature:false, featureAll:true, date:'july 18th 2022', openLink:'https://joshuasprogramming.github.io/Joshua-Thomas-Dev-Portfolio/', githubRepo:'https://github.com/JoshuasProgramming/Joshua-Thomas-Dev-Portfolio',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
        {title: 'Personal portfolio 2023', desc:'Front End website for 2023', image:{src: portfolio2023, alt: 'Portfolio2023IMG'}, feature:false, featureAll:true, feature:false, featureAll:true, githubRepo:'https://github.com/JoshuasProgramming/joshua-thomas-dev-portfolio-2023', language1: 'React', language2:'React Props', language3:'React Router', language4:'SCSS', language5: 'Responsive Design'}
        ]

        return (
            projects.map((value, key) => (
                <>
                    {/* <Router> */}
                        <div className="project-card" key={key}>
                        <div className="left">
                            <img src={value.image.src} alt={value.image.alt} />
                        </div>
                        <div className="right">
                            <h1>{value.title}</h1>
                            <h4>{value.date}</h4>
                            <Featured_projects_language language1={value.language1} language2={value.language2} language3={value.language3} language4={value.language4} language5={value.language5} />
                            <p>{value.desc}</p>
                            <div className="info">
                                <Link to="../pages/Read_more" state={{title: value.title, image: value.image.src, alt: value.image.alt, paragraph1: value.paragraph1, paragraph2: value.paragraph2}} style={{ textDecoration: 'none' }}  >Read more &#x27a4;</Link>
                                <a href={value.githubRepo} target="_blank">
                                    <img src={github} />
                                </a>

                                <a href={value.openLink} target="_blank">
                                    <img src={openLink} />
                                </a>

                                {value.youtubeVideo == true ?

                                    <a href={value.youtubeLink} target="_blank">
                                        <img src={youtube} />
                                    </a>

                                    :

                                    false}

                                </div>
                            </div>
                        </div>
                </>
            ))
        )
    }
}

export default View_All_Projects