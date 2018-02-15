import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { description } from '../../../ReduxActions/Description';
import { title } from '../../../ReduxActions/TitleInfo';

import { Card, Col, Input, CardTitle } from 'react-materialize';
import { setUsername } from '../../../ReduxActions/setUsername';
import { image } from '../../../ReduxActions/ImageURL';

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      image: '',
    }

    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
  }

  titleChange(e) {
    this.props.title(e.target.value);
  }

  descriptionChange(e) {
    this.props.description(e.target.value);
  }

  imageChange(e) {
    this.props.image(e.target.value);
  }

  render () {
    return(
      <div>
        <Row>
          <h4>Create Itinerary</h4>
          <Input
            s={12}
            name="title"
            label="Itinerary Name"
            onChange={this.titleChange}
          />
          <Input
            s={12}
            name="description"
            label="Description"
            onChange={this.descriptionChange}
            />
          <Input
            s={12}
            name="image"
            label="Image URL"
            onChange={this.imageChange}
          />
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    dateCourseInfo: state.dateCourseInfo,
    authUsername: state.username,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      title,
      description,
      image,
      setUsername,
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(CourseInfo);

