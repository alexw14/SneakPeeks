import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <div>
      <header><h1>Log In</h1></header>
      <form onSubmit={props.handleSubmit}>
        <div className='container'>
          <div className='row'>
            <div className='input-field col s6 offset-s3'>
              <input type='text' onChange={(e) => props.handleChange('email', e)} />
              <label>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s6 offset-s3'>
              <input type='password' onChange={(e) => props.handleChange('password', e)} />
              <label>Password</label>
            </div>
          </div>
          <div>
            <button type='submit' className='btn'>Log In</button>
          </div>
          <div style={{ margin: '25px 0' }}> <Link to='/'>Cancel</Link> </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;