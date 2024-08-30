import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const PlumbersCards = ({ filterData }) => {
  const [plumbers, setPlumbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlumbers = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch plumbers based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch all plumbers if no filter data
          response = await Auth.getAllPlumbers();
        }

        const plumbersData = response.data;
        console.log("Plumbers Data:", plumbersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const plumbersWithImages = plumbersData
          .filter((worker) => worker.category === "plumber") // Filter by category
          .map((plumber) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, plumber._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(`Plumber ID: ${plumber._id}, Image Link: ${imageLink}`);

            return {
              ...plumber,
              imageLink,
            };
          });

        console.log("Plumbers With Images:", plumbersWithImages);
        setPlumbers(plumbersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlumbers();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {plumbers.map((plumber, index) => (
        <div key={index} className="worker-card">
          <img
            src={plumber.imageLink}
            alt={`${plumber.firstName} ${plumber.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {plumber.firstName} {plumber.lastName}
            </h3>
            <p>Rating: {plumber.pincode}</p>
            <p>State: {plumber.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${plumber._id}`}>
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

export default PlumbersCards;
