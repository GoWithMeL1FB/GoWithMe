import React, { Component } from 'react';
// import '../../../public/css/materialize.css'
import { Route, Switch } from 'react-router-dom';

import EditProfile from '../EditProfile/EditProfile.jsx';
import Nav from '../global/Nav/Nav.jsx';
import Footer from '../global/Footer/Footer.jsx';
import Sidebar from '../global/Sidebar/Sidebar.jsx';
import HomeView from '../HomeView/HomeView.jsx';
import CreateDateCourse from '../CreateDateCourse/CreateDateCourse.jsx'

import { Collection, CollectionItem, Col, Row } from 'react-materialize';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Row>
          <Sidebar />

          <Col s={9}>
            <Switch>
              <Route path="/Home/CreateDateCourse" component={CreateDateCourse}></Route>
              <Route path="/Home/EditProfile" component={EditProfile}></Route>
              <Route path="/Home/HomeView" component={HomeView}></Route>
              <Route exact path='/Home' component={HomeView}/>
            </Switch>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Home;