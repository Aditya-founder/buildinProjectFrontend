import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const ElectriciansCards = ({ filterData }) => {
  const [electricians, setElectricians] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElectricians = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch electricians based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch random electricians if no filter data
          response = await Auth.getAllElectricians();
        }

        const electriciansData = response.data;
        console.log("Electricians Data:", electriciansData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const electriciansWithImages = electriciansData
          .filter((electrician) => electrician.category === "electrician") // Filter by category
          .map((electrician) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, electrician._id);
            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            return {
              ...electrician,
              imageLink,
            };
          });

        setElectricians(electriciansWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchElectricians();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {electricians.map((electrician, index) => (
        <div key={index} className="worker-card">
          <img
            src={electrician.imageLink}
            alt={`${electrician.firstName} ${electrician.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {electrician.firstName} {electrician.lastName}
            </h3>
            <p>Rating: {electrician.pincode}</p>
            <p>State: {electrician.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${electrician._id}`}>
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

export default ElectriciansCards;
