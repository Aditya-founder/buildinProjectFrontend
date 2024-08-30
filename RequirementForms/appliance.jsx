import React from "react";
import { useNavigate } from "react-router-dom";
import "./appliance.css";

const appliance = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/fuse-box-summary");
  };

  return (
    <div className="appliance-install-form-container">
      <div className="appliance-install-form">
        <h2>For What Type Of Appliance(s)</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="air-conditioner"
                />
                <label>Air conditioner</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="work-type" value="door-bell" />
                <label>Door bell</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="work-type" value="fan" />
                <label>Fan</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="work-type" value="geyser" />
                <label>Geyser (water heater)</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="inverter-stabaliser"
                />
                <label>Inverter and stabilizer</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="microwave-oven"
                />
                <label>Microwave/oven</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input type="checkbox" name="work-type" value="refrigerator" />
                <label>Refrigerator</label>
              </div>
            </div>
            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="work-type"
                  value="washing-machine"
                />
                <label>Washing machine</label>
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

export default appliance;
