import React, { Component } from 'react';
import { Card, Col, CardTitle, Badge } from 'react-materialize';

export default class Event extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const url = `https://marriedbiography.com/wp-content/uploads/2017/07/Levy-Tran.jpg`;
    const photo = `${this.props.event.photo.prefix}500x500${this.props.event.photo.suffix}`
    return (
      <Col s={4}>
        <Card className='small'
          header={<CardTitle image={ photo || url }>{this.props.event.title}</CardTitle>}
          actions={[<a href="#">More Info</a>, <span className="new badge blue" data-badge-caption="Featured"></span>]}>
          <strong>{this.props.event.description}</strong><br/>
          {this.props.event.location}
        </Card>
      </Col>
    )
  }
}