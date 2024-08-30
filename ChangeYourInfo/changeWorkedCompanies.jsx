import React, { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import "./changeWorkedCompanies.css";

const ChangeWorkedCompanies = () => {
  const navigate = useNavigate();
  const [numFields, setNumFields] = useState(0);
  const [inputValues, setInputValues] = useState([]);

  const handleNumFieldsChange = (e) => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumFields(num);
    setInputValues(Array(num).fill(""));
  };

  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Number of Companies:", inputValues);
    // You can add your API calls or further processing here
    try {
      const response = await Auth.updateCompanniesIWorkedWith(inputValues);
      console.log("Response from server lemlu: ", response);

      if (response) {
        console.log("Congrats you can proceed further");
        alert("Youe have successfully updated your companies working  section");
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Something error happend", error);
      alert("oh shit something error happend");
    }
  };

  return (
    <div className="change-worked-companies-container">
      <h2>NUMBER OF COMPANIES YOU HAVE WORKED WITH</h2>
      <p>Remember you have also to put previous companies</p>
      <div className="input-group">
        <label>Number of Companies: </label>
        <input
          type="number"
          value={numFields}
          onChange={handleNumFieldsChange}
          placeholder="Enter the number of inputs"
          className="num-input"
        />
      </div>

      {inputValues.map((value, index) => (
        <div key={index} className="input-group">
          <label>Company {index + 1}: </label>
          <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Company name ${index + 1}`}
            className="company-input"
          />
        </div>
      ))}

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ChangeWorkedCompanies;
