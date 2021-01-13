import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import './about.css';

const AboutPage = () => {
    return (
        <div className="page">
            <div className="navBar"> 
                <Navbar />
            </div>
            <div className="about-header">
                About
            </div>
            <div className="about-content">
                <div className="aboutLeft-content">
                    <header className="about-contentHeader">
                        <i class="fas fa-book-open"></i>Information
                    </header>
                    
                    <p>
                        Just a little side project to learn
                    </p>
                    <p>
                        about web development.
                    </p>
                    <p style={{fontWeight: "bold"}}>
                        Current features:
                    </p>
                    <p>
                        Log in and log out
                    </p>
                    <p>
                        Routing to different pages
                    </p>
                    
                </div>
                <div className="aboutRight-content">
                    <header className="about-contentHeader">
                        <i class="fas fa-clipboard-list"></i>To do list
                    </header>
                    <ul>
                        <li> Integrate a user system for profiles </li>
                        <li> Profile page set up w/ bio, pic, etc</li>
                        <li> Search bar and function</li>
                        <li> Finish contact form (submission)</li>
                        <li> Decorate each page </li>
                        <li> Clean up overall look </li>
                        <li> CSS for mobile</li>
                        
                    </ul>
                </div>
            </div>
            <div className="footer"> 
                <div className="footerContent">
                    Being worked on by Raymond Choi
                </div>
            </div>
        </div>
    );
}

export default AboutPage;