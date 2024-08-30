import React from "react";
import { useNavigate } from "react-router-dom";
import "./problemform.css";

const problemform = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/problem-selection");
  };

  return (
    <div className="problem-form-container">
      <div className="problem-form">
        <h2>Which problem(s) are you experiencing?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="drainage-problem-bathroom"
                />
                <label>Drainage problem - bathroom</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="drainage-problem-sink-basin"
                />
                <label>Drainage problem - sink/basin</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="drainage-problem-toilet"
                />
                <label>Drainage problem - toilet</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="poor-water-pressure"
                />
                <label>Poor water pressure</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="tap-not-working"
                />
                <label>Tap not working</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="water-drainage"
                />
                <label>Water drainage</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="water-leak-geyser"
                />
                <label>Water leak - geyser</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="problem-option"
                  value="water-leak-tap"
                />
                <label>Water leak - tap</label>
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

export default problemform;
