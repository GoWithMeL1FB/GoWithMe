import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

onChangeHandler(e) {
  this.setState({
    [e.target.name]: e.target.value
  })
}

loginUser() {
  const { username, password } = this.state;
  const payload = {
    username,
    password
  }
  axios.post('http://localhost:3030/api/augh/login', payload)
  .then(
    (res) => {
      console.log('Log in Successful! res:', res)
      this.props.history.push('/Home');
    }
  )
  .catch(
    (err) => {
      console.log('Log in Failed err:', err);
    }
  )
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
          <Button onClick={this.loginUser}
          > Submit </Button>
        </Row>
      </Modal>
    );
  }
}

export default LoginPage;
