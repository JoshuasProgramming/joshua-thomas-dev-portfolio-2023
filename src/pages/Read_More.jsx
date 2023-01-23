//import react
import React, { useEffect , useState} from 'react';

//import uselocation => allows us to get props from different components
import { useLocation } from 'react-router-dom'

//import icons
import github from '../icons/github.png';
import openLink from '../icons/openLink.png';

//import react router from 'react-router
import { useNavigate, BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


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

//snippet imports
import kocoon_snippet_1 from '../read_more_code_snippets/kocoon_snippet_1.png';
import kocoon_snippet_2 from '../read_more_code_snippets/kocoon_snippet_2.png';
import numberGuessing_snippet_1 from '../read_more_code_snippets/numberGuessing_snippet_1.png';
import numberGuessing_snippet_2 from '../read_more_code_snippets/numberGuessing_snippet_2.png';
import ModernHouse_snippet1 from '../read_more_code_snippets/ModernHouse_snippet1.png';
import interiorDesign_snippet_1 from '../read_more_code_snippets/interiorDesign_snippet_1.png';
import interiorDesign_snippet_2 from '../read_more_code_snippets/interiorDesign_snippet_2.png';
import tappedesigns_snippet_1 from '../read_more_code_snippets/tappedesigns_snippet_1.png';
import tappedesigns_snippet_2 from '../read_more_code_snippets/tappedesigns_snippet_2.png';
import compound_interest_snippet_1 from '../read_more_code_snippets/compound_interest_snippet_1.png';
import compound_interest_snippet_2 from '../read_more_code_snippets/compound_interest_snippet_2.png';
import weight_converter_snippet_1 from '../read_more_code_snippets/weight_converter_snippet_1.png';
import weight_converter_snippet_2 from '../read_more_code_snippets/weight_converter_snippet_2.png';
import honeyPot_snippet_1 from '../read_more_code_snippets/honeyPot_snippet_1.png';
import blog_snippet_1 from '../read_more_code_snippets/blog_snippet_1.png';
import moneyBox_snippet_1 from '../read_more_code_snippets/moneyBox_snippet_1.png';



export default function Read_More() {
  const location = useLocation();
  // console.log(location);

  const projects = [
    {rank: 1,title: 'Apple Clone (React.js)', desc:'I created the fully responsive apple website (November 2022) from scratch . This website uses React.js, SASS & Responsive Design', image: {src: Apple, alt: 'AppleCloneImg'}, feature:false, featureAll:true, date:'In production', language1:'React', language2:'React Props', language3:'SCSS', Language4:'Responsive Design', language5:'HTML', openLink: 'https://apple-clone-reactjs.netlify.app/', githubRepo:'https://github.com/JoshuasProgramming/apple-clone',},
    {rank: 2,title: 'tappedesigns portfolio', desc:'I created a fully responsive portfolio website for one of my friends. This website uses HTML, SASS, CSS, JavaScript & Responsive Design',image: {src: Tappedesigns, alt: 'TappedesignsImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4:'Freelance Work', language5:'JavaScript', date:'December 30th 2022', openLink:'https://joshuasprogramming.github.io/tappedesigns_portfolio', githubRepo:'https://github.com/joshuasprogramming/tappedesigns_portfolio', paragraph1: "I developed a portfolio website for a client who was looking to display their exceptional Photoshop designs in a visually appealing and professional manner. The website was designed to be clean, user-friendly, and easy to navigate, with each design being presented in a high-resolution and interactive format, allowing visitors to fully appreciate the skill and talent of the client.", paragraph2:"The website was built using modern web development technologies such as HTML, CSS, JavaScript and responsive design to ensure that the website looks and functions optimally across all devices, providing the best possible user experience. I was able to bring the client's vision to life and deliver a website that exceeded their expectations and has helped them to attract more clients.", code_snippet1: tappedesigns_snippet_1, code_snippet2: tappedesigns_snippet_2, heading1_text: "1. Bringing a Client's Vision to Life: The Importance of Staying True to the Design and Feel of a Website Using HTML, SCSS, and Responsive Design", paragraph1_text: "As a web developer, it is crucial to understand the importance of staying true to a client's vision for their website, utilizing the power of HTML, SCSS, and responsive design to ensure that the final product not only meets but exceeds their expectations, while keeping the design and feel of the website intact throughout the development process. My client requested that I draw inspiration from the image provided below.", heading2_text: "2. Creating a Dynamic Hamburger Menu Using JavaScript", paragraph2_text: "In this code snippet, I used JavaScript to create a dynamic hamburger menu by grabbing the hamburger icon and menu elements, setting a boolean variable to check if the user has clicked on the hamburger icon, and using event listeners to toggle the menu open or closed based on the value of the boolean variable. The code also includes two functions, one for opening the menu and one for closing the menu, that change the display property of the menu element to either 'flex' or 'none' respectively."},
    {rank: 3,title: 'MoneyBox', desc:'I created a fully responsive banking website. This website uses HTML, SASS, CSS, JavaScript(Jquery) & Responsive Design.', image: {src: MoneyBox, alt: 'MoneyBoxImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4: 'JavaScript ( Jquery )', date: 'November 15th 2022', openLink: 'https://joshuasprogramming.github.io/MoneyBox', githubRepo: 'https://github.com/JoshuasProgramming/MoneyBox', code_snippet1: moneyBox_snippet_1, heading1_text: "1. Mobile Dropdown Menu using JQuery", paragraph1_text: "In this code snippet, I used JQuery to create a dropdown menu for mobile view. It triggers when the user clicks the moneyBox logo using the $('#moneybox_logo').click() function. The dropdown menu becomes visible by changing the 'popup' element's CSS display property to 'inline' when the logo is clicked. It uses $(document).ready(function() to run only when the page is loaded, preventing errors or delays.", paragraph1: "I developed a fully responsive banking website that utilizes a combination of HTML, SASS, JavaScript and Responsive Design to ensure optimal user experience on various devices and screen sizes. The website was designed to adapt to the user's device and adjust the layout accordingly, providing a seamless and efficient navigation experience while maintaining the integrity of the overall design and functionality.", paragraph2: "I really enjoyed the process of breaking down the website that I had to make, via divide and conquer. The lessons learned are below:"},
    {rank: 4,title: 'Kocoon version 2.0', desc:'We provide the latest information on wellbeing topics by working with charities, services and academics.', image: {src: KocoonV2, alt: 'KocoonV2Img'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4:'Freelance Work', language5: 'JavaScript', date: 'August 4th 2022', openLink: 'https://joshuasprogramming.github.io/Kocoon-ver.2/', githubRepo:'https://github.com/JoshuasProgramming/Kocoon-ver.2'},
    {rank: 5,title: 'Kocoon', desc:'We are an educational platform that focuses on the wellbeing by presenting academic papers for everyone.' , image: {src: kocoon, alt: 'kocoon'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', language4:'Freelance Work', language5: 'JavaScript', date:'August 2nd 2022', openLink:'https://joshuasprogramming.github.io/Kocoon', githubRepo: 'https://github.com/JoshuasProgramming/Kocoon', code_snippet1: kocoon_snippet_1, paragraph1:'Kocoon is an educational platform that focuses on the wellbeing by presenting academic papers for everyone. I designed and developed version 1.0 of the fully responsive website. This website uses HTML, SASS, JavaScript & Responsive Design. Future updates to this website will continue as time goes on.', paragraph2: 'I really enjoyed the process of breaking down the website that I had to make, via divide and conquer. The lessons learned are below:', heading1_text:'1. Changing the transparency of a navigation bar, depending on window scroll', paragraph1_text:"In a JavaScript file or React component, we can access the navigation bar by its ID and assign it to a variable. This variable can then be used to manipulate the navigation bar's transparency or background color based on the user's scroll position using the 'window.onscroll' event and checking the value of 'document.documentElement.scrollTop'.", code_snippet2: kocoon_snippet_2, heading2_text: '2. Utilizing HTML layout', paragraph2_text:"Implementing an organized layout for standard website elements, like a navigation bar, improves the overall design and usability. By breaking down the navigation bar into distinct sections, it becomes easier to navigate and understand the purpose of each section. For example, a 'navbar' parent container can have 'left', 'middle', and 'right' child sections." },
    {rank: 6,title: 'Blog website', desc:'This was a coding test, which had me create a fully responsive blog website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlogWebsite, alt: 'BlogWebsiteImg'}, feature:false, featureAll:true, language1:'HTML', language2:'SCSS', language3:'Responsive Design', date:'May 5th 2022', openLink:'https://joshuasprogramming.github.io/Think-Tank', githubRepo: 'https://github.com/JoshuasProgramming/Think-Tank', code_snippet1: blog_snippet_1, heading1_text: "1. Event Listener for Section 1 Dropdown", paragraph1_text: "his code adds an event listener to the 'section_1_hover_btn' element, so that when the user clicks on it, the script checks whether or not the 'section_1_dropdown_content' element has already been activated (display:inline;). If it has been activated, the script deactivates the dropdown (display:none), adds space above the section, removes the transition of the sections moving down, changes the color of the section to a darker pink and ends the event function. If it has been deactivated, the script activates the dropdown (display:inline), adds space below the dropdown content to avoid overlapping with the next section and ends the event function.", paragraph1: "I was tasked with creating a fully responsive blog website from a provided UX/UI design, utilizing a combination of HTML, SASS, JavaScript and responsive design principles to ensure optimal user experience and adaptability across different devices and screen sizes."},
    {rank: 7,title: 'Food Delivery Website', desc: 'I created a fully responsive food delivery website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design', image: {src: FoodDX, alt: 'FoodDX_IMG'}, feature: true, date: 'March 31st 2022', openLink: 'https://joshuasprogramming.github.io/FoodDX/' , githubRepo: 'https://github.com/JoshuasProgramming/FoodDX', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true},
    {rank: 8,title: 'The Modern House Landing-Page', desc: 'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: ModernHouse, alt: 'ModernHouseImg'}, feature: true, date: 'March 22nd 2022', openLink: 'https://joshuasprogramming.github.io/The-Modern-House/', githubRepo: 'https://github.com/JoshuasProgramming/The-Modern-House', language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', featureAll: true, paragraph1:'I created a fully responsive real estate website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', code_snippet1:ModernHouse_snippet1, heading1_text:"1. Why Clean and Commented Code Matters for Web Developers", paragraph1_text:"As a web developer, maintaining clean and well-commented code is crucial for ensuring the longevity and scalability of my projects. It also makes it easier for other developers to understand and work on the codebase"},
    {rank: 9,title: 'Interior-Design-Landing-Page', desc:'I created a fully responsive furniture website from viewing a UX/UI design online. This website uses HTML, SASS & Responsive Design.', image: {src: Interior, alt: 'InteriorImg'}, feature: true, date: 'March 19th 2022', openLink: 'https://joshuasprogramming.github.io/Interior-Design-Landing-Page/', githubRepo: 'https://github.com/JoshuasProgramming/Interior-Design-Landing-Page',language1: 'HTML', language2: 'SCSS', language3: 'Responsive Design', language4: 'CSS Grid Layout', language5:'Flexbox', featureAll: true, paragraph1:"Interior design is a coding challenge, which had me build out this e-commerce homepage with the objective to get it looking as close to the design as possible. This website uses HTML, SASS & Responsive Design.", paragraph2: 'I really enjoyed the process of breaking down the UI/UX design that I had to recreate, via divide and conquer. The lessons learned are below:', code_snippet1:interiorDesign_snippet_1, code_snippet2: interiorDesign_snippet_2, heading1_text: "1. Creating an Exceptional User Experience Through a Perfectly Executed UI/UX and HTML/SCSS Design", paragraph1_text: "As a web developer, it is crucial to understand the importance of creating a website that not only functions properly, but also provides an exceptional user experience through a well-designed and executed UI/UX, utilizing the power of HTML and SCSS to make the website visually appealing and easy to navigate.", heading2_text: "2. Ensuring a Seamless User Experience Across All Devices Through Responsive UI/UX and HTML/SCSS Design", paragraph2_text: "As a web developer, it is essential to keep in mind the importance of developing a responsive website that seamlessly adapts to various screen sizes and devices, by creating a user-centric design and utilizing the flexibility of HTML and SCSS to ensure that the website looks and functions perfectly on any device, providing the best possible user experience."},
    {rank: 10,title: 'HoneyPot Furniture', desc:'This was a coding test, which had me create a fully responsive ecommerce website from a UX/UI design. This website which uses HTML, SASS, JavaScript & Responsive Design.', image: {src: HoneyPot, alt: 'HoneyPotImg'}, date: 'March 17th 2022', feature:false, featureAll:true, openLink: "https://joshuasprogramming.github.io/HoneyPot-Furniture/",githubRepo: 'https://github.com/JoshuasProgramming/HoneyPot-Furniture', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', code_snippet1: honeyPot_snippet_1, heading1_text: "1. Creating a Custom Shape with CSS Clip-Path", paragraph1_text:"I used the CSS clip-path property to create a custom shape for an element by defining a polygon with points at 46% 0, 100% 100%, 0 100%, and 0 0. The shape created is a triangle that adapts to the size of the element it is applied to, allowing for a unique design element that can be adjusted for different elements and responsive designs.", paragraph1:"In this coding test, I was tasked with creating a fully responsive ecommerce website from a UX/UI design, utilizing various technologies such as HTML, SASS, JavaScript and Responsive Design to ensure optimal user experience across all devices and platforms. This involved utilizing design principles such as fluid grids and media queries to ensure seamless navigation and functionality, while also implementing best practices for performance optimization and accessibility.", paragraph2:"Overall, this test required a deep understanding of web development and the ability to apply this knowledge to create a polished, professional website that met the needs of the client.", heading2_text:"2. Creating a Website in 5 Days: A Time-Sensitive Challenge", paragraph2_text:"Creating a website for a company is a task that requires careful planning and execution. However, when faced with a tight deadline of only 5 days, the challenge becomes even greater. Despite the time constraints, it is still possible to produce a functional and visually appealing website that meets the needs of the company. The key is to prioritize the most important elements and use efficient development techniques to streamline the process. With proper organization and a clear understanding of the project's scope, it is possible to create a website in a short amount of time without sacrificing quality."},
    {rank: 11,title: 'FetchAPIs.com',desc:'Full stack website which was has a API tracker for Covid data, weather data and movie data. Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: FetchAPIs, alt: 'FetchAPIsImg'}, feature:true, date:'February 18th 2022', openLink:'https://joshuasprogramming.github.io/Fetch-APIs.com-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Fetch-APIs.com-Responsive', language1: 'HTML', language2: 'SCSS', language3: 'PHP', language4: 'Javascript', language5:'APIs', youtubeVideo: true, youtubeLink:'https://youtu.be/F5vqx36KA3s' , featureAll:true},
    {rank: 12,title: 'Burger Palace', desc:'Full stack website which was designed for a fast food chain company called "Burger Palace". Website uses HTML, SASS, JavaScript, PHP & Responsive Design', image: {src: BurgerPalace, alt: 'BurgerPalaceImg'}, feature:true, date: 'February 16th 2022', openLink: 'https://joshuasprogramming.github.io/Burger-Palace-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Burger-Palace-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', language5: 'PHP'},
    {rank: 13,title: 'Orange Diner', desc:'Full stack website which was designed for a bar called "Orange Diner". Website uses HTML, SASS, JavaScript, PHP, MYSQL & Responsive Design.', image: {src: OrangeDiner, alt: 'OrangeDinerImg'}, feature:false, featureAll:true, date: 'February 19th 2022', openLink: 'https://joshuasprogramming.github.io/Orange-Diner-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Orange-Diner-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
    {rank: 14,title: 'The 5 Star', desc:'Front End website which was designed for a restaurant company called "The 5 Star". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: The5Star, alt: 'The5StartIMG'}, feature:false, featureAll:true, date: 'February 16th 2022', openLink:'https://joshuasprogramming.github.io/The-5-Star-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/The-5-Star-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
    {rank: 15,title: 'Blue Sci-fi', desc:'Front End landing page website which was designed for a company called "Blue Sci-Fi". Website uses HTML, SASS, JavaScript & Responsive Design.', image: {src: BlueSciFi, alt: 'BlueSciFiImg'}, feature:false, featureAll:true, date: 'February 13th 2022', openLink:'https://joshuasprogramming.github.io/Blue-Sci-Fi-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Blue-Sci-Fi-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
    {rank: 16,title: 'Compound Interest Calculator', desc:'Front End website for compound interest. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: CompoundInterest, alt: 'CompoundInterestIMG'}, feature:false, featureAll:true, date:'February 9th 2022', openLink:'https://joshuasprogramming.github.io/Compound-Interest-Calculator-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Compound-Interest-Calculator-Responsive', language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', code_snippet1: compound_interest_snippet_1, code_snippet2: compound_interest_snippet_2, paragraph1: "I created a compound interest calculator website utilizing HTML, SCSS, and JavaScript to provide users with a comprehensive and interactive platform for calculating and visualizing their potential earnings.", paragraph2: "I really enjoyed the process of breaking down the website that I had to make via divide and conquer. The lessons learned are below:", heading1_text: "1. Calculating Future Investment Value using JavaScript", paragraph1_text: "In this code snippet, I used JavaScript to calculate the future investment value for a user input. The code first checks if the user has entered a value for yearly contributions, and if not, sets it to 0. It then calculates the percentage of the interest rate, sets the number of times the investment compounds per year to 1, and uses the compound interest formula to calculate the future investment value. The result is then added to the yearly contributions, and the final result is presented to the user in a formatted currency string. The code also uses the toLocaleString function to format the number to the US locale.", heading2_text: "2. Creating a Downloadable PDF of a Form and Future Investment Value Using JavaScript", paragraph2_text: "In this code snippet, I used JavaScript to create a downloadable PDF of a form and future investment value. I first created a new div element and appended a button with the id of 'download_btn' to it. I then created a new constant which gets the 'download_btn' element and added an event listener. Once the user triggers the event, the code creates an options variable and sets the options of the file such as the margins, filename, image type and quality, and the format of the PDF. Then the code uses the html2pdf library to convert the form and future investment value to a PDF and save it to the user's computer. The last step is to remove the download button so as not to get duplication if the user calculates again."},
    {rank: 17,title: 'Weight Converter', desc:'Front End website for a weight converter. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: WeightConverter, alt: 'WeightConverterIMG'}, feature:false, featureAll:true, date:'February 12th 2022',openLink:'https://joshuasprogramming.github.io/Weight-Converter-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Weight-Converter-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', code_snippet1: weight_converter_snippet_1, code_snippet2: weight_converter_snippet_2, heading1_text:"1. Converting Pounds to Other Units of Weight using JavaScript", paragraph1_text: "In this code snippet, I used JavaScript to create a function that converts pounds to other units of weight such as kilograms, grams, and ounces. The function takes in a value from an input field, and then uses that value to perform mathematical calculations to convert it to the other units. The function first converts pounds to kilograms by multiplyingthe pounds value by 0.45359237, and then assigns the result to a variable.", heading2_text: "2. Converting Kilograms to Other Units of Weight using JavaScript", paragraph2_text: "A JavaScript function that converts kilograms to pounds, grams, and ounces, displays results with 4 decimal precision and ensures accurate final result.", paragraph1: "In this project, I created a weight converter using a combination of HTML, SCSS, and JavaScript. I used HTML to structure the layout of the website and create the form for user input. I used SCSS for styling the website to make it visually pleasing and easy to use. Finally, I used JavaScript to create the logic for converting weight units and displaying the results to the user. ", paragraph2: "The JavaScript function takes user input from an input field, performs mathematical calculations to convert kilograms to pounds, grams and ounces, and displays the results in assigned containers with 4 decimal precision ensuring accurate final results. The project was designed to provide an easy to use, visually pleasing interface for users to quickly convert weight units."},
    {rank: 18,title: 'Number Guessing Game', desc:'Front End website for a number guessing game. Website uses HTML, SASS, JavaScript & Responsive Design', image: {src: NumberGuessingGame, alt: 'NumberGuessingGameIMG'}, feature:false, featureAll:true, date:'February 12th 2022', openLink:'https://joshuasprogramming.github.io/Number-Guessing-Game-Responsive/', githubRepo:'https://github.com/JoshuasProgramming/Number-Guessing-Game-Responsive',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design', code_snippet1: numberGuessing_snippet_1, code_snippet2: numberGuessing_snippet_2, paragraph1:'Front End website which contains a random number guessing game. Website uses HTML, SASS, JavaScript & Responsive Design. I developed and designed the application as a means to understand DOM manipulation, conditions and the Math.floor function', paragraph2:"The process of implementing the random number javascript code, combined with HTML and SCSS was rewarding. Here's a few lessons I learned: ", heading1_text:"1. Utilizing the Math.floor() function for random number generation", paragraph1_text: "The math.floor() function accepts a real number (such as a number between 0 and 99) as input and returns the largest integer that is less than or equal to that number. Then, we set up a counter to keep track of the number of attempts made by the user and an array to store all the numbers the user has previously searched. Additionally, we prompt the user for their name and store it in a variable for later use. The 'prompt' function is utilized for this purpose."},
    {rank: 19,title: 'Personal portfolio 2022', desc:'Front End website which contains my portfolio. Website uses HTML, CSS & Responsive Design', image: {src: portfolio2022, alt: 'Portfolio2022IMG'}, feature:false, featureAll:true, date:'july 18th 2022', openLink:'https://joshuasprogramming.github.io/Joshua-Thomas-Dev-Portfolio/', githubRepo:'https://github.com/JoshuasProgramming/Joshua-Thomas-Dev-Portfolio',language1: 'HTML', language2:'SCSS', language3:'JavaScript', language4: 'Responsive Design'},
    {rank: 20,title: 'Personal portfolio 2023', desc:'Front End website for 2023', image:{src: portfolio2023, alt: 'Portfolio2023IMG'}, feature:false, featureAll:true, feature:false, featureAll:true, githubRepo:'https://github.com/JoshuasProgramming/joshua-thomas-dev-portfolio-2023', language1: 'React', language2:'React Props', language3:'React Router', language4:'SCSS', language5: 'Responsive Design'},
    {rank: 20,title: 'Personal portfolio 2023', desc:'Front End website for 2023', image:{src: portfolio2023, alt: 'Portfolio2023IMG'}, feature:false, featureAll:true, feature:false, featureAll:true, githubRepo:'https://github.com/JoshuasProgramming/joshua-thomas-dev-portfolio-2023', language1: 'React', language2:'React Props', language3:'React Router', language4:'SCSS', language5: 'Responsive Design'}
    ]


    /**
     * Code below will allow us to go to the next page and previous page 
     */

    let nextProject = null;
    let prevProject = null;
    let maxItemsInProjects = null;
    let minItemsInProjects = null;

    const index = projects.findIndex(project => project.title === location.state.title);

    if (index !== -1) {
        nextProject = projects[index + 1];
        prevProject = projects[index - 1];
        maxItemsInProjects = projects.length;
        minItemsInProjects = 0;
    }

    //displaying the title of the web page
    document.title = 'Joshua Thomas | ' + location.state.title;

    //page will start at top
    window.scrollTo(0, 0);


  return (
    <section className="read-more-container">
      <div className="read-more-title">
        <h1><span>{location.state.title}</span> - An Overview</h1>
      </div>
      <div className="read-more-language-container"> 
        {location.state.language1 != undefined ?  <div><h3>{location.state.language1}</h3></div> : false}
        {location.state.language2 != undefined ?  <div><h3>{location.state.language2}</h3></div> : false}
        {location.state.language3 != undefined ?  <div><h3>{location.state.language3}</h3></div> : false}
        {location.state.language4 != undefined ?  <div><h3>{location.state.language4}</h3></div> : false}
        {location.state.language5 != undefined ?  <div><h3>{location.state.language5}</h3></div> : false}
      </div>
      <div className="read-more-image">
        {
        location.state.image == "[object Object]" ? <img src={location.state.image.src} alt={location.state.image.alt}></img> :
        <img src={location.state.image} alt={location.state.alt}/>
        }
      </div>
      <div className="read-more-icons">

        { 
        index==minItemsInProjects ? false 
        : 

        <Link to="../pages/Read_more" state={prevProject}
        style={{ textDecoration: 'none' }}  >
          <div className='next-prev-btn' title={prevProject.title}>
          &#171; Prev
          </div>
         </Link>

        }

        <a href={location.state.githubRepo} target="_blank">
            <img src={github} title={location.state.title + "'s github repository"}/>
        </a>
                          
        <a href={location.state.openLink} target="_blank">
            <img src={openLink} title={location.state.title + "'s open link"}/>
        </a>

        { 
        (index + 2)==maxItemsInProjects ? false 
        : 

        <Link to="../pages/Read_more" state={nextProject}
        style={{ textDecoration: 'none' }}  >
          <div className='next-prev-btn' title={nextProject.title}>
            Next &#187;
          </div>
         </Link>
        
        }

      </div>

      <div className="read-more-paragraph1">
        <p>{location.state.paragraph1}</p>
      </div>
      <div className="read-more-paragraph1">
        <p>{location.state.paragraph2}</p>
      </div>
      
      <div className="read-more-heading">
        <h1>{location.state.heading1_text}</h1>
        <p>{location.state.paragraph1_text}</p>
      </div>

      <div className="read-more-snippet">
        <img src={location.state.code_snippet1} alt={location.state.code_snippet1 + "IMG"}/>
      </div>

      <div className="read-more-heading">
        <h1>{location.state.heading2_text}</h1>
        <p>{location.state.paragraph2_text}</p>
      </div>

      { location.state.code_snippet2 === undefined ? 
        false 
        : 
        <div className="read-more-snippet">
          <img src={location.state.code_snippet2} alt={location.state.code_snippet2 + "IMG"}/>
        </div>
      }
    </section>
  )
}
