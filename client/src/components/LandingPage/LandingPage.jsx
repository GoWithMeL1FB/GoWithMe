import React, { Component } from 'react';
import axios from 'axios';
import Parallax from 'react-materialize';
import { Button, Row, Col, Icon, Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import Signup from '../SignupPage/SignupPage.jsx';
import Login from '../LoginPage/LoginPage.jsx';
import Footer from '../global/Footer/Footer.jsx';

import icon from "../../../public/landingPageImage/pic/logos/gwmlogowhite.png";
import mainLanding from "../../../public/landingPageImage/pic/compressed/Webp.net-resizeimage.jpg";
import bottomLanding from "../../../public/landingPageImage/pic/compressed/Webp.net-resizeimage (1).jpg";
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }

  redirectToHome () {
      this.props.history.push('/Home');
  }

  render() {
    return (
      <div>
        <nav className="blue-grey darken-3" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">go with me</a>
          <ul class="right hide-on-med-and-down">
            <Login redirectToHome={this.redirectToHome}></Login>
            {/* <li><a href="#">Log In</a></li> */}
          </ul>

          <ul id="nav-mobile" class="side-nav">
            <Login redirectToHome={this.redirectToHome}></Login>
            {/* <li><a href="#">Log In</a></li> */}
          </ul>
          <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
        </div>
        </nav>

        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br/><br/>
              <h1 class="header center"><img id="icon" src={icon}></img></h1>
              <div class="row center">
                <h5 className="header col s12 mate white-text light">We Plan. You Play.</h5>
              </div>
              <div class="row center">
                {/* <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a> */}
                <Signup redirectToHome={this.redirectToHome}></Signup>
              </div>
              <br/><br/>

            </div>
          </div>
          <div class="parallax"><img src={mainLanding} alt="Unsplashed background img 1"/></div>
        </div>

    <div class="container">
      <div class="section">

        {/* <!--   Icon Section   --> */}
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">event_available</i></h2>
              <h5 class="center">Searching for a date course</h5>

              <p class="light">We have ranges of date courses for all your occassions. Want to spend the day with your new date but don't know what to do? Or maybe you are visiting a new place for the first time. We have the day planned for you.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">grade</i></h2>
              <h5 class="center">Easy date course planner</h5>

              <p class="light">Maybe you are an unique person looking to create your own adventure! Planning for your day is as simple as dragging and dropping your activity. We calculate the distance and time it would take to get to your next destination. Your day planning just became so much easier!</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center brown-text"><i class="material-icons">public</i></h2>
              <h5 class="center">Share and Rate</h5>
              <p class="light">It wouldn't be right to keep the best day for yourself. Share your ideas and see what other people think about your date course. Share the love.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="parallax-container valign-wrapper">
      <div class="section no-pad-bot">
        <div class="container">
          <div class="row center">
            {/* <h5 class="header col s12 light">Something about our app blabla</h5> */}
          </div>
        </div>
      </div>
      <div class="parallax"><img src="/landingPageImage/pic/compressed/gwmlandingcover-min.jpg" alt="Unsplashed background img 2"/></div>
    </div>

    <div class="container">
      <div class="section">

        <div class="row">
          <div class="col s12 center">
            <h3><i class="mdi-content-send brown-text"></i></h3>
            <h4>Contact Us</h4>
            <div className="center-align">
              <p className="bold">Product Manager/Software Engineer - David Chung</p>
              <p className="bold">Software Engineer - Karolee Ann Carlson</p>
              <p className="bold"><Icon>smoking_rooms</Icon>Software Consultant - Jae Chi<Icon>smoking_rooms</Icon></p>
              <p className="bold"><Icon>timer_10</Icon>Debug GOD / janitor - Brian Hong<Icon>timer_10</Icon></p>
              <p className="bold">Software Engineer - Kevin Vo</p>
            </div>
          </div>
        </div>

      </div>
    </div>

        <div class="parallax-container valign-wrapper">
          <div class="section no-pad-bot">
            <div class="container">
              <div class="row center">
                {/* <h5 class="header col s12 light">Revolutionary making the world a better place blabla</h5> */}
              </div>
            </div>
          </div>
          <div class="parallax"><img src={bottomLanding} alt="Unsplashed background img 3"/></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default LandingPage;