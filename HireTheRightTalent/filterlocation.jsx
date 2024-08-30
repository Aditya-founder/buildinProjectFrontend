import React, { useState } from "react";
import "./filterlocation.css";

const Filter = ({ CardComponent }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [filterData, setFilterData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFilterData({ state, city, pincode });
  };

  return (
    <div>
      <div className="filter-form-selector">
        <form onSubmit={handleSubmit} className="form-wrapper-selector">
          <div className="input-group-selector">
            <select
              id="select-state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="select-selector"
            >
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
            </select>

            <select
              id="select-city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="select-selector"
            >
              <option value="">Select City</option>
              <option value="South Delhi">South Delhi</option>
              <option value="North Delhi">North Delhi</option>
              <option value="East Delhi">East Delhi</option>
              <option value="West Delhi">West Delhi</option>
            </select>

            <select
              id="select-pincode"
              name="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="select-selector"
            >
              <option value="">Select Pincode</option>
              <option value="110080">110080</option>
              <option value="110078">110078</option>
              <option value="110003">110003</option>
            </select>

            <button type="submit" className="submit-button-selector">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Render the specific card component and pass filterData as props */}
      <CardComponent filterData={filterData} />
    </div>
  );
};

export default Filter;
