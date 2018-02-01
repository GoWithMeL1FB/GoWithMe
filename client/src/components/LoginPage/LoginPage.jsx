import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
      <p>Login</p>
      <div className="row">
      <div className="col-25">
       

      </div>
      <div className="col-75">
        <input type="text" id="fname" nameName="firstname" placeholder="Your Username"/>
        <br/>
        <input type="text" id="fname" nameName="firstname" placeholder="Your password"/>
      </div>
    </div>
    <a><button> Submit </button></a>
      </div>
    )
  }
}

export default LoginPage;