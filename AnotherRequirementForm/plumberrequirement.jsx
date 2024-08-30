import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./plumberrequirement.css";

const PlumberRequirement = () => {
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const navigate = useNavigate();

  const handleWorkTypeChange = (event) => {
    setSelectedWorkType(event.target.value);
  };

  const handleSubmit = () => {
    switch (selectedWorkType) {
      case "install":
        navigate("/fixture-form");
        break;
      case "replace":
        navigate("/fixture-form");
        break;
      case "repair":
        navigate("/problem-form");
        break;
      default:
        alert("Please select a work type.");
        break;
    }
  };

  return (
    <div className="plumber-work-type-form-container">
      <div className="plumber-work-type-form">
        <h2>What type of work do you need?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="install"
                  checked={selectedWorkType === "install"}
                  onChange={handleWorkTypeChange}
                />
                <label>Install new fixture(s)/appliance(s)</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="replace"
                  checked={selectedWorkType === "replace"}
                  onChange={handleWorkTypeChange}
                />
                <label>Replace existing fixture(s)/appliance(s)</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="work-type"
                  value="repair"
                  checked={selectedWorkType === "repair"}
                  onChange={handleWorkTypeChange}
                />
                <label>Repair existing fixture(s)/appliance(s)</label>
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

export default PlumberRequirement;
