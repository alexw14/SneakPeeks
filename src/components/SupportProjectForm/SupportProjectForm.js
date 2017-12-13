import React, { Component } from 'react';

class SupportProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: null
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSupportProjectForm(this.props.project, this.state.donation);
  }

  render() {

    let donation = this.state.donation ? this.state.donation : 0;
    let button = <h1>Loading</h1>
    button = (this.props.user) ?
    <button type='submit' className='btn'>Continue</button>
    :
    <button type='submit' className='btn' disabled>Continue</button>


    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className='row'>
              <div className='range-field'>
                <input type='range' min='0' max='1000' defaultValue='0' onChange={(e) => this.handleChange('donation', e)} />
                <div><h5>I pledge to contribute ${donation} to this project.</h5></div>
              </div>
            </div>
            <div className='center'>
              {button}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SupportProjectForm;