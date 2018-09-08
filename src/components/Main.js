import React, { Component } from 'react';
import Head from './Head';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Contact from './Contact';
import {Footer} from './Footer';

export default class Main extends Component {


  render(){
    return(
      <Router>
        <div className="main-container">
          <Head />
          <Route path='/' component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={MyProjects} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>

      </Router>
    )
  }
}
