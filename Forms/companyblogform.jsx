import React, { useState } from "react";
import "./companyblogform.css";
import Auth from "../../Auth";
import { useNavigate } from "react-router-dom";

const CompanyBlogForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    overview: "",
    mission: "",
    vision: "",
    services: "",
    specializations: "",
    safetyProtocols: "",
    qualityAssurance: "",
    websiteLink: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        formErrors[key] = "This field is required";
      }
    });

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Auth.uploadCompanyBlogDetails(formData);
      console.log("Response from server: ", response);

      if (response.data.success) {
        console.log(
          "Entry of your company blog creation details became successful"
        );
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your company details", error);
      alert("Failed to submit data");
    }

    if (validateForm()) {
      console.log("Form Data: ", formData);
      // Reset form if needed
      setFormData({
        companyName: "",
        overview: "",
        mission: "",
        vision: "",
        services: "",
        specializations: "",
        safetyProtocols: "",
        qualityAssurance: "",
        websiteLink: "",
      });
    }
  };

  return (
    <div>
      <div className="company-blog-form">
        <form className="company-blog-form-container" onSubmit={handleSubmit}>
          <div className="ui form">
            <div className={`field ${errors.companyName ? "error" : ""}`}>
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              {errors.companyName && (
                <span className="error-text">{errors.companyName}</span>
              )}
            </div>

            <div className={`field ${errors.overview ? "error" : ""}`}>
              <label>Write Your Company Overview</label>
              <textarea
                name="overview"
                value={formData.overview}
                onChange={handleChange}
              ></textarea>
              {errors.overview && (
                <span className="error-text">{errors.overview}</span>
              )}
            </div>

            <div className={`field ${errors.mission ? "error" : ""}`}>
              <label>Mission</label>
              <textarea
                rows="2"
                name="mission"
                value={formData.mission}
                onChange={handleChange}
              ></textarea>
              {errors.mission && (
                <span className="error-text">{errors.mission}</span>
              )}
            </div>

            <div className={`field ${errors.vision ? "error" : ""}`}>
              <label>Vision</label>
              <textarea
                rows="2"
                name="vision"
                value={formData.vision}
                onChange={handleChange}
              ></textarea>
              {errors.vision && (
                <span className="error-text">{errors.vision}</span>
              )}
            </div>

            <div className={`field ${errors.services ? "error" : ""}`}>
              <label>Services Description</label>
              <textarea
                rows="2"
                name="services"
                value={formData.services}
                onChange={handleChange}
              ></textarea>
              {errors.services && (
                <span className="error-text">{errors.services}</span>
              )}
            </div>

            <div className={`field ${errors.specializations ? "error" : ""}`}>
              <label>Specializations</label>
              <textarea
                rows="2"
                name="specializations"
                value={formData.specializations}
                onChange={handleChange}
              ></textarea>
              {errors.specializations && (
                <span className="error-text">{errors.specializations}</span>
              )}
            </div>

            <div className={`field ${errors.safetyProtocols ? "error" : ""}`}>
              <label>Safety Protocols</label>
              <textarea
                rows="2"
                name="safetyProtocols"
                value={formData.safetyProtocols}
                onChange={handleChange}
              ></textarea>
              {errors.safetyProtocols && (
                <span className="error-text">{errors.safetyProtocols}</span>
              )}
            </div>

            <div className={`field ${errors.qualityAssurance ? "error" : ""}`}>
              <label>Quality Assurance</label>
              <textarea
                rows="2"
                name="qualityAssurance"
                value={formData.qualityAssurance}
                onChange={handleChange}
              ></textarea>
              {errors.qualityAssurance && (
                <span className="error-text">{errors.qualityAssurance}</span>
              )}
            </div>

            <div className={`ui input ${errors.websiteLink ? "error" : ""}`}>
              <input
                type="text"
                name="websiteLink"
                placeholder="Enter Your Website Link..."
                value={formData.websiteLink}
                onChange={handleChange}
              />
              {errors.websiteLink && (
                <span className="error-text">{errors.websiteLink}</span>
              )}
            </div>

            <button className="ui primary button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyBlogForm;
