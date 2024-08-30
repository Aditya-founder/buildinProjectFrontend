import React, { useState } from "react";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";
import "./updatethekedaar_workerdetails.css";

const UpdatethekedaarWorkerdetails = () => {
  const [formData, setFormData] = useState({
    addressline1: "",
    pincode: "",
    addressline2: "",
    state: "",
    country: "INDIA",
    category: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
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
    console.log("Form Data Submitted:", formData);

    try {
      const response = await Auth.updateWorker_ThekedaarDetails(formData);
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
              <label>Address Line 1</label>
              <div className="fields">
                <div className="twelve wide field">
                  <input
                    type="text"
                    name="addressline1"
                    placeholder="Office Address"
                    value={formData.addressline1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="four wide field">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter Pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                placeholder="INDIA"
                value={formData.country}
                readOnly
              />
            </div>

            <div className="ui form">
              <div className="inline fields">
                <label>Update your company</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="category"
                      value="Thekedaar/Contractor"
                      checked={formData.category === "Thekedaar/Contractor"}
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
                      value="Interior Designer"
                      checked={formData.category === "Interior Designer"}
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
                      value="Painter"
                      checked={formData.category === "Painter"}
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
                      value="Plumber"
                      checked={formData.category === "Plumber"}
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
                      value="Marble Worker"
                      checked={formData.category === "Marble Worker"}
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
                      value="Electrician"
                      checked={formData.category === "Electrician"}
                      onChange={handleRadioChange}
                    />
                    <label>Electrician</label>
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

export default UpdatethekedaarWorkerdetails;
