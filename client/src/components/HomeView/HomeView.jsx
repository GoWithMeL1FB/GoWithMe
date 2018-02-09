import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

import Featured from './featuredDateCourse/featuredDateCourse.jsx'
import OtherDateCourse from './otherDateCourse/otherDateCourse.jsx';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    // get all events
  }

  // onClick for getting more event information
  onClickHandler() {
    // do something...like show info? or re-router?
  }

  render() {
    return (
      <div>
        <Featured />
        {
          this.state.events.map((event, index) => (
            <OtherDateCourse
              event={event}
              key={index}
              onClick={this.onClickHandler}
            />
          ))
        }
      </div>
    )
  }
}

export default HomeView;