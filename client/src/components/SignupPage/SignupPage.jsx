import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSignUpInfo } from '../../ReduxActions/setSignUpInfo.js'
import url from '../../../config';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      birthday: '',
      firstname: '',
      lastname: '',
      password: '',
      email: '',
      bio: 'hi',
    };
    this.createUser = this.createUser.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.createUserOnKeyUp = this.createUserOnKeyUp.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  createUser() {
    const {
      username,
      birthday,
      firstname,
      lastname,
      password,
      email,
      bio,
    } = this.state;
    const payload = {
      username,
      birthday,
      firstname,
      lastname,
      password,
      email,
      bio,
    };

    axios.post(`${url.restServer}/api/auth/signup`, payload)

      .then(res => {
        console.log('user creationg info submitted', res);
        this.props.setSignUpInfo(this.state.username)
        this.props.redirectToHome();
        // this.props.history.push('/Home');
      })
      .catch((err) => {
        console.log('user creation failed', err);
      });
  }

  createUserOnKeyUp(e) {
    if (e.key == 'Enter') {
      this.createUser();
    }
  }

  render() {
    return (
      <Modal

        header="Registration"
        trigger={<Button large waves="light">Get Started</Button>}
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
            label="BirthYear"
            name="birthday"
            onChange={this.onChangeHandler}
          />
          <Input
            s={6}
            label="First Name"
            name="firstname"
            onChange={this.onChangeHandler}
          />
          <Input
            s={6}
            label="Last Name"
            name="lastname"
            onChange={this.onChangeHandler}
          />
          <Input
            type="password"
            label="Password"
            s={12}
            name="password"
            onChange={this.onChangeHandler}
          />
          <Input
            type="Email"
            label="email"
            s={12}
            name="email"
            onChange={this.onChangeHandler}
            onKeyUp={this.createUserOnKeyUp}
          />
        </Row>
        <Button onClick={this.createUser} className="modal-close">
          Submit
        </Button>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    signupUsername: state.setSignupUsername,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSignUpInfo: setSignUpInfo,
  }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SignupPage)
