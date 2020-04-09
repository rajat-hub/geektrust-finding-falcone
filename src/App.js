import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Page Imports
import PageNotFound from './pages/404';
import PlanetFinder from './pages/planetFinder';
import Result from './pages/result';
import { Row, Grid, Col, PageHeader } from 'react-bootstrap/lib';
//Component Imports
import Header from './components/header';
import Footer from './components/footer';
import StarryNight from './components/starryNight';
//Style Imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarryNight />
        <Col>
          <Row>
            <Header />
          </Row>
          <Row>
            <Router>
              <Switch>
                <Route path="/" exact component={PlanetFinder} />
                <Route path="/result" exact component={Result} />
                <Route component={PageNotFound} />
              </Switch>
            </Router>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Col>
      </div>
    );
  }
}

export default App;
