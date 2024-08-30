import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const WorkerCards = ({ filterData }) => {
  const [painters, setPainters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPainters = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch painters based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch random painters if no filter data
          response = await Auth.getAllPainters();
        }

        const paintersData = response.data;
        console.log("Painters Data:", paintersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const paintersWithImages = paintersData
          .filter((painter) => painter.category === "painter")
          .map((painter) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, painter._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(`Painter ID: ${painter._id}, Image Link: ${imageLink}`);

            return {
              ...painter,
              imageLink,
            };
          });

        console.log("Painters With Images:", paintersWithImages);
        setPainters(paintersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPainters();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {painters.map((painter, index) => (
        <div key={index} className="worker-card">
          <img
            src={painter.imageLink}
            alt={`${painter.firstName} ${painter.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {painter.firstName} {painter.lastName}
            </h3>
            <p>Rating: {painter.pincode}</p>
            <p>State: {painter.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${painter._id}`}>
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

export default WorkerCards;
