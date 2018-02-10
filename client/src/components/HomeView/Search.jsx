import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';
import axios from 'axios';
import fuse from 'fuse.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
      fuse: '',
      query: '',
      data: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    // this.onKeyUp = this.onKeyUp.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  };

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:3031/api/itinerary/allItineraries');
    if (data) {
      const config = {
        shouldSort: true,
        threshold: .70,
        location: 0,
        distance: 100,
        maxPatterLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'owner',
            weight: 0.4,
          },
          {
            name: 'title',
            weight: 0.4,
          },
          {
            name: 'description',
            weight: 0.2,
          },
          {
            name: 'location',
            weight: 0.3,
          }
        ]
      }
      const fuze = new fuse(data, config);
      this.setState({
        fuse: fuze,
        searched: fuze.list
      });
    }
  }

  async fetchEvents() {
    const { data } = await axios.get('http://localhost:3031/api/itinerary/allItineraries');
    this.setState({
      searched: data,
    });
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      searched: this.state.fuse.search(this.state.query),
    });
    this.props.itinSetter(this.state.searched);
  }

  onKeyUp(e) {
    if (e.key == 'Enter') {
      console.log('<3');
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Input
            s={12} m={12}
            type="text"
            name="query"
            label="Search itineraries"
            onChange={this.onChangeHandler}
            onKeyPress={this.onKeyUp}

          ><Icon>search</Icon>
          </Input>
        </Row>
      </div>
    )
  }
}