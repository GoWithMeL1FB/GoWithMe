import React from 'react';
import axios from 'axios';
//const id = process.env.CLIENTID;
//const secret = process.env.CLIENTSECRET;

const foursquare = require('react-foursquare')({
  clientID: '1PIVDVZVWKOFS0A3OC0QHKTM552JUIXL5EG4KIFCIZHN5VUG',
  clientSecret: 'XXIT0PRT4KPGEBA05W1K4G50VHN3YBRCSV1ECJEW31VKVA50'
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'here',
      state: 'lat'
    };
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.ClickHandler = this.ClickHandler.bind(this);
    this.UpdateByLocation = this.UpdateByLocation.bind(this);
  }

  componentWillMount() {
    
    this.UpdateByLocation();
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value})

  }
  handleStateChange(event) {
    this.setState({ city: event.target.value})
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
      console.error('Get location err', err)
    })
  }
    

ClickHandler() {
  let params = {
    near: `${this.state.city},${this.state.state}`,
    query: `${this.refs.query.value}`,
    limit: 1
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
              placeholder={this.state.city}
              onChange={this.handleCityChange}
              ref="city"
            />
            <input
              type="text"
              placeholder={this.state.state}
              onChange={this.handleStateChange}
              ref="state"
            />
            <p>Activity</p>
            <input
              type="text"
              placeholder="Search"
              ref="query"
            />
          </div>
        </div>
        <button onClick={() =>{ this.ClickHandler()} } > Submit </button>
        </div>
    );
  }
}

export default Search;
