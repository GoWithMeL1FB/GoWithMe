import React from 'react';
import axios from 'axios';

import { Col, Card, CardTitle } from 'react-materialize';

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

      <Card className='small'
        header={<CardTitle image={photo}>{this.props.title}</CardTitle>}
      >
        <p>Location:{this.props.location}</p>
        <p>Description:{this.props.price} {this.props.description} </p>
      </Card>
    )
  }
}

export default Events;
