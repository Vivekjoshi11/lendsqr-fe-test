import React from "react";
import "../../styles/userdetail.scss";
// import { Button } from "@/components/ui/button";

const UserDetail = () => {
  return (
    <div className="user-detail-container">
      <div className="header">
        <button className="back-button">&larr; Back to Users</button>
      </div>
      <div className="user-card">
        <div className="user-info">
          <div className="avatar">G</div>
          <div className="details">
            <h2>Grace Effiom</h2>
            <p className="user-tier">User's Tier: ★★☆☆☆</p>
            <p className="balance">₦200,000.00</p>
            <p className="bank-details">9912345678 / Providus Bank</p>
          </div>
        </div>
        <div className="actions">
          {/* <Button className="blacklist">Blacklist User</Button>
          <Button className="activate">Activate User</Button> */}
        </div>
      </div>
      
      <div className="tabs">
        <button className="active">General Details</button>
        <button>Documents</button>
        <button>Bank Details</button>
        <button>Loans</button>
        <button>Savings</button>
        <button>App and System</button>
      </div>

      <div className="info-section">
        <h3>Personal Information</h3>
        <div className="info-grid">
          <p><strong>Full Name:</strong> Grace Effiom</p>
          <p><strong>Phone Number:</strong> 07060780922</p>
          <p><strong>Email Address:</strong> grace@gmail.com</p>
          <p><strong>BVN:</strong> 07060780922</p>
          <p><strong>Gender:</strong> Female</p>
          <p><strong>Marital Status:</strong> Single</p>
          <p><strong>Children:</strong> None</p>
          <p><strong>Type of Residence:</strong> Parent’s Apartment</p>
        </div>
      </div>

      <div className="info-section">
        <h3>Education and Employment</h3>
        <div className="info-grid">
          <p><strong>Level of Education:</strong> B.Sc</p>
          <p><strong>Employment Status:</strong> Employed</p>
          <p><strong>Sector of Employment:</strong> FinTech</p>
          <p><strong>Duration of Employment:</strong> 2 years</p>
          <p><strong>Office Email:</strong> grace@lendsqr.com</p>
          <p><strong>Monthly Income:</strong> ₦200,000.00 - ₦400,000.00</p>
          <p><strong>Loan Repayment:</strong> 40,000</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
