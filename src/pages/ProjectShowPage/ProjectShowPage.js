import React, { Component } from 'react';
import ProjectContent from '../../components/ProjectContent/ProjectContent';

class ProjectShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: null
    }
  }

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
  }

  calcDateDiff = (date) => {
    let now = Date.now(); // get time now in ms
    let dateCreated = Date.parse(date); // convert date to ms
    return Math.floor((now - dateCreated) / 86400000); // convert difference from ms to days
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSupportProjectForm(this.props.project, this.state.donation);
  }

  render() {
    return (
      <div>
        <ProjectContent
          {...this.props}
          user={this.props.user}
          project={this.props.project}
          donation={this.state.donation}
          numberWithCommas={this.numberWithCommas}
          calcDateDiff={this.calcDateDiff}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default ProjectShowPage;