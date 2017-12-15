import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const UserProjects = (props) => {

  let projectList = props.projects ? 
    props.projects.map(project => <ProjectCard key={project._id} project={project} />)
    :
    <h1>Loading</h1>

  return (
    <div className='row'>
      {projectList}
    </div>
  )
}

export default UserProjects;