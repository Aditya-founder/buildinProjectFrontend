import React, { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import "./updatethekedaar_workerdetails.css";

const UpdateCompanyDetails = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    addressLine1: "",
    pincode: "",
    addressLine2: "",
    state: "",
    country: "INDIA",
    description: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await Auth.updateCompanyData(formData);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log("Your entry  became successful");
        navigate("/");
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
      <div className="update-forms-details">
        <div className="update-details">
          <form className="ui form" onSubmit={handleSubmit}>
            <h4 className="ui dividing header">UPDATE YOUR DETAILS</h4>

            <div className="field">
              <label>Company Name</label>
              <div className="two fields">
                <div className="field">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
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
                    name="addressLine1"
                    placeholder="Office Address"
                    value={formData.addressLine1}
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
                    name="addressLine2"
                    placeholder="Office Address"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>State</label>
                <select
                  name="state"
                  className="ui fluid dropdown"
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
                placeholder="INDIA"
                name="country"
                readOnly
                type="text"
                value={formData.country}
              />
            </div>

            <div className="field">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
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
                      value="Architect Engineers"
                      checked={formData.category === "Architect Engineers"}
                      onChange={handleChange}
                    />
                    <label>Architect Engineers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="Civil Engineers"
                      checked={formData.category === "Civil Engineers"}
                      onChange={handleChange}
                    />
                    <label>Civil Engineers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="Interior Designers"
                      checked={formData.category === "Interior Designers"}
                      onChange={handleChange}
                    />
                    <label>Interior Designers</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="Contractor/Builder"
                      checked={formData.category === "Contractor/Builder"}
                      onChange={handleChange}
                    />
                    <label>Contractor/Builder</label>
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

export default UpdateCompanyDetails;
