import React, { useState } from "react";
import "./thekedaar_worker.css";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";

const ThekedaarWorkerForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressline1: "",
    addressline2: "",
    pincode: "",
    state: "",
    country: "INDIA",
    aadharNumber: "",
    contactNumber: "",
    dateOfBirth: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    try {
      const response = await Auth.workerThekedaarDetailsSubmission(formData);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Your entry  became successful");
        navigate("/upload-worker");
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
      <div className="theka">
        <div className="thekedaar_worker-details">
          <form className="ui form" onSubmit={handleSubmit}>
            <h4 className="ui dividing header">THEKEDAAR OR WORKER DETAILS</h4>
            <div className="ui form">
              <div className="three fields">
                <div className="field">
                  <label>First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="four wide field">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
              <input
                type="text"
                name="country"
                value={formData.country}
                readOnly
              />
            </div>
            <div className="field">
              <label>Aadhar Number</label>
              <input
                type="text"
                name="aadharNumber"
                placeholder="Enter your aadhar number"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Enter your Contact number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="dob-container">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
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
                      value="thekedaar"
                      checked={formData.category === "thekedaar"}
                      onChange={handleRadioChange}
                    />
                    <label>Thekedaar/Contractor</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="interiorDesigner"
                      checked={formData.category === "interiorDesigner"}
                      onChange={handleRadioChange}
                    />
                    <label>Interior Designer</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="painter"
                      checked={formData.category === "painter"}
                      onChange={handleRadioChange}
                    />
                    <label>Painter</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="plumber"
                      checked={formData.category === "plumber"}
                      onChange={handleRadioChange}
                    />
                    <label>Plumber</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="marbleWorker"
                      checked={formData.category === "marbleWorker"}
                      onChange={handleRadioChange}
                    />
                    <label>Marble Worker</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="electrician"
                      checked={formData.category === "electrician"}
                      onChange={handleRadioChange}
                    />
                    <label>Electrician</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="mason"
                      checked={formData.category === "mason"}
                      onChange={handleRadioChange}
                    />
                    <label>Mason Workers</label>
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

export default ThekedaarWorkerForm;
