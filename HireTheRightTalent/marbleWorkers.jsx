import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const MarbleWorkersCards = ({ filterData }) => {
  const [marbleWorkers, setMarbleWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarbleWorkers = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch marble workers based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch all marble workers if no filter data
          response = await Auth.getAllMarbleWorkers();
        }

        const marbleWorkersData = response.data;
        console.log("Marble Workers Data:", marbleWorkersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const marbleWorkersWithImages = marbleWorkersData
          .filter((worker) => worker.category === "marbleWorker") // Filter by category
          .map((marbleWorker) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, marbleWorker._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(
              `Marble Worker ID: ${marbleWorker._id}, Image Link: ${imageLink}`
            );

            return {
              ...marbleWorker,
              imageLink,
            };
          });

        console.log("Marble Workers With Images:", marbleWorkersWithImages);
        setMarbleWorkers(marbleWorkersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarbleWorkers();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {marbleWorkers.map((marbleWorker, index) => (
        <div key={index} className="worker-card">
          <img
            src={marbleWorker.imageLink}
            alt={`${marbleWorker.firstName} ${marbleWorker.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {marbleWorker.firstName} {marbleWorker.lastName}
            </h3>
            <p>Rating: {marbleWorker.pincode}</p>
            <p>State: {marbleWorker.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${marbleWorker._id}`}>
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

export default MarbleWorkersCards;
