import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  let project = props.project;
  let uri = project.title.replace(/\s/g, "").toLowerCase();

  let backgroundImg = {
    backgroundImage: `url(${project.images[0]})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '300px'
  }

  let projectCard = props.project ?
    <div className='card'>
      <div className='card-image'>
        <div style={backgroundImg}></div>
      </div>
      <div className='card-content'>
        <h4>{project.title}</h4>
        <p>{project.subtitle}</p>
        <p>{project.category}</p>
        <p>{project.fundingGoal}</p>
        <p>{project.currentFunding}</p>
        <p>{project.fundingDuration}</p>
      </div>
      <Link to={`/projects/${uri}`}>Show Me</Link>
    </div>
    :
    <h1>Loading</h1>

  return (
    <div className='col s6'>
      {projectCard}
    </div>
  )
}

export default ProjectCard;