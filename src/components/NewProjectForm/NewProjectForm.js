import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectAPI from '../../utils/projectAPI';
import { Row, Input } from 'react-materialize';

class NewProjectForm extends Component {
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
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    projectAPI.newProject(this.state)
      .then(() => {
        this.props.history.push('/');
      })
  }

  render() {
    return (
      <div>
        <header>Creat a New Project!</header>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input s={12} type='text' label='Title' value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
              <Input s={12} type='text' label='Subtitle' value={this.state.subtitle} onChange={(e) => this.handleChange('subtitle', e)} />
              <label><h6>Description</h6>
                <textarea value={this.state.description} onChange={(e) => this.handleChange('description', e)} style={{height: '200px', color: 'black'}}/>
              </label>
              <Input s={4} type='select' label='Category' onChange={(e) => this.handleChange('category', e)} >
                <option value='' disabled selected>Select a category</option>
                <option value='Art'>Art</option>
                <option value='Design'>Design</option>
                <option value='Fashion'>Fashion</option>
                <option value='Film & Video'>Film & Video</option>
                <option value='Food'>Food</option>
                <option value='Game'>Games</option>
                <option value='Music'>Music</option>
                <option value='Photography'>Photography</option>
                <option value='Publishing'>Publishing</option>
                <option value='Technology'>Technology</option>
              </Input>
              <Input s={4} type='number' label='Funding Goal' value={this.state.fundingGoal} onChange={(e) => this.handleChange('fundingGoal', e)}/>
              <Input s={4} type='number' label='Funding Duration' value={this.state.fundingDuration} onChange={(e) => this.handleChange('fundingDuration', e)}/>
              <Input s={12} type='text' label='Image URLs' value={this.state.images} onChange={(e) => this.handleChange('images', e)}/>
            </Row>
            <div>
              <button type='submit' className='btn'>Create My Project</button>
            </div>
            <Link to='/'>Cancel</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default NewProjectForm;