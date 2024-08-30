import React from "react";
import "./companiesDashboard.css";
import { Link, useParams } from "react-router-dom";

const companiesDashboard = () => {
  const { id } = useParams();
  console.log("id yahi hai kya", id);
  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img
          src="https://t4.ftcdn.net/jpg/06/31/62/81/360_F_631628193_pK1J6C1Bbqn8IFAt5nsn9s45G5yKgS4o.jpg"
          alt="Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          <h2>Name: Jane Doe</h2>
          <p>Address: 5678 Maple Avenue, Springfield</p>
          <button className="btn-change-photo">Change Profile Photo</button>
        </div>
      </div>

      <div className="actions-section">
        <Link to="/updatecompanydetails">
          <button className="dashboard-btn">Update Your Information</button>
        </Link>

        <Link to="/email-password-change">
          <button className="dashboard-btn">
            Change Your Password or Delete Your ID
          </button>
        </Link>

        {/* <button className="dashboard-btn">Change Your Card Description</button> */}
        {/* <button className="dashboard-btn">Change Your Blog Description</button> */}
        <button className="dashboard-btn signout-btn">Sign Out</button>
      </div>
    </div>
  );
};

export default companiesDashboard;
