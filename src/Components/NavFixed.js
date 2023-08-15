import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import ProfileDropdown from './ProfileDropdown';
import RegisterBtnGrp from './RegisterBtnGrp';

const Nav = (loggedIn) => {

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
            {loggedIn ? <ProfileDropdown/> : <RegisterBtnGrp/>}
        </div>
    </nav>
  );
}

export default Nav;
