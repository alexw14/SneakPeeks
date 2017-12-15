import React from 'react';
import ProfileDisplay from '../../components/ProfileDisplay/ProfileDisplay';

const ProfilePage = (props) => {
  return (
    <div>
      <ProfileDisplay 
        user={props.user}
      />
    </div>
  )
}

export default ProfilePage;