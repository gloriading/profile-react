import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImgOverlay,
  CardText,
  CardImg } from 'reactstrap';
// import FaBeer from 'react-icons/lib/fa/beer';

export default class AboutMe extends Component {


  render(){
    return(
      <div className="about-container">
        <Container>
          <Row className="row">
            <Col xs="5" className="column">
              <p>
                I am a Web developer who loves exploring and learning new technologies. During my free time, I enjoy sharing my knowledge of coding. And I love movies (superhero, horror), games (AOE, Hearthstone), and talks.
              </p>
              <p>
                Technologies I use: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native, Apollo, GraphQL, Ruby on Rails, PostgreSQL, GitHub
              </p>
              <p>
                Quotes I like: "Do not pray for an easy life, pray for the strength to endure a difficult one.  -- Bruce Lee"
              </p>
            </Col>
            <Col xs="5" className="column">
              <Card inverse>
                <CardImg width="100%" height="100%" src={require('../images/person.jpg')} alt="a girl" />
                <CardImgOverlay>
                  <CardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    {/* <FaBeer /> */}
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
