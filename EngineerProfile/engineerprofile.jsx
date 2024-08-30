import React, { useState, useEffect } from "react";
import "./engineerprofile.css";
import Auth from "../../Auth";
import { useParams, useNavigate } from "react-router-dom";

const EngineerProfile = () => {
  const { id } = useParams();
  const [userEngineerData, setUserEngineerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleRequest = async () => {
    console.log("Contact No:", contactNo);
    console.log("Address:", address);
    console.log("ID:", id);

    try {
      const response = await Auth.dashBoardDatabase(address, id, contactNo);
      console.log("Response from server: ", response);

      if (response) {
        console.log(
          "Entry of your company blog creation details became successful"
        );
        alert("Request sended successfully");
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error while filling your company details", error);
      alert("Failed to submit data");
    }
  };

  useEffect(() => {
    const fetchEngineerData = async () => {
      try {
        const engineerResponse = await Auth.getEngineerDetailsById(id);
        console.log("Fetched Engineer Data:", engineerResponse);
        setUserEngineerData(engineerResponse);

        const findResume = await Auth.getResumeLinkById(id);
        console.log("find the resume", findResume);

        // Fetch profile photos
        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        // Find the image for the current engineer
        function findById(collection, id) {
          return collection.find((item) => item._id === id);
        }

        const upload = findById(uploadsData, id);
        const imageLink = upload
          ? `${baseImageUrl}${upload.image}`
          : "default-image-url.jpg";
        setProfileImage(imageLink);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEngineerData();
  }, [id]);

  console.log("engg data", userEngineerData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userEngineerData) return <p>No data available.</p>;

  return (
    <div>
      <div className="profile-name-header">
        <div className="profile-name-header-left">
          <div className="profile-guy-name">{userEngineerData.name}</div>
        </div>
        <div className="profile-name-header-right">
          <div>
            <b>{userEngineerData.domain}</b>
          </div>
          <br />
          <form className="input-for-request">
            <div className="ui input focus input-entry">
              <input
                type="text"
                placeholder="Enter Your Contact No"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div className="ui input focus input-entry">
              <input
                type="text"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="ui primary button"
              onClick={handleRequest}
            >
              Request
            </button>
          </form>
          <div>Will Reach You ASAP</div>
        </div>
      </div>
      <div className="about-image-resume">
        <div className="about-profile">
          <div className="about-details-header">ABOUT</div>
          <div className="about-details-content">
            <p>{userEngineerData.about}</p>
          </div>
        </div>
        <div className="image-profile">
          <img src={profileImage} alt="profileImage"></img>
        </div>
        <div className="resume-profile">
          <div className="download-resume">
            <div className="ui placeholder segment">
              <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                Just Give A Look To My Resume
              </div>
              <div className="ui primary button">Click To Download</div>
            </div>
          </div>
          <div className="access-project-links">
            <div className="ui placeholder segment">
              <div className="ui icon header">
                <i className="copy icon"></i>
                Projects Done By Me
              </div>
              <div className="ui primary button">Click For Link Access</div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-message">
        <div className="company-worked-with">
          <div className="header-company-worked">COMPANIES I WORKED WITH</div>
          <div className="company-list">
            <ul>
              {userEngineerData.companiesWorked.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
          </div>
          <button className="my-hiring-btn">Hire Me</button>
        </div>
        <div className="message-by-me">
          <div className="message-gap-header-my-side">Message From My Side</div>
          <div className="message-paragraph">
            <p>{userEngineerData.messageFromMySide}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineerProfile;
