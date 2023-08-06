import React, { useState } from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri'

const ProfileDropdown = () => {

    const [username, setUsername] = useState("johndoe123")
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const handleButtonClick = () => {
      setDropDownOpen(!dropDownOpen)  
    };

  return (
    <div className="">
        <button type="button" class="button" onClick={handleButtonClick}>
            <RiArrowDropDownLine/>
        </button>
        {dropDownOpen && (
            <div class="dropdown">
            <ul>
                <li>Profile</li>
                <li>Apointments</li>
                <li>Bookmarks</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
        )}
    </div>
  );
}

export default ProfileDropdown;
