import React from "react";
import UserStats from "../users/UserStats";
import "../styles/dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <UserStats />
    </div>
  );
};

export default Dashboard;
