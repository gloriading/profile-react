import React from 'react';

const AboutMe = () => {
  return ( 
    <div className="about-container">
      <div className="about-content">
        <h2> aboutMe </h2>

        <p className="bio animated fadeInLeft slow">
          I am a Web developer who loves exploring and learning new technologies from various online sources; moveover, I volunteer as a mentor in several classes with Canada Learning Code, aim to help more people discover the fascination of coding. My goal is to become an awesome front-end web & mobile developer!
        </p>
        <p className="tech animated fadeInRight slower">
          <span>Technologies</span>
          HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native, Apollo, GraphQL, Ruby, Ruby on Rails, PostgreSQL, GitHub, GitLab
        </p>

      </div>
    </div>
   );
}
 
export default AboutMe;
