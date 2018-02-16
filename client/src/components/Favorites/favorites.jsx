import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {"_id":"5a8281f1014a4aeb2e2b85be","time":{"date":"2018-01-12T08:00:00.000Z","start":"4pm","end":"5pm","duration":"1hr"},"meta":{"stars":[{"rating":5,"_id":"5a82843d69e332ebfb60df74","username":"kevinvoduy"}],"likes":[{"_id":"5a828250014a4aeb2e2b85c1","username":"kevinvoduy","liked":"true"}],"shares":[]},"title":"BOOZE CRUISE","description":"Get shwaysted at the marina","category":"activity","_itineraryId":"5a82704177bf29e67287e217","_eventId":"5a8281f1014a4aeb2e2b85bd","__v":0},
        {"_id":"5a8281f1014a4aeb2e2b85be","time":{"date":"2018-01-12T08:00:00.000Z","start":"4pm","end":"5pm","duration":"1hr"},"meta":{"stars":[{"rating":4.5,"_id":"5a82843d69e332ebfb60df74","username":"kevinvoduy"}],"likes":[{"_id":"5a828250014a4aeb2e2b85c1","username":"kevinvoduy","liked":"true"}],"shares":[]},"title":"Hermosa Beach Bonfire","description":"attemp 544","category":"activity","_itineraryId":"5a82704177bf29e67287e217","_eventId":"5a8281f1014a4aeb2e2b85bd","__v":0}
      ],
      itineraries: [],
    };
    // this.logState = this.logState.bind(this);
  }

  // change endpoint to ${this.props.signupUsername}
  componentDidMount() {
    axios.get(`${url.eventServer}/api/itinerary/getItinerariesByUsername/kevinvoduy`)
      .then((itineraries) => {
        this.setState({
          itineraries: itineraries.data,
        });
      })
      .catch((err) => {
        console.log('failed to fetch users itineraries', err.message);
      });
  }

  render() {
    console.log('favorites - state.itin:', this.state.itineraries);
    return (
      <div>
        <h4>Favorites</h4>
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
                <span>{itinerary.title}{' stars - '}{itinerary.meta.likes.length}{' likes'}</span>
                <Collapsible>
                  {
                    itinerary.events.map((event, index) => (
                      <CollapsibleItem header={ event['_id'] }>
                        <strong>add a mother ducking description here</strong>
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

// change setlogingUsername to setSignupUsername
function mapStateToProps(state) {
  return {
    authUsername: state.username,
  }
}
export default connect(mapStateToProps)(Favorites);