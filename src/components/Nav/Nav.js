import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize';

let navStyle = {
  backgroundColor: '#009688'
}

const Nav = (props) => {
  let nav = props.user ?
    <ul>
      <li>Welcome {props.user.name}</li>
      <li><Link to="" onClick={props.handleLogout}>Log Out</Link></li>
    </ul>
    :
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Sign Up</Link></li>
    </ul>

  return (
    <div>
      <Navbar brand='Sneak Peeks' right>
        {nav}
      </Navbar>
    </div>
  )
};

export default Nav