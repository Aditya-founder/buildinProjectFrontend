import React from "react";
import { useNavigate } from "react-router-dom";
import "./painter.css";

const Painter = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/nav-3");
  };

  return (
    <div className="painter-form-container">
      <div className="painter-form">
        <h2>What is the purpose of painting?</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="painting-purpose"
              value="fresh-painting"
            />
            <label>Fresh Painting e.g. new or renovation</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="painting-purpose"
              value="upgrade-existing"
            />
            <label>Upgrade existing painting</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="painting-purpose"
              value="repainting-rental"
            />
            <label>
              Re-painting - Rental painting or just a fresh coat inside
            </label>
          </div>
        </div>
        <button className="ui button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Painter;
