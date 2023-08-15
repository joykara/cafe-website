import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className="header-container">
        <div className="header-title">
          <h1>Coffee Connection</h1>
          <ul>
            <li>CUMBERLAND</li>
            <li>WOONSOCKET</li>
            <li>NORTH PARK</li>
          </ul>
        </div>
        <div className="header-details">
          <div className="header-details-left">
            <h2>Hours</h2>
            <ul>
              <li>Monday - Friday: 6am - 6pm</li>
              <li>Saturday: 7am - 6pm</li>
              <li>Sunday: 7am - 5pm</li>
            </ul>
          </div>
          <div className="header-details-right">
            <h2>Address</h2>
            <p>725 Mendon Rd, Cumberland, RI 02864</p>
            <p>401-333-3333</p>
          </div>
        </div>
      </div>
  )
}

export default Header