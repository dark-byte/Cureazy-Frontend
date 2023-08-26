import React from "react";
import { BiRupee, BiHelpCircle } from "react-icons/bi";
import { BsGrid, BsCalendar2Date } from "react-icons/bs";
import {CgProfile} from "react-icons/cg"
import {CiSettings} from "react-icons/ci"



const Sidebar = ({
  activeTab,
  setActiveTab,
  sidebarVisible,
  toggleSidebar,
}) => {
  const tabs = [
    {
      name: "Overview",
      icon: BsGrid,
    },
    {
      name: "Appointment",
      icon: BsCalendar2Date,
    },
    {
      name: "Doctors",
      icon: CgProfile,
    },
    {
      name: "Payment",
      icon: BiRupee,
    },
    {
      name: "Help & Center",
      icon: BiHelpCircle,
    },
    {
      name: "Setting",
      icon: CiSettings,
    },
  ];

  return (
    <div className={`sidebar ${sidebarVisible ? "" : "hidden-sidebar"}`}>
      <div className="logo-booking  ">CUREAZZY</div>
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={tab.name === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab.name)}
          >
            <tab.icon /> <span>{tab.name}</span>
          </li>
        ))}
      </ul>
      <button className="toggle-button" onClick={toggleSidebar}>
        {sidebarVisible ? "<" : ">"}
      </button>
    </div>
  );
};

export default Sidebar;
