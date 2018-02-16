import React, { Component } from 'react';
import { Card, Col, CardTitle } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import url from '../../../../config';

class otherDateCourse extends Component {
  constructor(props){
    super(props);
    this.onLike = this.onLike.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
  }

  onLike() {
    const payload = {
      username: this.props.authUsername.username,
      type: 'itinerary',
      itineraryID: this.props.itinerary._id,
    }
    axios.put(`${url.eventServer}/api/stats/likes`, payload)
      .then(() => {
        Materialize.toast('Liked!', 3000, 'rounded');
      });
  }

  onFavorite() {
    const payload = {
      owner: this.props.authUsername.username,
      type: 'itinerary',
      id: this.props.itinerary._id,
    }
    axios.post(`${url.eventServer}/api/favorites/faveSomething`, payload)
      .then((res) => {
        Materialize.toast('Favorited!', 3000, 'rounded');
      });
  }
  render() {
    const url = `https://i.imgur.com/2KoKbtz.gif`;
    return (
      <Col s={6}>
        <Card className='small'
          header={<CardTitle image={this.props.itinerary.image || url}>{this.props.itinerary.title}</CardTitle>}
          actions={[<a onClick={this.onFavorite}>Favorite</a>, <a onClick={this.onLike}>Like</a>]}>
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