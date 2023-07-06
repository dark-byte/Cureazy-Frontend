import React from 'react';

const Nav = () => {
  return (
     <nav className="navbar">
        <div className="navbar-logo">
          <h2>MEDEEZY</h2>
        </div>
        <div className="navbar-links">
            <a className="navbar-link navbar-link-active" href="#">Home</a>
            <a className="navbar-link" href='#'>Book Appointment</a>
            <div className="navbar-button-group">
              <button className="btn-nav-secondary">Login</button>
              <button className="btn-nav-primary">Sign up</button>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
