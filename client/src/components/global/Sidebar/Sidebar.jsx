import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-materialize';
import './Sidebar.css'
class Sidebar extends Component {

  render() {
    return (
      <div className="User">
      <Row className="User">
        <Col s={3} m={3}>
        <div>
        <img src="assets/images/prof.jpg"/>
        </div>
       
        <p>David Chung</p>
        <p>david@david.com</p>
          
        </Col>
      </Row>
  
     </div>
    )
  }
}

export default Sidebar;
