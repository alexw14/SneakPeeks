import React from 'react';
import ProjectContent from '../../components/ProjectContent/ProjectContent';

const ProjectShowPage = (props) => {

  return (
    <div>
      <ProjectContent
        {...props}
        user={props.user}
        project={props.project}
        handleSupportProjectForm={props.handleSupportProjectForm}         
      />
    </div>
  )
}

export default ProjectShowPage;