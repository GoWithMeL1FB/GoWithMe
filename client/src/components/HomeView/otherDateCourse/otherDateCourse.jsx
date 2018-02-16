import React, { Component } from 'react';
import { Card, Col, CardTitle } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import url from '../../../../config';

class otherDateCourse extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const payload = {
      username: this.props.authUsername.username,
      type: 'itinerary',
      itineraryID: this.props.itinerary._id,
    }
    axios.put(`${url.eventServer}/api/stats/likes`, payload)
      .then((res) => {
        console.log('other date - result of like:', res)
        console.log('otherdate - payload', payload);
      })
  }
  render() {
    const url = `https://i.imgur.com/2KoKbtz.gif`;
    return (
      <Col s={6}>
        <Card className='small'
          header={<CardTitle image={this.props.itinerary.image || url}>{this.props.itinerary.title}</CardTitle>}
          actions={[<a href="#">More Info</a>, <a onClick={this.onClick}>Like</a>]}>
          {this.props.itinerary.owner}
        </Card>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    authUsername: state.username,
  };
}

export default connect(mapStateToProps)(otherDateCourse);