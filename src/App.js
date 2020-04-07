import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Page Imports
import PageNotFound from './pages/404';
import PlanetFinder from './pages/planetFinder';
import Result from './pages/result';

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
        <Header />

        <Router>
          <Switch>
            <Route path="/" exact component={PlanetFinder} />
            <Route path="/result" exact component={Result} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
