import React, {Component} from 'react';

// Router
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// CSS
import './css/App.css';
import './css/mobile.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

// Components
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer';

// App
class App extends Component {
  render() {
      return (
          <Router>
                  <div>
                      <Header/>
                      <Nav />
                      <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>
                          <Route
                              render={() => (
                              <div>
                                  <h3>404</h3>
                              </div>
                          )}/>
                      </Switch>
                  </div>
          </Router>
      );
  }
}

export default App;
