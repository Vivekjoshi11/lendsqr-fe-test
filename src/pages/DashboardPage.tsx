import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import UserStats from "../components/users/UserStats";
import UserTable from "../components/users/UserTable";
import UserDetail from "../components/layout/userdetail"; 
import "../styles/dashboard.scss";

const Dashboard: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleViewDetails = (userId: number) => {
    setSelectedUserId(userId);
  };

  const handleBackToList = () => {
    setSelectedUserId(null);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <div className="dashboard-content">
          {selectedUserId === null && <h1>Users</h1>}
          {selectedUserId === null ? (
            <>
              <UserStats />
              <UserTable onViewDetails={handleViewDetails} />
            </>
          ) : (
            <UserDetail userId={selectedUserId} goBack={handleBackToList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
