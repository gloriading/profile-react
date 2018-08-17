import React, { Component } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import PersonImg from '../images/person.jpg';

let personBg = {
    backgroundImage: 'url(' + PersonImg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden'
  }

export default class AboutMe extends Component {


  render(){
    return(
      <div className="about-container">
        <div className="about-content">
          <p>
            I am a Web developer who loves exploring and learning new technologies. During my free time, I enjoy sharing my knowledge of coding. And I love movies (superhero, horror), games (AOE, Hearthstone), and talks.
          </p>
          <p>
            Technologies I use: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native, Apollo, GraphQL, Ruby on Rails, PostgreSQL, GitHub
          </p>

        </div>
        <div className="about-image" style={personBg}>
          <div className="img-overlay">
            <a href="#">
              <FaLinkedin className="icon icon-linkedin" />
            </a>
            <a href="#">
              <FaGithub className="icon icon-github" />
            </a>
          </div>

          {/* <img src={PersonImg} alt="a girl" className="profile-img"/> */}
        </div>


        {/* <p>
          Quotes I like: "Do not pray for an easy life, pray for the strength to endure a difficult one.  -- Bruce Lee"
        </p> */}
      </div>
    )
  }
}
