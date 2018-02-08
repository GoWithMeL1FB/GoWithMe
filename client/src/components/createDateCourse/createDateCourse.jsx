import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-materialize';
import Search from './Search/Search.jsx';
import DropBox from './Search/DropBox.jsx';

class CreateDateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  render () {
    return(
      <center>
      <Row>
        <Col s={8}>
          <Search></Search>
        </Col>
        <Col s={4}>
          <DropBox></DropBox>
        </Col>
      </Row>
      </center>
    )
  }
}

export default CreateDateCourse;