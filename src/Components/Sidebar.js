import React from "react";
import {BiGridSmall} from "react-icons/bi"


const Sidebar = ({
  activeTab,
  setActiveTab,
  sidebarVisible,
  toggleSidebar,
}) => {
  const tabs = [
    "Overview",
    "Appointment",
    "Doctors",
    "Payment",
    "Help & Center",
    "Setting",
  ];

  return (
    <div className={`sidebar ${sidebarVisible ? "" : "hidden-sidebar"}`}>
      <div className="logo-booking  ">CUREAZZY</div>
      <ul className="tab-list">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
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
