import React, { Component } from 'react';
import { projects } from '../data/projects'

export default class MyProjects extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      decription: '',
      img:'',
      url:'',
      entryAnimation: false,
      indicationOn: true,
    }    
  }

  handleClick(project){
    const {name, url, image, description} = project;
    this.setState({ title: name, url, img: image, description})
    this.addEntryAnimation();
  }

  addEntryAnimation(){
    this.setState({ entryAnimation: true });
  }

  removeEntryAnimation(){
    this.setState({ entryAnimation: false });
  }

  removeIndication(){
    this.setState({ indicationOn: false });
  }

  render(){
    let projectList;
    projectList = projects.map((project, index) => {
      return (
      <p key={index}
        onClick={()=> this.handleClick(project)}
        onMouseEnter={()=> {
          this.removeEntryAnimation();
          // this.removeIndication();
        }}
        >
        {project.name}
      </p>
      )
    })

    const { title, url, img, description } = this.state

    return(
      <div className="projects-container">
        <h2> myProjects </h2>
        <div className="inner-container">
          <div className="project-list">
            {projectList}
          </div>

          <div className={this.state.entryAnimation ? "project-display animated fadeIn" : "project-display"}  >
            { this.state.indicationOn ? 
              <div className="click-here"></div> : null }
            <div className="project-title-box">
              {title && url ?
                <a href={url} rel="noopener noreferrer"
                target="_blank" className="project-url">
                  <h4 className="project-title">{title}</h4>
                </a>
                : ""}
            </div>
            <div className="project-description">
              {description ? <p>{description}</p> : ""}
            </div>
            <div className="project-img">
              {img ? <img src={img} alt={title} /> : ""}
            </div>
          </div>

        </div>
      </div>
    )
  }
}
