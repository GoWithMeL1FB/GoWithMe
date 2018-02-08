import React from 'react';
import axios from 'axios';

import Events from '../../global/Events/Events.jsx';

import { DragDropContainer } from 'react-drag-drop-container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateCity } from '../../../ReduxActions/UpdateCity.js';
import { UpdateState } from '../../../ReduxActions/UpdateState.js';

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
       /*
        **Local state**
       this.setState({
        city: res.data.city,
        state: res.data.region
       }); */

       //redux state
       this.props.UpdateCity(res.data.city)
       this.props.UpdateState(res.data.region)
      console.log(this.props.location.city);

    }).catch(err => {
      console.error('Get location err', err);
    })
  }

ClickHandler() {
  /*
  local state
  let params = {
    near: `${this.state.city},${this.state.state}`,
    query: `${this.state.query}`,
    limit: 25,
    venuePhotos: 1,
  }
  */

  //redux state
  let params = {
    near: `${this.props.location.city},${this.props.location.state}`,
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
              placeholder={this.props.location.city}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="state"
              placeholder={this.props.location.state}
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
        
        {this.state.results.map(venue => {
          let price = venue.venue.price?venue.venue.price.message:null;
          return(
          <div key={venue.id}>
            <DragDropContainer targetKey="box">
              <Events
                id={venue.id}
                title={venue.venue.name}
                location={venue.venue.location.address}
                price={price}
                category='eat'
                description={venue.venue.categories[0].name}
                attendees='1-2'
                prefix={venue.photo.prefix}
                suffix={venue.photo.suffix}
              />
            </DragDropContainer>
          </div>
      )})}
        </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    location: state.location,
  };
}

// connect action to this components state
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      UpdateCity: UpdateCity,
      UpdateState:UpdateState
    },
    dispatch
  );
}


export default connect(mapStateToProps, matchDispatchToProps)(Search);
