import React, { Component } from 'react';

import Events from '../../global/Events/Events.jsx';
import { DragDropContainer } from 'react-drag-drop-container';
import { Col } from 'react-materialize';

class EventRender extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.test = this.test.bind(this);
  }

  // test() {
  //   console.log(this.props)
  // }

  render() {
    return(
      <div key={this.props.venue.id}>
        <DragDropContainer
          item={this.props.venue}
          returnToBase={true}
          dragData={{
            venue: this.props.venue
          }}
        >
        <Events
          id={this.props.venue.id}
          title={this.props.venue.name}
          location={this.props.venue.location}
          price={this.props.venue.price}
          category='eat'
          description={this.props.venue.description}
          attendees='1-2'
          prefix={this.props.venue.prefix}
          suffix={this.props.venue.suffix}
        />
        </DragDropContainer>
        {/* <button onClick = {this.test}>props checker</button> */}
      </div>
    )
  }
}

export default EventRender;