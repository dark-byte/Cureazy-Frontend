import React from 'react';
import { Link } from 'react-router-dom';

const RegisterBtnGrp = () => {
  return (
    <div className="navbar-button-group">
            <button className="btn-nav-secondary">
            <Link className='link' to="/login">Login</Link>
            </button>
            <button className="btn-nav-primary">
            <Link className='link-white' to="/signup">Sign Up</Link>
            </button>
    </div>
  );
}

export default RegisterBtnGrp;
