import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from "./loginSvg.svg";
import './Login.css';


const Login = (props) => {

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <div className="base-container">
            <div className="header">
                Login
            </div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="loginImg"/>
                </div>
                <div className="loginForm">
                    <label htmlFor="Email">Email</label>
                    <input
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                        required

                    />
                    <p className="errorMsg">{emailError}</p>
                    <label htmlFor="password">Password</label>
                    <input
                         type='password'
                        placeholder='Password'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value)}
                        required
                    />
                    <p className="errorMsg">{passwordError}</p>
                    </div>
                </div>
                <div className="footer">
                    {hasAccount ? ( 
                        <>
                        <button 
                            className="button" 
                            onClick={handleLogin}
                            >
                            Sign in
                        </button>
                       
                        <p>Don't have an account ? 
                            <span onClick={() => setHasAccount(!hasAccount)}> 
                                Sign up
                            </span>
                        </p>
                        </>
                        
                    ) : (
                    <>
                        <button
                            className="button" 
                            onClick={handleSignUp}
                        >
                        Sign up
                        </button>
                        <p>Have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}> 
                                Sign in
                            </span>
                        </p>
                           
                    </>
                )}    
            </div>
        </div>

    )
}

    
       
export default Login;