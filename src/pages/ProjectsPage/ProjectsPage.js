import React from 'react';
import Projects from '../../components/Projects/Projects';

const ProjectPage = (props) => {
  return (
    <div>
      <Projects 
        {...props}
        projects={props.projects}
      />
    </div>
  )
};

export default ProjectPage;