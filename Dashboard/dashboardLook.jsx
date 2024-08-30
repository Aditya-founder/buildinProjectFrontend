import React from "react";

import "./dashboardLook.css";

const DashboardLook = ({ reqUserdata }) => {
  return (
    <div className="dashboard-look-container">
      <div className="dashboard-row">
        <div className="dashboard-column">S.No</div>
        <div className="dashboard-column">
          <b>NAME</b>
        </div>
        <div className="dashboard-column">
          <b>ADDRESS</b>
        </div>
        <div className="dashboard-column">
          <b>CONTACT No.</b>
        </div>
        <div className="dashboard-column">
          <b>STATUS</b>
        </div>
      </div>
      {reqUserdata.map((user, index) => (
        <div key={index} className="dashboard-row">
          <div className="dashboard-column">{index + 1}</div>
          <div className="dashboard-column">{user.name}</div>
          <div className="dashboard-column">{user.address}</div>
          <div className="dashboard-column">{user.phoneno}</div>
          <div className="dashboard-column">
            <button className="accept-button">Accept</button>
            <button className="reject-button">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardLook;
