import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const InteriorDesignersCards = ({ filterData }) => {
  const [interiorDesigners, setInteriorDesigners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInteriorDesigners = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch interior designers based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch all interior designers if no filter data
          response = await Auth.getAllInteriorDesigners();
        }

        const interiorDesignersData = response.data;
        console.log("Interior Designers Data:", interiorDesignersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const interiorDesignersWithImages = interiorDesignersData
          .filter((designer) => designer.category === "interiorDesigner") // Filter by category
          .map((interiorDesigner) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, interiorDesigner._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(
              `Interior Designer ID: ${interiorDesigner._id}, Image Link: ${imageLink}`
            );

            return {
              ...interiorDesigner,
              imageLink,
            };
          });

        console.log(
          "Interior Designers With Images:",
          interiorDesignersWithImages
        );
        setInteriorDesigners(interiorDesignersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInteriorDesigners();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {interiorDesigners.map((interiorDesigner, index) => (
        <div key={index} className="worker-card">
          <img
            src={interiorDesigner.imageLink}
            alt={`${interiorDesigner.firstName} ${interiorDesigner.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {interiorDesigner.firstName} {interiorDesigner.lastName}
            </h3>
            <p>Rating: {interiorDesigner.pincode}</p>
            <p>State: {interiorDesigner.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${interiorDesigner._id}`}>
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

export default InteriorDesignersCards;
