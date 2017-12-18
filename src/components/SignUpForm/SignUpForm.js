import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = (props) => {

  let button = <button type='submit' className='btn' disabled>Create My Account</button>;
  if (props.isFormValid()) button = <button type='submit' className='btn'>Create My Account</button>;

  return (
    <div>
      <header><h1>Sign Up</h1></header>
      <form onSubmit={props.handleSubmit}>
        <div className='container'>
          <div className='row'>
            <div className='input-field col s6'>
              <input type='text' onChange={(e) => props.handleChange('name', e)} />
              <label>Name</label>
            </div>
            <div className='input-field col s6'>
              <input type='text' onChange={(e) => props.handleChange('email', e)} />
              <label>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input type='password' onChange={(e) => props.handleChange('password', e)} />
              <label>Password</label>
            </div>
            <div className='input-field col s6'>
              <input type='password' onChange={(e) => props.handleChange('passwordConf', e)} />
              <label>Password Confirmation</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <textarea className='materialize-textarea' onChange={(e) => props.handleChange('biography', e)}></textarea>
              <label>Biography</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input type='text' onChange={(e) => props.handleChange('website', e)} />
              <label>Website URL</label>
            </div>
            <div className='input-field col s6'>
              <input type='text' onChange={(e) => props.handleChange('avatar', e)} />
              <label>Profile Picture URL</label>
            </div>
          </div>
          <div>
            {button}
          </div>
          <div style={{ margin: '25px 0' }}> <Link to='/'>Cancel</Link> </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;