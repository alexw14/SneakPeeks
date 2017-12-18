import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import userService from '../../utils/userService';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      password: ''
    }
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (field, e) => {
    this.updateMessage('');
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
      .catch(err => this.updateMessage(err.message));
  }

  render() {
    return (
      <div>
        <LoginForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
        />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default LoginPage;