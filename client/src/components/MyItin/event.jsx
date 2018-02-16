import React, { Component } from 'react';
import axios from 'axios';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';


class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      itinInfo: {},
    };
  }

  async componentDidMount() {
    await axios.get(`${url.eventServer}/api/events/getEventsByItin/5a854426bf93a36a17f50081`)
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
    await axios.get(`${url.eventServer}/api/itinerary/getItineraryById/5a854426bf93a36a17f50081`)
      .then((res) => {
        this.setState({
          itinInfo: res.data
        })
      })
  }

  render() {
    console.log('state', this.state, this.props.itinID);
    return (
      <CollapsibleItem header={(<span><strong>Itinerary</strong></span>)} icon="assignment">
        <strong>{this.state.itinInfo.title}</strong>
        <span className="new badge" data-badge-caption="likes">56</span>
        <Collapsible>
        {
          this.state.events.map((event, index) => {
            return (
              <CollapsibleItem header={event.name} key={index}>
                <strong>{event.description}</strong>
                <span className="new badge" data-badge-caption="likes">{event.meta.likes.length}</span>
              </CollapsibleItem>
            )
          })
        }
        </Collapsible>
      </CollapsibleItem>
    )
  }
}

  export default Event;