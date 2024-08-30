import React, { useEffect, useState } from "react";
import "./engineerDashboard.css";
import Auth from "../../Auth";
import { Link, useParams } from "react-router-dom";

const WorkerDashboard = () => {
  const { id } = useParams();
  const [workerData, setWorkerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null); // State to store profile photo

  console.log("what is the id ", id);

  useEffect(() => {
    if (!id) {
      console.log("No ID found in params.");
      return;
    }

    console.log("Fetching data for Worker ID:", id);

    const fetchWorkerData = async () => {
      try {
        // Fetch worker details by ID
        const selectedWorker = await Auth.getSingleWorkerById(id);

        console.log("Fetched worker data:", selectedWorker.data.data);

        if (!selectedWorker) {
          setError("Worker not found");
          return;
        }

        setWorkerData(selectedWorker.data.data);

        // Fetch profile photo
        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;

        // Find the upload that matches the worker's ID
        const upload = uploadsData.find(
          (upload) => upload._id === selectedWorker.data.data._id
        );

        // Set profile photo URL
        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";
        const imageLink = upload
          ? `${baseImageUrl}${upload.image}`
          : "default-image-url.jpg";
        setProfilePhoto(imageLink);
      } catch (error) {
        console.error("Error fetching worker data:", error);
        setError(error.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkerData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!workerData) return <p>No data available.</p>;

  return (
    <div className="dashboard-container">
      <div className="profile-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <div className="profile-info">
          <h2>
            Name: {workerData.firstName} {workerData.lastName}
          </h2>
          <p>
            Address: {workerData.addressline1} {workerData.addressline2}
          </p>
          <p>Date of Birth: {workerData.dateOfBirth}</p>
          <button className="btn-change-photo">Change Profile Photo</button>
        </div>
      </div>

      <div className="actions-section">
        <Link to="/updatethekedaar_workerdetails">
          <button className="dashboard-btn">Update Your Information</button>
        </Link>

        <Link to="/email-password-change">
          <button className="dashboard-btn">Delete Your ID</button>
        </Link>
        <Link to="/email-password-change">
          <button className="dashboard-btn">Change Password</button>
        </Link>

        <button className="dashboard-btn signout-btn">Sign Out</button>
      </div>
    </div>
  );
};

export default WorkerDashboard;
