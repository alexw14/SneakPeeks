import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: '',
      biography: '',
      website: '',
      avatar: ''
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
    userService.signup(this.state)
      // if successfully signed up
      .then(() => {
        this.props.handleSignUp();
        this.props.history.push('/');
      })
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormValid() {
    if (this.state.password === this.state.passwordConf && this.state.passwordConf !== '') return true;
  }

  render() {
    let button = <button type="submit" className='btn' disabled>Create My Account</button>;
    if (this.isFormValid()) button = <button type="submit" className='btn'>Create My Account</button>;

    return (
      <div>
        <header><h1>Sign Up</h1></header>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" onChange={(e) => this.handleChange('name', e)} />
                <label>Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" onChange={(e) => this.handleChange('email', e)} />
                <label>Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input type="password" onChange={(e) => this.handleChange('password', e)} />
                <label>Password</label>
              </div>
              <div className="input-field col s6">
                <input type="password" onChange={(e) => this.handleChange('passwordConf', e)} />
                <label>Password Confirmation</label>
              </div>
            </div>
            <div className="row">
              <label><h6>Biography</h6>
                <textarea onChange={(e) => this.handleChange('biography', e)} style={{ height: '100px', color: 'black' }} />
              </label>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" onChange={(e) => this.handleChange('website', e)} />
                <label>Website URL</label>
              </div>
              <div className="input-field col s6">
                <input type="text" onChange={(e) => this.handleChange('avatar', e)} />
                <label>Profile Picture URL</label>
              </div>
            </div>
            <div>
              {button}
            </div>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm;