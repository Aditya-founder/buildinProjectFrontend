import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const ContractorsCards = ({ filterData }) => {
  const [contractors, setContractors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContractors = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch contractors based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch all contractors if no filter data
          response = await Auth.getAllContractors();
        }

        const contractorsData = response.data;
        console.log("Contractors Data:", contractorsData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const contractorsWithImages = contractorsData
          .filter((contractor) => contractor.category === "thekedaar") // Filter by category
          .map((contractor) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, contractor._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(
              `Contractor ID: ${contractor._id}, Image Link: ${imageLink}`
            );

            return {
              ...contractor,
              imageLink,
            };
          });

        console.log("Contractors With Images:", contractorsWithImages);
        setContractors(contractorsWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContractors();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {contractors.map((contractor, index) => (
        <div key={index} className="worker-card">
          <img
            src={contractor.imageLink}
            alt={`${contractor.firstName} ${contractor.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {contractor.firstName} {contractor.lastName}
            </h3>
            <p>Rating: {contractor.pincode}</p>
            <p>State: {contractor.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${contractor._id}`}>
                <button className="worker-card-button know-about-me">
                  Know About Me
                </button>
              </Link>

              <button className="worker-card-button book-now">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContractorsCards;
