import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';

class EditProfile extends Component {
  render() {
    return (
      <div>
      <span>Edit Profile</span>
        <Row>
          <Input s={6} name="firstname" label="First Name" />
          <Input s={6} name="lastname" label="Last Name" />
          <Input s={6} type="email" name="email" label="Email" />
          <Input s={6} name="birthday" label="Birthday" />
          <Input s={12} name="bio" label="Bio" />
        </Row>
      </div>
    )
  }
}

export default EditProfile;