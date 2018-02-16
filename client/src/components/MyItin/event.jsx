import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';


class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    await axios.get(`${url.eventServer}/api/events/getEventsByItin/5a854426bf93a36a17f50081`)
      .then((res) => {
        console.log('res', res);
        this.setState({
          events: res.data,
        });
      })
  }

  render() {
    const { name, title, description } = this.state.events;
    console.log('state', this.state, this.props.itinID);
    return (
      <CollapsibleItem header={(<span><strong>Itinerary</strong></span>)} icon="assignment">
        <strong>{name}</strong>
        <span className="new badge" data-badge-caption="likes">6</span>
      </CollapsibleItem>
    )
  }
}

  export default Event;