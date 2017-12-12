import React from 'react';
import Project from '../Project/Project';

const Projects = (props) => {

  


  return (
    <div>
      <Project
        {...props}
        projects={props.projects}
      />
    </div>
  )
}

export default Projects;