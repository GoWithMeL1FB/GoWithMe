import React, { Component } from 'react';
import { Card, Col, CardTitle, Toast } from 'react-materialize';

class featuredDateCourse extends Component {
  render() {
    return (
      <Card className='small'
	      header={<CardTitle image='http://images.dailyhive.com/20160602153203/Vancouver-Shutterstock.jpg'>Vancouver</CardTitle>}
	      actions={[<a href='#'>Check out Date Course</a>]}>
      	Come check out the beautiful city of Vancouver
      </Card>
    )
  }
}

export default featuredDateCourse;