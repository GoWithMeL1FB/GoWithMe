import React from 'react';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  
  }

  componentWillMount() {}

  render() {
    return (
      <div className="container">
        <p>{this.props.name}</p>
       <p>{this.props.address}</p>
       <p>Description: {this.props.price} {this.props.category} </p>
        </div>
    )
  }
}

export default Events;
