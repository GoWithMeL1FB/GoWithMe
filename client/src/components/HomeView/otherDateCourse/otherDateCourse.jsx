import React, { Component } from 'react';
import { Card, Col, CardTitle } from 'react-materialize';

class otherDateCourse extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const url = 'http://images.dailyhive.com/20160602153203/Vancouver-Shutterstock.jpg';
    return (
      <Col s={6}>
        <Card className='small'
          header={<CardTitle image={url}>{this.props.event.title}</CardTitle>}
          actions={[<a href="#">More Info</a>]}>
          {this.props.event.desc}
        </Card>
      </Col>
    )
  }
}

export default otherDateCourse;