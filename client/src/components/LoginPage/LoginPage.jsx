import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';

import './button.css';
import Home from '../Home/Home.jsx'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logState = this.logState.bind(this);
  }

  logState() {
    console.log(this.state);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  loginUser() {
    const { username, password } = this.state;
    const payload = {
      username,
      password,
    }
    axios.post('http://localhost:3030/api/auth/login', payload)
    .then((results) => {

      //console.log(sessionStorage.getItem('authentication'));
      sessionStorage.setItem('authentication', results.headers.authentication);

      this.props.redirectToHome();
      console.log('Log in Successful! res:', results);
    })
    .catch((err) => {
      console.log('Log in Failed err:', err);
    })
  }

  render() {
    return (
      <Modal
        header="Log in"
        trigger={<Button waves='light'>Login</Button>}
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
          <Button onClick={this.loginUser}>Submit</Button>
          <button>
            <a href="#" className="fa fa-facebook"></a>
          </button>
          <button>
            <a href="#" className="fa fa-google"></a>
          </button>
        </Row>
      </Modal>
    );
  }
}

export default LoginPage;
