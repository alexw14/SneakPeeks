import React, {Component} from 'react';
import projectAPI from '../../utils/projectAPI';

class SupportProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backers: [],
      currentFunding: null
    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
      backers: this.props.user._id
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Not Working Yet //
    projectAPI.update(this.state)
      .then(() => {
        this.props.history.push('/');
      })
  }

  render() {

    let currentFunding = this.state.currentFunding ? this.state.currentFunding : 0;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className='row'>
              <div className='range-field'>
                <input type='range' min='0' max='1000' defaultValue='0' onChange={(e) => this.handleChange('currentFunding', e)} />
                <div><h5>I pledge to contribute ${currentFunding} to this project.</h5></div>
              </div>
            </div>
            <div className='center'>
              <button type='submit' className='btn'>Continue</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SupportProjectForm;