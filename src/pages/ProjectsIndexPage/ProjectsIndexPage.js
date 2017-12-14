import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SearchBar from '../../components/SearchBar/SearchBar';

class ProjectsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'All'
    }
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  render() {
    let projectList = this.props.projects ?
      this.props.projects.map(project => <ProjectCard key={project._id} project={project} />)
      :
      <h1>Loading</h1>

    if (this.state.search !== 'All') {
      projectList = this.props.projects.filter(project => project.category === this.state.search)
        .map(project => <ProjectCard key={project._id} project={project} />)
    }

    return (
      <div>
        <div className='container'>
          <h2>Show me {this.state.search} projects</h2>
          <SearchBar
            updateSearch={this.updateSearch}
          />
          <div className="row">
            {projectList}
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectsIndexPage;