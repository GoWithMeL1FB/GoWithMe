import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import Event from './event.jsx';
import EventONLY from './eventONLY.jsx';
import url from '../../../config';

class MyItin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      events: [],
    };
  }

  async componentWillMount() {
    await axios.get(`${url.eventServer}/api/favorites/getFavs/${this.props.authUsername.username}`)
      .then((faves) => {
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
    if (this.state.events.length >= 1 || this.state.itineraries.length >= 1) {
      return (
        <div>
          <h4>My Faves</h4>
          <div>
            <Collapsible accordion popout id="itinerary">
              {
                this.state.itineraries.map((itinerary, index) => (
                  <Event itinID={itinerary}/>
                ))
              }
            </Collapsible>

            <Collapsible accordion popout id="events">
              {
                this.state.events.map((event, index) => (
                  <EventONLY eventID={event} />
                ))
              }
            </Collapsible>
          </div>
        </div>
      )
    } else if (this.state.events.length === 0 || this.state.itineraries.length === 0) {
      return (
          <div>
            <h4>Favorites</h4>
            <h5>There are currently 0 items... Go like something!</h5>
          </div>
        )
    } else {
      return (
        <h3>Working... Please wait.</h3>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    authUsername: state.username,
  }
}
export default connect(mapStateToProps)(MyItin);