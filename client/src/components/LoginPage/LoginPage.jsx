import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLoginInfo } from '../../ReduxActions/setLoginInfo';
import url from '../../../config';

import Home from '../Home/Home.jsx'
import './button.css';

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
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginUser() {
    const { username, password } = this.state;
    const payload = {
      username,
      password,
    }
    axios.post(`${url.restServer}/api/auth/login`, payload)
    .then((results) => {
      this.props.setLoginInfo(this.state.username);
      //console.log(sessionStorage.getItem('authentication'));
      sessionStorage.setItem('authentication', results.headers.authentication);
      sessionStorage.setItem('id', results.data.id);

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
            type="password"
            label="Password"
            name="password"
            onChange={this.onChangeHandler}
          />
          <Button onClick={this.loginUser}>Log in</Button>
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

function mapStateToProps(state) {
  return {
    loginUsername: state.setloginUsername,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setLoginInfo: setLoginInfo,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(LoginPage)
