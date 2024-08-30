import React from "react";
import { useNavigate } from "react-router-dom";
import "./floor.css";

const Floor = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/submit");
  };

  return (
    <div className="floor-container">
      <div className="floor-form">
        <div>How many floors are you planning for?</div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="ground-floor" />
          <label htmlFor="ground-floor">Just ground floor</label>
        </div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="ground-plus-one" />
          <label htmlFor="ground-plus-one">Ground+1 floor</label>
        </div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="ground-plus-two" />
          <label htmlFor="ground-plus-two">Ground+2 floors</label>
        </div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="ground-plus-three" />
          <label htmlFor="ground-plus-three">Ground+3 floors</label>
        </div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="ground-plus-four" />
          <label htmlFor="ground-plus-four">Ground+4 floors</label>
        </div>
        <div className="floors-checkbox">
          <input type="radio" name="floors" id="discuss-professional" />
          <label htmlFor="discuss-professional">
            I would like to discuss with the professional
          </label>
        </div>
        <button className="ui button" onClick={handleButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Floor;
