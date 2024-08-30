import React from "react";
import { useNavigate } from "react-router-dom";
import "./newconstructionform.css";

const newconstructionform = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/nav-1-1-1");
  };

  return (
    <div className="new-construction-form-container">
      <div className="new-construction-form">
        <h2>New Construction Form</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" value="office-space" />
            <label>Commercial - office space</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Commercial - other</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>
              Community premises - e.g. temple, mosque, church, village hall
            </label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Educational premises - e.g. school, nursery</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Residential - bungalow/cottage</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Residential - detached house</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Residential - flat/apartment</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Residential - semi-detached</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="sub-service" />
            <label>Residential - terrace</label>
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

export default newconstructionform;
