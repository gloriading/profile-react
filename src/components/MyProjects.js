import React, { Component } from 'react';
import { projects } from '../data/projects'
import { FiLink } from 'react-icons/fi';

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

  handleClick(title, url, img, des, e){
    this.setState({
      title: title,
      url: url,
      img: img,
      description: des,
     })

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
            <div className="project-title-box">
              {title ?
                <h4 className="project-title">{title}</h4> : ""}
              {url ? <a href={url} rel="noopener noreferrer"
              target="_blank" className="project-url"><FiLink/> project link</a> : ""}
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
