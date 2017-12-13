import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SearchBar from '../../components/SearchBar/SearchBar';

const ProjectsIndexPage = (props) => {

  let projectList = props.projects ?
    props.projects.map((project, idx) => <ProjectCard key={project._id} project={project} />)
    :
    <h1>Loading</h1>

  if (props.search !== 'All') {
    projectList = props.projects.filter(project => project.category === props.search)
      .map(project => <ProjectCard key={project._id} project={project} />)
  }


  return (
    <div>
      <div className='container'>
        <h1>View all projects</h1>
        <SearchBar
          search={props.search}
          updateSearch={props.updateSearch}
        />
        <div className="row">
          {projectList}
        </div>
      </div>
    </div>
  )

};

export default ProjectsIndexPage;