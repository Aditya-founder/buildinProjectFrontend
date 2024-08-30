import React, { useState } from "react";
import "./uploadWorker.css";
import Auth from "../../Auth";
import { FaRegAddressCard } from "react-icons/fa";

const uploadWorker = () => {
  const [image, setImage] = useState(null);

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
      }
    } catch (error) {
      console.error("Error while uploading file", error);
      alert("Failed to upload");
    }
  };

  const submitActualDataImage = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.set("image", image);
    console.log("image", formData);

    try {
      const response = await Auth.uploadImage(formData);
      if (response.data && response.data.success) {
        console.log("Image uploaded successfully");
        alert("Image uploaded successfully");
      } else {
        alert(response.data?.message || "Unknown error occurred");
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
      <div className="worker-upload">
        <form className="worker-upload-form">
          <div className="worker-upload-form-container">
            <div className="ui placeholder segment">
              <div className="ui icon header">
                <i className="user icon"></i>
                Upload Your Profile Photo Here
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={onInputChange}
                name="image"
              />
              <button
                className="ui primary button"
                onClick={(e) => submitActualImage(e)}
                type="submit"
              >
                Add Profile photo
              </button>
            </div>
            <div className="ui placeholder segment">
              <div className="ui icon header">
                <div>
                  <FaRegAddressCard className="aadhar-icon" />
                </div>
                Upload Your Aadhar Card Here
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={onInputChange}
                name="image"
              />
              <button
                className="ui primary button"
                onClick={(e) => submitActualDataImage(e)}
                type="submit"
              >
                Add Your Aadhar Card Here
              </button>
            </div>
          </div>
          <div className="worker-upload-form-container">
            <div className="worker-upload-header">Greetings</div>
            <p>
              Welcome to all our dedicated and skilled professionals! We are
              thrilled to have each of you as part of our team, whether you are
              contractors, painters, plumbers, mason workers, marble workers,
              electricians, or interior designers. Your hard work and expertise
              are invaluable to us, and we recognize the crucial role you play
              in making every project a success. Your commitment to excellence
              and quality workmanship is what sets us apart, and we take great
              pride in knowing that our clients can rely on your exceptional
              skills. Each of you brings a unique set of talents, knowledge, and
              experience to the table, and together, we create a team that is
              unstoppable. From transforming spaces to solving complex problems,
              you are the backbone of our operations, and we appreciate your
              dedication and professionalism. As we continue to grow and take on
              new challenges, we look forward to working alongside you to
              achieve outstanding results and create lasting impressions. Thank
              you for being an integral part of our journey.
            </p>
            <p>
              To all our contractors, painters, plumbers, mason workers, marble
              workers, electricians, and interior designers, we extend our
              warmest welcome. Your expertise and dedication are the foundation
              of our success. We are excited to work with you, creating
              exceptional projects together. Thank you for choosing to be part
              of our team. Let's achieve great things together!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default uploadWorker;
