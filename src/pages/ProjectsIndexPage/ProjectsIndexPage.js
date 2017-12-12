import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const ProjectsIndexPage = (props) => {
  let projectList = null;
  if (props.projects) {
    projectList = props.projects.map((project, idx) =>
      <ProjectCard key={project._id} project={project} />
    )
  }
  return (
    <div>
      <div className='container'>
        <h1>View all projects</h1>
        <div className="row">
          {projectList}
        </div>
      </div>
    </div>
  )
};

export default ProjectsIndexPage;