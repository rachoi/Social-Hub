import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems"
import fire from '../fire';
import { Button } from "../Button"
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    state = { 
        clicked: false,
        logginedIn: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        var user = fire.auth().currentUser;
        const handleLogOut = () => {
            fire.auth().signOut().then(function() {
                window.location.reload(false);
            })
        };


        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <a className="navbar-logo" href="/">
                        Social Hub
                        <i className="fab fa-react"></i>
                    </a>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <i class="fas fa-grip-lines-vertical"></i>
                </ul>
                {user ? (
                    <Link className="loginBtn" to="/" >
                        <Button onClick={handleLogOut}> 
                            Log out           
                        </Button>
                    </Link>
                    
                ) : (
                    <Link className="loginBtn" to="/login">
                        <Button> 
                            Sign in             
                        </Button>
                    </Link>
                )}        
            </nav>
        )
    }
}

export default Navbar

 