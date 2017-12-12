import React from 'react';
import {Link} from 'react-router-dom';

let listItemStyle = {
  padding: '0 20px'
};

const Nav = (props) => {
  let nav = props.user ?
    <ul className='right'>
      <li style={listItemStyle}>Welcome {props.user.name}</li>
      <li style={listItemStyle}><Link to="" onClick={props.handleLogout}>Log Out</Link></li>
    </ul>
    :
    <ul className='right'>
      <li style={listItemStyle}><Link to="/login">Login</Link></li>
      <li style={listItemStyle}><Link to="/signup">Sign Up</Link></li>
    </ul>

  return (
    <div>
      <nav style={{backgroundColor: '#4a148c'}}>
        <div className='nav-wrapper'>
          <ul className='left'>
            <li><Link to='/'><h4 style={{fontFamily: 'satisfy'}}>Sneak Peeks</h4></Link></li>
          </ul>
          {nav}
        </div>
    </nav>
    </div>
  )
};

export default Nav