import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Input } from 'react-materialize';

const NewProjectForm = (props) => {

  return (
    <div>
      <header><h2>Bring your creative project to life.</h2></header>
      <div className='container'>
        <form onSubmit={props.handleSubmit}>
          <Row>
            <Input s={12} type='text' label='Title' onChange={(e) => props.handleChange('title', e)} />
            <Input s={12} type='text' label='Subtitle' onChange={(e) => props.handleChange('subtitle', e)} />
            <div className='input-field col s12'>
              <textarea className='materialize-textarea' onChange={(e) => props.handleChange('description', e)}></textarea>
              <label>Description</label>
            </div>
            <Input s={4} type='select' label='Category' onChange={(e) => props.handleChange('category', e)} >
              <option value='' defaultValue>Select a category</option>
              <option value='Art'>Art</option>
              <option value='Design'>Design</option>
              <option value='Film & Video'>Film & Video</option>
              <option value='Game'>Games</option>
              <option value='Music'>Music</option>
              <option value='Publishing'>Publishing</option>
              <option value='Technology'>Technology</option>
            </Input>
            <Input s={4} type='number' label='Funding Goal (USD)' onChange={(e) => props.handleChange('fundingGoal', e)} />
            <Input s={4} type='number' label='Funding Duration (days)' onChange={(e) => props.handleChange('fundingDuration', e)} />
            <Input s={12} type='text' label='Image URLs' onChange={(e) => props.handleChange('images', e)} />
          </Row>
          <div>
            <button type='submit' className='btn'>Create My Project</button>
          </div>
          <div style={{ margin: '25px 0' }}> <Link to='/'>Cancel</Link> </div>
        </form>
      </div>
    </div>
  )
}

export default NewProjectForm;