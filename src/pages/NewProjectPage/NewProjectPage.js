import React, {Component} from 'react';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

class NewProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      description: '',
      category: '',
      fundingGoal: null,
      fundingDuration: null,
      images: [],
      owner: null
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
      owner: this.props.user._id
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/projects');
    this.props.handleNewProjectForm(this.state);
  }

  render() {
    return (
      <div>
        <NewProjectForm 
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}        
      />
      </div>
    )
  }
}

export default NewProjectPage;