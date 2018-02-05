import React from 'react';
import axios from 'axios';
import Events from '../Events/Events.jsx'
import { DragDropContainer } from 'react-drag-drop-container';
const id = 
const secret = 

const foursquare = require('react-foursquare')({
  clientID: id,
  clientSecret: secret
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      state: null,
      query: "event",
      results: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.ClickHandler = this.ClickHandler.bind(this);
    this.UpdateByLocation = this.UpdateByLocation.bind(this);
  }

  componentWillMount() {
    
    this.UpdateByLocation();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value})
  }

  UpdateByLocation(){
    axios.get("http://ip-api.com/json")
    .then(res => {
      this.setState({ 
        city: res.data.city,
        state: res.data.region
       }); 
      console.log(this.state);
      
    }).catch(err => {
      console.error('Get location err', err);
    })
  }
  
ClickHandler() {
  let params = {
    near: `${this.state.city},${this.state.state}`,
    query: `${this.state.query}`,
    limit: 25,
    venuePhotos: 1,
  }

  foursquare.venues.recommendations(params)
  .then(res => {
    console.log('Search response!!!', res)
    this.setState({results: res.response.group.results})
  })
  .catch(err => {
    console.log('inside of catch', err)
  });
}

  render() {
    return (
      <div className="container">
        <p>Search</p>
        <div className="row">
          <div className="col-25" />
          <div className="col-75">
          <p>Location</p>
            <input
              type="text"
              id="city"
              placeholder={this.state.city}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="state"
              placeholder={this.state.state}
              onChange={this.handleChange}
            />
            
            <p>Activity</p>
            
            <input
              type="text"
              id="query"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button onClick={() =>{ this.ClickHandler()} } > Submit </button>
        {this.state.results.map(venue => (
          <div key={venue.id}>
          <DragDropContainer>
            <Events 
            name={venue.venue.name}
            address={venue.venue.location.address}
            />
           </DragDropContainer>
          </div>
      ))}
        </div>
    );
  }
}

export default Search;