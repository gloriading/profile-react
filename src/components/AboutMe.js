import React, { Component } from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
const Dragon = require('../images/dragon.png');

export default class AboutMe extends Component {


  render(){
    return(
      <div className="about-container">
        <div className="about-content">
          <h2> aboutMe </h2>

          <p className="bio">
            I am a Web developer who loves exploring and learning new technologies from various online sources; moveover, I volunteer as a mentor in several classes with Canada Learning Code, aim to help more peeple discover the fascination of coding. My goal is to become an awesome front-end web & mobile developer!
          </p>
          <p className="tech">
            Technologies I use: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native, Apollo, GraphQL, Ruby on Rails, PostgreSQL, GitHub
          </p>

        </div>
        <div className="about-image">
          <div className="img-overlay">
            <a href="#">
              <FiLinkedin className="icon icon-linkedin" />
            </a>
            <a href="#">
              <FiGithub className="icon icon-github" />
            </a>
          </div>
          <img src={Dragon} alt="Dragon" className="dragon-img"/>
        </div>

      </div>
    )
  }
}
