import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { description } from '../../../ReduxActions/Description';
import { title } from '../../../ReduxActions/TitleInfo';

import { Card, Col, Input, CardTitle } from 'react-materialize';

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
    this.titleOnChangeHandler = this.titleOnChangeHandler.bind(this);
    this.desOnChangeHandler = this.desOnChangeHandler.bind(this);
  }

  componentWillMount() {
  }

  titleOnChangeHandler(e) {
    this.props.title(e.target.value);
  }

  desOnChangeHandler(e) {
    this.props.description(e.target.value);
  }

  render () {
    return(
      <div className="container">
        <Card header={<CardTitle>Create Date Course</CardTitle>}
        >
          <div>Date Course Name</div>
          <input
            type="text"
            onChange={this.titleOnChangeHandler}
          />
          <div>Description</div>
          <input
            type="text"
            onChange={this.desOnChangeHandler}
          />
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    dateCourseInfo: state.dateCourseInfo,
    signupUsername: state.setSignupUsername,
    loginUsername: state.setloginUsername,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      title,
      description
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(CourseInfo);

