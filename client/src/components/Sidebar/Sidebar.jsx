import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import './Sidebar.css'

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
      mostSharedDC: 'Unavailable',
      img: "/assets/images/default-user-img.jpg"

    }
  }

  async componentWillMount() {
    await this.setState( {
      id: localStorage.getItem('id'),
      username: localStorage.getItem('username')
  })
    axios.get(`${url.restServer}/api/user/fetchUsersInfo/${this.state.username}`)
      .then( result => {
      this.setState({
        email: result.data[0].email,
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
      if(result.data[2]){
        this.setState({img: result.data[2]})
      }

    })
    .catch((err) => {
      console.log('Log in Failed err:', err);
    })

  }

  render() {
    return (
      <div >
      <ul >
        <li className="UpperUser">
          <div >
          <p> <img className="circle" src={this.state.img}/></p>
          <p className="white-text name">{this.state.username}</p>
          <p className="white-text email">{this.state.email}</p>
          </div>
        </li>
        <li className="User">Bio: {this.state.bio}</li>
        <li><div className="divider"></div></li>
        <li className="User">Number of Date Courses made: {this.state.dCCount}</li>
        <li><div className="divider"></div></li>
        <li className="subheader User">Most Likes: {this.state.mostLikedDC}</li>
        <li><div className="divider"></div></li>
        <li className="subheader User">Most Shares: {this.state.mostSharedDC}</li>
        </ul>

      </div>
    )
  }
}

{/* <Row className="UpperUser">
          <Col s={3} m={3}>
          <div>
          <img src={this.state.img}/>
          </div>

        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
        </Col>
      </Row>
      <Row>
          <Col s={3} m={3}>
        <p>Bio:</p>
        <p>{this.state.bio}</p>
        <p>Number of Date Courses made: {this.state.dCCount}</p>
        <p>{this.state.dCCount}</p>
        <p>Most Likes: {this.state.mostLikedDC}</p>
        <p>Most Shares: {this.state.mostSharedDC}</p>
        </Col>
      </Row> */}


export default Sidebar;