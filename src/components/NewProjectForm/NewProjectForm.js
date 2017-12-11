import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NewProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      description: '',
      category: '',
      country: '',
      fundingGoal: '',
      fundingDuration: '',
      images: [],
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <header>Creat a New Project!</header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title
              <input type='text' placeholder='Title' value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
            </label>
          </div>
          <div>
            <label>Subtitle
              <input type='text' placeholder='Subtitle' value={this.state.subtitle} onChange={(e) => this.handleChange('subtitle', e)} />
            </label>
          </div>
          <div>
            <label>Description
              <textarea placeholder='Description' value={this.state.description} onChange={(e) => this.handleChange('description', e)} />
            </label>
          </div>
          <div>
            <label>Category
              <input type='text' placeholder='Category' value={this.state.category} onChange={(e) => this.handleChange('category', e)} />
            </label>
          </div>
          <div>
            <label>Country
              <input type='text' placeholder='Country' value={this.state.country} onChange={(e) => this.handleChange('country', e)} />
            </label>
          </div>
          <div>
            <label>Funding Goal
              <input type='number' placeholder='Funding Goal' value={this.state.fundingGoal} onChange={(e) => this.handleChange('fundingGoal', e)} />
            </label>
          </div>
          <div>
            <label>Funding Duration
              <input type='number' placeholder='Funding Duration' value={this.state.fundingDuration} onChange={(e) => this.handleChange('fundingDuration', e)} />
            </label>
          </div>
          <div>
            <label>Images
              <input type='url' placeholder='Images' value={this.state.images} onChange={(e) => this.handleChange('images', e)} />
            </label>
          </div>
          <div>
            <button type="submit" className="">Create My Project</button>
          </div>
          <Link to='/'>Cancel</Link>
        </form>
      </div>
    )
  }
}

export default NewProjectForm;