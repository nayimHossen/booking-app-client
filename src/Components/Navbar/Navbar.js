import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Lamabooking</span>
          <div className="navItems">
            <button type="button" className="navButton">Register</button>
            <button type="button" className="navButton">Login</button>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
