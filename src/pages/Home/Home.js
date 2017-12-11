import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome to Sneak Peeks</h1>
      <h1><Link to='/projects/new'>Start a project</Link></h1>
      <h1><Link to='/projects'>View all projects</Link></h1>
    </div>
  )
};

export default Home;