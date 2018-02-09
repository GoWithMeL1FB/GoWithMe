import React from 'react';
import axios from 'axios';

import Events from '../../global/Events/Events.jsx';

import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import { Row, Col, Icon, Button } from 'react-materialize';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: []
    };
  }

  saveDateCourseEntry = () => {
    
  }

  handleDrop = (e) => {
    this.state.dateCourse.push(e);
    console.log('state from handle drop', this.state)
    this.setState({dateCourse: this.state.dateCourse});
  }

  render () {
    return(
      <Row>
        <Col s={12}>
        {
        this.state.dateCourse.map((v) => {
          let venue = v.dragData.venue.venue;
          let pObj = v.dragData.venue;
          
          return (
          <div key={venue.id}>
          <DragDropContainer 
            item={venue}
            returnToBase={true}
            dragData={{
              venue: venue
            }}
            >
            <Events 
              id={venue.id}
              name={venue.name}
              address={venue.location.address}

              category={venue.categories[0].name}
              prefix={pObj.photo.prefix}
              suffix={pObj.photo.suffix}
            />
          </DragDropContainer>
          </div>
          )
        })
        }
        <DropTarget 
          dropData={{
            venue: this.props.venue
          }}
          onHit={this.handleDrop}
          >
          <Icon>add_circle_outline</Icon>
        </DropTarget>

        </Col>
        <Col s={12}>
          <Button>
            Save 
          </Button>
        </Col>
      </Row>
    )
  }
}

export default DropBox; 