import React, {Component} from 'react';
import ProjectContent from '../../components/ProjectContent/ProjectContent';

class ProjectShowPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      project: props.project
    }
  }

  render() {
    return (
      <div>
        <ProjectContent
          project={this.state.project} 
        />
      </div>
    )
  }
}

export default ProjectShowPage;