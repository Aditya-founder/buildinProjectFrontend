import React from "react";
import { useNavigate } from "react-router-dom";
import "./plans.css";

const plans = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/nav-1-1-1");
  };

  return (
    <div className="plans-container">
      <div className="plans-form">
        <h2>What types of plans do you need</h2>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Complete plan</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Exterior Elevations</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Floor plans</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Interior Elevations</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Landscape plans</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>Site plans</label>
        </div>
        <div className="plans-checkbox">
          <input type="checkbox" name="example" />
          <label>I would like to discuss with professionals</label>
        </div>
        <div className="field">
          <div className="ui input focus">
            <input type="text" placeholder="If any other" />
          </div>
        </div>
        <button className="ui button" onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default plans;
