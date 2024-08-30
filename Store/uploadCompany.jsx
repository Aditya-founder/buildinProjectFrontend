import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./uploadCompany.css";
import Auth from "../../Auth";
import { IoLogoBuffer } from "react-icons/io";

const UploadCompany = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const submitActualImage = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.set("image", image);
    console.log("image", formData);

    try {
      const response = await Auth.uploadProfile(formData);
      if (response.data && response.data.success) {
        console.log("Image uploaded successfully");
        alert("Image uploaded successfully");
      } else {
        alert(response.data?.message || "Unknown error occurred");
        navigate("/company-blog-form");
      }
    } catch (error) {
      console.error("Error while uploading file", error);
      alert("Failed to upload");
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <div className="company-upload">
        <form className="company-upload-form">
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <IoLogoBuffer className="company-logo-upload" />
              Upload Your Company Logo Here
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={onInputChange}
              name="image"
            />
            <button
              onClick={(e) => submitActualImage(e)}
              type="submit"
              className="ui primary button"
            >
              Add Company Logo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadCompany;
