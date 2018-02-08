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
        {this.state.dateCourse.map(venue => {
          // let price = venue.venue.price?venue.venue.price.message:null;
          return(
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
            name={venue.venue.name}
            address={venue.venue.location.address}
            // price={price}
            category={venue.venue.categories[0].name}
            prefix={venue.photo.prefix}
            suffix={venue.photo.suffix}
            />
           </DragDropContainer>
          </div>
        )})}

        <DropTarget 
          dragData={{
            venue: this.props.venue
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