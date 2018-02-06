import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';
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
      bio: 'hi'
    };
    this.createUser = this.createUser.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createUser() {
    const { username, birthday, firstname, lastname, password, email, bio } = this.state;
    const payload = {
      username,
      birthday,
      firstname,
      lastname,
      password,
      email,
      bio
    }
    console.log('payload:', payload)
    axios.post('http://localhost:3030/api/auth/signup', payload)
    .then(
      (res) => {
        console.log('user creationg info submitted', res)
        this.props.history.push('/Home');
      }
    )
    .catch(
      (err) => {
        console.log('user creation failed', err);
      }
    )
  }

  render() {
    return (
      <Modal
        header="Registration"
        trigger={<Button waves='light' > Signup </Button>}
        >
        <Row>
          <Input
            s={6}
            defaultValue='david12345'
            label="Username"
            name="username"
            onChange={this.onChangeHandler}/>
          <Input
            s={6}
            defaultValue='1989'
            label="BirthYear"
            name="birthday"
            onChange={this.onChangeHandler}/>
          <Input
            s={6}
            defaultValue='david'
            label="First Name"
            name="firstname"
            onChange={this.onChangeHandler}/>
          <Input
            s={6}
            defaultValue='chung'
            label="Last Name"
            name="lastname"
            onChange={this.onChangeHandler}/>
          <Input
            defaultValue='12345678'
            type="password"
            label="Password"
            s={12} name="password"
            onChange={this.onChangeHandler}/>
          <Input
            defaultValue='chungdy1@uci.edu'
            type="Email"
            label="email"
            s={12}
            name="email"
            onChange={this.onChangeHandler}/>
        </Row>
        <Button
          onClick={this.createUser}
          className='modal-close'>
          Submit
        </Button>
      </Modal>
    )
  }
}

export default SignupPage;