import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      Username: null
    };
    this.LoginClickHandler = this.LoginClickHandler.bind(this);
  }

LoginClickHandler(username, password ) {
  console.log('username', username);
  console.log('password', password);


  
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
              id="userName"
              placeholder="Your Username"
              ref="userName"
            />
            <input
              type="text"
              id="password"
              placeholder="Your password"
              ref="password"
            />
          </div>
        </div>
        <button onClick={() =>{ this.LoginClickHandler(this.refs.userName.value ,this.refs.password.value)} } > Submit </button>
        </div>
    );
  }
}

export default LoginPage;
