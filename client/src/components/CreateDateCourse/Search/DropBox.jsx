import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Events from '../../global/Events/Events.jsx';

import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import { Row, Col, Icon, Button, Card } from 'react-materialize';
import url from '../../../../config';

import './DropBox.css';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: [],
      dateCourseID: '',
      events: [],
      eventIDs: [],
    };
    this.saveDateCourseEntry = this.saveDateCourseEntry.bind(this);
    // this.addEventToDataCourse = this.addEventToDataCourse.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.logState = this.logState.bind(this);
  }

  async saveDateCourseEntry() {
    let payload = {
      title: this.props.dateCourseInfo.title,
      description: this.props.dateCourseInfo.description,
      image: this.props.dateCourseInfo.image,
      owner: this.props.authUsername.username
    }

    // creates itinerary with username and returns its ID
    axios.post(`${url.eventServer}/api/itinerary/createItinerary`, payload)
      .then((itin) => {
        this.setState({
          dateCourseID: itin.data._id
        })
          this.state.dateCourse.forEach(async(item) => {
          const { name, description, location, prefix, suffix, } = item.dragData.venue;
          const data = { name, description, location: 'west covina', prefix, suffix, itineraryId: this.state.dateCourseID};

          axios.post(`${url.eventServer}/api/events/createEvent`, data)
            .then((event) => {
              console.log('event please', event);
              axios.post(`http://localhost:3031/api/itinerary/addEventToItinerary`, { eventId: event.data._id, itineraryId: this.state.dateCourseID, })
            })
            .catch((err) => {
              console.log('faeiled to save event to itin', err.message);
            })
        })
    })


    // loops through queued events, saves, and returns ids

    // saves event to itinerary
    // for (let j = 0; j < this.state.eventIDs; j++) {
    //   axios.post(`${url.eventServer}/api/itinerary/addEventToItinerary`, { eventId: this.state.eventIDs[j].data._id, itineraryId: this.state.itineraryId, });
    //   console.log('hit');
    // }

  }
  handleDrop = (e) => {
    this.state.dateCourse.push(e);
    this.setState({dateCourse: this.state.dateCourse});
  }

  logState() {
    console.log('create itin - event ids:', this.state);
  }

  render () {
    return(
      <div id="fixedElement">
        <Card className="grey lighten-3">
 +      <Row className="container">
        <Col s={12}>
        <div id="scroll">
        {
          this.state.dateCourse.map((v) => {
          let venue = v.dragData.venue;
          let pObj = v.dragData.venue;

          return (
            <div key={venue.id}>
              <DragDropContainer
                item={venue}
                returnToBase={true}
                dragData={{
                  venue: venue
                }}
                >
                <Events
                  id={venue.id}
                  name={venue.name}
                  address={venue.location}
                  category={venue.description}
                  prefix={venue.prefix}
                  suffix={venue.suffix}
                />
              </DragDropContainer>
            </div>
            )
          })
        }
        </div>
        <center>
          <DropTarget
            dropData={{
              venue: this.props.venue
            }}
            onHit={this.handleDrop}
            >
            <Icon large>add_to_photos</Icon>
          </DropTarget>
        </center>
        </Col>

        <Col s={12}>
          <Button onClick={this.saveDateCourseEntry}>Save</Button>
          <Button onClick={this.logState}>Clear</Button>
        </Col>
      </Row>
    </Card>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dateCourseInfo: state.dateCourseInfo,
    authUsername: state.username,
  }
}

export default connect(mapStateToProps)(DropBox);