import React, { Component } from 'react';
import { Collection, CollectionItem, Col, Row } from 'react-materialize';
import { Route, Switch } from 'react-router-dom';

// import '../../../public/css/materialize.css'
import './Home.css'
import EditProfile from '../EditProfile/EditProfile.jsx';
import Nav from '../global/Nav/Nav.jsx';
import Footer from '../global/Footer/Footer.jsx';
import HomeView from '../HomeView/HomeView.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import CreateDateCourse from '../CreateDateCourse/createDateCourse.jsx';
import SearchEvents from '../SearchEvents/SearchEvents.jsx';
import Favorites from '../Favorites/favorites.jsx';
import MyItin from '../MyItin/myItin.jsx';


class Home extends Component {

  render() {
    return (

      <div>
        <Nav />
        <Row>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="container" id="contents">
            <Col s={9} m={9} >
              <Switch>
                <Route path="/Home/favorites" component={Favorites} />
                <Route path="/Home/CreateDateCourse" component={CreateDateCourse} />
                <Route path="/Home/EditProfile" component={EditProfile} />
                <Route path="/Home/HomeView" component={HomeView} />
                <Route path="/Home/searchEvents" component={SearchEvents} />
                <Route path="/Home/myItineraries" component={MyItin} />
                <Route path='/Home' component={HomeView} />
              </Switch>
            </Col>

          </div>
        </Row>
        <Footer />
      </div>
    )
  }
}

export default Home;