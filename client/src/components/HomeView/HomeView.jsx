import React, { Component } from 'react';
import { Card, Col, Button } from 'react-materialize';
import axios from 'axios';
import { connect } from 'react-redux';

import Featured from './featuredDateCourse/featuredDateCourse.jsx';
import OtherDateCourse from './otherDateCourse/otherDateCourse.jsx';
import Search from './Search.jsx';
import url from '../../../config';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.fetchItineraries = this.fetchItineraries.bind(this);
    this.passUpItin = this.passUpItin.bind(this);
  }

  componentDidMount() {
  }

  // fetches all itineraries from the start
  async fetchItineraries() {
    try {
      const itineraries = await axios.get(`${url.eventServer}/api/itinerary/allItineraries`);
      console.log('itin', itineraries);
      itineraries.data.map(itinerary => {
        this.state.itineraries.push(itinerary);
      });
    } catch(err) {
      console.error('Failed to fetch all itineraries');
      throw new Error(err);
    }
  }

  // onClick for logging state
  onClickHandler() {
    console.log('state', this.props.signupUsername);
  }

  // takes data from search and passes to state
  passUpItin(itineraries) {
    this.setState({
      itineraries: itineraries,
    });
  }

  render() {
    return (
      <div>
        <Search
          itinSetter={this.passUpItin}
        />
        <Featured />
        {
          this.state.itineraries.map((itinerary, index) => (
            <OtherDateCourse
              itinerary={itinerary}
              key={index}
            />
          ))
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    signupUsername: state.setSignupUsername,
  };
}

export default connect(mapStateToProps)(HomeView);