import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Featured from './featuredDateCourse/featuredDateCourse.jsx'
import OtherDateCourse from './otherDateCourse/otherDateCourse.jsx';

class createDateCourse extends Component {
  render() {
    return (
      <div>
        <Featured></Featured>
        <OtherDateCourse></OtherDateCourse>
        <OtherDateCourse></OtherDateCourse>
        <OtherDateCourse></OtherDateCourse>
        <OtherDateCourse></OtherDateCourse>
        <OtherDateCourse></OtherDateCourse>
        <OtherDateCourse></OtherDateCourse>
      </div>
    )
  }
}

export default createDateCourse;