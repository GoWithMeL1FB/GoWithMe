import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import url from '../../../config';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      events: [],
    };
  }

  async componentWillMount() {
    await axios.get(`${url.eventServer}/api/itinerary/getItinerariesByUsername/kevinvoduy`)
      .then((itineraries) => {
        this.setState({
          itineraries: itineraries.data,
        });
      })
      .then(async()=> {
        for (let j = 0; j < this.state.itineraries.length; j++) {
          const event = await axios.get(`${url.eventServer}/api/events/getEventsByItin/${this.state.itineraries[j]._id}`);
          this.state.events.push(event.data);
        }
        this.setState({
          events: this.state.events
        })

      })
      .catch((err) => {
        console.log('failed to fetch users itineraries', err.message);
      });


    // this.state.itineraries.forEach((itinerary) => {
    //   const event = axios.get(`${url.eventServer}/api/events/getEventsByItin/${this.state.itineraries._id}`);
    //   this.state.events.push(event)
    // });
    // console.log('events', this.state.events);
  }

  render() {
    console.log('favorites - state.itin:', this.state);
    if (this.state.events.length) {
      return (
        <div>
          <h4>My Itineraries</h4>
          <div>
            <Collapsible accordion popout>
              {
                this.state.itineraries.map((itinerary, index) => (

                  <CollapsibleItem header={(<span><strong>Itinerary</strong>{' '}{itinerary.title}</span>)} icon="assignment" key={index}>
                    <h5>{itinerary.description}</h5>
                    <Collapsible>
                      {
                        this.state.events[index].map((itin, otherindex) => {
                          return (<CollapsibleItem header={itin.name} key={otherindex} >
                            <strong>{itin.description}</strong><span className="new badge" data-badge-caption="likes">{itin.meta.likes.length}</span>
                          </CollapsibleItem>)
                        })
                      }
                    </Collapsible>
                  </CollapsibleItem>
                ))
              }
            </Collapsible>
          </div>
        </div>
      )
    } else {
    return (
      <h3>Working...</h3>
    )
  }
}
}

// change setlogingUsername to setSignupUsername
function mapStateToProps(state) {
  return {
    authUsername: state.username,
  }
}
export default connect(mapStateToProps)(Favorites);