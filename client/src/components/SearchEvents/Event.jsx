import React, { Component } from 'react';
import { Card, Col, CardTitle, Badge } from 'react-materialize';
import { connect } from 'react-redux';
import axios from 'axios';
import url from '../../../config';

class Event extends Component {
  constructor(props){
    super(props);
    this.onFavorite = this.onFavorite.bind(this);
  }

  onFavorite() {
    const payload = {
      owner: this.props.authUsername.username,
      id: this.props.event._id,
      type: 'event',
    }
    axios.post(`${url.eventServer}/api/favorites/faveSomething`, payload)
      .then((res) => {
        console.log('fave searched event:', res);
      })
  }
  render() {
    const url = `https://marriedbiography.com/wp-content/uploads/2017/07/Levy-Tran.jpg`;
    const photo = `${this.props.event.photo.prefix}500x500${this.props.event.photo.suffix}`
    return (
      <Col s={4}>
        <Card className='small'
          header={<CardTitle image={ photo || url }>{this.props.event.title}</CardTitle>}
          actions={[<a onClick={this.onFavorite}>Favorite</a>, <span className="new badge blue" data-badge-caption="Featured"></span>]}>
          <strong>{this.props.event.description}</strong><br/>
          {this.props.event.location}
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

export default connect(mapStateToProps)(Event);
