import React, { Component } from 'react';
import { Card, Col, CardTitle } from 'react-materialize';

class otherDateCourse extends Component {
  render() {
    return (
      <Col s={6}>
      <Card className='small'
	      header={<CardTitle image='http://images.dailyhive.com/20160602153203/Vancouver-Shutterstock.jpg'>Vancouver</CardTitle>}
	      actions={[<a href='#'>Check out Date Course</a>]}>
      	Come check out the beautiful city of Vancouver
      </Card>
      </Col>
    )
  }
}

export default otherDateCourse;