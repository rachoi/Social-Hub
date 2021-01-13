import React from 'react';
import {Link} from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import homeImg from "./homeImg.svg";

import './home.css';



const MainPage = () => {
    return (
        <div className="page">
            <div className="navBar"> 
                    <Navbar />
            </div>
            <div className="home-header">
                Home
            </div>
            <div className="home-content">
                <div className="homeLeft-content">
                    <img src={homeImg} alt="homeImg"/>
                </div>
                <div className="homeRight-content">
                    <header className="home-contentHeader">
                        <i class="fas fa-clipboard-list"></i>The plan
                    </header>

                    <p>
                        Create a website that allows users to compile their social medias
                        into one place. 
                    </p>
                    <p style={{fontSize: "20px", marginTop: "10px", marginBottom: "20px", fontWeight: "bold"}}>
                        Technologies/Frameworks in use at the moment:
                    </p>
                    <ul style={{listStyleType: "none"}}>
                        <li><i className="fab fa-react"></i>React</li>
                        <li>Firebase</li>
                    </ul>

                    <p style={{fontSize: "25px", marginTop: "20px"}}>
                        Others will be used based off the needs for completion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainPage;