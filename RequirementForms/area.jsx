import React from "react";
import { useNavigate } from "react-router-dom";
import "./area.css";

const area = () => {
  const navigate = useNavigate();

  const handleAreaChange = () => {
    navigate("/floors");
  };

  return (
    <div className="area-container">
      <div className="area-form">
        <h2>Select Area</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="area" value="less-than-500" />
            <label>Less than 500 sq. ft.</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="area" value="500-999" />
            <label>500-999 sq. ft.</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="area" value="1000-1999" />
            <label>1000-1999 sq. ft.</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="area" value="2000-4999" />
            <label>2000-4999 sq. ft.</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="area" value="more-than-5000" />
            <label>More than 5000 sq. ft.</label>
          </div>
        </div>
        <div className="field">
          <div className="ui input focus">
            <input type="text" placeholder="If any other" />
          </div>
        </div>
        <button className="ui button" onClick={handleAreaChange}>
          Next
        </button>
      </div>
    </div>
  );
};

export default area;
