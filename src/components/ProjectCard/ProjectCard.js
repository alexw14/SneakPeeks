import React from 'react';

const ProjectCard = (props) => {
  let project = props.project;
  return (
    <div className='col s6'>
      <div className='card'>
        <div className='card-image'>
          <img src={project.images[0]} alt=""/>
          <span className='card-title'><p>{project.title}</p></span>
        </div>
        <div className='card-content'>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;