import React, { useState, useEffect } from "react";
import "./workerCards.css";
import { Link } from "react-router-dom";
import Auth from "../../Auth";

const MasonWorkersCards = ({ filterData }) => {
  const [masonWorkers, setMasonWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMasonWorkers = async () => {
      try {
        let response;
        if (filterData) {
          // Fetch mason workers based on filters
          response = await Auth.getSpecificWorkerDataByFilter(
            filterData.state,
            filterData.city,
            filterData.pincode
          );
        } else {
          // Fetch all mason workers if no filter data
          response = await Auth.getAllMasonWorkers();
        }

        const masonWorkersData = response.data;
        console.log("Mason Workers Data:", masonWorkersData);

        const uploadsResponse = await Auth.getProfilePhoto();
        const uploadsData = uploadsResponse.data;
        console.log("Uploads Data:", uploadsData);

        const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

        const masonWorkersWithImages = masonWorkersData
          .filter((worker) => worker.category === "mason") // Filter by category
          .map((masonWorker) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(uploadsData, masonWorker._id);

            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            console.log(
              `Mason Worker ID: ${masonWorker._id}, Image Link: ${imageLink}`
            );

            return {
              ...masonWorker,
              imageLink,
            };
          });

        console.log("Mason Workers With Images:", masonWorkersWithImages);
        setMasonWorkers(masonWorkersWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMasonWorkers();
  }, [filterData]); // Re-run effect when filterData changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="worker-cards-grid">
      {masonWorkers.map((masonWorker, index) => (
        <div key={index} className="worker-card">
          <img
            src={masonWorker.imageLink}
            alt={`${masonWorker.firstName} ${masonWorker.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {masonWorker.firstName} {masonWorker.lastName}
            </h3>
            <p>Rating: {masonWorker.pincode}</p>
            <p>State: {masonWorker.state}</p>

            <div className="worker-card-buttons">
              <Link to={`/workerpaymentpage/${masonWorker._id}`}>
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

export default MasonWorkersCards;
