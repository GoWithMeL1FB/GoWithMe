import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';

class MyItin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      itineraries: [],
    };
  }

  async componentWillMount() {
    await axios.get(`${url.eventServer}/api/favorites/getFavs/kevinvoduy`)
      .then((faves) => {
        console.log('dta', faves.data[0].event)
        this.setState({
          itineraries: faves.data[0].itinerary,
          events: faves.data[0].event,
        });
      })
      .catch((err) => {
        console.log('failed to fetch users itineraries', err.message);
      });
  }

  render() {
    console.log('my itin - state', this.state);
    return (
      <div>
        <h4>My Faves</h4>
        <div>
          <Collapsible accordion popout>
            {
              this.state.itineraries.map((itinerary, index) => (
                <CollapsibleItem header={(<span><strong>Itinerary</strong></span>)} icon="event" key={index}>
                  <span><strong>title</strong>{' 4.5'}{'stars'}</span>
                  <p>description</p>
                </CollapsibleItem>
              ))
            }
          </Collapsible>

          <Collapsible accordion popout>
            {
              this.state.events.map((event, index) => (
                <CollapsibleItem header={(<span><strong>Event</strong></span>)} icon="event" key={index}>
                  <span><strong>title</strong>{' 4.5'}{'stars'}</span>
                  <p>description</p>
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
    authUsername: state.username,
  }
}
export default connect(mapStateToProps)(MyItin);