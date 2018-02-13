import React, { Component } from 'react';
import { Row, Input, Button, Toast, SideNav, SideNavItem } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import Dropzone from 'react-dropzone';
//const imageshack = require('imageshack');

import david from '../temp/prof.jpg';
import bg from '../temp/download.jpeg';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5',
      firstname: 'kevin',
      lastname: 'vo',
      username: 'kevinvoduy',
      email: 'kevin123@apple.com',
      bio: 'is tired most of the time',
      birthday: 1992,
      profileimage: null,
      
    }
    this.submitUpdate = this.submitUpdate.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {

  }

  // send an update to the database
  async submitUpdate() {
    try {
      const payload = this.state;
      const data = await axios.put('http://localhost:3030/api/user/updateUser', payload);
      console.log(data.data);
    } catch(err) {
      console.log('Failed to update user info', err);
    }
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDrop (files) {
    let file = files[0];
    console.log('file dropped!', file)
    this.setState({image: file})

  }

  render() {
    return (
      <div>
        <span>Edit Profile</span>
        <Row>
          <Input s={6} name="firstname" label="First Name" onChange={this.onChangeHandler}/>
          <Input s={6} name="lastname" label="Last Name" onChange={this.onChangeHandler}/>
          <Input s={6} type="email" name="email" label="Email" onChange={this.onChangeHandler}/>
          <Input s={6} name="birthday" label="Birthday" onChange={this.onChangeHandler}/>
          <Input s={6} name="profileImage" label="Image" onChange={this.onChangeHandler}/>
          <Input s={12} name="bio" label="Bio" onChange={this.onChangeHandler}/>
          <Button waves='light' onClick={this.submitUpdate}>submit</Button>
        </Row>
      </div>
    )
  }
}

export default EditProfile;