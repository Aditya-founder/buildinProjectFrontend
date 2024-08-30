import React from "react";
import "./engineerDashboard.css";
import { Link, useParams } from "react-router-dom";

const EngineerDashboard = () => {
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
          <h2>Name: John Doe</h2>
          <p>Address: 1234 Elm Street, Springfield</p>
          <p>Date of Birth: January 1, 1990</p>
          <button className="btn-change-photo">Change Profile Photo</button>
        </div>
      </div>

      <div className="actions-section">
        <Link to="/updateengineerdetails" className="dashboard-link">
          <button className="dashboard-btn">Update Your Information</button>
        </Link>
        <Link to="/email-password-change" className="dashboard-link">
          <button className="dashboard-btn">
            Change Password or Delete Your ID
          </button>
        </Link>
        <Link to="/change-worked-with" className="dashboard-link">
          <button className="dashboard-btn">
            Update Companies You Worked with
          </button>
        </Link>
        <Link to="/change-about" className="dashboard-link">
          <button className="dashboard-btn">Change About Section</button>
        </Link>
        <Link to="/change-message-by-my-side" className="dashboard-link">
          <button className="dashboard-btn">
            Change "Message from My Side"
          </button>
        </Link>
        <Link to="/updateengineerdetails" className="dashboard-link">
          <button className="dashboard-btn signout-btn">Sign Out</button>
        </Link>
      </div>
    </div>
  );
};

export default EngineerDashboard;
