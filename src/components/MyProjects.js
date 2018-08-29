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
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(title, url, img, des){
    this.setState({
      title: title,
      url: url,
      img: img,
      description: des,
     })
     console.log(url)
  }

  render(){
    let projectList;
    projectList = projects.map((project, index) => {
      return (
      <p key={index}
        onClick={()=> this.handleClick(project.name, project.link, project.image, project.description)}
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
          <div className="project-display">
            <div className="project-title">
              {title ? <h3>{title}</h3> : ""}
              {url ? <a href={url}>project link</a> : ""}
            </div>
            <div className="project-description">
              {description ? <p>{description}</p> : ""}
            </div>
            <div className="project-img">
              {img ? <img src={img} alt={title}/> : ""}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
