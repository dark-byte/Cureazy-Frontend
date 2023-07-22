import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [navbar, setNavbar] = useState(true)
  const [sectionDoctor, setSectionDoctor] = useState(false);

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

  const getDoc= ()=>{
    setSectionDoctor(!sectionDoctor)
  }

  return (
     <nav className={navbar? "navbar navbar-scroll" : "navbar"}>
        <div className="navbar-logo">
          <Link className='logo' to="/home"><h2>CUREAZZY</h2></Link>
        </div>
        <div className="navbar-links">
            <Link className={sectionDoctor ? 'navbar-link': 'navbar-link navbar-link-active'} onClick={getDoc} to="/home">Home</Link>
            <a className={sectionDoctor ? "navbar-link navbar-link-active" : "navbar-link"} onClick={getDoc} href='#find-doc'>Get a doctor</a>
            <div className="navbar-button-group">
              <button className="btn-nav-secondary">
                <Link className='link' to="/login">Login</Link>
              </button>
              <button className="btn-nav-primary">
                <Link className='link-white' to="/signup">Sign Up</Link>
              </button>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
