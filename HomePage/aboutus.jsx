import React, { useEffect, useState } from "react";
import "./aboutus.css";
import { Link } from "react-router-dom";

const images = [
  "https://img.freepik.com/free-photo/3d-house-model-with-modern-architecture_23-2151004014.jpg",
  "https://png.pngtree.com/background/20230617/original/pngtree-exterior-design-of-a-modern-house-in-the-city-a-3d-picture-image_3683269.jpg",
  "https://img.freepik.com/free-photo/view-graphic-3d-building_23-2150849115.jpg",
  "https://w0.peakpx.com/wallpaper/685/634/HD-wallpaper-model-house-architecture-modern-house-3d-home-custom.jpg",
  "https://www.trade4asia.com/ProductImg/3D-Architect.jpg",
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-us-container">
      <div className="build-with-us">
        <div className="build-with-us-section-left">
          <div>
            <div className="content">
              <div>BUILDING</div>
              <div>FUTURE WITH</div>
              <div>YOU</div>
            </div>
            <div className="quote">Build Your Dream Home - Hassle Free</div>
            <button className="hire-btn">
              <Link to="/hireengineers">
                <div className="btn-content">Hire Now</div>
              </Link>
            </button>
          </div>
        </div>
        <div className="build-with-us-section-right">
          <img src={images[currentIndex]} alt="home-image" />
        </div>
      </div>

      <div className="know-cards">
        <div className="cards">
          <div className="cards-heading">
            <img
              src="https://www.mastercontrol.com/images/default-source/gxp-lifeline/2021/march/2020-bl-2020-qa-vs-qc_715x320-main-image.jpg?sfvrsn=f5e66fcc_2"
              alt="quality-image"
            />
            <div>QUALITY</div>
          </div>
          <div className="cards-content">
            <p>
              We provide premium quality services for all your needs to build
              your dream home
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="cards-heading">
            <img
              src="https://t4.ftcdn.net/jpg/06/04/76/59/360_F_604765958_2TqZaIyXBrRuJ0dOzrcVlHD6sKxOCyFZ.jpg"
              alt="quick-response-image"
            />
            <div>QUICK RESPONSE</div>
          </div>
          <div className="cards-content">
            <p>
              We provide quick response to your need so that you can make your
              dream project faster
            </p>
          </div>
        </div>
        <div className="cards">
          <div className="cards-heading">
            <img
              src="https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62057957-stock-photo-3d-man-shaking-hands-with.jpg"
              alt="trust-image"
            />
            <div>TRUST</div>
          </div>
          <div className="cards-content">
            <p>
              We believe in providing an honest and transparent experience to
              all customers
            </p>
          </div>
        </div>
      </div>

      <div className="community">
        <div className="community-header">
          <div className="title">Our Community</div>
        </div>
        <div className="community-details">
          <div className="details">
            <div className="number">1000+</div>
            <div className="trusted">
              <div>Trusted</div>
              <div>Contractors</div>
            </div>
          </div>
          <div className="details">
            <div className="number">2000+</div>
            <div className="trusted">
              <div>Trusted</div>
              <div>Workers</div>
            </div>
          </div>
          <div className="details">
            <div className="number">500+</div>
            <div className="trusted">
              <div>Trusted</div>
              <div>Engineers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
