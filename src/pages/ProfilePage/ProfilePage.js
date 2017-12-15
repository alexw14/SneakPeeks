import React from 'react';
import ProfileDisplay from '../../components/ProfileDisplay/ProfileDisplay';
import UserProjects from '../../components/UserProjects/UserProjects';

const ProfilePage = (props) => {
  return (
    <div className='container'>
      <ProfileDisplay 
        user={props.user}
      />
      <UserProjects
        projects={props.projects}
      />
    </div>
  )
}

export default ProfilePage;