import React, { useState, useEffect } from 'react';

const Nav = () => {

  const [navbar, setNavbar] = useState(true)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
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
