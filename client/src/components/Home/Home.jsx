import React, { Component } from 'react';
// import '../../../public/css/materialize.css'
import { Route, Switch } from 'react-router-dom';

import EditProfile from '../EditProfile/EditProfile.jsx';
import Nav from '../global/Nav/Nav.jsx';
import Footer from '../global/Footer/Footer.jsx';
import Sidebar from '../global/Sidebar/Sidebar.jsx';
import createDateCourse from '../createDateCourse/createDateCourse.jsx';

import { Collection, CollectionItem, Col, Row } from 'react-materialize';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Row>
          <Col s={3}>
            <Collection header='Sidebar'>
              <CollectionItem>Alvin</CollectionItem>
              <CollectionItem>Alvin</CollectionItem>
              <CollectionItem>Alvin</CollectionItem>
              <CollectionItem>Alvin</CollectionItem>
            </Collection>
          </Col>

          <Col s={9}>
            <Switch>
              <Route path="/Home/createDateCourse" component={createDateCourse}></Route>
              <Route path="/Home/editProfile" component={EditProfile}></Route>
            </Switch>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Home;