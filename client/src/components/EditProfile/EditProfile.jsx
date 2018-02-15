import React, { Component } from 'react';
import { Row, Input, Button, Toast, SideNav, SideNavItem } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import url from '../../../config';

// import david from '../temp/prof.jpg';
// import bg from '../temp/download.jpeg';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      bio: '',
      birthday: 0,
      profileimage: null,

    }
    this.submitUpdate = this.submitUpdate.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      username: this.props.loginUsername.username,
    });
    axios.get(`${url.restServer}/api/user/fetchUsersInfo/${this.props.loginUsername.username}`)
      .then((data) => {
        const { firstname, lastname, email, bio, birthday } = data.data[0];
        // console.log(data.data[0], this.props.loginUsername.username);
        this.setState({
          firstname,
          lastname,
          email,
          bio,
          birthday,
        });
      })
      .catch((err) => {
        console.log('edit profile - failed to fetch user data', err.message);
      });
  }

  // send an update to the database
  async submitUpdate() {
    try {
      const payload = this.state;
      const data = await axios.put(`${url.restServer}/api/user/updateUser`, payload);
      // console.log(data);
    } catch(err) {
      console.log('Failed to update user info', err);
    }
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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
          <Input s={12} name="bio" label="Bio" onChange={this.onChangeHandler}/>
          <Button waves='light' onClick={this.submitUpdate}>submit</Button>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loginUsername: state.setloginUsername,
  };
}

export default connect(mapStateToProps)(EditProfile);