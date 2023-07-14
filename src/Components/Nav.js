import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [navbar, setNavbar] = useState(true)

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
     <nav className={navbar? "navbar navbar-scroll" : "navbar"}>
        <div className="navbar-logo">
          <h2>MEDEEZY</h2>
        </div>
        <div className="navbar-links">
            {/* <a className="navbar-link navbar-link-active" href="#">Home</a> */}
            <Link className='navbar-link navbar-link-active' to="/">Home</Link>
            <a className="navbar-link" href='#find-doc'>Get a doctor</a>
            <div className="navbar-button-group">
              <button className="btn-nav-secondary">
                <Link className='link' to="/login">Login</Link>
              </button>
              <button className="btn-nav-primary">
                <Link className='link link-white' to="/signup">Sign Up</Link>
              </button>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
