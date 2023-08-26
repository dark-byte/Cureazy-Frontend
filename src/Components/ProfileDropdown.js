import React, { useState } from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri'

const ProfileDropdown = () => {

  const [username] = useState("johndoe123")
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const handleButtonClick = () => {
    setDropDownOpen(!dropDownOpen)
  };

  return (
    <div className='dropdown'>
        <button className='dropdown-btn' onClick={handleButtonClick}>
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
