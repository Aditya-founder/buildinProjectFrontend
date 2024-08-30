import React, { useState } from "react";
import "./companyform.css";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";

const CompanyForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    addressline1: "",
    addressline2: "",
    pincode: "",
    state: "",
    contactNumber: "",
    description: "",
    tellUsAboutYourCompany: "",
    category: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log("Form data submitted: ", formData);
    try {
      const response = await Auth.companyDetailsSubmission(formData);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Entry of your company details became successful");
        navigate("/upload-company");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your company details", error);
      alert("Failed to submit data");
    }
  };

  return (
    <div>
      <div className="company-form">
        <div className="company-details">
          <form onSubmit={submitHandler} className="ui form">
            <h4 className="ui dividing header">COMPANY INFORMATION</h4>
            <div className="field">
              <label>Company Name</label>
              <div className="two fields">
                <div className="field">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
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
                <label>State</label>
                <select
                  className="ui fluid dropdown"
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
                  <option value="DL">Delhi</option>
                  <option value="PY">Puducherry</option>
                  <option value="LA">Ladakh</option>
                  <option value="JK">Jammu and Kashmir</option> */}
                </select>
              </div>
            </div>
            <div className="field">
              <label>Country</label>
              <input placeholder="INDIA" readOnly type="text" />
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
              <label>Description</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <label>Tell Us About Your Company</label>
              <textarea
                name="tellUsAboutYourCompany"
                value={formData.tellUsAboutYourCompany}
                onChange={changeHandler}
              ></textarea>
            </div>

            <div className="ui form">
              <div className="inline fields">
                <label>COMPANY TYPE</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="architectEngineerCompany"
                      onChange={changeHandler}
                    />
                    <label>Architect Engineers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="civilEngineerCompany"
                      onChange={changeHandler}
                    />
                    <label>Civil Engineers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="interiorDesignerCompany"
                      onChange={changeHandler}
                    />
                    <label>Interior Designers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="builderCompany"
                      onChange={changeHandler}
                    />
                    <label>Contractor/Builder</label>
                  </div>
                </div>

                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="plumbersCompany"
                      onChange={changeHandler}
                    />
                    <label>Plumbers </label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="marbleCompany"
                      onChange={changeHandler}
                    />
                    <label>Marbles And Tiles </label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="paintersCompany"
                      onChange={changeHandler}
                    />
                    <label>Painters </label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="electriciansCompany"
                      onChange={changeHandler}
                    />
                    <label>Electricians </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
