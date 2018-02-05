import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      birthday: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '' 
    };
    this.createUser = this.createUser.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createUser = () => {
    
    const payload = JSON.stringify(this.state);

    axios.post('/api/auth/signup', payload)
    .then(
      function(res) {
        console.log('user created', res)
      }
    )
    .catch(
      function (err) {
        console.log('user creation failed', err);
      }
    )
    .then(
      function(){
        this.props.history.push('/');
      }
    )
  }

  render() {
    return (
      <Modal
        header="Registration"
        trigger={<Button waves='light'> Signup <Icon left>fiber_new</Icon></Button>}
        >
        <Row>
          <Input s={6} label="Username" name="username" onChange={this.onChangeHandler}/>
          <Input s={6} label="BirthYear" name="birthyear" onChange={this.onChangeHandler}/>
		      <Input s={6} label="First Name" name="firstName" onChange={this.onChangeHandler}/>
		      <Input s={6} label="Last Name" name="lastName" onChange={this.onChangeHandler}/>
	    	  <Input type="password" label="Password" s={12} name="password" onChange={this.onChangeHandler}/>
    		  <Input type="email" label="Email" s={12} name="email" onChange={this.onChangeHandler}/>
        </Row>
        <Button onClick={this.createUser}>Submit</Button>
      </Modal>
    )
  }
}

export default SignupPage;