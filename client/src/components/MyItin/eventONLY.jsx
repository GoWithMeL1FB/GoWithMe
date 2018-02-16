import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';


class EventONLY extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    console.log('props', this.props)
    await axios.get(`${url.eventServer}/api/events/getEventById/${this.props.eventID.ID}`)
      .then((res) => {
        console.log('eventonly:', res);
        this.setState({
          events: res.data,
        });
      })
  }

  render() {
    return (
      <CollapsibleItem header={(<span><strong>Event</strong>{' '}{this.state.events.name}</span>)} icon="assignment">
        <strong>{this.state.events.description}</strong>{' '}
        {this.state.events.location}
      </CollapsibleItem>
    )
  }
}

  export default EventONLY;