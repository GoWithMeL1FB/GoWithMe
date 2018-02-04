import React from 'react';
import axios from 'axios';
const id = '1PIVDVZVWKOFS0A3OC0QHKTM552JUIXL5EG4KIFCIZHN5VUG';
const secret = 'XXIT0PRT4KPGEBA05W1K4G50VHN3YBRCSV1ECJEW31VKVA50';

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
      query: "event"
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
    limit: 25
  }

  foursquare.venues.getVenues(params)
  .then(response => {
    console.log('Search response!!!', response)
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
        </div>
    );
  }
}

export default Search;
