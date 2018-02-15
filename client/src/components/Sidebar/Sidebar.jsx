import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import './Sidebar.css'
//hi kevin
class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      email: null,
      username: null,
      birthday: null,
      bio: null,
      dCCount: 0,
      mostLikedDC: 'Unavailable',
      mostSharedDC: 'Unavailable'

    }
  }

  async componentWillMount() {
    await this.setState( {id: sessionStorage.getItem('id')})
    console.log("Id is now", this.state.id)
    axios.get('http://localhost:3030/api/user/fetchUsersInfo/' + this.state.id)
      .then( result => {
      console.log('----this is the result', result.data);
      this.setState({
        email: result.data[0].email,
        username: result.data[0].username,
        birthday: result.data[0].birthday,
        bio: result.data[0].bio,
      })
      if(result.data[1]){
        this.setState({
          dCCount: result.data[1].dateCourseCount,
          mostLikedDC: result.data[1].mostLikedDC,
          mostSharedDC: result.data[1].mostSharedDC
        })
      }

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
        <p>Bio: {this.state.bio}</p>
        <p>Number of Date Courses made: {this.state.dCCount}</p>
        <p>Most Likes: {this.state.mostLikedDC}</p>
        <p>Most Shares: {this.state.mostSharedDC}</p>
        </Col>
      </Row>

     </div>
    )
  }
}

export default Sidebar;