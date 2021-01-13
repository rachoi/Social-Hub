import React, {useState} from 'react';
import {Link} from "react-router-dom";
import fire from '../components/fire';
import Navbar from "../components/NavBar/Navbar";
import contactImg from "./contactImg.svg"
import "./contact.css";



const ContactPage = () => {
    var user = fire.auth().currentUser;
    return (
        <div className="page">
             <div className="navBar"> 
                    <Navbar />
            </div>
            <div className="contact-header">
                Need to contact us? Send us a message to us!
            </div>
            <div className="contact-content">
                <div className="contactLeft-content">
                    <img src={contactImg} alt="homeImg"/>
                </div>
                <div className="contactRight-content">
                        <form className="contact-form">
                            <div className="form-group">
                                <h1> Full Name </h1>
                                <input placeholder="Your name" type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <h1> Email address </h1>
                                <input placeholder="Your email" type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <h1> What are you contacting us for? </h1>
                                <textarea placeholder="Your message" id="msg" className="form-control" rows="5" />
                            </div>
                            <Link to="/contact" style={{textDecoration: "none"}}>
                                <button type="submit" className="submit">Submit</button>
                            </Link>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;