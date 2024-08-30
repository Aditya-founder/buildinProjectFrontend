import React from "react";
import { useNavigate } from "react-router-dom";
import "./fixtureform.css";

const fixtureform = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/fixture-selection");
  };

  return (
    <div className="fixture-form-container">
      <div className="fixture-form">
        <h2>Which fixture(s)/appliance(s) need installing?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui checkbox ">
                <input type="radio" name="fixture-option" value="basin-sink" />
                <label>Basin and sink</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input
                  type="radio"
                  name="fixture-option"
                  value="bath-fitting"
                />
                <label>Bath fitting e.g. shower</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input type="radio" name="fixture-option" value="geyser" />
                <label>Geyser (water heater)</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input type="radio" name="fixture-option" value="pipework" />
                <label>Pipework</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input type="radio" name="fixture-option" value="taps" />
                <label>Tap(s)</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input type="radio" name="fixture-option" value="toilet" />
                <label>Toilet</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input
                  type="radio"
                  name="fixture-option"
                  value="toilet-water-hose"
                />
                <label>Toilet water hose</label>
              </div>
            </div>
            <div className="field">
              <div className="ui  checkbox">
                <input
                  type="radio"
                  name="fixture-option"
                  value="water-inlet-pipe"
                />
                <label>
                  Water inlet pipe e.g for washing machine/dishwasher
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

export default fixtureform;
