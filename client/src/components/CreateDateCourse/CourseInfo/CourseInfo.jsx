import React, { Component } from 'react';
import axios from 'axios';

import { Row, Col, Input } from 'react-materialize';

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return(
      <Row>
        <center>Date Course Name</center>
        <Input 
          s={12}
          label="Taco Trip"
        />
        <div>Description</div>
        <Input
          s={12}
          label="About Taco Trip"
          />
      </Row>
    )
  }
}

export default CourseInfo;

