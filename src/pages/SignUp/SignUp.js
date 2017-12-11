import React, {Component} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div>
        <SignUpForm
          {...this.props}
          updateMessage={this.updateMessage}
          handleSignUp={this.props.handleSignUp} 
        />
        <p>{this.state.message}</p>
      </div>
    )
  }

}

export default SignUp;