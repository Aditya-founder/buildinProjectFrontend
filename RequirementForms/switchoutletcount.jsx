import React from "react";
import { useNavigate } from "react-router-dom";
import "./switchoutletcount.css";

const switchoutletcount = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/wiring-form");
  };

  return (
    <div className="switch-outlet-count-form-container">
      <div className="switch-outlet-count-form">
        <h2>How many switches or outlets is this for?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="1-switch-outlet"
                />
                <label>1 switch or outlet</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="2-switches-outlets"
                />
                <label>2 switches or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="3-switches-outlets"
                />
                <label>3 switches or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="4-switches-outlets"
                />
                <label>4 switches or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="5-switches-outlets"
                />
                <label>5 switches or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="count-option"
                  value="6+-switches-outlets"
                />
                <label>6+ switches or outlets</label>
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

export default switchoutletcount;
