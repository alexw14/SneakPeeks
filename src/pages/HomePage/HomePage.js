import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = (props) => {
  return (
    <div className='backgroundImg'>
      <div>
        <h1 style={{paddingTop: '100px', marginTop: '-30px'}}>Welcome to Sneak Peeks</h1>
        <h1><Link to='/projects/new'>Start a project</Link></h1>
        <h1><Link to='/projects'>View all projects</Link></h1>
        <h1><Link to='/profile'>View my profile</Link></h1>
      </div>
    </div>
  )
};

export default HomePage;