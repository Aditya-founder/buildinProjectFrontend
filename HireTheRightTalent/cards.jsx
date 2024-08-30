import React, { useState, useEffect } from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const Cards = ({ filterData }) => {
  const [engineers, setEngineers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEngineers = async () => {
      try {
        let response;
        let engineersData;
        if (filterData) {
          // Fetch engineers based on filters
          response = await Auth.getSpecificEngineerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
          engineersData = response.data;
        } else {
          // Fetch all engineers if no filter data
          response = await Auth.getAllArchitect();
          engineersData = response.requireEngineer;
        }

        console.log("Engineers Data:", engineersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const engineersWithImages = engineersData
          .filter(
            (engineer) =>
              engineer.category === "architectEngineer" || "civilEngineer"
          ) // Filter by category
          .map((engineer) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, engineer._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(
              `Engineer ID: ${engineer._id}, Image Link: ${imageLink}`
            );

            return {
              ...engineer,
              imageLink,
            };
          });

        console.log("Engineers With Images:", engineersWithImages);
        setEngineers(engineersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEngineers();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log("Engineers finally", engineers);

  return (
    <div>
      <div className="generate-cards">
        {engineers.map((engineer, index) => (
          <React.Fragment key={engineer._id}>
            <div className="card">
              <div className="card-left">
                <img
                  src={engineer.imageLink}
                  alt={`${engineer.firstName} ${engineer.lastName}`}
                  className="engineer-image"
                />
              </div>
              <div className="card-middle">
                <h3>
                  {engineer.firstName} {engineer.lastName}
                </h3>
                <p>Rating: {engineer.pincode}</p>
                <p>Experience: {engineer.experience} years</p>
              </div>
              <div className="card-right">
                <Link to={`/see-this/${engineer._id}`}>
                  <button className="btn">View Profile</button>
                </Link>
                <button className="btn">Book Now</button>
              </div>
            </div>
            {(index + 1) % 3 === 0 && index !== engineers.length - 1 && (
              <div className="ui section divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="space-bottom"></div>
    </div>
  );
};

export default Cards;
