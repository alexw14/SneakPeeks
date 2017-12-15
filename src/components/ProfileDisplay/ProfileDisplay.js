import React, { Component } from 'react';

const ProfileDisplay = (props) => {
  let userProfile = props.user ?
    <div>
      <div className='row'>
        <img className='avatar' src={props.user.avatar} width='200px' height='200px' alt='' />
      </div>
      <div className='row'>
        <div className='col s6 offset-s3'>
          <h4>{props.user.name}</h4>
        </div>
      </div>
      <div className='row'>
        <h6>{props.user.website}</h6>
      </div>
      <div className='row'>
        <h6>{props.user.biography}</h6>
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

export default ProfileDisplay;