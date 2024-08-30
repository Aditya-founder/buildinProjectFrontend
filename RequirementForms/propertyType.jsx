import React from "react";
import { useNavigate } from "react-router-dom";
import "./propertyType.css";

const propertyType = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/type-of-paints");
  };

  return (
    <div className="property-type-form-container">
      <div className="property-type-form">
        <h2>What type of property is this for?</h2>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="property-type"
              value="house-flat-bungalow"
            />
            <label>House/flat/bungalow</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="property-type" value="office-building" />
            <label>Office building</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="property-type"
              value="religious-building"
            />
            <label>Religious building</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="property-type" value="restaurant" />
            <label>Restaurant</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input type="radio" name="property-type" value="retail-store" />
            <label>Retail store</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="property-type"
              value="warehouse-industrial"
            />
            <label>Warehouse/industrial building</label>
          </div>
        </div>
        <button className="ui button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default propertyType;
