import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [1,1,1,1,1],
      itineraries: [2,2,2,2,2],
    };
    // this.logState = this.logState.bind(this);
  }

  render() {
    return (
      <div>
        <h5>Favorites</h5>
        <div>
          <h3>What should go here?</h3>
          <Collapsible accordion popout>
            {
              this.state.events.map((event, index) => (
                <CollapsibleItem header="Event" icon="event" key={index}>
                <span><strong>Hello Kevin's Title</strong></span>
                <p>detail</p>
                <p>detail</p>
                </CollapsibleItem>
              ))
            }

            {
              this.state.itineraries.map((itinerary, index) => (
                <CollapsibleItem header="Itinerary" icon="assignment" key={index}/>
              ))
            }

          </Collapsible>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    temp: state.temp,
  }
}
export default connect(mapStateToProps)(Favorites);