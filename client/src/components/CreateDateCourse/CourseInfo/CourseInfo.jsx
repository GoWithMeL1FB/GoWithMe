import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { description } from '../../../ReduxActions/Description';
import { title } from '../../../ReduxActions/TitleInfo';

import { Row, Col, Input } from 'react-materialize';

class CourseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
    this.titleOnChangeHandler = this.titleOnChangeHandler.bind(this);
    this.desOnChangeHandler = this.desOnChangeHandler.bind(this);
  }

  titleOnChangeHandler(e) {
    this.props.title(e.target.value);
  }

  desOnChangeHandler(e) {
    this.props.description(e.target.value);
  }

  render () {
    return(
      <Row>
        <center>Date Course Name</center>
        <Input 
          s={12}
          label="Taco Trip"
          name="title"
          onChange={this.titleOnChangeHandler}
        />
        <div>Description</div>
        <Input
          s={12}
          name="description"
          label="About Taco Trip"
          onChange={this.desOnChangeHandler}
          />
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return{
    dateCourseInfo: state.dateCourseInfo
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

