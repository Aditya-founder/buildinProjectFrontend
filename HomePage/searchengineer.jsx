import React from "react";
import "./searchengineer.css";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchEngineer = () => {
  const [formData, setFormData] = useState({
    category: "",
    residentialProjects: "",
    commercialProjects: "",
    minExperience: "",
  });

  const navigate = useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log("Finally printing the value of formData : ");
    console.log(formData);
    try {
      const response = await Auth.filterHomePageEngineer(
        formData.minExperience,
        formData.commercialProjects,
        formData.residentialProjects,
        formData.category
      );

      console.log("whats your response", response.data.data);

      if (response.data.success) {
        console.log("Required data has been fetched successfully");
        // alert("Click on ok for fetching Required data");
        navigate("/homepage-filtered-engineers", {
          state: { searchedTypeEngineer: response.data.data },
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while  sending data", error);
      alert("Failed to send data");
    }
  };

  return (
    <div className="search-engineer">
      <form onSubmit={submitHandler} className="search-engineer-filter">
        <div className="search-engineer-filter-header">
          Find Engineer Based On Your Preferences
        </div>
        <div className="engineer-search-form">
          <div className="engineer-search-form-left">
            <div className="ui form">
              <div className="field">
                <label>Speciality Filter</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Architect or Civil"
                  value={formData.category}
                  onChange={changeHandler}
                />
              </div>
              <div className="field">
                <label>Residential Projects</label>
                <input
                  type="text"
                  name="residentialProjects"
                  placeholder="No of Residential Projects"
                  value={formData.residentialProjects}
                  onChange={changeHandler}
                />
              </div>
              <div className="field">
                <label>Commercial Projects</label>
                <input
                  type="text"
                  name="commercialProjects"
                  placeholder="No of commercial Projects"
                  value={formData.commercialProjects}
                  onChange={changeHandler}
                />
              </div>
              <div className="field">
                <label>Minimum Experience</label>
                <input
                  type="text"
                  name="minExperience"
                  placeholder="Minimum Experience"
                  value={formData.minExperience}
                  onChange={changeHandler}
                />
              </div>
              <button className="ui button" type="submit">
                Submit
              </button>
            </div>
          </div>
          <div className="engineer-search-form-right">
            <img
              src="https://foyr.com/learn/wp-content/uploads/2020/10/LEGO-House-by-BIG-1.jpg"
              alt="engineer-building-image"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchEngineer;
