import './App.css';
import React, { Component } from 'react';
import Head from './components/Head';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import {Footer} from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Head />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/projects" component={MyProjects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
