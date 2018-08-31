import React, { Component } from 'react';
import { FiLinkedin, FiGithub, FiMonitor } from 'react-icons/fi';
import { Tooltip } from 'reactstrap';
const Dragon = require('../images/dragon.png');

export default class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }


  render(){
    return(
      <div className="about-container">
        <div className="about-content">
          <h2> aboutMe </h2>

          <p className="bio">
            I am a Web developer who loves exploring and learning new technologies from various online sources; moveover, I volunteer as a mentor in several classes with Canada Learning Code, aim to help more people discover the fascination of coding. My goal is to become an awesome front-end web & mobile developer!
          </p>
          <p className="tech">
            Technologies I use: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native, Apollo, GraphQL, Ruby on Rails, PostgreSQL, GitHub
          </p>

        </div>
        <div className="about-image">
          <div className="img-overlay">
            <a href="https://www.linkedin.com/in/gloriading/"
            rel="noopener noreferrer"
            target="_blank">
              <FiLinkedin className="icon icon-linkedin" />
            </a>
            <a href="https://github.com/gloriading"
            rel="noopener noreferrer"
            target="_blank">
              <FiGithub className="icon icon-github" />
            </a>
            <a href="https://gloriading.github.io/profile-examples/gloriousWeb/index.html"
            rel="noopener noreferrer"
            target="_blank">
              <FiMonitor className="icon icon-static-site" id="staticSite"/>
              <Tooltip
                placement="top" isOpen={this.state.tooltipOpen}
                target="staticSite" toggle={this.toggle}>
                My portfolio site with HTML5 and CSS3
              </Tooltip>
            </a>
          </div>
          <img src={Dragon} alt="Dragon" className="dragon-img"/>
        </div>

      </div>
    )
  }
}
