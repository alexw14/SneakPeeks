import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
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
    return !(this.state.name && this.state.email && this.state.password);
  }

  render() {
    return (
      <div>
        <header>Sign Up</header>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Name
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Email
                    <input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Password
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Biography
                    <textarea placeholder="Biography" value={this.state.biography} onChange={(e) => this.handleChange('biography', e)} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Website
                    <input type="text" placeholder="Website" value={this.state.website} onChange={(e) => this.handleChange('website', e)} />
                </label>
              </div>
            </div>
            <div className="">
              <div className="" style={{margin: '0 auto'}}>
                <label>Profile Picture
                    <input type="url" placeholder="Profile Picture" value={this.state.avatar} onChange={(e) => this.handleChange('avatar', e)} />
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className="" disabled={this.isFormValid()}>Create My Account</button>
            </div>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm;