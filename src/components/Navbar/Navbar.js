import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Sneak Peeks</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>Sign In</li>
          </ul>
        </div>
      </div>
    </div>
  )

};

export default Navbar;