import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Events from '../../global/Events/Events.jsx';

import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import { Row, Col, Icon, Button } from 'react-materialize';

class DropBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateCourse: []
    };
    this.saveDateCourseEntry = this.saveDateCourseEntry.bind(this);
  }

   saveDateCourseEntry = async () => {
    console.log(this.props.dateCourseInfo)
    let payload = {
      title: this.props.dateCourseInfo.title,
      description: this.props.dateCourseInfo.description,
      image: null,
      owner: 'David'
    }
    axios.post('http://localhost:3031/api/itinerary/createItinerary', payload)
      .then(res => {
        // console.log('saveDateCourseEntry returns:', res);
        console.log(res.data._id);
      })
      .catch(err => {
        console.log('saveDateCourseEntry failed', err)
      })
  }

  handleDrop = (e) => {
    this.state.dateCourse.push(e);
    console.log('state from handle drop', this.state)
    this.setState({dateCourse: this.state.dateCourse});
  }

  render () {
    return(
      
      <Row>
        <Col>
        {
        this.state.dateCourse.map((v) => {
          let venue = v.dragData.venue.venue;
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
              address={venue.location.address}

              category={venue.categories[0].name}
              prefix={pObj.photo.prefix}
              suffix={pObj.photo.suffix}
            />
          </DragDropContainer>
          </div>
          )
        })
        }
        <center>
        <DropTarget 
          dropData={{
            venue: this.props.venue
          }}
          onHit={this.handleDrop}
          >
          <Icon large>add_circle_outline</Icon>
        </DropTarget>
        </center>

        </Col>
        <Col s={12}>
          <Button onClick={this.saveDateCourseEntry}>
            Save 
          </Button>
        </Col>
      </Row>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    dateCourseInfo: state.dateCourseInfo
  }
}

export default connect(mapStateToProps)(DropBox); 