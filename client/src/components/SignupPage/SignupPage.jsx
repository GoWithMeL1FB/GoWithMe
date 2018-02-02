import React, { Component } from 'react';
import { Row, Input, Button, Icon, Modal } from 'react-materialize';

class SignupPage extends Component {

  render() {
    return (
      <Modal
        header="Registration"
        trigger={<Button waves='light'> Signup <Icon left>fiber_new</Icon></Button>}
        >
        <Row>
		      <Input placeholder="Placeholder" s={6} label="First Name" />
		      <Input s={6} label="Last Name" />
	    	  <Input type="password" label="password" s={12} />
    		  <Input type="email" label="Email" s={12} />
        </Row>
      </Modal>
    )
  }
}

export default SignupPage;