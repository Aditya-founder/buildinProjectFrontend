import React from "react";
import "./exploredesigns.css";
import axios from "axios";
import { useState, useEffect } from "react";

const ExploreDesigns = () => {
  const [interiorDesigns, setInteriorDesigns] = useState([]);

  useEffect(() => {
    axios
      .get("/api/interior-designs")
      .then((response) => {
        setInteriorDesigns(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="explore-designs">
      {interiorDesigns.map((design, index) => (
        <div key={index} className="design-card">
          <div className="design-name">{design.name}</div>
          {design.image && (
            <img
              src={design.image}
              alt={design.name}
              className="design-image"
            />
          )}
          <div className="ui labeled button" tabIndex="0">
            <div className="ui red button">
              <i className="heart icon"></i> Like
            </div>
            <a className="ui basic red left pointing label">1,048</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreDesigns;
