import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'

const Nav = () => {
  return (
     <nav className="navbar navbar-fixed">
        <div className="navbar-logo">
          <Link className='logo' to="/home"><h2>CUREAZZY</h2></Link>
        </div>
        <div className="navbar-input">
          <AiOutlineSearch className='search-icon' style={{left: "15px"}}/>
          <input className='input' placeholder='Search for doctors, clinics or hospitals'/>
        </div>
        <div className="navbar-links">
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
