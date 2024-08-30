import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./electricalproperty.css";

const electricalproperty = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const navigate = useNavigate();

  const handlePropertyTypeChange = (event) => {
    setSelectedPropertyType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission based on selectedPropertyType
    if (selectedPropertyType) {
      navigate("/property-summary", {
        state: { propertyType: selectedPropertyType },
      });
    } else {
      alert("Please select a property type.");
    }
  };

  return (
    <div className="property-type-form-container">
      <div className="property-type-form">
        <h2>What type of property is this for?</h2>
        <div className="ui form">
          <div className="grouped fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="property-type"
                  value="apartment-flat"
                  checked={selectedPropertyType === "apartment-flat"}
                  onChange={handlePropertyTypeChange}
                />
                <label>Apartment/flat</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="property-type"
                  value="bungalow"
                  checked={selectedPropertyType === "bungalow"}
                  onChange={handlePropertyTypeChange}
                />
                <label>Bungalow</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="property-type"
                  value="commercial-property"
                  checked={selectedPropertyType === "commercial-property"}
                  onChange={handlePropertyTypeChange}
                />
                <label>Commercial property</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input
                  type="radio"
                  name="property-type"
                  value="house"
                  checked={selectedPropertyType === "house"}
                  onChange={handlePropertyTypeChange}
                />
                <label>House</label>
              </div>
            </div>
          </div>
          <button className="ui button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default electricalproperty;
