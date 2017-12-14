import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.props.handleNewProjectForm(this.state);
  }

  render() {
    return (
      <div>
        <header><h2>Bring your creative project to life.</h2></header>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input s={12} type='text' label='Title' onChange={(e) => this.handleChange('title', e)} />
              <Input s={12} type='text' label='Subtitle' onChange={(e) => this.handleChange('subtitle', e)} />
              <div className='input-field col s12'>
                <textarea className='materialize-textarea' onChange={(e) => this.handleChange('description', e)}></textarea>
                <label>Description</label>
              </div>
              <Input s={4} type='select' label='Category' onChange={(e) => this.handleChange('category', e)} >
                <option value='' defaultValue>Select a category</option>
                <option value='Art'>Art</option>
                <option value='Design'>Design</option>
                <option value='Film & Video'>Film & Video</option>
                <option value='Game'>Games</option>
                <option value='Music'>Music</option>
                <option value='Publishing'>Publishing</option>
                <option value='Technology'>Technology</option>
              </Input>
              <Input s={4} type='number' label='Funding Goal (USD)' onChange={(e) => this.handleChange('fundingGoal', e)} />
              <Input s={4} type='number' label='Funding Duration (days)' onChange={(e) => this.handleChange('fundingDuration', e)} />
              <Input s={12} type='text' label='Image URLs' onChange={(e) => this.handleChange('images', e)} />
            </Row>
            <div>
              <button type='submit' className='btn'>Create My Project</button>
            </div>
            <div style={{ marginTop: '25px' }}> <Link to='/'>Cancel</Link> </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewProjectForm;