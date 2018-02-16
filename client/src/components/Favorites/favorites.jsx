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
    this.showstate = this.showstate.bind(this);
  }

  async componentWillMount() {
    await axios.get(`${url.eventServer}/api/itinerary/getItinerariesByUsername/${this.props.authUsername.username}`)
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
          events: this.state
        })
      })
      .catch((err) => {
        console.log('failed to fetch users itineraries', err.message);
      });
  }

  showstate() {
    console.log('button', this.state);
  }

  render() {
    if (this.state.events.events) {
      return (
        <div>
          <h4>My Itineraries</h4>
          <div>
            <Collapsible accordion popout>
              {
                this.state.itineraries.map((itinerary, index) => (

                  <CollapsibleItem
                    header={(<span><strong>Itinerary</strong>{' '}{itinerary.title}</span>)}
                    icon="assignment"
                    key={index}
                    >
                    <strong>{itinerary.description}</strong>
                    <span className="new badge" data-badge-caption="likes">
                      {itinerary.meta.likes.length}
                    </span>

                    <Collapsible>
                      {
                        this.state.events.events[index].map((itin, otherindex) => {
                          return(
                              <CollapsibleItem header={itin.name} key={otherindex}>
                                <strong>{itin.description}</strong>
                                <span className="new badge" data-badge-caption="likes">
                                  {itin.meta.likes.length}
                                </span>
                              </CollapsibleItem>
                            )
                          }
                        )
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
        <div>
          <h4>My Itineraries</h4>
          <h5>You do not have any items saved!</h5>
        </div>
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