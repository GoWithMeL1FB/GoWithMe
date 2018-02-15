import React from 'react';
import axios from 'axios';

import { Col } from 'react-materialize';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    };
  }

  render() {
    const photo = `${this.props.prefix}180x120${this.props.suffix}`

    return (

      <div>
      <img  src={photo}/>
        <p>{this.props.title}</p>
        <p>{this.props.location}</p>
        <p>Description: {this.props.price} {this.props.description} </p>
      </div>
    )
  }
}

export default Events;
