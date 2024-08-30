import React from "react";
import "./changeDeleteOptions.css";
import { useNavigate } from "react-router-dom";

const ChangeDeleteOptions = ({ onOptionSelect }) => {
  const navigate = useNavigate();

  return (
    <div className="change-delete-options">
      <button
        className="change-delete-button change-password-button"
        onClick={() => navigate("/change-password-form")}
      >
        Change Password
      </button>
      <button
        className="change-delete-button delete-account-button"
        onClick={() => navigate("/delete-confirmation")}
      >
        Delete Your ID
      </button>
    </div>
  );
};

export default ChangeDeleteOptions;
