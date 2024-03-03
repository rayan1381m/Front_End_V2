import React from "react";
import SideBar from "../components/Sidebar-admin";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="sidebar-container"><SideBar/></div>
      <div className="body-container"></div>
    </div>
  );
};

export default Admin;
