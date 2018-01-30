import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const UserProjects = (props) => {

  let projectList = props.projects ?
    props.projects.map(project => <ProjectCard key={project._id} project={project} numberWithCommas={props.numberWithCommas} />)
    :
    <h1>Loading</h1>

  return (
    <div className='row'>
      <h3>My Projects</h3>
      {projectList}
    </div>
  )
}

export default UserProjects;