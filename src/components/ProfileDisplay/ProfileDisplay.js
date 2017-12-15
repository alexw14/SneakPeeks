import React, { Component } from 'react';

class ProfileDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    })
  }
  render() {
    let userProfile = this.props.user ?
      <div>
        <div className='row'>
          <img className='avatar' src={this.props.user.avatar} width='200px' height='200px' alt='' />
        </div>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <h4>{this.props.user.name}</h4>
          </div>
        </div>
        <div className='row'>
          <h6>{this.props.user.website}</h6>
        </div>
        <div className='row'>
          <h6>{this.props.user.biography}</h6>
        </div>
      </div>
      :
      <h1>Loading</h1>

    return (
      <div>
        {userProfile}
      </div>
    )
  }

}


export default ProfileDisplay;