import React, { Component } from 'react';
// import '../../../public/css/materialize.css'
import { Route, Switch } from 'react-router-dom';

import EditProfile from '../EditProfile/EditProfile.jsx';
import Nav from '../global/Nav/Nav.jsx';
import Footer from '../global/Footer/Footer.jsx';
import Sidebar from '../global/Sidebar/Sidebar.jsx';
import HomeView from '../HomeView/HomeView.jsx';
import CreateDateCourse from '../createDateCourse/createDateCourse.jsx';
import SearchEvents from '../SearchEvents/SearchEvents.jsx';

import { Collection, CollectionItem, Col, Row } from 'react-materialize';

class Home extends Component {

  render() {
    return (
      <div>
      <Nav />
        <Row>
        <Col s={3}>
          <Sidebar />
          </Col>

          <Col s={12} m={12}>
            <Switch>
              <Route path="/Home/CreateDateCourse" component={CreateDateCourse}/>
              <Route path="/Home/EditProfile" component={EditProfile}/>
              <Route path="/Home/HomeView" component={HomeView}/>
              <Route exact path='/Home' component={HomeView}/>
              <Route path="/Home/searchEvents" component={SearchEvents} />
            </Switch>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Home;