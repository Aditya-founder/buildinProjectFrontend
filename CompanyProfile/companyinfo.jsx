import React, { useState, useEffect } from "react";
import "./companyinfo.css";
import Auth from "../../Auth";
import { useParams } from "react-router-dom";

const companyinfo = () => {
  const { id } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyBlogData = async () => {
      try {
        // Fetch company details by ID
        const selectedCompany = await Auth.getSingleCompanyBlog(id);

        console.log("kahi ye to nahi", selectedCompany);

        if (!selectedCompany) {
          setError("Company not found");
          return;
        }

        setCompanyData(selectedCompany);

        // Fetch profile photos
        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        // Find the image for the current worker
        const findById = (collection, id) => {
          return collection.find((item) => item._id === id);
        };

        const upload = findById(uploadsData, id);
        const imageLink = upload
          ? `${baseImageUrl}${upload.image}`
          : "https://via.placeholder.com/150";
        setProfileImage(imageLink);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyBlogData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!companyData) return <p>No data available.</p>;

  return (
    <div className="companies-blog-details">
      <div className="companies-blog">
        <div className="comapnies-blog-header">
          <div className="company-blog-name-header">
            {companyData.companyName}
          </div>
        </div>
      </div>

      <div className="company-blog-topic-overview">
        <div className="overview">COMPANY OVERVIEW</div>
      </div>

      <div className="company-blog-image-container">
        <div className="company-blog-image-box">
          <img
            src={profileImage}
            alt={`${companyData.companyName}'s profile`}
          />
        </div>
        <div className="company-blog-about-content">
          <p>{companyData.companyOverview}</p>
        </div>
      </div>

      <div className="services-offered-container">
        <h1>OUR GOALS</h1>
        <div className="services-description">
          <p>
            <b>MISSION : </b>
            {companyData.mission}
          </p>
          <p>
            <b>VISION : </b>
            {companyData.vision}
          </p>
        </div>
      </div>

      <div className="services-offered-container">
        <h1>Services Offered</h1>
        <div className="services-description">
          <p>
            <b>Services Description : </b>
            {companyData.serviceDescription}
          </p>
          <p>
            <b>Specializations : </b>
            {companyData.specializations}
          </p>
        </div>
      </div>

      <div className="safety-company-container">
        <h1>Safety And Quality Standards</h1>
        <div className="services-description">
          <p>
            <b>Safety Protocols : </b>
            {companyData.safetyProtocols}
          </p>
          <p>
            <b>Quality Assurance : </b>
            {companyData.qualityAssurance}
          </p>
        </div>
      </div>

      <div className="for-mor-info">
        <div className="info-blog-tag">
          <b>For More Info :</b> Visit Our Website
        </div>
        <div className="company-website-link">
          <a src="example.com" alt="website-link">
            {companyData.websiteLink}
          </a>
        </div>
      </div>
    </div>
  );
};

export default companyinfo;
