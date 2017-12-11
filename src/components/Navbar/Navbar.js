import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  let nav = props.user ? 
    <div className="top-bar-right">
      <ul className="menu">
        <li>Welcome {props.user.name}</li>
        <li><Link to="" onClick={props.handleLogout}>Log Out</Link></li>
      </ul>
    </div>
    :
    <div className="top-bar-right">
      <ul className="menu">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </div>

  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><Link to="/">Sneak Peeks</Link></li>
          </ul>
        </div>
        {nav}
      </div>
    </div>
  )

};

export default Navbar;