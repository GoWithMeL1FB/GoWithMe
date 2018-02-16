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
    await axios.get(`${url.eventServer}/api/events/getEventsByItin/${this.props.itinID.ID}`)
      .then((res) => {
        this.setState({
          events: res.data,
        });
      })
    await axios.get(`${url.eventServer}/api/itinerary/getItineraryById/${this.props.itinID.ID}`)
      .then((res) => {
        this.setState({
          itinInfo: res.data
        })
      })
  }

  render() {
    if (this.state.itinInfo.meta) {
      return (
        <CollapsibleItem header={(<span><strong>Itinerary</strong>{' '}{this.state.itinInfo.title}</span>)} icon="assignment">
        <strong>{this.state.itinInfo.description}</strong>
        <span className="new badge" data-badge-caption="likes">{this.state.itinInfo.meta.likes.length}</span>
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
    } else {
      return (
        <CollapsibleItem header={(<span><strong>Itinerary</strong>{' '}{this.state.itinInfo.title}</span>)} icon="assignment">
          <strong>{this.state.itinInfo.description}</strong>
          <span className="new badge" data-badge-caption="likes">loading..</span>
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
}

  export default Event;