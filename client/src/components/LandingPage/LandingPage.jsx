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
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">go with me</a>
          <ul className="right hide-on-med-and-down">
            <Login redirectToHome={this.redirectToHome}></Login>
            {/* <li><a href="#">Log In</a></li> */}
          </ul>
        </div>
        </nav>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br/><br/>
              <h1 className="header center"><img id="icon" src={icon}></img></h1>
              <div className="slogan row center">
                <h5 className="header col s12 mate white-text light">We Plan. You Play.</h5>
              </div>
              <div className="slogan row center">
                {/* <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a> */}
                <Signup redirectToHome={this.redirectToHome}></Signup>
              </div>
              <br/><br/>
            </div>
          </div>
          <div className="parallax"><img src={mainLanding} alt="Unsplashed background img 1"/></div>
        </div>
    <div className="container">
      <div className="section">
        {/* <!--   Icon Section   --> */}
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">event_available</i></h2>
              <h5 className="center">Searching for a date course</h5>
              <p className="light">We have ranges of date courses for all your occassions. Want to spend the day with your new date but don't know what to do? Or maybe you are visiting a new place for the first time. We have the day planned for you.</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">grade</i></h2>
              <h5 className="center">Easy date course planner</h5>
              <p className="light">Maybe you are an unique person looking to create your own adventure! Planning for your day is as simple as dragging and dropping your activity. We calculate the distance and time it would take to get to your next destination. Your day planning just became so much easier!</p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <h2 className="center brown-text"><i className="material-icons">public</i></h2>
              <h5 className="center">Share and Rate</h5>
              <p className="light">It wouldn't be right to keep the best day for yourself. Share your ideas and see what other people think about your date course. Share the love.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row center">
            {/* <h5 className="header col s12 light">Something about our app blabla</h5> */}
          </div>
        </div>
      </div>
      <div className="parallax"><img src="/landingPageImage/pic/compressed/gwmlandingcover-min.jpg" alt="Unsplashed background img 2"/></div>
    </div>
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 center">
            <h3><i className="mdi-content-send brown-text"></i></h3>
            <h4>Contact Us</h4>
            <div className="center-align">
              <p className="bold">Product Manager/Software Engineer - David Chung</p>
              <p className="bold">Software Engineer - Karolee Ann Carlson</p>
              <p className="bold">Systems Architect - Kevin Vo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                {/* <h5 className="header col s12 light">Revolutionary making the world a better place blabla</h5> */}
              </div>
            </div>
          </div>
          <div className="parallax"><img src={bottomLanding} alt="Unsplashed background img 3"/></div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
export default LandingPage;