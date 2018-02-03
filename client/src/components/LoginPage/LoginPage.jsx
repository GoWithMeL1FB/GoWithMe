import React, { Component } from 'react';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      Username: null
    };
    this.LoginClickHandler = this.LoginClickHandler.bind(this);
  }

LoginClickHandler(un, pw ) {
  console.log('username', username);
  console.log('password', password);
  const payload = {
   username: un,
   password: pw
}

axios.post(`${process.env.REST_SERVER_URL}/api/auth/login)`, payload)
  .then(res => {

  //activate session and redirect to home page
  const { accessToken } = res;
  localStorage.setItem('token', accessToken);
  this.props.history.push('/Home');


}).catch(err => {
  console.error('login error', err)
})
  
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
