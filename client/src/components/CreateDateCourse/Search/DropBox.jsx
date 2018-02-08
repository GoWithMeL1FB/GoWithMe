import React from 'react';
import axios from 'axios';
import { DropTarget } from 'react-drag-drop-container';
import { Row, Col, Icon } from 'react-materialize';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: []
    };
  }

  saveDateCourse() {
    console.log('hi');
  }

  render () {
    return(
      <Row>
        <Col s={12}>
        <DropTarget targetKey="box"><Icon>add_circle_outline</Icon></DropTarget>
        </Col>
        <Col s={12}>
        <button onClick={() => {console.log('hi')}}>Save</button>
        </Col>
      </Row>
    )
  }
}

export default DropBox;