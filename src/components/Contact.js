import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import { FiLinkedin, FiGithub, FiMonitor } from 'react-icons/fi';


export default class Contact extends Component {
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
      <div className="contact-container">
        <h2>contact me</h2>
        <div className="contact-inner">
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
      </div>
    )
  }
}
