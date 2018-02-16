import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import url from '../../../../config'
// import './Sidebar.css'
//hi kevin
class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      email: null,
      username: null,
      birthday: null,
      bio: null
    }
  }

  async componentWillMount() {
    await this.setState( {id: sessionStorage.getItem('id')})
    // console.log("sidebar - id:", this.state.id)
    axios.get(`${url.restServer}/api/user/fetchUsersInfo/${this.state.id}`)
      .then( result => {
      this.setState({
        email: result.data[0].email,
        username: result.data[0].username,
        birthday: result.data[0].birthday,
        bio: result.data[0].bio
      })
    })
    .catch((err) => {
      console.log('Log in Failed err:', err);
    })

  }

  render() {
    return (
      <div className="User">
      <Row className="User">
        <Col s={3} m={3}>
        <div>
        <img src="assets/images/prof.jpg"/>
        </div>

        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
        <p>{this.state.bio}</p>
        </Col>
      </Row>

     </div>
    )
  }
}

export default Sidebar;
