import React from 'react';
import axios from 'axios';

import Events from '../../global/Events/Events.jsx';

import { DropTarget } from 'react-drag-drop-container';
import { Row, Col, Icon } from 'react-materialize';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: []
    };
  }

  handleDrop = (e) => {
    this.state.dateCourse.push(e);
    console.log(this.state);
  }

  render () {
    return(
      <Row>
        <Col s={12}>
        <DropTarget 
          dragData={{
            label: this.props.children,
            index: this.props.index
          }}
          onHit={this.handleDrop}
          >
          <Icon>add_circle_outline</Icon>
        </DropTarget>

        </Col>
        <Col s={12}>
        <button onClick={() => {console.log('hi')}}>Save</button>
        </Col>
      </Row>
    )
  }
}

export default DropBox; 