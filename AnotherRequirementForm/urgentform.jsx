import React from "react";
import { useNavigate } from "react-router-dom";
import "./urgentform.css";

const UrgentForm = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/service-timing");
  };

  return (
    <div className="urgent-form-container">
      <div className="urgent-form">
        <h2>When do you want this service completed?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input type="checkbox" name="service-timing" value="asap" />
                <label>As soon as possible</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="checkbox"
                  name="service-timing"
                  value="next-few-days"
                />
                <label>Within the next few days</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="checkbox"
                  name="service-timing"
                  value="next-week"
                />
                <label>Within the next week</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="checkbox"
                  name="service-timing"
                  value="next-month"
                />
                <label>Within the next month</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="checkbox"
                  name="service-timing"
                  value="no-specific-date"
                />
                <label>I don't have a specific date in mind</label>
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

export default UrgentForm;
