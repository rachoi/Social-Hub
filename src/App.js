import React, {useState, useEffect} from 'react';

import './App.css';

import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//Pages
import MainPage from "./Pages/index";
import AboutPage from "./Pages/about";
import ContactPage from "./Pages/contact";
import LoginPage from "./Pages/login";
import RecoveryPage from "./Pages/recovery";

const App = () => {
    return (
      <Router> 
        <Switch> 
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/recovery" component={RecoveryPage} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    );
}

export default App;