import React, { useState, useEffect } from "react";
import "./workerPaymentPage.css";
import Auth from "../../Auth";
import { useParams } from "react-router-dom";

const WorkerPaymentPage = () => {
  const { id } = useParams();
  const [workerData, setWorkerData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        // Fetch worker details by ID
        const selectedWorker = await Auth.getWorkerDetailsById(id);

        console.log("kahi ye to nahi", selectedWorker);

        if (!selectedWorker) {
          setError("Worker not found");
          return;
        }

        setWorkerData(selectedWorker);

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

    fetchWorkerData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!workerData) return <p>No data available.</p>;

  return (
    <div className="card-payment-wrapper">
      <div className="worker-payment-card">
        <div className="worker-p-details">
          <img
            src={profileImage}
            alt={`${workerData.firstName} ${workerData.lastName}'s profile`}
            className="profile-p-img"
          />
          <div className="worker-p-info">
            <h2 className="worker-p-name">
              {workerData.firstName} {workerData.lastName}
            </h2>
            <p className="worker-p-id">Worker ID: {workerData.aadharNumber}</p>
            <p className="worker-p-pincode">Pincode: {workerData.pincode}</p>
            <p className="worker-p-profession">
              Profession: {workerData.category}
            </p>
            <p className="worker-p-description">
              {`${workerData.firstName} is a passionate ${workerData.category} with extensive experience. `}
              {/* Add more dynamic data to the description if needed */}
            </p>
          </div>
          <div className="book-p-now">
            <button className="book-now-p-button">Book Now</button>
          </div>
        </div>
        <div className="company-p-info">
          <h2 className="company-p-heading">Welcome to Our Company</h2>
          <p className="company-p-description">
            We are your one-stop solution for finding skilled professionals in
            various fields. Whether you need electricians, contractors, marble
            workers, architects, civil engineers, mason workers, painters, or
            plumbers, we have the experts you're looking for. Our team is
            dedicated to providing top-notch service and ensuring your projects
            are completed with the highest quality and efficiency. Explore our
            services and find the right professional for your needs today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkerPaymentPage;
