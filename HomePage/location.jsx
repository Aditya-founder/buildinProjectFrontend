import React from "react";
import { useNavigate } from "react-router-dom";
import "./location.css";

const Location = ({ delhiAreas, additionalDelhiAreas }) => {
  const navigate = useNavigate();

  const handleClick = (area) => {
    console.log(area);
    navigate("/state-wise-workers", { state: { area } });
  };

  return (
    <div>
      <div className="location-chooser">
        <div className="location-header-box">
          <div className="location-header">HIRE ANYONE INSTANTLY</div>
        </div>
        <div className="selection">
          <div className="selection-header">
            <div className="selection-title">
              Find Workers Based On Your Location
            </div>
          </div>
          <div className="selection-pincode-header">
            {delhiAreas.map((location, index) => (
              <div key={index} className="location-tag">
                <button onClick={() => handleClick(location.area)}>
                  {location.area}
                </button>
              </div>
            ))}
          </div>
          <div className="selection-pincode-header">
            {additionalDelhiAreas.map((location, index) => (
              <div key={index} className="location-tag">
                <button onClick={() => handleClick(location.area)}>
                  {location.area}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
