import React, { useState } from "react";
import "./engineerfilter.css";

const engineerFilter = () => {
  // Define state variables to hold input values
  const [speciality, setSpeciality] = useState("");
  const [maxExperience, setMaxExperience] = useState("");
  const [minExperience, setMinExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [residentialProjects, setResidentialProjects] = useState(false);
  const [commercialProjects, setCommercialProjects] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Log the form data to the console
    console.log("Speciality:", speciality);
    console.log("Maximum Experience:", maxExperience);
    console.log("Minimum Experience:", minExperience);
    console.log("Skills:", skills);
    console.log("Residential Projects:", residentialProjects);
    console.log("Commercial Projects:", commercialProjects);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="engineer-filter">
          <div className="grid-container">
            <div className="grid-item leftmost">
              <div className="ui form input-leftmost">
                <div className="field">
                  <label>Speciality filter</label>
                  <input
                    type="text"
                    placeholder="Enter Speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                  />
                </div>
              </div>
              <div className="ui form input-leftmost">
                <div className="field">
                  <label>Maximum Experience</label>
                  <input
                    type="text"
                    placeholder="in years"
                    value={maxExperience}
                    onChange={(e) => setMaxExperience(e.target.value)}
                  />
                </div>
              </div>
              <div className="ui form input-leftmost">
                <div className="field">
                  <label>Minimum Experience</label>
                  <input
                    type="text"
                    placeholder="in years"
                    value={minExperience}
                    onChange={(e) => setMinExperience(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="grid-item">
              <div className="top-content">
                <div className="ui form">
                  <div className="field">
                    <label>Skills Filter</label>
                    <input
                      type="text"
                      placeholder="required skills"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="bottom-content">
                <h1 className="projects-types-header">
                  Type of project required
                </h1>
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name="residentialProjects"
                    checked={residentialProjects}
                    onChange={(e) => setResidentialProjects(e.target.checked)}
                  />
                  <label>Residential Projects</label>
                </div>
                <br />
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    name="commercialProjects"
                    checked={commercialProjects}
                    onChange={(e) => setCommercialProjects(e.target.checked)}
                  />
                  <label>Commercial Projects</label>
                </div>
              </div>
            </div>
            <div className="grid-item-nonbox rightmost">
              <div>
                <button type="submit">Submit Your Requirement</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default engineerFilter;
