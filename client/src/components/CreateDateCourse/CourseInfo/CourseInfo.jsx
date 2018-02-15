import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { description } from '../../../ReduxActions/Description';
import { title } from '../../../ReduxActions/TitleInfo';

import { Card, Col, Input, CardTitle, Row } from 'react-materialize';
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
        <Card>
          <h4>Create Itinerary</h4>
          <p>title</p>
          <input
            name="title"
            onChange={this.titleChange}
          />
          <p>description</p>
          <input
            name="description"
            onChange={this.descriptionChange}
            />
          <p>upload image</p>
          <input
            name="image"
            onChange={this.imageChange}
          />
        </Card>
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

