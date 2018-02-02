import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <p>Login</p>
        <div className="row">
          <div className="col-25" />
          <div className="col-75">
            <input
              type="text"
              id="fname"
              nameName="firstname"
              placeholder="Your Username"
            />
            <input
              type="text"
              id="fname"
              nameName="firstname"
              placeholder="Your password"
            />
          </div>
        </div>
        <button> Submit </button>
        </div>
    );
  }
}

export default LoginPage;
