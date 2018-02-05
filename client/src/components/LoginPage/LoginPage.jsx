import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
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
      <Modal
        header="Log in"
        trigger={<Button waves='light' > Login </Button>}
      >
        <Row>
          <Input 
            s={6}
            label="Username"
            name="username"
            onChange={this.onChangeHandler}
          />
          <Input
            s={6}
            label="Password"
            name="password"
            onChange={this.onChangeHandler}
          />
          <Button onClick={() =>{ 
            this.LoginClickHandler(this.refs.userName.value ,this.refs.password.value)} } 
          > Submit </Button>
        </Row>
      </Modal>
    );
  }
}

export default LoginPage;
