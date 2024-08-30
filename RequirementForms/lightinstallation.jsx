import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lightinstallation.css";

const lightinstallation = () => {
  const [selectedLightOption, setSelectedLightOption] = useState("");
  const navigate = useNavigate();

  const handleLightOptionChange = (event) => {
    setSelectedLightOption(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission based on selectedLightOption
    if (selectedLightOption) {
      navigate("/fuse-box-summary", {
        state: { lightOption: selectedLightOption },
      });
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="light-installation-form-container">
      <div className="light-installation-form">
        <h2>How many lights do you need installed?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="light-option"
                  value="just-1-light"
                  checked={selectedLightOption === "just-1-light"}
                  onChange={handleLightOptionChange}
                />
                <label>Just 1 light</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="light-option"
                  value="2-5-lights"
                  checked={selectedLightOption === "2-5-lights"}
                  onChange={handleLightOptionChange}
                />
                <label>2 - 5 lights</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="light-option"
                  value="6-9-lights"
                  checked={selectedLightOption === "6-9-lights"}
                  onChange={handleLightOptionChange}
                />
                <label>6 - 9 lights</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="light-option"
                  value="10-19-lights"
                  checked={selectedLightOption === "10-19-lights"}
                  onChange={handleLightOptionChange}
                />
                <label>10 - 19 lights</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="light-option"
                  value="20-lights-or-more"
                  checked={selectedLightOption === "20-lights-or-more"}
                  onChange={handleLightOptionChange}
                />
                <label>20 lights or more</label>
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

export default lightinstallation;
