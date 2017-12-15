import React from 'react';
import { Link } from 'react-router-dom';

let listItemStyle = {
  padding: '0 20px'
};

const Nav = (props) => {
  let navItems = props.user ?
    <ul className='right'>
      <li style={listItemStyle}><Link to='/profile'>Welcome {props.user.name}</Link></li>
      <li style={listItemStyle}><Link to="" onClick={props.handleLogout}>Log Out</Link></li>
    </ul>
    :
    <ul className='right'>
      <li style={listItemStyle}><Link to="/login">Login</Link></li>
      <li style={listItemStyle}><Link to="/signup">Sign Up</Link></li>
    </ul>

  return (
    <div>
      <div className='navbar-fixed'>
        <nav style={{ backgroundColor: '#4a148c' }}>
          <div className='nav-wrapper'>
            <ul className='left'>
              <li><Link to='/'><h4 style={{ fontFamily: 'satisfy' }}>Sneak Peeks</h4></Link></li>
            </ul>
            {navItems}
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Nav