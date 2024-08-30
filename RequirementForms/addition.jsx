import React from "react";
import { useNavigate } from "react-router-dom";
import "./addition.css";

const addition = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/nav-1");
  };

  return (
    <div className="addition-container">
      <div className="addition-form">
        <h2>What Type of Addition?</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="addition-type" value="additional-floor" />
            <label>Additional Floor</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="addition-type"
              value="basement-extension"
            />
            <label>Basement Extension</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="addition-type" value="double-garage" />
            <label>Double Garage</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="addition-type" value="loft-conversion" />
            <label>Loft Conversion</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="addition-type" value="servant-quarters" />
            <label>Servant Quarters</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="addition-type" value="single-garage" />
            <label>Single Garage</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="addition-type"
              value="single-storey-extension"
            />
            <label>Single Storey Rear/Side Extension</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="addition-type"
              value="multi-storey-extension"
            />
            <label>2 or More Storey Rear/Side Extension</label>
          </div>
        </div>
        <div className="field">
          <div className="ui input focus">
            <input type="text" placeholder="If any other" />
          </div>
        </div>
        <button className="ui button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default addition;
