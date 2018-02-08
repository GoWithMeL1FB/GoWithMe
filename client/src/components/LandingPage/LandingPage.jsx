import React, { Component } from 'react';
import axios from 'axios';
import './LandingPage.css';
import Parallax from 'react-materialize';
import { Button } from 'react-materialize';
import Signup from '../SignupPage/SignupPage.jsx';
import Login from '../LoginPage/LoginPage.jsx';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  redirectToHome () {
      this.props.history.push('/Home');  
  }

  render() {
    return (
      <div className='landingpage'>
        <Signup redirectToHome={this.redirectToHome}/>
        
        <Login redirectToHome={this.redirectToHome}/>
     
        <div id='logo'>&#9736;</div>
        <h2>GO</h2>
        <h2>WITH</h2>
        <h2>ME</h2>
        <h3>we plan. you play.</h3>
      </div>
    )
  }
}

export default LandingPage;