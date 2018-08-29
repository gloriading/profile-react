import React, { Component } from 'react';
import { projects } from '../data/projects'


export default class MyProjects extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('here');
    // <h2 onClick={this.handleClick}>my projects</h2>
  }

  render(){
    let projectList;
    projectList = projects.map((project, index) => {
      return <li key={index}>{project.name}</li>
    })

    return(
      <div className="projects-container">
        <h2> myProjects </h2>
        <div className="inner-container">
          <div className="project-list">
            <ul>
              {projectList}
            </ul>
          </div>
          <div className="project-display">

          </div>
        </div>
      </div>
    )
  }
}
