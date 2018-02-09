import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';
import axios from 'axios';

import Featured from './featuredDateCourse/featuredDateCourse.jsx'
import OtherDateCourse from './otherDateCourse/otherDateCourse.jsx';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      itineraries: [],
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    this.fetchItineraries = this.fetchItineraries.bind(this);
  }

  componentDidMount() {
    this.fetchItineraries();
  }

  async fetchItineraries() {
    try {
      const itineraries = await axios.get('http://localhost:3031/api/itinerary/allItineraries');
      console.log('itin', itineraries);
      itineraries.data.map(itinerary => {
        this.state.itineraries.push(itinerary);
      });
    } catch(err) {
      console.error('Failed to fetch all itineraries');
      throw new Error(err);
    }
  }

  // onClick for getting more itinerarie information
  onClickHandler() {
    console.log('state', this.state);
  }

  render() {
    constructor() {
      super()
      this.state = {
        events: [{title: 'first event', description: 'asldkgj'}];
      }
    }
    return (
      <div>
        <Featured />
        {
          this.state.itineraries.map((itinerary, index) => (
            <OtherDateCourse
              itinerary={itinerary}
              key={index}
              onClick={this.onClickHandler}
            />
          ))
        }
      </div>
    )
  }
}

export default HomeView;