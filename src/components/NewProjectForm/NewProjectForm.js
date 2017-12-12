import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectAPI from '../../utils/projectAPI';
import {Row, Input} from 'react-materialize';

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
      owner: this.props.user
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
        <div className='container'>
        <Row>
          <Input s={12} type='text' label='Title' onChange={(e) => this.handleChange('title', e)} />
          <Input s={12} type='text' label='Subtitle' onChange={(e) => this.handleChange('subtitle', e)} />
          <label><h6>Description</h6>
            <textarea onChange={(e) => this.handleChange('description', e)} style={{ height: '200px', color: 'black' }} />
          </label>
          <Input s={4} type='select' label='Category' onChange={(e) => this.handleChange('category', e)} >
            <option value='' defaultValue>Select a category</option>
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
          <Input s={4} type='number' label='Funding Goal' onChange={(e) => this.handleChange('fundingGoal', e)} />
          <Input s={4} type='number' label='Funding Duration' onChange={(e) => this.handleChange('fundingDuration', e)} />
          <Input s={12} type='text' label='Image URLs' onChange={(e) => this.handleChange('images', e)} />
        </Row>
        <div>
          <button type='submit' className='btn'>Create My Project</button>
        </div>
        <Link to='/'>Cancel</Link>
        </div>
      </div >
    )
  }
}

export default NewProjectForm;