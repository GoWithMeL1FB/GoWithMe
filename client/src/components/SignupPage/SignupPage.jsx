import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';
import axios from 'axios';

class SignupPage extends Component {

  createUser() {
    axios.post('/signup', {
      function(){
        console.log('sign up button reacting')
      }
    })
  }

  render() {
    return (
      <Modal
        header="Registration"
        trigger={<Button waves='light'> Signup <Icon left>fiber_new</Icon></Button>}
        >
        <Row>
          <Input s={6} label="Username" />
          <Input s={6} label="BirthYear" />
		      <Input s={6} label="First Name" />
		      <Input s={6} label="Last Name" />
	    	  <Input type="password" label="Password" s={12} />
    		  <Input type="email" label="Email" s={12} />
        </Row>
        <Button>Submit</Button>
      </Modal>
    )
  }
}

export default SignupPage;