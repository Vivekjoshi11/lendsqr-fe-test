import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import UserStats from "../components/users/UserStats";
import UserTable from "../components/users/UserTable";
import "../styles/dashboard.scss";
import UserDetail from "../components/layout/userdetail";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navbar />
      
      {/* Sidebar and Main Content Wrapper */}
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
            <h1>Users</h1>
          <UserStats />
          <UserTable />
          {/* <UserDetail /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
