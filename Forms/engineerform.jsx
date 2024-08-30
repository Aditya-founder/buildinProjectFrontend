import React from "react";
import "./engineerform.css";
import { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";

const engineerform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressline1: "",
    addressline2: "",
    pincode: "",
    contactNumber: "",
    experience: "",
    educatedFrom: "",
    yearOfPassing: "",
    dateOfBirth: "",
    residentialProjects: "",
    commercialProjects: "",
    state: "State",
    category: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // console.log("Finally printing the value of formData : ");
    // console.log(formData);
    try {
      const response = await Auth.engineerDetailsSubmission(formData);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Your entry  became successful");
        navigate("/upload");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your  details", error);
      alert("Failed to submit data");
    }
  };

  return (
    <div>
      <div className="engineer-form">
        <div className="engineer-form-details">
          <form onSubmit={submitHandler} className="ui form">
            <h4 className="ui dividing header">ENGINEER DETAILS</h4>

            <div className="ui form">
              <div className="three fields">
                <div className="field">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                  />
                </div>

                <div className="field">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <label>Address Line 1</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input
                    type="text"
                    name="addressline1"
                    placeholder="Office Address"
                    value={formData.addressline1}
                    onChange={changeHandler}
                  />
                </div>
                <div className="four wide field">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter Pincode"
                    value={formData.pincode}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <label>Address Line 2</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input
                    type="text"
                    name="addressline2"
                    placeholder="Office Address"
                    value={formData.addressline2}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label htmlFor="state-selector">State</label>
                <select
                  className="ui fluid dropdown"
                  id="state-selector"
                  name="state"
                  value={formData.state}
                  onChange={changeHandler}
                >
                  <option value="">State</option>
                  <option value="Delhi">Delhi</option>
                  {/* <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OD">Odisha</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UK">Uttarakhand</option>
                  <option value="WB">West Bengal</option>

                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="CH">Chandigarh</option>
                  <option value="DN">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="LD">Lakshadweep</option>
             
                  <option value="PY">Puducherry</option>
                  <option value="LA">Ladakh</option>
                  <option value="JK">Jammu and Kashmir</option> */}
                </select>
              </div>
            </div>
            <div className="field">
              <label>Country</label>
              <input placeholder="INDIA" readOnly="" type="text" />
            </div>
            <div className="field">
              <label>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Enter your contact number"
                className="company-contact-no"
                value={formData.contactNumber}
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <label>Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="Experience(in years)"
                className="company-contact-no"
                value={formData.experience}
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <label>Educated From</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input
                    type="text"
                    name="educatedFrom"
                    placeholder="Education From"
                    value={formData.educatedFrom}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label>Year of Passing</label>
              <input
                type="text"
                name="yearOfPassing"
                placeholder="Passing year"
                className="company-contact-no"
                value={formData.yearOfPassing}
                onChange={changeHandler}
              />
            </div>

            <div className="dob-container">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={changeHandler}
                required
              />
            </div>
            <br />
            <div className="ui form">
              <div className="inline fields">
                <label>What you are ?</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="architectEngineer"
                      onChange={changeHandler}
                    />
                    <label>Architect Engineer</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="civilEngineer"
                      onChange={changeHandler}
                    />
                    <label>Civil Engineer</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui form">
              <div className="three fields">
                <div className="field">
                  <label>Total no of Residential Projects</label>
                  <input
                    type="text"
                    placeholder="Residential Projects"
                    name="residentialProjects"
                    value={formData.residentialProjects}
                    onChange={changeHandler}
                  />
                </div>

                <div className="field">
                  <label>Total no of Commercial Projects</label>
                  <input
                    type="text"
                    placeholder="Commercial Projects"
                    name="commercialProjects"
                    value={formData.commercialProjects}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <button className="ui button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default engineerform;
