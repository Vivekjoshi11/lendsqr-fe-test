import React, { useEffect, useState } from "react";
import "../../styles/userdetail.scss";

interface User {
  id: number;
  username: string;
  email: string;
  phoneNumber: string;
  accountBalance: string;
  bankDetails: string;
  tier: number;
  personalInfo?: {
    fullName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residenceType: string;
  };
  employment?: {
    education: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials?: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor?: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }[];
}

interface UserDetailProps {
  userId: number;
  goBack: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId, goBack }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(

          "https://run.mocky.io/v3/7be72f03-1aa6-46b5-bcbc-976d175a648c"
        );
        if (!response.ok) throw new Error("Failed to fetch user details");

        const users = await response.json();
        const selectedUser = users.find((u: User) => u.id === userId);
        if (!selectedUser) throw new Error("User not found");

        setUser(selectedUser);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!user || !user.personalInfo)
    return <p className="error">User data is missing.</p>;

  return (
    <div className="user-detail-container">
      <button className="back-button" onClick={goBack}>
        ← Back to Users
      </button>
      <div className="main-header">
        <h1 className="headerh1">User Details</h1>
        <div className="actions">
          <button className="blacklist">Blacklist User</button>
          <button className="activate">Activate User</button>
        </div>
      </div>
      <div className="header">
        <div className="user-info">
          <div className="avatar">{user.username?.charAt(0).toUpperCase()}</div>
          <div className="details">
            <div className="column">
              <h2>{user.personalInfo.fullName}</h2>
              <p className="user-tire">LSQFf587g90</p>
            </div>
            <div className="right-line"></div>
            <div className="column">
              <p className="user-tier">User's Tier</p>
              <p className="user-tire star">
                {" "}
                {"★".repeat(user.tier)}
                {"☆".repeat(5 - user.tier)}
              </p>
            </div>
            <div className="right-line"></div>
            <div className="column">
              <p className="balance">₦{user.accountBalance}</p>
              <p className="bank-details">{user.bankDetails}</p>
            </div>
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
      </div>
      <div className="main-tab">
        <div className="info-section">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <p>
              FULL NAME<strong> {user.personalInfo.fullName}</strong>
            </p>
            <p>
              PHONE NUMBER <strong>{user.personalInfo.phoneNumber}</strong>
            </p>
            <p>
              EMAIL ADDRESS<strong> {user.personalInfo.email}</strong>
            </p>
            <p>
              BVN<strong> {user.personalInfo.bvn}</strong>
            </p>
            <p>
              GENDER<strong> {user.personalInfo.gender}</strong>
            </p>
            <p>
              MARATIAL STATUS<strong> {user.personalInfo.maritalStatus}</strong>{" "}
            </p>
            <p>
              CHILDREN<strong> {user.personalInfo.children} </strong>
            </p>
            <p>
              TYPE OF RESIDENCE
              <strong> {user.personalInfo.residenceType} </strong>{" "}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="info-section">
          <h3>Education and Employment</h3>
          <div className="info-grid-employe info-grid">
            <p>
              LEVEL OF EDUCATION<strong> {user.personalInfo.fullName}</strong>
            </p>
            <p>
              EMPLOYEMENT STATUS{" "}
              <strong>{user.personalInfo.phoneNumber}</strong>
            </p>
            <p>
              SECTOR OF EMPLOYMENT<strong> {user.personalInfo.email}</strong>
            </p>
            <p>
              DURATION OF EMPLOYMENT<strong> {user.personalInfo.bvn}</strong>
            </p>
            <p>
              OFFICE MAIL<strong> {user.personalInfo.gender}</strong>
            </p>
            <p>
              MONTHLY INCOME<strong> {user.personalInfo.maritalStatus}</strong>{" "}
            </p>
            <p>
              LOAN PAYMENT<strong> {user.personalInfo.children} </strong>
            </p>
            <p>
              TYPE OF RESIDENCE
              <strong> {user.personalInfo.residenceType} </strong>{" "}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="info-section">
          <h3>Socials</h3>
          <div className="info-grid">
            <p>
              TWITTER<strong> {user.socials?.twitter}</strong>
            </p>
            <p>
              FACEBOOK <strong>{user.socials?.facebook}</strong>
            </p>
            <p>
              INSTAGRAM<strong> {user.socials?.instagram}</strong>
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="info-section">
          <h3>Guarantor</h3>
          <div className="info-grid">
            <p>
              FULL NAME<strong> {user.personalInfo.fullName}</strong>
            </p>
            <p>
              PHONE NUMBER <strong>{user.personalInfo.phoneNumber}</strong>
            </p>
            <p>
              EMAIL ADDRESS<strong> {user.personalInfo.email}</strong>
            </p>
            <p>
              RELATIONSHIP STATUS
              <strong> {user.personalInfo.maritalStatus}</strong>
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="info-section">
          {/* <h3>Personal Information</h3> */}
          <div className="info-grid">
            <p>
              FULL NAME<strong> {user.personalInfo.fullName}</strong>
            </p>
            <p>
              PHONE NUMBER <strong>{user.personalInfo.phoneNumber}</strong>
            </p>
            <p>
              EMAIL ADDRESS<strong> {user.personalInfo.email}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
