import React from 'react';
import axios from 'axios';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {}
    };
    this.handleSave = this.handleSave.bind(this);
  }

  // DO NOT USE YET !!
  // this function saves an event to db
  async handleSave() {
    console.log('8===D')
    // try {
    //   const payload = this.props;
    //   const response = await axios.post('http://localhost:3031/api/events/createEvent', payload);
    //   console.log('response from axios req', response);
    // } catch(err) {
    //   throw new Error('Could not save event', err);
    // }
  }

  render() {
    const photo = `${this.props.prefix}36x36${this.props.suffix}`

    return (
      <div className="container" >
      <img  src={photo}/>
        <p>{this.props.title}</p>
        <p>{this.props.location}</p>
        <p>Description: {this.props.price} {this.props.description} </p>
        <button onClick={() => this.handleSave()}>Save</button>
      </div>
    )
  }
}

export default Events;
