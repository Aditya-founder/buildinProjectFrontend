import React from "react";
import { useNavigate } from "react-router-dom";
import "./floodstatus.css";

const floodstatus = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/flood-status");
  };

  return (
    <div className="flood-status-form-container">
      <div className="flood-status-form">
        <h2>Is any part of the property currently flooded?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="flood-status" value="yes" />
                <label>Yes</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="flood-status" value="no" />
                <label>No</label>
              </div>
            </div>
          </div>
          <button className="ui button" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default floodstatus;
