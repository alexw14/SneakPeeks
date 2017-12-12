import React from 'react';
import {Link} from 'react-router-dom';

const ProjectCard = (props) => {
  let project = props.project;
  let uri = project.title.replace(/\s/g, "").toLowerCase();
  return (
    <div className='col s6'>
      <div className='card'>
        <div className='card-image'>
          <img src={project.images[0]} alt=""/>
          <span className='card-title'><p>{project.title}</p></span>
        </div>
        <div className='card-content'>
          <p>{project.subtitle}</p>
          <p>{project.description}</p>
          <p>{project.category}</p>
          <p>{project.fundingGoal}</p>
          <p>{project.currentFunding}</p>
          <p>{project.fundingDuration}</p>
          <p>{project.backers}</p>
          <p>{project.owner}</p>
        </div>
      </div>
      <Link to={`/projects/${uri}`}>Show Me</Link>
    </div>
  )
}

export default ProjectCard;