import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';
import axios from 'axios';
import fuse from 'fuse.js';
import url from '../../../config';

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
    const { data } = await axios.get(`${url.eventServer}/api/events/getAllEvents`);
    if (data) {
      const config = {
        shouldSort: true,
        threshold: .50,
        location: 0,
        distance: 100,
        maxPatterLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'owner',
            weight: 0.5,
          },
          {
            name: 'title',
            weight: 0.5,
          },
          {
            name: 'description',
            weight: 0.5,
          },
          {
            name: 'location',
            weight: 0.5,
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
    const { data } = await axios.get(`${url.eventServer}/api/events/getAllEvents`);
    this.setState({
      searched: data,
    });
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
      searched: this.state.fuse.search(this.state.query),
    });
    this.props.eventSetter(this.state.searched);
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
            label="Search events"
            onChange={this.onChangeHandler}
            onKeyPress={this.onKeyUp}

          ><Icon>search</Icon>
          </Input>
        </Row>
      </div>
    )
  }
}