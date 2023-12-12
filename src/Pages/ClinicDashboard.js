import React from "react";
import Sidebar from "../Components/Sidebar";
import Overview from "../Components/Clinic.Overview"
import Appointment from "../Components/Clinic.Appointment"
import Doctors from "../Components/Clinic.Doctors"
import Payments from "../Components/Clinic.Payments"
import Help from "../Components/Clinic.Help"
import Setting from "..//Components/Clinic.Setting"
import { useState } from "react";

const ClinicDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [sidebarVisible, setSidebarVisible] = useState(true);


  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Appointment":
        return <Appointment />;
      case "Doctors":
        return <Doctors />;
      case "Payment":
        return <Payments />;
      case "Help & Center":
        return <Help />;
      case "Setting":
        return <Setting />;
      default:
        return null;
    }
  };

  return (
    <div className="booking">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarVisible={sidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <div className={`main-content-booking ${sidebarVisible ? "" : "expanded"}`}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ClinicDashboard;
