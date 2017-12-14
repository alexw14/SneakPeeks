import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');    
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userService.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      .catch(err => this.props.updateMessage(err.message));
  }

  render() {
    return (
      <div>
        <header><h1>Log In</h1></header>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className='row'>
              <div className='input-field col s6 offset-s3'>
                <input type='text' onChange={(e) => this.handleChange('email', e)} />
                <label>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s6 offset-s3'>
                <input type='password' onChange={(e) => this.handleChange('password', e)} />
                <label>Password</label>
              </div>
            </div>
            <div>
              <button type='submit' className='btn'>Log In</button>
            </div>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;