import React from "react";
import { useNavigate } from "react-router-dom";
import "./switchoutletinstall.css";

const switchoutletinstall = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/switch-outlet-count");
  };

  return (
    <div className="switch-outlet-install-form-container">
      <div className="switch-outlet-install-form">
        <h2>What kind of switch or outlet installation is this?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="install-option" value="new-install" />
                <label>Install new switch or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="install-option"
                  value="replace-install"
                />
                <label>Replace existing switch or outlets</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="install-option"
                  value="move-install"
                />
                <label>Move existing switch or outlets</label>
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

export default switchoutletinstall;
