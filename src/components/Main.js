import React, { Component } from 'react';
import Head from './Head';
import {
  BrowserRouter as Router,
  Route,
  Switch
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/projects" component={MyProjects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}
