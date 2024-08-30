import React from "react";
import { useNavigate } from "react-router-dom";
import "./typeofpaint.css";

const TypeOfPaint = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/nav-1-1-1");
  };

  return (
    <div className="type-of-paint-form-container">
      <div className="type-of-paint-form">
        <h2>Which of the following do you need?</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="paint-type" value="interior-painting" />
            <label>Interior painting</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="paint-type"
              value="interior-exterior-painting"
            />
            <label>Interior and exterior painting</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="paint-type" value="exterior-painting" />
            <label>Exterior painting</label>
          </div>
        </div>
        <button className="ui button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TypeOfPaint;
