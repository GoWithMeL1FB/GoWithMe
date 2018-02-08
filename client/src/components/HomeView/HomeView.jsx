import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Featured from './featuredDateCourse/featuredDateCourse.jsx'
import OtherDateCourse from './otherDateCourse/otherDateCourse.jsx';

class HomeView extends Component {
  render() {
    constructor() {
      super()
      this.state = {
        events: [{title: 'first event', description: 'asldkgj'}];
      }
    }
    return (
      <div>
        <Featured/>
        {
          this.state.events.map((event, index) => {
            return <OtherDateCourse/>
          })
        }
      </div>
    )
  }
}

export default HomeView;