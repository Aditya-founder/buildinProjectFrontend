import React, { useState, useEffect } from "react";
import Auth from "../../Auth";
import "./workerCards.css"; // Reuse the same CSS file as PlumbersCards for consistency
import { useLocation } from "react-router-dom";

const AllWorkersCards = () => {
  const location = useLocation();
  const { state } = location; // Extract the state from location

  const [workers, setWorkers] = useState([]); // State to store worker data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors
  const [profilePhotos, setProfilePhotos] = useState([]); // State to store profile photos

  const baseImageUrl = "http://127.0.0.1:4000/profileImage/";

  useEffect(() => {
    // Function to fetch worker data
    const fetchWorkers = async () => {
      if (!state || !state.area) {
        setError("No area state provided");
        setLoading(false);
        return;
      }

      try {
        const workersResponse = await Auth.hireAnyOneElse(state.area);
        console.log("Workers Response:", workersResponse);

        if (workersResponse) {
          setWorkers(workersResponse); // Assuming this is the key from your API response
          console.log("Workers Data:", workersResponse);

          // Fetch profile photos
          const photosResponse = await Auth.getProfilePhoto();
          const photosData = photosResponse.data;
          console.log("Profile Photos Data:", photosData);

          // Update worker data with profile images
          const workersWithImages = workersResponse.map((worker) => {
            function findById(collection, id) {
              return collection.find((item) => item._id === id);
            }

            const upload = findById(photosData, worker._id);
            const imageLink = upload
              ? `${baseImageUrl}${upload.image}`
              : "default-image-url.jpg";

            return {
              ...worker,
              image: imageLink,
            };
          });

          setWorkers(workersWithImages);
        } else {
          setError("No workers found");
          console.log("No workers found");
        }
      } catch (error) {
        setError("Error fetching data");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, [state]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="worker-cards-grid">
      {workers.map((worker, index) => (
        <div key={index} className="worker-card">
          <img
            src={worker.image}
            alt={`${worker.firstName} ${worker.lastName}`}
            className="worker-card-image"
          />
          <div className="worker-card-info">
            <h3>
              {worker.firstName} {worker.lastName}
            </h3>
            <p>Pincode: {worker.pincode}</p>
            <p>Profession: {worker.category}</p>
            <div className="worker-card-buttons">
              <button className="worker-card-button know-about-me">
                Know About Me
              </button>
              <button className="worker-card-button book-now">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWorkersCards;
