import React from "react";
import { useNavigate } from "react-router-dom";
import "./wiringform.css";

const wiringform = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/fuse-box-summary");
  };

  return (
    <div className="wiring-form-container">
      <div className="wiring-form">
        <h2>Is there already wiring in the desired location?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="wiring-option"
                  value="existing-wiring"
                />
                <label>Yes, there is existing wiring</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="wiring-option" value="new-wiring" />
                <label>No, I need wiring fitted too</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="wiring-option" value="not-sure" />
                <label>I'm not sure</label>
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

export default wiringform;
