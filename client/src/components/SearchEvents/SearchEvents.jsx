import React, { Component } from 'react';
import { Card, Col, Button } from 'react-materialize';
import axios from 'axios';

import Search from './Search.jsx';
import Event from './Event.jsx';
import url from '../../../config';

export default class SearchEvents extends Component {
  constructor() {
    super();
    this.state = {
      hello: '',
      events: [],
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.passUpEvents = this.passUpEvents.bind(this);
  };

  async fetchEvents() {
    try {
      const events = await axios.get(`${url.eventServer}/api/events/getAllEvents`);
      this.setState({
        events: events.data,
      })
    } catch(err) {
      console.error('failed to fetch all events');
      throw new Error(err);
    };
  };

  onChangeHandler() {
  };

  passUpEvents(events) {
    this.setState({
      events: events,
    });
  };

  render() {
    return (
      <div>
        <Search
          eventSetter={this.passUpEvents}
        />
        {
          this.state.events.map((event, index) => (
            <Event
              event={event}
              key={index}
            />
          ))
        }
      </div>
    )
  }
}