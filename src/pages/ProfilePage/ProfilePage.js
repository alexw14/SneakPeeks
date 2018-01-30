import React, { Component } from 'react';
import ProfileDisplay from '../../components/ProfileDisplay/ProfileDisplay';
import UserProjects from '../../components/UserProjects/UserProjects';

class ProfilePage extends Component {

  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className='container'>
        <ProfileDisplay
          user={this.props.user}
        />
        <UserProjects
          projects={this.props.projects}
          numberWithCommas={this.numberWithCommas}
        />
      </div>
    )
  }
}

export default ProfilePage;