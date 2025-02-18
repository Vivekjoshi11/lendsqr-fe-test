import React from "react";
import UserStats from "../users/UserStats";
import UserTable from "../users/UserTable";
import "../styles/dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <UserStats />
      <UserTable />
    </div>
  );
};

export default Dashboard;
