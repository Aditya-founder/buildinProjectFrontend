import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fusework.css";

const fusework = () => {
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  const navigate = useNavigate();

  const handleWorkTypeChange = (event) => {
    const value = event.target.value;
    setSelectedWorkTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    // Handle form submission based on selectedWorkTypes
    if (selectedWorkTypes.length > 0) {
      navigate("/fuse-box-summary", {
        state: { workTypes: selectedWorkTypes },
      });
    } else {
      alert("Please select at least one work type.");
    }
  };

  return (
    <div className="fuse-box-work-form-container">
      <div className="fuse-box-work-form">
        <h2>What do you need doing with the fuse box?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="install-new-fuse-box"
                  checked={selectedWorkTypes.includes("install-new-fuse-box")}
                  onChange={handleWorkTypeChange}
                />
                <label>Install new fuse box</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="replace-existing-fuse-box"
                  checked={selectedWorkTypes.includes(
                    "replace-existing-fuse-box"
                  )}
                  onChange={handleWorkTypeChange}
                />
                <label>Replace an existing fuse box</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="repair-troubleshoot-fuse-box"
                  checked={selectedWorkTypes.includes(
                    "repair-troubleshoot-fuse-box"
                  )}
                  onChange={handleWorkTypeChange}
                />
                <label>
                  Repair/troubleshoot problem with existing fuse box
                </label>
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

export default fusework;
