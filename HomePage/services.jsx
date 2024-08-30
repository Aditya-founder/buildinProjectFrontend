import React from "react";
import { useState, useEffect } from "react";
import "./services.css";
import Comment from "../../component/HomePage/comment";
import { Link } from "react-router-dom";
import axios from "axios";

const services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/services")
      .then((response) => {
        setServicesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="our-services">
      <div className="our-services-header">
        <div className="services-title">Services</div>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.imageLink} alt={service.serviceType} />
            <h1>{service.serviceType}</h1>
            <p>
              <b>{service.serviceContent}</b>
            </p>
            <Link to={`${service.link}`}>
              <button className="hire-services-btn">
                <div className="hire-me">Hire me</div>
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Comment />
    </div>
  );
};

export default services;
