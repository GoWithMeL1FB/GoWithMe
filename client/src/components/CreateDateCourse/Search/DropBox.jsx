import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Events from '../../global/Events/Events.jsx';
import DistanceDisplay from './DistanceDisplay.jsx';

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
      eventCounter: 0,
      arrayLengthCounter: 0,
      distanceData: [],
      distanceCounter: 0
    };
    this.saveDateCourseEntry = this.saveDateCourseEntry.bind(this);
    // this.addEventToDataCourse = this.addEventToDataCourse.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.logState = this.logState.bind(this);
    this.getDistancesOfEvents = this.getDistancesOfEvents.bind(this);
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

          const data = { name, description, location, prefix, suffix, itineraryId: this.state.dateCourseID};

          axios.post(`${url.eventServer}/api/events/createEvent`, data)
            .then((event) => {
              axios.post(`${url.eventServer}/api/itinerary/addEventToItinerary`, { eventId: event.data._id, itineraryId: this.state.dateCourseID, })
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

  getDistancesOfEvents = () => {
    // console.log('this', this, 'this.state:', this.state)
    // console.log('the state of the events', this.state.dateCourse, 'first dateCourse', this.state.dateCourse[0])
    const eventOne = this.state.dateCourse[this.state.eventCounter];
    const eventTwo = this.state.dateCourse[this.state.eventCounter + 1];
    console.log('eventOne', eventOne, 'eventTwo', eventTwo)
    this.state.eventCounter += 1;

    // console.log('eventOne:', eventOne.dragData.venue.coordinates);
    // console.log('coordinate one', typeof eventOne.dragData.venue.coordinates, "coordinate two", eventTwo.dragData.venue.coordinates)
    axios.get(`${url.eventServer}/api/google/getDistance`, {
      params: {
        origin: [eventOne.dragData.venue.coordinates],
        destination: [eventTwo.dragData.venue.coordinates],
      }
    })
    .then(data => {
      console.log('are the eventCounters going up?', this.state.eventCounter);
      // console.log('this is the datacourse,' this.state.dataCourse);
      console.log('when two dateCourse are added:', this.state.dateCourse);
      console.log('dataaa', data)
      this.state.distanceData.push([data.data.rows[0].elements[0].distance.text, data.data.rows[0].elements[0].duration.text]);
      // console.log('the state of the distanceData', this.state.distanceData);
      Materialize.toast(`${data.data.rows[0].elements[0].distance.text}, ${data.data.rows[0].elements[0].duration.text}`, 10000, 'rounded');
      this.setState({distanceCounter: this.state.distanceCounter});
    })
    .catch(err => {
      console.log('getDistancesOfEventsNotWorking', err)
    })
  }

  handleDrop = (e) => {
    this.state.distanceCounter = 0;
    this.state.dateCourse.push(e);
    this.state.arrayLengthCounter++;
    // console.log('arraycounter:', this.state.arrayLengthCounter);
    this.setState({dateCourse: this.state.dateCourse});
    if ( this.state.arrayLengthCounter > 1 ) {
      // console.log('is this hitting?')
      this.getDistancesOfEvents()
      // this.state.eventCounter =+ 1;
    }
  }

  logState() {
    console.log('create itin - event ids:', this.state);
  }

  render () {
    console.log(this.state);
    return(
      <div id="fixedElement">
        <Card className="grey lighten-3">
        <Row>
        <Col s={12}>
        <div id="scroll">
        {
          this.state.dateCourse.map((v) => {
          let venue = v.dragData.venue;
          this.state.distanceCounter += 1;
          console.log('why isnt the state being changed?', this.state.distanceCounter);
          return (
            <div key={venue.id}>
              {/* <DistanceDisplay
                coord={this.state.distanceData[this.state.distanceCounter]}
              ></DistanceDisplay> */}
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
                  coordinates={venue.coordinates}
                />
              </DragDropContainer>
            </div>
          )

          })
        }

        {/* {
          this.state.distanceData.map((time) => {
            return (
              <DistanceDisplay
                time={time}
              >
              </DistanceDisplay>
            )
          })
        } */}
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