import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize'

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {"_id":"5a8281f1014a4aeb2e2b85be","time":{"date":"2018-01-12T08:00:00.000Z","start":"4pm","end":"5pm","duration":"1hr"},"meta":{"stars":[{"rating":5,"_id":"5a82843d69e332ebfb60df74","username":"kevinvoduy"}],"likes":[{"_id":"5a828250014a4aeb2e2b85c1","username":"kevinvoduy","liked":"true"}],"shares":[]},"title":"BOOZE CRUISE","description":"Get shwaysted at the marina","category":"activity","_itineraryId":"5a82704177bf29e67287e217","_eventId":"5a8281f1014a4aeb2e2b85bd","__v":0},
        {"_id":"5a8281f1014a4aeb2e2b85be","time":{"date":"2018-01-12T08:00:00.000Z","start":"4pm","end":"5pm","duration":"1hr"},"meta":{"stars":[{"rating":4.5,"_id":"5a82843d69e332ebfb60df74","username":"kevinvoduy"}],"likes":[{"_id":"5a828250014a4aeb2e2b85c1","username":"kevinvoduy","liked":"true"}],"shares":[]},"title":"NESTED","description":"attemp 544","category":"activity","_itineraryId":"5a82704177bf29e67287e217","_eventId":"5a8281f1014a4aeb2e2b85bd","__v":0}
      ],
      itineraries: [
        {"_id":"5a82704177bf29e67287e217","events":[{"_id":"5a82704877bf29e67287e219","_eventId":"5a82704877bf29e67287e218"},{"_id":"5a82704877bf29e67287e219","_eventId":"5a82704877bf29e67287e218"}],"meta":{"stars":[{"rating":5,"_id":"5a82859f5ffac7ecadf24f41","username":"kevinvoduy"}],"likes":[{"liked":true,"_id":"5a827e7258ac99e9c24db059","username":"kevinvoduy"}],"shares":[]},"title":"Levy Tran fan club","owner":"kevin","image":"https://i.imgur.com/2KoKbtz.gif","__v":0}
      ],
    };
    // this.logState = this.logState.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Favorites</h3>
        <div>
          <Collapsible accordion popout>
            {
              this.state.events.map((event, index) => (
                <CollapsibleItem header={(<span><strong>Event</strong>{' '}{event.title}</span>)} icon="event" key={index}>
                  <span><strong>{event.title}</strong>{' '}{event.meta.stars[0].rating}{' stars'}</span>
                  <p>{event.description}</p>
                </CollapsibleItem>
              ))
            }

            {
              this.state.itineraries.map((itinerary, index) => (
                <CollapsibleItem header={(<span><strong>Itinerary</strong>{' '}{itinerary.title}</span>)} icon="assignment" key={index}>
                <span><strong>{itinerary.title}</strong>{' '}{itinerary.meta.stars[0].rating}{' stars'}</span>
                <Collapsible>
                  {
                    itinerary.events.map((event, index) => (
                      <CollapsibleItem header={ event['_id'] }>
                        <strong>Event description</strong>
                      </CollapsibleItem>
                    ))
                  }
                </Collapsible>
                </CollapsibleItem>
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