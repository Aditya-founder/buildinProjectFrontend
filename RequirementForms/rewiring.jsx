import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rewiring.css";

const rewiring = () => {
  const [selectedRewiringOption, setSelectedRewiringOption] = useState("");
  const navigate = useNavigate();

  const handleRewiringOptionChange = (event) => {
    setSelectedRewiringOption(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission based on selectedRewiringOption
    if (selectedRewiringOption) {
      navigate("/fuse-box-summary", {
        state: { rewiringOption: selectedRewiringOption },
      });
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="rewiring-form-container">
      <div className="rewiring-form">
        <h2>What needs rewiring?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="rewiring-option"
                  value="1-appliance"
                  checked={selectedRewiringOption === "1-appliance"}
                  onChange={handleRewiringOptionChange}
                />
                <label>1 appliance</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="rewiring-option"
                  value="1-room"
                  checked={selectedRewiringOption === "1-room"}
                  onChange={handleRewiringOptionChange}
                />
                <label>1 room</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="rewiring-option"
                  value="multiple-rooms"
                  checked={selectedRewiringOption === "multiple-rooms"}
                  onChange={handleRewiringOptionChange}
                />
                <label>Multiple rooms</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="rewiring-option"
                  value="whole-property"
                  checked={selectedRewiringOption === "whole-property"}
                  onChange={handleRewiringOptionChange}
                />
                <label>Whole property</label>
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

export default rewiring;
