import React, { Component } from 'react';
import PROJECTS from './data/projects.js';

class Project extends Component {
  render() {
    // console.log('this.props', this.props);
    const { title, image, description, link } = this.props.project;
    return(
      <div className='project' >
        <h3>{title}</h3>
        <img src={image} alt={title} title={title}/>
        <p>{description}</p>
        <a href={link} title={`Projects Link for ${title}`} target='_blank' rel='noreferrer'>Link to {title}</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <section>
        <h2>Highlighted Projects</h2>
        {
          PROJECTS.map(pr => {
            return (
              <Project key={pr.id} project={pr}/>
            )
        })}
      </section>
    );
  }
}

export default Projects;