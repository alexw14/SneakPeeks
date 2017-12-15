import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = (props) => {
  return (
    <div className='backgroundImg'>
      <div className='container'>
        <h1 style={{ paddingTop: '125px', marginTop: '-30px' }}>Our mission is to help bring creative projects to life.</h1>
        <div>
          <h5 style={{ marginTop: '360px' }}>Find, fund, and shop the next big thing</h5>
        </div>
        <div className='row'>
          <button className='btn white' style={{margin: '0 50px'}}><Link to='/projects/new'>Start a project</Link></button>
          <button className='btn white' style={{margin: '0 50px'}}><Link to='/projects'>View all projects</Link></button>
        </div>
      </div>
    </div>
  )
};

export default HomePage;