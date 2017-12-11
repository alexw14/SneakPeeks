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
        <header>Log In</header>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div>
              <div style={{margin: '0 auto'}}>
                <label>Email
                    <input type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                </label>
              </div>
            </div>
            <div>
              <div style={{margin: '0 auto'}}>
                <label>Password
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className="button large primary">Log In</button>
            </div>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;