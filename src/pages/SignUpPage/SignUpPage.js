import React, {Component} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import userService from '../../utils/userService';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      email: '',
      password: '',
      passwordConf: '',
      biography: '',
      website: '',
      avatar: ''
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
    userService.signup(this.state)
      // if successfully signed up
      .then(() => {
        this.props.handleSignUp();
        this.props.history.push('/');
      })
      .catch(err => this.props.updateMessage(err.message));
  }

  isFormValid = () => {
    if (this.state.password === this.state.passwordConf && this.state.passwordConf !== '') return true;
  }

  render() {
    return (
      <div>
        <SignUpForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          isFormValid={this.isFormValid}
          handleSignUp={this.props.handleSignUp} 
        />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default SignUpPage;