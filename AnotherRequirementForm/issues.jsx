import React from "react";
import { useNavigate } from "react-router-dom";
import "./issues.css";

const issues = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/issue-duration");
  };

  return (
    <div className="issues-form-container">
      <div className="issues-form">
        <h2>How long have you had this issue for?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="issue-duration"
                  value="just-noticed"
                />
                <label>I've just noticed</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="issue-duration" value="few-days" />
                <label>A few days</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="issue-duration"
                  value="about-a-week"
                />
                <label>About a week</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="issue-duration"
                  value="up-to-a-month"
                />
                <label>Up to a month</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="issue-duration"
                  value="longer-than-a-month"
                />
                <label>Longer than a month</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="issue-duration" value="not-sure" />
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

export default issues;
