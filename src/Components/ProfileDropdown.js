import React, { useState } from 'react';
import defaultPP from '../images/default-pp.png'
import {RiArrowDropDownLine} from 'react-icons/ri'

const ProfileDropdown = () => {

  const [username] = useState("johndoe123")
  const [profilePicture] = useState()
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const handleButtonClick = () => {
    setDropDownOpen(!dropDownOpen)
  };

  return (
    <div className='dropdown'>
        <button className='dropdown-btn' onClick={handleButtonClick}>
          <img className='nav-pp' src={profilePicture ? profilePicture : defaultPP} alt="" />
        {username} <RiArrowDropDownLine/>
        </button>
          <div className={dropDownOpen? 'dropdown-content show' : 'dropdown-content'}>
            <ul>
                <li>Profile</li>
                <li>Apointments</li>
                <li>Bookmarks</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
          </div>
    </div>
  );
}

export default ProfileDropdown;
