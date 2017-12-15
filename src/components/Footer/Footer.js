import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div>
      <footer className='page-footer' style={{ backgroundColor: '#4a148c' }}>
        <div className='container'>
          <div className='row' style={{color: 'white'}}>
            <div className='col s3'>
              <h6>ABOUT</h6>
              <p>About Us</p>
              <p>Stats</p>
              <p>Press</p>
            </div>
            <div className='col s3'>
              <h6>HELP</h6>
              <p>Help Center</p>
              <p>Support</p>
              <p>Our Rules</p>
            </div>
            <div className='col s3'>
              <h6>HELLO</h6>
              <p>Sneak Peeks Blog</p>
              <p>Engineering Blog</p>
              <p>Newsletters</p>
            </div>
            <div className='col s3'>
              <h6>MORE FROM SNEAK PEEKS</h6>
              <p>Sneak Peeks Live</p>
              <p>The Creative Independent</p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2017 Sneak Peeks
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;