import React, { Component } from 'react';
import axios from 'axios';
import { Icon, Row, Card } from 'react-materialize';

import EventRender from '../Search/EventRender.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UpdateCity } from '../../../ReduxActions/UpdateCity.js';
import { UpdateState } from '../../../ReduxActions/UpdateState.js';
import { ErrorBoundary } from 'react-error-boundaries';

const id = '1PIVDVZVWKOFS0A3OC0QHKTM552JUIXL5EG4KIFCIZHN5VUG';
const secret = 'XXIT0PRT4KPGEBA05W1K4G50VHN3YBRCSV1ECJEW31VKVA50';
const foursquare = require('react-foursquare')({
  clientID: id,
  clientSecret: secret
});
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      state: null,
      query: "event",
      results: [],
      resultChecker: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.ClickHandler = this.ClickHandler.bind(this);
    this.UpdateByLocation = this.UpdateByLocation.bind(this);
    this.sendNoResult = this.sendNoResult.bind(this);
  }

  sendNoResult() {
    this.setState({resultChecker: true});
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
      // console.log(this.props.location.city);
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
    // console.log('Search response!!!', res)
    if (res.response.group.totalResults >= 1) {
      this.setState({results: res.response.group.results})
    } else {
      // console.log('it faileddddd') //render cannot find <>
      this.sendNoResult();
    }
  })
  .catch(err => {
    console.log('inside of catch', err)
  });
}
  render() {

    let noResult = null;
    if (this.state.resultChecker) {
      noResult =
      <div>
        <Icon large>sentiment_very_dissatisfied</Icon>
        <h1>No result</h1>
      </div>;
    } else {
      noResult = null
    }

    return (
      <div className="container">
        <Card>
        <center>Search</center>
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
        </Card>
        <button onClick={() =>{ this.ClickHandler()} } > Submit </button>
        <Row>
        {
          this.state.results.map(result => {
            // console.log(result.photo)
            if (!!result.venue) {
              let payload = {
                id: result.id,
                name: result.venue.name,
                location: result.venue.location.address,
                price: result.price?price:null,
                description: result.venue.categories[0].name,
                prefix: null,
                suffix: null
              }
              // console.log('before', payload)
              if (result.photo) {
                payload.prefix = result.photo.prefix;
                payload.suffix = result.photo.suffix;
              }
              // console.log('after', payload)
              return <EventRender venue={payload}/>
            } else {
              //return result could not be found
              return <div>
                       <Icon large>sentiment_very_dissatisfied</Icon>
                       <h1>Could not find the result</h1>
                     </div>
            }
          })
        }
        </Row>
        {noResult}

        </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    location: state.location,
    username: state.setSignupinfo,
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
