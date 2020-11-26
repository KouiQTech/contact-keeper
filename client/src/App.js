import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";

import ContactState from "./context/contact/ContactState";
import AuthtState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import PrivateRoute from "./components/routing/PrivateRoute"

import setAuthToken from "./utils/setAuthToken";
import './App.css';

if(localStorage.token){
  setAuthToken(localStorage.token);
 };

const App=() =>{
  return (
    <AuthtState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <div className="App">
                <Navbar/>
                <div className="container">
                  <Alerts/>
                  <Switch>
                    <PrivateRoute exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                  </Switch>
                </div>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthtState>
  );
}

export default App;