import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col } from 'react-materialize';

import Search from './Search/Search.jsx';
import DropBox from './Search/DropBox.jsx';
import CourseInfo from './CourseInfo/CourseInfo.jsx';

class CreateDateCourse extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      // <center>
      <Row>
        <Col s={9}>
          <CourseInfo></CourseInfo>
          <Search></Search>
        </Col>
        <Col s={3}>
          <DropBox></DropBox>
        </Col>
      </Row>
      // </center>
    )
  }
}

export default CreateDateCourse;