import React, { Component } from 'react';
import ProjectContent from '../../components/ProjectContent/ProjectContent';

const ProjectShowPage = (props) => {

  return (
    <div>
      <ProjectContent
        project={props.project}
      />
    </div>
  )
}

export default ProjectShowPage;